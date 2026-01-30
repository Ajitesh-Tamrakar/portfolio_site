// // export default function ObjectDetection() {
// //     return (
// //         <div className="w-full px-[12%] py-10 pt-32 scroll-mt-20">
// //             {/* Page Header */}
// //             <div className="text-center mb-12">
// //                 <h4 className="text-center mb-2 text-lg font-Ovo text-gray-600 dark:text-white/80">Technical Documentation</h4>
// //                 <h1 className="text-center text-5xl font-Ovo text-gray-800 dark:text-white mb-5">Real-Time Object Detection Web App</h1>
// //                 <div className="w-24 h-1 bg-gradient-to-r from-[#b820e6] to-[#da7d20] mx-auto rounded-full"></div>
// //             </div>

// //             {/* Content Container */}
// //             <div className="max-w-5xl mx-auto bg-white dark:bg-darkTheme border border-gray-200 dark:border-white/20 rounded-lg p-8 md:p-12">
                
// //                 {/* Introduction */}
// //                 <section className="mb-12">
// //                     <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
// //                         Object detection often looks impressive in demos, but building a usable, end-to-end system around it is where the real engineering challenge lies.
// //                     </p>
// //                     <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
// //                         In this project, I built a Django-based web application that performs object detection on uploaded videos as well as live webcam feeds, using the YOLOv5 deep learning model.
// //                     </p>
// //                     <div className="bg-pink-50 dark:bg-pink-900/20 border-l-4 border-pink-500 p-4 rounded-r-lg my-4">
// //                         <p className="text-gray-800 dark:text-white/90 leading-relaxed">
// //                             <strong>Note:</strong> This is not a tutorial. Instead, it explains how the system works, why certain design choices were made, and what trade-offs were involved, based on a real implementation.
// //                         </p>
// //                     </div>
// //                 </section>

// //                 {/* The Problem */}
// //                 <section className="mb-12">
// //                     <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">The Problem I Wanted to Solve</h2>
// //                     <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
// //                         Most object detection examples stop at:
// //                     </p>
// //                     <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4 mb-4">
// //                         <li>Running inference on a single image, or</li>
// //                         <li>Showing bounding boxes in a Jupyter notebook</li>
// //                     </ul>
// //                     <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-3">
// //                         What's missing is:
// //                     </p>
// //                     <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4 mb-4">
// //                         <li>A user interface</li>
// //                         <li>Video handling</li>
// //                         <li>Browser compatibility</li>
// //                         <li>Real-time interaction</li>
// //                         <li>System-level decisions</li>
// //                     </ul>
// //                     <p className="text-gray-700 dark:text-white/80 leading-relaxed">
// //                         I wanted to answer a more practical question: <em>What does it take to turn an object detection model into a real web application that users can actually interact with?</em>
// //                     </p>
// //                 </section>

// //                 {/* What the Application Does */}
// //                 <section className="mb-12">
// //                     <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">What the Application Does</h2>
// //                     <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
// //                         The application provides two core features:
// //                     </p>
                    
// //                     <div className="mb-5">
// //                         <h3 className="text-xl font-Ovo text-gray-800 dark:text-white mb-3">Video Upload & Processing</h3>
// //                         <p className="text-gray-700 dark:text-white/80 leading-relaxed">
// //                             Users upload a video file. The system processes it frame by frame, detects objects, draws bounding boxes with labels and confidence scores, and returns a playable annotated video.
// //                         </p>
// //                     </div>

// //                     <div className="mb-5">
// //                         <h3 className="text-xl font-Ovo text-gray-800 dark:text-white mb-3">Live Camera Object Detection</h3>
// //                         <p className="text-gray-700 dark:text-white/80 leading-relaxed">
// //                             Users can turn on their webcam and see real-time object detection directly in the browser.
// //                         </p>
// //                     </div>

// //                     <p className="text-gray-700 dark:text-white/80 leading-relaxed">
// //                         Both features are implemented inside a single Django application.
// //                     </p>
// //                 </section>

// //                 {/* High-Level Architecture */}
// //                 <section className="mb-12">
// //                     <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">High-Level Architecture</h2>
// //                     <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
// //                         At a high level, the system looks like this:
// //                     </p>
// //                     <div className="bg-gray-100 dark:bg-white/10 rounded-lg p-6 border border-gray-300 dark:border-white/20 mb-4">
// //                         <pre className="text-gray-700 dark:text-white/90 text-sm leading-relaxed">
// // {`Browser (HTML + JS)
// //        ↓
// // Django Views (Business Logic)
// //        ↓
// // YOLOv5 + OpenCV (Object Detection)
// //        ↓
// // Processed Media Files
// //        ↓
// // Browser Playback`}
// //                         </pre>
// //                     </div>
// //                     <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-3">
// //                         Django acts as the orchestrator:
// //                     </p>
// //                     <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4">
// //                         <li>It handles user requests</li>
// //                         <li>Coordinates video processing</li>
// //                         <li>Manages stored files</li>
// //                         <li>Returns results to the frontend</li>
// //                     </ul>
// //                 </section>

// //                 {/* Why YOLOv5 */}
// //                 <section className="mb-12">
// //                     <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">Why YOLOv5?</h2>
// //                     <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
// //                         I chose YOLOv5 because:
// //                     </p>
// //                     <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4 mb-4">
// //                         <li>It offers a strong balance between speed and accuracy</li>
// //                         <li>It works well for real-time use cases</li>
// //                         <li>It integrates cleanly with OpenCV and PyTorch</li>
// //                     </ul>
// //                     <p className="text-gray-700 dark:text-white/80 leading-relaxed">
// //                         The model is not custom-trained — it uses pretrained COCO weights — because the focus of this project was system integration, not dataset creation.
// //                     </p>
// //                 </section>

// //                 {/* Handling Video Uploads */}
// //                 <section className="mb-12">
// //                     <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">Handling Video Uploads (Not as Simple as It Sounds)</h2>
// //                     <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
// //                         Once a user uploads a video, several things happen behind the scenes:
// //                     </p>
// //                     <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4 mb-4">
// //                         <li>The video is saved to disk and recorded in the database</li>
// //                         <li>OpenCV reads the video frame by frame</li>
// //                         <li>Each frame is passed through YOLO</li>
// //                         <li>Bounding boxes and labels are drawn</li>
// //                         <li>Frames are written back into a new video file</li>
// //                     </ol>
// //                     <div className="bg-pink-50 dark:bg-pink-900/20 border-l-4 border-pink-500 p-4 rounded-r-lg my-4">
// //                         <p className="text-gray-800 dark:text-white font-semibold mb-2">Key Challenge: Browser Compatibility</p>
// //                         <p className="text-gray-700 dark:text-white/80 leading-relaxed">
// //                             OpenCV often writes videos using codecs that browsers cannot play reliably. To solve this, I added a re-encoding step using FFmpeg, converting the output into H.264 + AAC — a format supported by all modern browsers.
// //                         </p>
// //                         <p className="text-gray-700 dark:text-white/80 leading-relaxed mt-2">
// //                             This step is invisible to users, but critical for usability.
// //                         </p>
// //                     </div>
// //                 </section>

// //                 {/* Live Camera Detection */}
// //                 <section className="mb-12">
// //                     <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">Live Camera Detection: A Different Kind of Problem</h2>
// //                     <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
// //                         Live detection required a completely different approach.
// //                     </p>
// //                     <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
// //                         Browsers cannot stream raw video directly into Python code. Instead, I designed a frame-based loop:
// //                     </p>
// //                     <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4 mb-4">
// //                         <li>The browser captures a frame using the camera</li>
// //                         <li>The frame is converted into a JPEG</li>
// //                         <li>The image is sent to Django via HTTP</li>
// //                         <li>YOLO processes the frame</li>
// //                         <li>The annotated image is returned</li>
// //                         <li>The browser displays it</li>
// //                         <li>The process repeats ~20 times per second</li>
// //                     </ol>
// //                     <p className="text-gray-700 dark:text-white/80 leading-relaxed">
// //                         This approach trades raw performance for simplicity and reliability — a deliberate choice for a web-based system.
// //                     </p>
// //                 </section>

// //                 {/* Performance Trade-offs */}
// //                 <section className="mb-12">
// //                     <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">Performance Trade-offs I Had to Accept</h2>
// //                     <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
// //                         This project made one thing very clear: <strong>Object detection is rarely limited by model accuracy — it's limited by system design.</strong>
// //                     </p>
// //                     <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-3">
// //                         Some trade-offs I made:
// //                     </p>
// //                     <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4 mb-4">
// //                         <li>Reduced frame rate for live tracking to keep latency reasonable</li>
// //                         <li>Higher confidence threshold for live mode to reduce false positives</li>
// //                         <li>Medium-sized YOLO model instead of the largest one</li>
// //                         <li>JPEG compression to reduce network load</li>
// //                     </ul>
// //                     <p className="text-gray-700 dark:text-white/80 leading-relaxed">
// //                         These decisions improved user experience, even if they slightly reduced raw detection power.
// //                     </p>
// //                 </section>

// //                 {/* Database Design */}
// //                 <section className="mb-12">
// //                     <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">Database Design (Kept Intentionally Simple)</h2>
// //                     <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
// //                         The database schema has only two core entities:
// //                     </p>
// //                     <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4 mb-4">
// //                         <li>The original uploaded video</li>
// //                         <li>The processed video linked to it</li>
// //                     </ul>
// //                     <p className="text-gray-700 dark:text-white/80 leading-relaxed">
// //                         This avoids unnecessary complexity and makes cleanup straightforward: if the original video is deleted, the processed version is removed automatically.
// //                     </p>
// //                 </section>

// //                 {/* Error Handling */}
// //                 <section className="mb-12">
// //                     <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">Error Handling & Stability</h2>
// //                     <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
// //                         Real systems fail in real ways:
// //                     </p>
// //                     <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4 mb-4">
// //                         <li>Unsupported video formats</li>
// //                         <li>Missing model files</li>
// //                         <li>Camera permission denial</li>
// //                         <li>Encoding failures</li>
// //                     </ul>
// //                     <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-3">
// //                         The application includes:
// //                     </p>
// //                     <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4 mb-4">
// //                         <li>Clear error responses</li>
// //                         <li>Defensive checks</li>
// //                         <li>Proper resource cleanup for video and camera streams</li>
// //                     </ul>
// //                     <p className="text-gray-700 dark:text-white/80 leading-relaxed">
// //                         This wasn't about perfection — it was about not crashing unexpectedly.
// //                     </p>
// //                 </section>

// //                 {/* Security */}
// //                 <section className="mb-12">
// //                     <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">Security & Production Reality (Honest Assessment)</h2>
// //                     <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
// //                         This project runs in development mode and intentionally avoids production hardening.
// //                     </p>
// //                     <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-3">
// //                         Some known limitations:
// //                     </p>
// //                     <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4 mb-4">
// //                         <li>No authentication</li>
// //                         <li>No upload validation</li>
// //                         <li>CSRF disabled for live tracking</li>
// //                         <li>DEBUG mode enabled</li>
// //                     </ul>
// //                     <p className="text-gray-700 dark:text-white/80 leading-relaxed">
// //                         These were conscious trade-offs to keep the focus on computer vision + system flow, not deployment.
// //                     </p>
// //                 </section>

// //                 {/* What This Taught Me */}
// //                 <section className="mb-12">
// //                     <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">What This Project Taught Me</h2>
// //                     <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
// //                         More than anything, this project taught me that:
// //                     </p>
// //                     <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4">
// //                         <li>Object detection models are only one part of the problem</li>
// //                         <li>Video I/O and codecs matter a lot</li>
// //                         <li>Browser behavior influences backend design</li>
// //                         <li>Real-time systems require compromises</li>
// //                         <li>Clean architecture matters more than clever code</li>
// //                     </ul>
// //                 </section>

// //                 {/* Final Thoughts */}
// //                 <section className="bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 rounded-lg p-8 border border-pink-200 dark:border-pink-500/30">
// //                     <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">Final Thoughts</h2>
// //                     <p className="text-gray-700 dark:text-white/90 leading-relaxed mb-4">
// //                         This project is not about inventing a new detection algorithm. It is about turning an existing model into a usable, interactive web system.
// //                     </p>
// //                     <p className="text-gray-700 dark:text-white/90 leading-relaxed mb-4">
// //                         If someone understands this project fully, they understand:
// //                     </p>
// //                     <ul className="space-y-3">
// //                         <li className="flex items-start gap-3">
// //                             <span className="text-pink-500 text-xl">✓</span>
// //                             <span className="text-gray-700 dark:text-white/90">Django request flow</span>
// //                         </li>
// //                         <li className="flex items-start gap-3">
// //                             <span className="text-pink-500 text-xl">✓</span>
// //                             <span className="text-gray-700 dark:text-white/90">Video processing pipelines</span>
// //                         </li>
// //                         <li className="flex items-start gap-3">
// //                             <span className="text-pink-500 text-xl">✓</span>
// //                             <span className="text-gray-700 dark:text-white/90">Real-time browser communication</span>
// //                         </li>
// //                         <li className="flex items-start gap-3">
// //                             <span className="text-pink-500 text-xl">✓</span>
// //                             <span className="text-gray-700 dark:text-white/90">Practical ML integration</span>
// //                         </li>
// //                         <li className="flex items-start gap-3">
// //                             <span className="text-pink-500 text-xl">✓</span>
// //                             <span className="text-gray-700 dark:text-white/90">Engineering trade-offs</span>
// //                         </li>
// //                     </ul>
// //                 </section>
// //             </div>
// //         </div>
// //     )
// // }

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
                <VideoDisplay src={'/demos/object_detection/object_detection.mp4'}></VideoDisplay>
            </Section>
        </Document>
    );
}
