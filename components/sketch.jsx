export default function Sketch() {
    return (
        <div className="w-full px-[12%] py-10 pt-32 scroll-mt-20">
            {/* Page Header */}
            <div className="text-center mb-12">
                <h4 className="text-center mb-2 text-lg font-Ovo text-gray-600 dark:text-white/80">Technical Documentation</h4>
                <h1 className="text-center text-5xl font-Ovo text-gray-800 dark:text-white mb-5">Glass Estimation Automation System</h1>
                <div className="w-24 h-1 bg-gradient-to-r from-[#b820e6] to-[#da7d20] mx-auto rounded-full"></div>
            </div>

            {/* Content Container */}
            <div className="max-w-5xl mx-auto bg-white dark:bg-darkTheme border border-gray-200 dark:border-white/20 rounded-lg p-8 md:p-12">
                
                {/* Introduction Section */}
                <section className="mb-12">
                    <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">Introduction</h2>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
                        The objective of this project was to automate the estimation generation process for glass manufacturers by analyzing design images shared by glass vendors.
                    </p>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed">
                        Traditionally, vendors send hand-drawn or annotated design sketches (often via WhatsApp), and manufacturers manually interpret these drawings to calculate material requirements and cost. This process is slow and delays quotation delivery, which directly affects deal conversion.
                    </p>
                </section>

                {/* What the System Does */}
                <section className="mb-12">
                    <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">What the System Is Supposed to Do</h2>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
                        The idea was to build a system that can:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4">
                        <li>Analyze design images</li>
                        <li>Detect shapes and their dimensions</li>
                        <li>Collect additional manufacturing context (e.g., thickness, coating)</li>
                        <li>Generate an estimation quickly</li>
                    </ul>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed mt-4">
                        Thereby reducing response time and improving deal closure rates.
                    </p>
                </section>

                {/* Scope and Assumptions */}
                <section className="mb-12">
                    <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">Scope and Assumptions</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4">
                        <li>Most real-world design samples provided by manufacturers consisted primarily of rectangular shapes.</li>
                        <li>For the prototype, the system was intentionally limited to rectangle detection.</li>
                        <li>Dimensions are typically written near the corresponding edges of shapes.</li>
                        <li>OCR accuracy is not expected to be perfect; hence, a human-in-the-loop correction step is necessary.</li>
                        <li>The system is designed to be semi-automated, not fully autonomous.</li>
                    </ul>
                </section>

                {/* Pipeline Overview */}
                <section className="mb-12">
                    <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">Overall System Pipeline</h2>
                    <div className="bg-gray-100 dark:bg-white/10 rounded-lg p-6 border border-gray-300 dark:border-white/20">
                        <p className="text-center text-gray-700 dark:text-white/90 font-medium">
                            Image Upload → Shape Detection → Text Detection → Dimension–Shape Association → User Validation → Estimate Generation (PDF)
                        </p>
                    </div>
                </section>

                {/* Shape Detection */}
                <section className="mb-12">
                    <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">Shape Detection (Major Geometry Identification)</h2>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
                        To detect glass components from the design images, I developed a Python-based image processing pipeline using OpenCV and NumPy.
                    </p>
                    <h3 className="text-xl font-Ovo text-gray-800 dark:text-white mb-3">Steps involved:</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4">
                        <li>Image preprocessing using thresholding to separate shapes from the background.</li>
                        <li>Noise reduction and continuity improvement using erosion followed by dilation.</li>
                        <li>Contour detection to identify closed shapes.</li>
                        <li>Filtering contours based on enclosed area to remove small or irrelevant detections.</li>
                        <li>Rectangle extraction by approximating contours and calculating height and width.</li>
                        <li>Aspect ratio filtering to eliminate incorrect or excessively narrow detections.</li>
                    </ul>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed mt-4">
                        This process produced a reliable set of valid rectangular components, representing the major glass shapes in the design.
                    </p>
                </section>

                {/* Extracting Structural Geometry */}
                <section className="mb-12">
                    <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">Extracting Structural Geometry</h2>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
                        For each detected rectangle, the following information was stored:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4">
                        <li>Height and width</li>
                        <li>Start and end coordinates of each edge</li>
                        <li>Orientation of edges (horizontal or vertical)</li>
                        <li>Rectangle-to-edge association</li>
                    </ul>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed mt-4">
                        This structural data was essential for later associating detected dimensions with the correct shape.
                    </p>
                </section>

                {/* Text Detection */}
                <section className="mb-12">
                    <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">Text Detection and Dimension Extraction</h2>
                    
                    <div className="mb-5">
                        <h3 className="text-xl font-Ovo text-gray-800 dark:text-white mb-3">Problem:</h3>
                        <p className="text-gray-700 dark:text-white/80 leading-relaxed">
                            Detecting and correctly reading dimension values written near shapes.
                        </p>
                    </div>

                    <div className="mb-5">
                        <h3 className="text-xl font-Ovo text-gray-800 dark:text-white mb-3">Solution:</h3>
                        <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-3">
                            A two-stage OCR pipeline was implemented.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4 mb-4">
                            <li>Image preprocessing on the original image to enhance contrast and improve text readability.</li>
                            <li>EasyOCR was used to locate potential text regions, filter false detections using area-based criteria, and extract bounding box details (coordinates, height, width, orientation).</li>
                        </ul>
                        <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-3">
                            Each detected text region was then cropped individually and sent to Google Cloud OCR for character recognition.
                        </p>
                        
                        <div className="bg-pink-50 dark:bg-pink-900/20 border-l-4 border-pink-500 p-4 rounded-r-lg my-4">
                            <p className="text-gray-800 dark:text-white font-semibold mb-2">🔹 Important improvement:</p>
                            <p className="text-gray-700 dark:text-white/80 leading-relaxed">
                                Instead of directly using Google OCR on the full image or relying solely on EasyOCR, detecting text regions using EasyOCR first and then sending cropped regions individually to Google OCR significantly improved text accuracy compared to using either Google OCR or EasyOCR alone.
                            </p>
                        </div>

                        <p className="text-gray-700 dark:text-white/80 leading-relaxed">
                            The detected text was stored along with its bounding box and orientation metadata.
                        </p>
                    </div>
                </section>

                {/* Dimension Association */}
                <section className="mb-12">
                    <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">Associating Dimensions with Shapes (Core Logic)</h2>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
                        This was the most critical and challenging part of the project.
                    </p>
                    
                    <div className="mb-5">
                        <h3 className="text-xl font-Ovo text-gray-800 dark:text-white mb-3">Key insight:</h3>
                        <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-3">
                            Human drafters usually write dimensions aligned with the orientation of the corresponding edge:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4">
                            <li>Vertical edges → vertically written text</li>
                            <li>Horizontal edges → horizontally written text</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-Ovo text-gray-800 dark:text-white mb-3">Implementation:</h3>
                        <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-3">
                            Text regions were divided into two groups:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4 mb-4">
                            <li>Vertically oriented text (taller bounding boxes)</li>
                            <li>Horizontally oriented text (wider bounding boxes)</li>
                        </ul>
                        <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-3">
                            For each text region:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4 mb-4">
                            <li>Euclidean distance was calculated between the center of the text bounding box and every compatible edge of every rectangle.</li>
                            <li>Vertical text was compared only with vertical edges.</li>
                            <li>Horizontal text was compared only with horizontal edges.</li>
                            <li>The text was assigned to the edge with the minimum distance, ensuring the most likely association.</li>
                        </ul>
                        <p className="text-gray-700 dark:text-white/80 leading-relaxed">
                            This logic allowed accurate mapping of detected dimensions to their respective shapes.
                        </p>
                    </div>
                </section>

                {/* Human in the Loop */}
                <section className="mb-12">
                    <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">Human-in-the-Loop Validation</h2>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
                        Given OCR imperfections, a validation layer was intentionally included.
                    </p>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-3">
                        Detected shapes were cropped along with their associated dimensions. These components were displayed in a Django-based dashboard.
                    </p>
                    <h3 className="text-xl font-Ovo text-gray-800 dark:text-white mb-3">Users could:</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4">
                        <li>View the original image and cropped component</li>
                        <li>Edit incorrect dimensions</li>
                        <li>Manually enter missing values</li>
                    </ul>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed mt-4">
                        This approach ensured reliability without sacrificing automation speed.
                    </p>
                </section>

                {/* Estimate Generation */}
                <section className="mb-12">
                    <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">Estimate Generation</h2>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-3">
                        After user confirmation:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4">
                        <li>Corrected dimensions were processed</li>
                        <li>Material and manufacturing details were applied</li>
                        <li>A final cost estimation was generated</li>
                        <li>The estimate was exported as a downloadable PDF</li>
                    </ul>
                </section>

                {/* Outcome */}
                <section className="bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 rounded-lg p-8 border border-pink-200 dark:border-pink-500/30">
                    <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">Outcome and Value</h2>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <span className="text-pink-500 text-xl">✓</span>
                            <span className="text-gray-700 dark:text-white/90">Reduced manual effort in interpreting design sketches</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-pink-500 text-xl">✓</span>
                            <span className="text-gray-700 dark:text-white/90">Faster estimation turnaround time</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-pink-500 text-xl">✓</span>
                            <span className="text-gray-700 dark:text-white/90">Improved quotation responsiveness</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-pink-500 text-xl">✓</span>
                            <span className="text-gray-700 dark:text-white/90">Practical balance between automation and human validation</span>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    )
}