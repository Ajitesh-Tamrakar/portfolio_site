// export default function ObjectDetection() {
//     return (
//         <div className="w-full px-[12%] py-10 pt-32 scroll-mt-20">
//             {/* Page Header */}
//             <div className="text-center mb-12">
//                 <h4 className="text-center mb-2 text-lg font-Ovo text-gray-600 dark:text-white/80">Technical Documentation</h4>
//                 <h1 className="text-center text-5xl font-Ovo text-gray-800 dark:text-white mb-5">Real-Time Object Detection Web App</h1>
//                 <div className="w-24 h-1 bg-gradient-to-r from-[#b820e6] to-[#da7d20] mx-auto rounded-full"></div>
//             </div>

//             {/* Content Container */}
//             <div className="max-w-5xl mx-auto bg-white dark:bg-darkTheme border border-gray-200 dark:border-white/20 rounded-lg p-8 md:p-12">
                
//                 {/* Introduction */}
//                 <section className="mb-12">
//                     <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
//                         Object detection often looks impressive in demos, but building a usable, end-to-end system around it is where the real engineering challenge lies.
//                     </p>
//                     <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
//                         In this project, I built a Django-based web application that performs object detection on uploaded videos as well as live webcam feeds, using the YOLOv5 deep learning model.
//                     </p>
//                     <div className="bg-pink-50 dark:bg-pink-900/20 border-l-4 border-pink-500 p-4 rounded-r-lg my-4">
//                         <p className="text-gray-800 dark:text-white/90 leading-relaxed">
//                             <strong>Note:</strong> This is not a tutorial. Instead, it explains how the system works, why certain design choices were made, and what trade-offs were involved, based on a real implementation.
//                         </p>
//                     </div>
//                 </section>

//                 {/* The Problem */}
//                 <section className="mb-12">
//                     <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">The Problem I Wanted to Solve</h2>
//                     <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
//                         Most object detection examples stop at:
//                     </p>
//                     <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4 mb-4">
//                         <li>Running inference on a single image, or</li>
//                         <li>Showing bounding boxes in a Jupyter notebook</li>
//                     </ul>
//                     <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-3">
//                         What's missing is:
//                     </p>
//                     <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4 mb-4">
//                         <li>A user interface</li>
//                         <li>Video handling</li>
//                         <li>Browser compatibility</li>
//                         <li>Real-time interaction</li>
//                         <li>System-level decisions</li>
//                     </ul>
//                     <p className="text-gray-700 dark:text-white/80 leading-relaxed">
//                         I wanted to answer a more practical question: <em>What does it take to turn an object detection model into a real web application that users can actually interact with?</em>
//                     </p>
//                 </section>

//                 {/* What the Application Does */}
//                 <section className="mb-12">
//                     <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">What the Application Does</h2>
//                     <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
//                         The application provides two core features:
//                     </p>
                    
//                     <div className="mb-5">
//                         <h3 className="text-xl font-Ovo text-gray-800 dark:text-white mb-3">Video Upload & Processing</h3>
//                         <p className="text-gray-700 dark:text-white/80 leading-relaxed">
//                             Users upload a video file. The system processes it frame by frame, detects objects, draws bounding boxes with labels and confidence scores, and returns a playable annotated video.
//                         </p>
//                     </div>

//                     <div className="mb-5">
//                         <h3 className="text-xl font-Ovo text-gray-800 dark:text-white mb-3">Live Camera Object Detection</h3>
//                         <p className="text-gray-700 dark:text-white/80 leading-relaxed">
//                             Users can turn on their webcam and see real-time object detection directly in the browser.
//                         </p>
//                     </div>

//                     <p className="text-gray-700 dark:text-white/80 leading-relaxed">
//                         Both features are implemented inside a single Django application.
//                     </p>
//                 </section>

//                 {/* High-Level Architecture */}
//                 <section className="mb-12">
//                     <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">High-Level Architecture</h2>
//                     <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
//                         At a high level, the system looks like this:
//                     </p>
//                     <div className="bg-gray-100 dark:bg-white/10 rounded-lg p-6 border border-gray-300 dark:border-white/20 mb-4">
//                         <pre className="text-gray-700 dark:text-white/90 text-sm leading-relaxed">
// {`Browser (HTML + JS)
//        ↓
// Django Views (Business Logic)
//        ↓
// YOLOv5 + OpenCV (Object Detection)
//        ↓
// Processed Media Files
//        ↓
// Browser Playback`}
//                         </pre>
//                     </div>
//                     <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-3">
//                         Django acts as the orchestrator:
//                     </p>
//                     <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4">
//                         <li>It handles user requests</li>
//                         <li>Coordinates video processing</li>
//                         <li>Manages stored files</li>
//                         <li>Returns results to the frontend</li>
//                     </ul>
//                 </section>

//                 {/* Why YOLOv5 */}
//                 <section className="mb-12">
//                     <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">Why YOLOv5?</h2>
//                     <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
//                         I chose YOLOv5 because:
//                     </p>
//                     <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4 mb-4">
//                         <li>It offers a strong balance between speed and accuracy</li>
//                         <li>It works well for real-time use cases</li>
//                         <li>It integrates cleanly with OpenCV and PyTorch</li>
//                     </ul>
//                     <p className="text-gray-700 dark:text-white/80 leading-relaxed">
//                         The model is not custom-trained — it uses pretrained COCO weights — because the focus of this project was system integration, not dataset creation.
//                     </p>
//                 </section>

//                 {/* Handling Video Uploads */}
//                 <section className="mb-12">
//                     <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">Handling Video Uploads (Not as Simple as It Sounds)</h2>
//                     <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
//                         Once a user uploads a video, several things happen behind the scenes:
//                     </p>
//                     <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4 mb-4">
//                         <li>The video is saved to disk and recorded in the database</li>
//                         <li>OpenCV reads the video frame by frame</li>
//                         <li>Each frame is passed through YOLO</li>
//                         <li>Bounding boxes and labels are drawn</li>
//                         <li>Frames are written back into a new video file</li>
//                     </ol>
//                     <div className="bg-pink-50 dark:bg-pink-900/20 border-l-4 border-pink-500 p-4 rounded-r-lg my-4">
//                         <p className="text-gray-800 dark:text-white font-semibold mb-2">Key Challenge: Browser Compatibility</p>
//                         <p className="text-gray-700 dark:text-white/80 leading-relaxed">
//                             OpenCV often writes videos using codecs that browsers cannot play reliably. To solve this, I added a re-encoding step using FFmpeg, converting the output into H.264 + AAC — a format supported by all modern browsers.
//                         </p>
//                         <p className="text-gray-700 dark:text-white/80 leading-relaxed mt-2">
//                             This step is invisible to users, but critical for usability.
//                         </p>
//                     </div>
//                 </section>

//                 {/* Live Camera Detection */}
//                 <section className="mb-12">
//                     <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">Live Camera Detection: A Different Kind of Problem</h2>
//                     <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
//                         Live detection required a completely different approach.
//                     </p>
//                     <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
//                         Browsers cannot stream raw video directly into Python code. Instead, I designed a frame-based loop:
//                     </p>
//                     <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4 mb-4">
//                         <li>The browser captures a frame using the camera</li>
//                         <li>The frame is converted into a JPEG</li>
//                         <li>The image is sent to Django via HTTP</li>
//                         <li>YOLO processes the frame</li>
//                         <li>The annotated image is returned</li>
//                         <li>The browser displays it</li>
//                         <li>The process repeats ~20 times per second</li>
//                     </ol>
//                     <p className="text-gray-700 dark:text-white/80 leading-relaxed">
//                         This approach trades raw performance for simplicity and reliability — a deliberate choice for a web-based system.
//                     </p>
//                 </section>

//                 {/* Performance Trade-offs */}
//                 <section className="mb-12">
//                     <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">Performance Trade-offs I Had to Accept</h2>
//                     <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
//                         This project made one thing very clear: <strong>Object detection is rarely limited by model accuracy — it's limited by system design.</strong>
//                     </p>
//                     <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-3">
//                         Some trade-offs I made:
//                     </p>
//                     <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4 mb-4">
//                         <li>Reduced frame rate for live tracking to keep latency reasonable</li>
//                         <li>Higher confidence threshold for live mode to reduce false positives</li>
//                         <li>Medium-sized YOLO model instead of the largest one</li>
//                         <li>JPEG compression to reduce network load</li>
//                     </ul>
//                     <p className="text-gray-700 dark:text-white/80 leading-relaxed">
//                         These decisions improved user experience, even if they slightly reduced raw detection power.
//                     </p>
//                 </section>

//                 {/* Database Design */}
//                 <section className="mb-12">
//                     <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">Database Design (Kept Intentionally Simple)</h2>
//                     <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
//                         The database schema has only two core entities:
//                     </p>
//                     <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4 mb-4">
//                         <li>The original uploaded video</li>
//                         <li>The processed video linked to it</li>
//                     </ul>
//                     <p className="text-gray-700 dark:text-white/80 leading-relaxed">
//                         This avoids unnecessary complexity and makes cleanup straightforward: if the original video is deleted, the processed version is removed automatically.
//                     </p>
//                 </section>

//                 {/* Error Handling */}
//                 <section className="mb-12">
//                     <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">Error Handling & Stability</h2>
//                     <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
//                         Real systems fail in real ways:
//                     </p>
//                     <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4 mb-4">
//                         <li>Unsupported video formats</li>
//                         <li>Missing model files</li>
//                         <li>Camera permission denial</li>
//                         <li>Encoding failures</li>
//                     </ul>
//                     <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-3">
//                         The application includes:
//                     </p>
//                     <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4 mb-4">
//                         <li>Clear error responses</li>
//                         <li>Defensive checks</li>
//                         <li>Proper resource cleanup for video and camera streams</li>
//                     </ul>
//                     <p className="text-gray-700 dark:text-white/80 leading-relaxed">
//                         This wasn't about perfection — it was about not crashing unexpectedly.
//                     </p>
//                 </section>

//                 {/* Security */}
//                 <section className="mb-12">
//                     <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">Security & Production Reality (Honest Assessment)</h2>
//                     <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
//                         This project runs in development mode and intentionally avoids production hardening.
//                     </p>
//                     <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-3">
//                         Some known limitations:
//                     </p>
//                     <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4 mb-4">
//                         <li>No authentication</li>
//                         <li>No upload validation</li>
//                         <li>CSRF disabled for live tracking</li>
//                         <li>DEBUG mode enabled</li>
//                     </ul>
//                     <p className="text-gray-700 dark:text-white/80 leading-relaxed">
//                         These were conscious trade-offs to keep the focus on computer vision + system flow, not deployment.
//                     </p>
//                 </section>

//                 {/* What This Taught Me */}
//                 <section className="mb-12">
//                     <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">What This Project Taught Me</h2>
//                     <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
//                         More than anything, this project taught me that:
//                     </p>
//                     <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4">
//                         <li>Object detection models are only one part of the problem</li>
//                         <li>Video I/O and codecs matter a lot</li>
//                         <li>Browser behavior influences backend design</li>
//                         <li>Real-time systems require compromises</li>
//                         <li>Clean architecture matters more than clever code</li>
//                     </ul>
//                 </section>

//                 {/* Final Thoughts */}
//                 <section className="bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 rounded-lg p-8 border border-pink-200 dark:border-pink-500/30">
//                     <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">Final Thoughts</h2>
//                     <p className="text-gray-700 dark:text-white/90 leading-relaxed mb-4">
//                         This project is not about inventing a new detection algorithm. It is about turning an existing model into a usable, interactive web system.
//                     </p>
//                     <p className="text-gray-700 dark:text-white/90 leading-relaxed mb-4">
//                         If someone understands this project fully, they understand:
//                     </p>
//                     <ul className="space-y-3">
//                         <li className="flex items-start gap-3">
//                             <span className="text-pink-500 text-xl">✓</span>
//                             <span className="text-gray-700 dark:text-white/90">Django request flow</span>
//                         </li>
//                         <li className="flex items-start gap-3">
//                             <span className="text-pink-500 text-xl">✓</span>
//                             <span className="text-gray-700 dark:text-white/90">Video processing pipelines</span>
//                         </li>
//                         <li className="flex items-start gap-3">
//                             <span className="text-pink-500 text-xl">✓</span>
//                             <span className="text-gray-700 dark:text-white/90">Real-time browser communication</span>
//                         </li>
//                         <li className="flex items-start gap-3">
//                             <span className="text-pink-500 text-xl">✓</span>
//                             <span className="text-gray-700 dark:text-white/90">Practical ML integration</span>
//                         </li>
//                         <li className="flex items-start gap-3">
//                             <span className="text-pink-500 text-xl">✓</span>
//                             <span className="text-gray-700 dark:text-white/90">Engineering trade-offs</span>
//                         </li>
//                     </ul>
//                 </section>
//             </div>
//         </div>
//     )
// }