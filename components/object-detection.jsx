

import { Document, Section, SubSection, Paragraph, List, Code, SubsectionHighlight, VideoDisplay } from './writingTools';

export default function ObjectDetection() {
    const tableOfContents = [
        { id: 'introduction', label: 'Introduction', level: 0 },
        { id: 'application-overview', label: 'Application Overview', level: 0 },
        { id: 'video-detection', label: 'Video Object Detection (Pre-recorded)', level: 1 },
        { id: 'realtime-detection', label: 'Real-Time Webcam Detection', level: 1 },
        { id: 'yolo-integration', label: 'YOLOv5 Integration Deep Dive', level: 0 },
        { id: 'model-loading', label: 'Model Loading Strategy', level: 1 },
        { id: 'inference-pipeline', label: 'Inference Pipeline', level: 1 },
        { id: 'bounding-box', label: 'Bounding Box Rendering', level: 1 },
        { id: 'system-architecture', label: 'System Architecture Deep Dive', level: 0 },
        { id: 'django-backend', label: 'Django Backend', level: 1 },
        { id: 'frontend-interaction', label: 'Frontend Interaction', level: 1 },
        { id: 'request-flow', label: 'Request → Inference → Response Flow', level: 1 },
        { id: 'video-workflow', label: 'Video Processing Workflow Deep Dive', level: 0 },
        { id: 'frame-extraction', label: 'Frame Extraction (OpenCV)', level: 1 },
        { id: 'detection-per-frame', label: 'Detection Per Frame (YOLOv5)', level: 1 },
        { id: 'video-reconstruction', label: 'Video Reconstruction & Encoding', level: 1 },
        { id: 'realtime-pipeline', label: 'Real-Time Detection Pipeline Deep Dive', level: 0 },
        { id: 'frame-capture', label: 'Frame Capture (Browser)', level: 1 },
        { id: 'backend-processing', label: 'Backend Processing (Django + YOLOv5)', level: 1 },
        { id: 'live-rendering', label: 'Live Result Rendering (Browser)', level: 1 },
        { id: 'challenges', label: 'Challenges & Performance Observations', level: 0 },
        { id: 'learnings', label: 'Key Learnings', level: 0 },
        { id: 'future', label: 'Future Improvements', level: 0 },
        { id: 'demo', label: 'Project Demo', level: 0 },
    ];

    return (
        <Document 
            tableOfContents={tableOfContents} 
            title="Real-Time Object Detection Web App"
            subtitle="Technical Documentation"
            showDemo={true}
        >
            {/* Introduction */}
            <Section id="introduction" title="Introduction">
                <Paragraph>
                    This project was built primarily as a learning experiment. Unlike production-oriented systems, the goal here wasn't to solve a business problem — it was to deeply understand how modern object detection models like <strong>YOLOv5</strong> work and how they can be integrated into a web-based application.
                </Paragraph>
                <Paragraph>
                    I wanted to move beyond running a model in a notebook and instead treat it like a real system component. That meant loading a trained YOLOv5 model inside a backend server, handling image and video inputs, running inference, and returning structured detection results to a frontend interface.
                </Paragraph>
                <Paragraph>
                    The core objective was twofold:
                </Paragraph>
                <Paragraph>
                    First, to understand YOLOv5 from a practical engineering perspective — model loading, inference flow, confidence thresholds, bounding box rendering, and performance behavior under different input conditions.
                </Paragraph>
                <Paragraph>
                    Second, to bridge machine learning with web technologies. Instead of keeping the ML model isolated, I integrated it into a Django backend and exposed detection functionality through APIs. The frontend could upload videos or stream webcam frames, which were then processed server-side and returned with annotated outputs.
                </Paragraph>
                <Paragraph>
                    This project also served as my foundational object detection system, helping me understand real-time inference constraints, frame-by-frame processing using OpenCV, and the challenges of handling media in web applications.
                </Paragraph>
            </Section>

            {/* Application Overview */}
            <Section id="application-overview" title="Application Overview">
                <Paragraph>
                    This Django-based application implements YOLOv5-powered object detection in two practical modes: pre-recorded video analysis and real-time webcam detection. The goal was not just to run a model, but to integrate computer vision into a functional web workflow.
                </Paragraph>

                <SubSection id="video-detection" title="Video Object Detection (Pre-recorded)">
                    <Paragraph>
                        Users can upload videos (MP4, AVI, MOV), which are processed frame-by-frame on the server. Each frame is passed through the YOLOv5 model (yolov5mu.pt), which detects objects from the 80-class COCO dataset.
                    </Paragraph>
                    <Paragraph>
                        The pipeline works as follows:
                    </Paragraph>
                    <Code>
{`Upload → Frame Extraction (OpenCV) → YOLO Inference → Bounding Box Rendering → Video Re-encoding → Playback`}
                    </Code>
                    <Paragraph>
                        Detected objects are marked with green bounding boxes and labeled with class names and confidence scores (e.g., person 0.95). After annotation, the output video is re-encoded using H.264/AAC via ffmpeg to ensure browser compatibility.
                    </Paragraph>
                    <Paragraph>
                        Original and processed videos are stored separately in the database, linked via foreign keys for traceability.
                    </Paragraph>
                    <Paragraph>
                        This mode is useful for analyzing recorded footage such as surveillance, traffic videos, or sports clips.
                    </Paragraph>
                </SubSection>

                <SubSection id="realtime-detection" title="Real-Time Webcam Detection">
                    <Paragraph>
                        The second mode provides live detection through the browser. JavaScript captures frames using the MediaDevices API, converts them to JPEG, and sends them to the Django backend approximately every 50ms (~20 FPS).
                    </Paragraph>
                    <Paragraph>
                        On the server:
                    </Paragraph>
                    <Code>
{`Frame Decode → YOLO Inference (threshold 0.5) → Annotation → JPEG Encode → Return to Browser`}
                    </Code>
                    <Paragraph>
                        The annotated frames are immediately displayed in the UI, creating a low-latency detection loop (≈50–100ms). Frames are processed in memory and not stored, keeping the system lightweight and privacy-focused.
                    </Paragraph>
                    <Paragraph>
                        Both modes share the same YOLO model and OpenCV-based annotation logic, demonstrating how machine learning inference can be exposed through REST endpoints and consumed directly in a browser interface.
                    </Paragraph>
                </SubSection>
            </Section>

            {/* YOLOv5 Integration Deep Dive */}
            <Section id="yolo-integration" title="YOLOv5 Integration Deep Dive">
                <Paragraph>
                    The core of this project is the integration of <strong>YOLOv5 (Ultralytics)</strong> into a Django-based web pipeline. The focus wasn't just running inference, but embedding the model cleanly into request-driven workflows.
                </Paragraph>

                <SubSection id="model-loading" title="Model Loading Strategy">
                    <Paragraph>
                        Two different loading approaches were used:
                    </Paragraph>
                    <List items={[
                        'Video detection: The model (yolov5mu.pt) is loaded inside the request handler (tracker()), meaning it reloads for each upload. This is simple but memory-inefficient.',
                        'Live webcam detection: The model is initialized once at Django startup and stored as a global variable. This avoids repeated loading (~27MB checkpoint) and significantly improves performance.'
                    ]} />
                    <Paragraph>
                        The model used is <strong>YOLOv5m (medium variant)</strong> with ~21M parameters, trained on the 80-class COCO dataset.
                    </Paragraph>
                </SubSection>

                <SubSection id="inference-pipeline" title="Inference Pipeline">
                    <Paragraph>
                        For video uploads, frames are extracted using OpenCV's VideoCapture. Each frame is passed to:
                    </Paragraph>
                    <Code>
{`model.predict(source=frame, verbose=False)`}
                    </Code>
                    <Paragraph>
                        YOLO internally handles resizing (≈640px), normalization, forward pass, and non-max suppression (default conf=0.25). Detections are extracted from:
                    </Paragraph>
                    <List items={[
                        'boxes.xyxy (coordinates)',
                        'boxes.cls (class IDs)',
                        'boxes.conf (confidence scores)'
                    ]} />
                    <Paragraph>
                        Annotated frames are written back to a new video file, then re-encoded with FFmpeg for browser compatibility.
                    </Paragraph>
                    <Paragraph>
                        For webcam mode, frames arrive as JPEG blobs via HTTP. They are decoded (cv2.imdecode), passed to YOLO with a stricter conf=0.5, annotated, re-encoded (cv2.imencode), and streamed back at ~20 FPS.
                    </Paragraph>
                </SubSection>

                <SubSection id="bounding-box" title="Bounding Box Rendering">
                    <Paragraph>
                        Annotations are drawn using OpenCV primitives:
                    </Paragraph>
                    <List items={[
                        'Green bounding boxes ((0,255,0), 2px)',
                        'Labels formatted as class_name confidence'
                    ]} />
                    <Paragraph>
                        Video mode uses blue text without background. Webcam mode improves readability by adding a filled green rectangle behind black text.
                    </Paragraph>
                </SubSection>
            </Section>

            {/* System Architecture Deep Dive */}
            <Section id="system-architecture" title="System Architecture Deep Dive">
                <Paragraph>
                    This object detection system follows a classic <strong>client–server architecture</strong>, where Django handles orchestration and YOLO handles intelligence. The design separates concerns cleanly: frontend for interaction, backend for processing, model for inference.
                </Paragraph>

                <SubSection id="django-backend" title="Django Backend">
                    <Paragraph>
                        The backend is structured around standard Django layers:
                    </Paragraph>
                    <List items={[
                        'Views (views.py) handle request logic for video upload and live webcam processing.',
                        'Models (models.py) store uploaded and processed videos using FileField with clear relationships.',
                        'URLs (urls.py) define distinct endpoints for upload, tracking, and live detection.'
                    ]} />
                    <Paragraph>
                        Video uploads are stored on disk and tracked in the database. Processed outputs are saved separately, ensuring traceability between original and annotated media.
                    </Paragraph>
                    <Paragraph>
                        The system remains synchronous—simple to reason about, but blocking during heavy processing.
                    </Paragraph>
                </SubSection>

                <SubSection id="frontend-interaction" title="Frontend Interaction">
                    <Paragraph>
                        The frontend uses <strong>HTML5, CSS3, and vanilla JavaScript</strong>—no frameworks.
                    </Paragraph>
                    <List items={[
                        'Video upload uses a standard multipart form and fetch-based submission.',
                        'Live detection relies on:',
                        '  - getUserMedia() for camera access',
                        '  - Canvas API for frame capture',
                        '  - Fetch API for sending frames to the backend',
                        '  - <img> updates for displaying annotated results'
                    ]} />
                    <Paragraph>
                        This keeps the client lightweight while pushing computation server-side.
                    </Paragraph>
                </SubSection>

                <SubSection id="request-flow" title="Request → Inference → Response Flow">
                    <Paragraph>
                        Two distinct pipelines exist:
                    </Paragraph>
                    <Paragraph>
                        <strong>Video Mode:</strong>
                    </Paragraph>
                    <Code>
{`Upload → Store → Frame-by-frame YOLO inference → Annotate → Re-encode (FFmpeg) → Save → Render video player`}
                    </Code>
                    <Paragraph>
                        <strong>Live Mode:</strong>
                    </Paragraph>
                    <Code>
{`Capture frame → POST to server → YOLO inference → Annotate → Encode JPEG → Return → Display → Repeat (20 FPS loop)`}
                    </Code>
                    <Paragraph>
                        Video processing is disk-heavy and batch-oriented. Webcam processing is memory-based and latency-sensitive (~30–80ms GPU).
                    </Paragraph>
                </SubSection>
            </Section>

            {/* Video Processing Workflow Deep Dive */}
            <Section id="video-workflow" title="Video Processing Workflow Deep Dive">
                <Paragraph>
                    The video detection pipeline is built around a clear, sequential flow: extract frames, run inference, reconstruct the video. While conceptually simple, each stage carries important architectural and performance considerations.
                </Paragraph>

                <SubSection id="frame-extraction" title="1. Frame Extraction (OpenCV)">
                    <Paragraph>
                        Processing begins with cv2.VideoCapture(source), which validates the file, initializes the codec, and parses metadata such as resolution and FPS. Once opened, the system enters a frame-by-frame loop:
                    </Paragraph>
                    <Code>
{`status, frame = video.read()`}
                    </Code>
                    <Paragraph>
                        Each frame is a NumPy array in BGR format (H × W × 3). Only one frame is held in memory at a time, keeping peak memory usage stable (~6MB per 1080p frame plus model memory).
                    </Paragraph>
                    <Paragraph>
                        The loop continues until status becomes False, signaling end-of-file.
                    </Paragraph>
                </SubSection>

                <SubSection id="detection-per-frame" title="2. Detection Per Frame (YOLOv5)">
                    <Paragraph>
                        Each frame is passed to:
                    </Paragraph>
                    <Code>
{`model.predict(source=frame, verbose=False)`}
                    </Code>
                    <Paragraph>
                        Internally, YOLO performs preprocessing (resize, normalize, BGR→RGB), a forward pass through the network (~20ms per frame on GPU), and Non-Maximum Suppression to filter overlapping detections.
                    </Paragraph>
                    <Paragraph>
                        The result includes bounding boxes (xyxy), class IDs, and confidence scores. These are mapped to COCO class names and prepared for rendering.
                    </Paragraph>
                    <Paragraph>
                        Inference is the dominant cost—approximately 90% of total processing time.
                    </Paragraph>
                </SubSection>

                <SubSection id="video-reconstruction" title="3. Video Reconstruction & Encoding">
                    <Paragraph>
                        Annotated frames are written using cv2.VideoWriter, matching the original resolution and FPS. Bounding boxes (green, 2px) and labels (blue text) are drawn before writing each frame.
                    </Paragraph>
                    <Paragraph>
                        After processing completes, resources are released to flush buffers and finalize the file. Because the initial MP4V codec isn't universally browser-compatible, FFmpeg re-encodes the output to H.264/AAC for reliable playback.
                    </Paragraph>
                    <Paragraph>
                        The result is a fully reconstructed, browser-ready video where every frame reflects real-time model inference—transforming raw footage into structured visual intelligence.
                    </Paragraph>
                </SubSection>
            </Section>

            {/* Real-Time Detection Pipeline Deep Dive */}
            <Section id="realtime-pipeline" title="Real-Time Detection Pipeline Deep Dive">
                <Paragraph>
                    The real-time detection system is built as a continuous browser–server loop, enabling live object detection through a standard web interface. The pipeline consists of three core stages: frame capture, backend inference, and live rendering.
                </Paragraph>

                <SubSection id="frame-capture" title="1. Frame Capture (Browser)">
                    <Paragraph>
                        Using the MediaDevices API, the browser requests webcam access and attaches the stream to a &lt;video&gt; element. Every 50ms (≈20 FPS), the current frame is drawn onto a hidden &lt;canvas&gt;.
                    </Paragraph>
                    <Paragraph>
                        The canvas snapshot is compressed into a JPEG blob (80% quality) using canvas.toBlob(). This balances visual clarity and network efficiency, typically producing frames between 10–30 KB. The blob is then sent to the Django backend via a multipart/form-data POST request using fetch().
                    </Paragraph>
                    <Paragraph>
                        This approach keeps the system lightweight—no plugins, no desktop dependencies—just native browser APIs.
                    </Paragraph>
                </SubSection>

                <SubSection id="backend-processing" title="2. Backend Processing (Django + YOLOv5)">
                    <Paragraph>
                        On the server, the uploaded JPEG is converted into a NumPy array and decoded into a BGR image using cv2.imdecode(). The globally loaded YOLOv5 model performs inference with a confidence threshold of 0.5 to reduce false positives in live scenarios.
                    </Paragraph>
                    <Paragraph>
                        Processing steps include:
                    </Paragraph>
                    <List items={[
                        'Preprocessing and tensor conversion',
                        'Neural network forward pass (GPU-accelerated when available)',
                        'Non-Maximum Suppression',
                        'Bounding box and label rendering'
                    ]} />
                    <Paragraph>
                        The annotated frame is re-encoded as JPEG (80% quality) using cv2.imencode() and returned as an HTTP response. Total backend latency on GPU typically ranges between 25–60 ms.
                    </Paragraph>
                </SubSection>

                <SubSection id="live-rendering" title="3. Live Result Rendering (Browser)">
                    <Paragraph>
                        The browser receives the JPEG blob, converts it into an object URL, and updates an &lt;img&gt; element to display the annotated frame. Previous object URLs are revoked to prevent memory leaks.
                    </Paragraph>
                    <Paragraph>
                        This cycle repeats continuously, achieving ~40–110 ms end-to-end latency on GPU systems—delivering smooth, interactive, real-time object detection directly in the browser.
                    </Paragraph>
                </SubSection>
            </Section>

            {/* Challenges & Performance Observations */}
            <Section id="challenges" title="Challenges & Performance Observations">
                <Paragraph>
                    One of the primary challenges was managing latency in the real-time pipeline. While YOLOv5 inference on GPU remained relatively fast, the overall delay was influenced by multiple small components — JPEG encoding, network transfer, decoding, and rendering. Individually minor, together they formed the critical path.
                </Paragraph>
                <Paragraph>
                    Another challenge was browser compatibility in the video-processing workflow. OpenCV's default MP4V codec was not reliably supported across browsers, which required an additional FFmpeg re-encoding step to H.264. This added processing overhead but ensured universal playback.
                </Paragraph>
                <Paragraph>
                    Concurrency is also a limitation in the current architecture. Since the model is loaded globally and inference runs synchronously, multiple simultaneous users would queue behind each other. This design works well for learning and controlled demos but would require architectural changes for production-scale systems.
                </Paragraph>
            </Section>

            {/* Key Learnings */}
            <Section id="learnings" title="Key Learnings">
                <Paragraph>
                    This project reinforced how computer vision systems are more than just running a model. Data flow, encoding formats, memory management, and network behavior significantly impact performance.
                </Paragraph>
                <Paragraph>
                    Integrating ML models into web frameworks requires careful consideration of inference time, resource cleanup, and response handling. Small implementation details — like revoking object URLs or adjusting confidence thresholds — meaningfully affect user experience.
                </Paragraph>
                <Paragraph>
                    Most importantly, this project provided hands-on experience in bridging deep learning models with real-world web infrastructure.
                </Paragraph>
            </Section>

            {/* Future Improvements */}
            <Section id="future" title="Future Improvements">
                <Paragraph>
                    Future enhancements could include asynchronous task processing, model pooling for concurrent users, adaptive frame skipping for dynamic FPS control, and direct H.264 encoding to eliminate the extra FFmpeg step.
                </Paragraph>
                <Paragraph>
                    On the ML side, experimenting with lighter YOLO variants or custom-trained models could improve both speed and domain-specific accuracy.
                </Paragraph>
            </Section>
            <Section id={'demo'} title={'Project Demo'}>
                <VideoDisplay src={'/demos/object_detection/object-detection.mp4'}></VideoDisplay>
            </Section>
        </Document>
    );
}
