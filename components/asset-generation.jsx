export default function AssetGeneration() {
    return (
        <div className="w-full px-[12%] py-10 pt-32 scroll-mt-20">
            {/* Page Header */}
            <div className="text-center mb-12">
                <h4 className="text-center mb-2 text-lg font-Ovo text-gray-600 dark:text-white/80">Technical Documentation</h4>
                <h1 className="text-center text-5xl font-Ovo text-gray-800 dark:text-white mb-5">AI-Powered Marketing Creatives Platform</h1>
                <div className="w-24 h-1 bg-gradient-to-r from-[#b820e6] to-[#da7d20] mx-auto rounded-full"></div>
            </div>

            {/* Content Container */}
            <div className="max-w-5xl mx-auto bg-white dark:bg-darkTheme border border-gray-200 dark:border-white/20 rounded-lg p-8 md:p-12">
                
                {/* Project Objective */}
                <section className="mb-12">
                    <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">Project Objective</h2>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
                        The objective of this project was to build an AI-powered marketing asset generation system capable of creating personalized digital marketing images for different industries.
                    </p>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed">
                        The core challenge was not just generating images, but ensuring brand consistency, layout correctness, readable text, and industry-appropriate design styles, which most end-to-end image generation models struggle with.
                    </p>
                </section>

                {/* High-Level Architecture */}
                <section className="mb-12">
                    <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">High-Level System Architecture</h2>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
                        The system consists of three primary components:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4 mb-4">
                        <li>React Frontend</li>
                        <li>Django Backend</li>
                        <li>n8n Workflow Engine</li>
                    </ul>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed">
                        Each component was designed with a specific responsibility to support scalability, flexibility, and rapid experimentation.
                    </p>
                </section>

                {/* Frontend */}
                <section className="mb-12">
                    <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">Frontend (React)</h2>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
                        The React frontend was responsible for:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4 mb-4">
                        <li>User authentication and interaction</li>
                        <li>Prompt submission</li>
                        <li>Viewing and downloading generated assets</li>
                    </ul>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed">
                        A key feature of the frontend was a dynamic form rendering system, used both on the admin side and client side.
                    </p>
                </section>

                {/* Backend */}
                <section className="mb-12">
                    <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">Backend (Django)</h2>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
                        The Django backend handled:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4 mb-4">
                        <li>User authentication and JWT token management</li>
                        <li>Multi-tenant support</li>
                        <li>Database management</li>
                        <li>Static file serving</li>
                        <li>Object storage integration</li>
                        <li>API exposure for frontend and n8n communication</li>
                        <li>Orchestration of image generation results</li>
                    </ul>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed">
                        Django acted as the central coordinator, maintaining system state and ensuring consistency across services.
                    </p>
                </section>

                {/* Workflow Orchestration */}
                <section className="mb-12">
                    <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">Workflow Orchestration (n8n)</h2>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
                        n8n was used as a workflow orchestration layer to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4 mb-4">
                        <li>Rapidly prototype and experiment with AI pipelines</li>
                        <li>Handle image generation workflows</li>
                        <li>Manage background tasks</li>
                        <li>Communicate job completion back to Django</li>
                    </ul>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed">
                        n8n received requests from Django, executed AI workflows, saved generated assets to object storage, and notified Django once processing was complete.
                    </p>
                </section>

                {/* Industry-Specific Design Context */}
                <section className="mb-12">
                    <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">Industry-Specific Design Context</h2>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
                        Different industries follow different visual design conventions:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4 mb-4">
                        <li>Food industry assets typically use vibrant colors and bold typography.</li>
                        <li>Real estate assets favor clean layouts and sophisticated typography.</li>
                    </ul>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-3">
                        To generate meaningful marketing assets, the system needed:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4">
                        <li>Structured brand information</li>
                        <li>Industry-specific design context</li>
                        <li>Controlled layout constraints</li>
                    </ul>
                </section>

                {/* Admin Form Builder */}
                <section className="mb-12">
                    <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">Admin-Driven Dynamic Form Builder</h2>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
                        To collect structured brand and campaign data, I built an Admin Form Builder using React.
                    </p>
                    <h3 className="text-xl font-Ovo text-gray-800 dark:text-white mb-3">Features:</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4 mb-4">
                        <li>Pre-built, reusable input components (text, number, dropdown, radio, multi-select, logo upload, brand name, etc.)</li>
                        <li>Step-based form configuration</li>
                        <li>Industry/business-specific form templates</li>
                        <li>Live updates without backend schema changes or redeployment</li>
                    </ul>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed">
                        Admins could configure which fields to collect per industry, and these configurations were stored in the database and rendered dynamically on the client side.
                    </p>
                </section>

                {/* AI Form Summarization */}
                <section className="mb-12">
                    <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">AI-Powered Form Summarization</h2>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
                        An AI summarization agent was implemented to convert structured form inputs into a comprehensive brand description, including:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4 mb-4">
                        <li>Brand identity</li>
                        <li>Target audience</li>
                        <li>Visual preferences</li>
                        <li>Color palette</li>
                        <li>Marketing tone</li>
                    </ul>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed">
                        This generated description was stored in the database and later used as context for image generation, ensuring personalization without repeatedly asking users for the same information.
                    </p>
                </section>

                {/* Design Pivot */}
                <section className="mb-12">
                    <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">Key Design Pivot: From Fully AI-Generated to Layout-Constrained Assets</h2>
                    
                    <div className="mb-5">
                        <h3 className="text-xl font-Ovo text-gray-800 dark:text-white mb-3">Initial Approach</h3>
                        <p className="text-gray-700 dark:text-white/80 leading-relaxed">
                            The initial idea was to let the image generation model handle both layout and content entirely.
                        </p>
                    </div>

                    <div className="mb-5">
                        <h3 className="text-xl font-Ovo text-gray-800 dark:text-white mb-3">Problem Encountered</h3>
                        <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-3">
                            This resulted in:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4">
                            <li>Gibberish or unreadable text</li>
                            <li>Incorrect logo rendering</li>
                            <li>Inconsistent CTA placement</li>
                            <li>Poor brand consistency</li>
                        </ul>
                    </div>

                    <div className="bg-pink-50 dark:bg-pink-900/20 border-l-4 border-pink-500 p-4 rounded-r-lg my-4">
                        <h3 className="text-xl font-Ovo text-gray-800 dark:text-white mb-3">Final Approach (Rigid Layout + Creative AI)</h3>
                        <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-3">
                            After experimentation, I shifted to a hybrid approach:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4">
                            <li>Fixed layout regions for structural elements (Title, CTA, Offer, Brand Logo, Contact Info)</li>
                            <li>AI-driven creativity limited to background visuals, copy text, and color suggestions</li>
                        </ul>
                        <p className="text-gray-700 dark:text-white/80 leading-relaxed mt-3">
                            This significantly improved correctness, readability, and brand alignment.
                        </p>
                    </div>
                </section>

                {/* Image Generation Pipeline */}
                <section className="mb-12">
                    <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">Image Generation & Styling Pipeline</h2>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
                        The asset generation pipeline works as follows:
                    </p>
                    <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-white/80 ml-4">
                        <li>User submits a request (brand context already exists).</li>
                        <li>Django sends brand description + request details to n8n.</li>
                        <li>An AI agent determines background style, generates CTA text, offer text, title, and produces a background prompt.</li>
                        <li>The background image is generated and saved to Supabase Object Storage.</li>
                        <li>Django receives the image path and metadata.</li>
                        <li>The background image is analyzed to extract dominant colors and ensure text contrast and readability.</li>
                        <li>Final layout instructions are generated, including text content, colors, and grid-based positions.</li>
                    </ol>
                </section>

                {/* Grid-Based Layout */}
                <section className="mb-12">
                    <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">Grid-Based Layout Interpretation</h2>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
                        To avoid unreliable pixel-level positioning:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4 mb-4">
                        <li>The image was divided into a 3×3 grid</li>
                        <li>Positions were expressed as semantic labels (e.g., top-left, center-middle, bottom-right)</li>
                    </ul>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-3">
                        This abstraction allowed:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4">
                        <li>AI agents to reason about layout</li>
                        <li>Django to reliably translate positions into coordinates</li>
                        <li>Consistent rendering across assets</li>
                    </ul>
                </section>

                {/* Final Asset Composition */}
                <section className="mb-12">
                    <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">Final Asset Composition</h2>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
                        Using Python scripts, Django:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4">
                        <li>Pulled the generated background image</li>
                        <li>Applied predefined typography and styling</li>
                        <li>Placed text and branding elements according to grid constraints</li>
                        <li>Saved the final asset to object storage</li>
                        <li>Stored metadata in the database</li>
                        <li>Returned the result to the frontend</li>
                    </ul>
                </section>

                {/* User Features */}
                <section className="mb-12">
                    <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">User Features & Platform Completeness</h2>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
                        The platform was implemented end-to-end and included:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4">
                        <li>User signup and login</li>
                        <li>JWT-based authentication</li>
                        <li>Minimal prompt interface with recent generations</li>
                        <li>Gallery view with asset history and downloads</li>
                        <li>User profile management and editable brand details</li>
                        <li>Scheduled cleanup jobs in n8n to manage object storage usage</li>
                    </ul>
                </section>

                {/* Project Summary */}
                <section className="bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 rounded-lg p-8 border border-pink-200 dark:border-pink-500/30">
                    <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">Project Summary</h2>
                    <p className="text-gray-700 dark:text-white/90 leading-relaxed mb-4">
                        This project demonstrates:
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <span className="text-pink-500 text-xl">✓</span>
                            <span className="text-gray-700 dark:text-white/90">Full-stack system design</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-pink-500 text-xl">✓</span>
                            <span className="text-gray-700 dark:text-white/90">Practical AI integration</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-pink-500 text-xl">✓</span>
                            <span className="text-gray-700 dark:text-white/90">Workflow orchestration</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-pink-500 text-xl">✓</span>
                            <span className="text-gray-700 dark:text-white/90">Real-world tradeoffs between automation and control</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-pink-500 text-xl">✓</span>
                            <span className="text-gray-700 dark:text-white/90">End-to-end product thinking</span>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    )
}