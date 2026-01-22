'use client';
import { useState, useEffect } from 'react';

export default function Sketch() {
    const [activeSection, setActiveSection] = useState('');

    const tableOfContents = [
        { id: 'introduction', label: 'Introduction', level: 0 },
        { id: 'system-overview', label: 'System Overview', level: 0 },
        { id: 'pipeline-explanation', label: 'High-level pipeline explanation', level: 1 },
        { id: 'system-end-to-end', label: 'What the system does end-to-end', level: 1 },
        { id: 'semi-automation', label: 'Why semi-automation was chosen', level: 1 },
        { id: 'geometry-extraction', label: 'Geometry Extraction Pipeline', level: 0 },
        { id: 'image-preprocessing', label: 'Image Preprocessing: Separating Shapes from the Background', level: 1 },
        { id: 'shape-continuity', label: 'Improving Shape Continuity and Reducing Noise', level: 1 },
        { id: 'candidate-shapes', label: 'Identifying Candidate Shapes Using Contours', level: 1 },
        { id: 'extracting-contours', label: 'Extracting Contours from the Binary Image', level: 2 },
        { id: 'filtering-contours', label: 'Filtering Contours to Isolate Likely Rectangles', level: 2 },
        { id: 'validating-geometry', label: 'Validating Rectangular Geometry', level: 1 },
        { id: 'isolating-geometry', label: 'Isolating Geometry on a Clean Canvas', level: 2 },
        { id: 'reinforcing-shape', label: 'Reinforcing Shape Integrity', level: 2 },
        { id: 'skeletonization', label: 'Skeletonization for Precise Geometry', level: 2 },
        { id: 'final-validation', label: 'Final Rectangle Validation Using Contours and Hierarchy', level: 2 },
        { id: 'extracting-structure', label: 'Extracting and Storing Geometric Structure', level: 2 },
        { id: 'text-extraction', label: 'Text Extraction Pipeline', level: 0 },
        { id: 'preprocessing-ocr', label: 'Preprocessing for OCR Reliability', level: 1 },
        { id: 'google-ocr', label: 'OCR Using Google Cloud Vision', level: 2 },
        { id: 'individual-text', label: 'Extracting Individual Text Elements', level: 2 },
        { id: 'noise-cleanup', label: 'Noise cleanup specifically for text', level: 2 },
        { id: 'text-not-enough', label: 'Why Text Extraction Alone Is Not Enough', level: 2 },
        { id: 'dimension-text', label: 'Detecting and Extracting Dimension Text', level: 1 },
        { id: 'reasoning-layer', label: 'Reasoning Layer: Mapping Dimensions to Geometry', level: 0 },
        { id: 'orientation-constraint', label: 'Using Orientation as a Constraint', level: 1 },
        { id: 'human-annotation', label: 'Key Insight: How Humans Annotate Drawings', level: 2 },
        { id: 'text-orientation', label: 'Extracting Text Orientation and Position', level: 2 },
        { id: 'search-space', label: 'Reducing the Search Space Using Orientation', level: 2 },
        { id: 'edge-association', label: 'Distance-Based Edge Association', level: 1 },
        { id: 'centroid-distance', label: 'Centroid-to-edge distance', level: 2 },
        { id: 'nearest-edge', label: 'Nearest-edge selection logic', level: 2 },
        { id: 'shape-dimension', label: 'Building Structured Shape–Dimension Associations', level: 1 },
        { id: 'rectangle-profiles', label: 'Rectangle profiles', level: 2 },
        { id: 'storing-associations', label: 'Storing Structured Associations', level: 2 },
        { id: 'human-validation', label: 'Human-in-the-Loop Validation', level: 0 },
        { id: 'estimate-generation', label: 'Estimate Generation', level: 0 },
        { id: 'outcomes', label: 'Outcomes and Value', level: 0 },
        { id: 'faster-turnaround', label: 'Faster turnaround', level: 1 },
        { id: 'limitations', label: 'Limitations and Future Work', level: 0 },
        { id: 'conclusion', label: 'Conclusion', level: 0 },
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = tableOfContents.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + 150;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(tableOfContents[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="w-full px-[12%] py-10 pt-32 scroll-mt-20">
            {/* Page Header */}
            <div className="text-center mb-12">
                <h4 className="text-center mb-2 text-lg font-Ovo text-gray-600 dark:text-white/80">Technical Documentation</h4>
                <h1 className="text-center text-5xl font-Ovo text-gray-800 dark:text-white mb-5">Glass Estimation Automation System</h1>
                <div className="w-24 h-1 bg-gradient-to-r from-[#b820e6] to-[#da7d20] mx-auto rounded-full"></div>
            </div>

            {/* Main Layout with Sidebar and Content */}
            <div className="max-w-7xl mx-auto flex gap-8">
                {/* Table of Contents Sidebar */}
                <aside className="hidden lg:block w-64 flex-shrink-0">
                    <div className="sticky top-24 bg-white dark:bg-darkTheme border border-gray-200 dark:border-white/20 rounded-lg p-6 max-h-[calc(100vh-120px)] overflow-y-auto">
                        <h3 className="text-lg font-Ovo text-gray-800 dark:text-white mb-4">Contents</h3>
                        <nav>
                            <ul className="space-y-1">
                                {tableOfContents.map((item) => (
                                    <li 
                                        key={item.id}
                                        style={{ paddingLeft: `${item.level * 16}px` }}
                                    >
                                        <button
                                            onClick={() => scrollToSection(item.id)}
                                            className={`w-full text-left text-sm py-1.5 px-2 rounded transition-colors ${
                                                activeSection === item.id
                                                    ? 'text-[#b820e6] bg-lightHover dark:bg-darkHover font-medium'
                                                    : 'text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5'
                                            }`}
                                        >
                                            {item.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </aside>

                {/* Content Container */}
                <div className="flex-1 bg-white dark:bg-darkTheme border border-gray-200 dark:border-white/20 rounded-lg p-8 md:p-12">
                
                    {/* Introduction Section */}
                    <section id="introduction" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">Introduction</h2>
                        <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
                            The objective of this project was to automate the estimation generation process for glass manufacturers by analyzing design images shared by glass vendors.
                        </p>
                        <p className="text-gray-700 dark:text-white/80 leading-relaxed">
                            Traditionally, vendors send hand-drawn or annotated design sketches (often via WhatsApp), and manufacturers manually interpret these drawings to calculate material requirements and cost. This process is slow and delays quotation delivery, which directly affects deal conversion.
                        </p>
                    </section>

                    {/* System Overview */}
                    <section id="system-overview" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">System Overview</h2>
                        <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
                            The idea was to build a system that can analyze design images, detect shapes and their dimensions, collect additional manufacturing context, and generate estimations quickly.
                        </p>
                        
                        <div id="pipeline-explanation" className="mt-8 scroll-mt-24">
                            <h3 className="text-xl font-Ovo text-gray-800 dark:text-white mb-3">High-level pipeline explanation</h3>
                            <div className="bg-gray-100 dark:bg-white/10 rounded-lg p-6 border border-gray-300 dark:border-white/20">
                                <p className="text-center text-gray-700 dark:text-white/90 font-medium">
                                    Image Upload → Shape Detection → Text Detection → Dimension–Shape Association → User Validation → Estimate Generation (PDF)
                                </p>
                            </div>
                        </div>

                        <div id="system-end-to-end" className="mt-8 scroll-mt-24">
                            <h3 className="text-xl font-Ovo text-gray-800 dark:text-white mb-3">What the system does end-to-end</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4">
                                <li>Analyze design images</li>
                                <li>Detect shapes and their dimensions</li>
                                <li>Collect additional manufacturing context (e.g., thickness, coating)</li>
                                <li>Generate an estimation quickly</li>
                            </ul>
                        </div>

                        <div id="semi-automation" className="mt-8 scroll-mt-24">
                            <h3 className="text-xl font-Ovo text-gray-800 dark:text-white mb-3">Why semi-automation was chosen</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4">
                                <li>OCR accuracy is not expected to be perfect</li>
                                <li>Human-in-the-loop correction step is necessary for reliability</li>
                                <li>Balances automation speed with accuracy requirements</li>
                                <li>Maintains quality control while reducing manual effort</li>
                            </ul>
                        </div>
                    </section>

                    {/* Geometry Extraction Pipeline */}
                    <section id="geometry-extraction" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">Geometry Extraction Pipeline</h2>
                        <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
                            To detect glass components from the design images, I developed a Python-based image processing pipeline using OpenCV and NumPy.
                        </p>

                        <div id="image-preprocessing" className="mt-8 scroll-mt-24">
                            <h3 className="text-xl font-Ovo text-gray-800 dark:text-white mb-3">Image Preprocessing: Separating Shapes from the Background</h3>
                            <p className="text-gray-700 dark:text-white/80 leading-relaxed">
                                The first step involves applying thresholding techniques to convert the image into a binary format, effectively separating the foreground shapes from the background.
                            </p>
                        </div>

                        <div id="shape-continuity" className="mt-8 scroll-mt-24">
                            <h3 className="text-xl font-Ovo text-gray-800 dark:text-white mb-3">Improving Shape Continuity and Reducing Noise</h3>
                            <p className="text-gray-700 dark:text-white/80 leading-relaxed">
                                Morphological operations (erosion followed by dilation) are applied to reduce noise and improve the continuity of shape boundaries.
                            </p>
                        </div>

                        <div id="candidate-shapes" className="mt-8 scroll-mt-24">
                            <h3 className="text-xl font-Ovo text-gray-800 dark:text-white mb-3">Identifying Candidate Shapes Using Contours</h3>
                            
                            <div id="extracting-contours" className="mt-5 ml-6 scroll-mt-24">
                                <h4 className="text-lg font-Ovo text-gray-800 dark:text-white mb-2">Extracting Contours from the Binary Image</h4>
                                <p className="text-gray-700 dark:text-white/80 leading-relaxed">
                                    OpenCV's contour detection algorithm is used to identify all closed shapes in the preprocessed image.
                                </p>
                            </div>

                            <div id="filtering-contours" className="mt-5 ml-6 scroll-mt-24">
                                <h4 className="text-lg font-Ovo text-gray-800 dark:text-white mb-2">Filtering Contours to Isolate Likely Rectangles</h4>
                                <p className="text-gray-700 dark:text-white/80 leading-relaxed">
                                    Contours are filtered based on enclosed area to remove small or irrelevant detections, isolating shapes that are likely to be rectangles.
                                </p>
                            </div>
                        </div>

                        <div id="validating-geometry" className="mt-8 scroll-mt-24">
                            <h3 className="text-xl font-Ovo text-gray-800 dark:text-white mb-3">Validating Rectangular Geometry</h3>

                            <div id="isolating-geometry" className="mt-5 ml-6 scroll-mt-24">
                                <h4 className="text-lg font-Ovo text-gray-800 dark:text-white mb-2">Isolating Geometry on a Clean Canvas</h4>
                                <p className="text-gray-700 dark:text-white/80 leading-relaxed">
                                    Each candidate shape is rendered on a clean canvas for isolated analysis.
                                </p>
                            </div>

                            <div id="reinforcing-shape" className="mt-5 ml-6 scroll-mt-24">
                                <h4 className="text-lg font-Ovo text-gray-800 dark:text-white mb-2">Reinforcing Shape Integrity</h4>
                                <p className="text-gray-700 dark:text-white/80 leading-relaxed">
                                    Additional morphological operations reinforce the shape boundaries to ensure clean edges.
                                </p>
                            </div>

                            <div id="skeletonization" className="mt-5 ml-6 scroll-mt-24">
                                <h4 className="text-lg font-Ovo text-gray-800 dark:text-white mb-2">Skeletonization for Precise Geometry</h4>
                                <p className="text-gray-700 dark:text-white/80 leading-relaxed">
                                    Skeletonization technique reduces shapes to their central structure, allowing for precise geometric analysis.
                                </p>
                            </div>

                            <div id="final-validation" className="mt-5 ml-6 scroll-mt-24">
                                <h4 className="text-lg font-Ovo text-gray-800 dark:text-white mb-2">Final Rectangle Validation Using Contours and Hierarchy</h4>
                                <p className="text-gray-700 dark:text-white/80 leading-relaxed">
                                    Rectangle validation involves approximating contours and using aspect ratio filtering to eliminate incorrect or excessively narrow detections.
                                </p>
                            </div>

                            <div id="extracting-structure" className="mt-5 ml-6 scroll-mt-24">
                                <h4 className="text-lg font-Ovo text-gray-800 dark:text-white mb-2">Extracting and Storing Geometric Structure</h4>
                                <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-3">
                                    For each validated rectangle, the following information is stored:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4">
                                    <li>Height and width</li>
                                    <li>Start and end coordinates of each edge</li>
                                    <li>Orientation of edges (horizontal or vertical)</li>
                                    <li>Rectangle-to-edge association</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Text Extraction Pipeline */}
                    <section id="text-extraction" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">Text Extraction Pipeline</h2>

                        <div id="preprocessing-ocr" className="mt-8 scroll-mt-24">
                            <h3 className="text-xl font-Ovo text-gray-800 dark:text-white mb-3">Preprocessing for OCR Reliability</h3>
                            <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
                                A two-stage OCR pipeline was implemented to maximize text detection accuracy.
                            </p>

                            <div id="google-ocr" className="mt-5 ml-6 scroll-mt-24">
                                <h4 className="text-lg font-Ovo text-gray-800 dark:text-white mb-2">OCR Using Google Cloud Vision</h4>
                                <p className="text-gray-700 dark:text-white/80 leading-relaxed">
                                    Google Cloud Vision API is used for character recognition on cropped text regions, providing superior accuracy for dimension values.
                                </p>
                            </div>

                            <div id="individual-text" className="mt-5 ml-6 scroll-mt-24">
                                <h4 className="text-lg font-Ovo text-gray-800 dark:text-white mb-2">Extracting Individual Text Elements</h4>
                                <p className="text-gray-700 dark:text-white/80 leading-relaxed">
                                    Each text region detected by EasyOCR is cropped individually and processed separately for better recognition accuracy.
                                </p>
                            </div>

                            <div id="noise-cleanup" className="mt-5 ml-6 scroll-mt-24">
                                <h4 className="text-lg font-Ovo text-gray-800 dark:text-white mb-2">Noise cleanup specifically for text</h4>
                                <p className="text-gray-700 dark:text-white/80 leading-relaxed">
                                    Area-based filtering removes false text detections caused by noise or artifacts in the image.
                                </p>
                            </div>

                            <div id="text-not-enough" className="mt-5 ml-6 scroll-mt-24">
                                <h4 className="text-lg font-Ovo text-gray-800 dark:text-white mb-2">Why Text Extraction Alone Is Not Enough</h4>
                                <div className="bg-pink-50 dark:bg-pink-900/20 border-l-4 border-pink-500 p-4 rounded-r-lg">
                                    <p className="text-gray-800 dark:text-white font-semibold mb-2">🔹 Important improvement:</p>
                                    <p className="text-gray-700 dark:text-white/80 leading-relaxed">
                                        Instead of directly using Google OCR on the full image or relying solely on EasyOCR, detecting text regions using EasyOCR first and then sending cropped regions individually to Google OCR significantly improved text accuracy.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div id="dimension-text" className="mt-8 scroll-mt-24">
                            <h3 className="text-xl font-Ovo text-gray-800 dark:text-white mb-3">Detecting and Extracting Dimension Text</h3>
                            <p className="text-gray-700 dark:text-white/80 leading-relaxed">
                                The detected text is stored along with its bounding box coordinates, orientation metadata, and positional information for later association with geometric shapes.
                            </p>
                        </div>
                    </section>

                    {/* Reasoning Layer */}
                    <section id="reasoning-layer" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">Reasoning Layer: Mapping Dimensions to Geometry</h2>
                        <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
                            This was the most critical and challenging part of the project - associating detected dimension values with their corresponding shape edges.
                        </p>

                        <div id="orientation-constraint" className="mt-8 scroll-mt-24">
                            <h3 className="text-xl font-Ovo text-gray-800 dark:text-white mb-3">Using Orientation as a Constraint</h3>

                            <div id="human-annotation" className="mt-5 ml-6 scroll-mt-24">
                                <h4 className="text-lg font-Ovo text-gray-800 dark:text-white mb-2">Key Insight: How Humans Annotate Drawings</h4>
                                <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-3">
                                    Human drafters usually write dimensions aligned with the orientation of the corresponding edge:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4">
                                    <li>Vertical edges → vertically written text</li>
                                    <li>Horizontal edges → horizontally written text</li>
                                </ul>
                            </div>

                            <div id="text-orientation" className="mt-5 ml-6 scroll-mt-24">
                                <h4 className="text-lg font-Ovo text-gray-800 dark:text-white mb-2">Extracting Text Orientation and Position</h4>
                                <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-3">
                                    Text regions are classified based on bounding box dimensions:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4">
                                    <li>Taller bounding boxes → vertically oriented text</li>
                                    <li>Wider bounding boxes → horizontally oriented text</li>
                                </ul>
                            </div>

                            <div id="search-space" className="mt-5 ml-6 scroll-mt-24">
                                <h4 className="text-lg font-Ovo text-gray-800 dark:text-white mb-2">Reducing the Search Space Using Orientation</h4>
                                <p className="text-gray-700 dark:text-white/80 leading-relaxed">
                                    By matching text orientation to edge orientation, the search space for dimension-shape association is dramatically reduced, improving both accuracy and performance.
                                </p>
                            </div>
                        </div>

                        <div id="edge-association" className="mt-8 scroll-mt-24">
                            <h3 className="text-xl font-Ovo text-gray-800 dark:text-white mb-3">Distance-Based Edge Association</h3>

                            <div id="centroid-distance" className="mt-5 ml-6 scroll-mt-24">
                                <h4 className="text-lg font-Ovo text-gray-800 dark:text-white mb-2">Centroid-to-edge distance</h4>
                                <p className="text-gray-700 dark:text-white/80 leading-relaxed">
                                    For each text region, Euclidean distance is calculated between the center of the text bounding box and every compatible edge of every rectangle.
                                </p>
                            </div>

                            <div id="nearest-edge" className="mt-5 ml-6 scroll-mt-24">
                                <h4 className="text-lg font-Ovo text-gray-800 dark:text-white mb-2">Nearest-edge selection logic</h4>
                                <p className="text-gray-700 dark:text-white/80 leading-relaxed">
                                    The text is assigned to the edge with the minimum distance, ensuring the most likely association based on spatial proximity.
                                </p>
                            </div>
                        </div>

                        <div id="shape-dimension" className="mt-8 scroll-mt-24">
                            <h3 className="text-xl font-Ovo text-gray-800 dark:text-white mb-3">Building Structured Shape–Dimension Associations</h3>

                            <div id="rectangle-profiles" className="mt-5 ml-6 scroll-mt-24">
                                <h4 className="text-lg font-Ovo text-gray-800 dark:text-white mb-2">Rectangle profiles</h4>
                                <p className="text-gray-700 dark:text-white/80 leading-relaxed">
                                    Each rectangle is built as a structured profile containing its geometric properties and associated dimension values.
                                </p>
                            </div>

                            <div id="storing-associations" className="mt-5 ml-6 scroll-mt-24">
                                <h4 className="text-lg font-Ovo text-gray-800 dark:text-white mb-2">Storing Structured Associations</h4>
                                <p className="text-gray-700 dark:text-white/80 leading-relaxed">
                                    The complete mapping of shapes to dimensions is stored in a structured format, ready for validation and estimation generation.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Human Validation */}
                    <section id="human-validation" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">Human-in-the-Loop Validation</h2>
                        <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
                            Given OCR imperfections, a validation layer was intentionally included.
                        </p>
                        <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-3">
                            Detected shapes were cropped along with their associated dimensions and displayed in a Django-based dashboard.
                        </p>
                        <h3 className="text-xl font-Ovo text-gray-800 dark:text-white mb-3">Users could:</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4">
                            <li>View the original image and cropped component</li>
                            <li>Edit incorrect dimensions</li>
                            <li>Manually enter missing values</li>
                            <li>Approve or reject detected components</li>
                        </ul>
                        <p className="text-gray-700 dark:text-white/80 leading-relaxed mt-4">
                            This approach ensured reliability without sacrificing automation speed.
                        </p>
                    </section>

                    {/* Estimate Generation */}
                    <section id="estimate-generation" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">Estimate Generation</h2>
                        <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-3">
                            After user confirmation and correction:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4">
                            <li>Validated dimensions are processed</li>
                            <li>Material and manufacturing details are applied (thickness, coating, etc.)</li>
                            <li>Cost calculations are performed based on current pricing</li>
                            <li>A comprehensive estimation is generated</li>
                            <li>The estimate is formatted and exported as a downloadable PDF</li>
                        </ul>
                    </section>

                    {/* Outcomes */}
                    <section id="outcomes" className="mb-12 scroll-mt-24 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 rounded-lg p-8 border border-pink-200 dark:border-pink-500/30">
                        <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">Outcomes and Value</h2>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <span className="text-pink-500 text-xl">✓</span>
                                <span className="text-gray-700 dark:text-white/90">Reduced manual effort in interpreting design sketches</span>
                            </li>
                            <li id="faster-turnaround" className="flex items-start gap-3 scroll-mt-24">
                                <span className="text-pink-500 text-xl">✓</span>
                                <span className="text-gray-700 dark:text-white/90">Faster estimation turnaround time - from hours to minutes</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-pink-500 text-xl">✓</span>
                                <span className="text-gray-700 dark:text-white/90">Improved quotation responsiveness</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-pink-500 text-xl">✓</span>
                                <span className="text-gray-700 dark:text-white/90">Practical balance between automation and human validation</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-pink-500 text-xl">✓</span>
                                <span className="text-gray-700 dark:text-white/90">Higher deal conversion rates due to faster response times</span>
                            </li>
                        </ul>
                    </section>

                    {/* Limitations */}
                    <section id="limitations" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">Limitations and Future Work</h2>
                        <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
                            While the system successfully addresses the core problem, several areas remain for future improvement:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4">
                            <li>Limited to rectangular shapes - support for circles, triangles, and irregular polygons needed</li>
                            <li>OCR accuracy varies with handwriting quality and image resolution</li>
                            <li>Complex overlapping geometries not yet supported</li>
                            <li>Requires manual validation step for critical estimations</li>
                            <li>Dimension text must be clearly visible and properly oriented</li>
                            <li>Performance optimization needed for high-resolution images</li>
                        </ul>
                    </section>

                    {/* Conclusion */}
                    <section id="conclusion" className="scroll-mt-24">
                        <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">Conclusion</h2>
                        <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
                            This project demonstrates how computer vision and OCR can be combined with practical domain knowledge to solve real business problems.
                        </p>
                        <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
                            By understanding how humans annotate drawings and encoding that knowledge into the system, we achieved reliable automation without sacrificing accuracy. The orientation-based constraint and distance-based edge association proved to be effective strategies for mapping dimensions to shapes.
                        </p>
                        <p className="text-gray-700 dark:text-white/80 leading-relaxed">
                            The semi-automated approach balances speed with reliability, making it a practical solution for the glass manufacturing industry. The system reduces response time from hours to minutes while maintaining the accuracy needed for commercial quotations.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}
