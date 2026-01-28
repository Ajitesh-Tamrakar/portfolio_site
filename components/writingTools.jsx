'use client';
import ContentTable from './contentTable';

// Document Component - Main wrapper for documentation pages with table of contents
// Usage: <Document tableOfContents={[...]} title="Page Title" subtitle="Optional subtitle" showDemo={true}>Content here</Document>
export function Document({ tableOfContents = [], title, subtitle, showDemo = false, children, className = '' }) {
    const scrollToDemo = (e) => {
        e.preventDefault();
        const demoSection = document.getElementById('demo');
        if (demoSection) {
            demoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="w-full py-10 pt-32 scroll-mt-20">
            {/* Page Header */}
            {(title || subtitle) && (
                <div className="text-center mb-12 px-4 md:px-[12%]">
                    {subtitle && (
                        <h4 className="text-center mb-2 text-lg font-Ovo text-gray-600 dark:text-white/80">
                            {subtitle}
                        </h4>
                    )}
                    {title && (
                        <h1 className="text-center text-5xl font-Ovo text-gray-800 dark:text-white mb-5">
                            {title}
                        </h1>
                    )}
                    <div className="w-24 h-1 bg-gradient-to-r from-[#b820e6] to-[#da7d20] mx-auto rounded-full"></div>
                    
                    {/* See Demo Link - shown when showDemo prop is true */}
                    {showDemo && (
                        <div className="mt-1">
                            <a
                                href="#demo"
                                onClick={scrollToDemo}
                                className="text-gray-700 dark:text-white/80 hover:text-[#b820e6] dark:hover:text-[#da7d20] transition-colors duration-300 text-sm font-Ovo underline decoration-1 underline-offset-4"
                            >
                                See Demo
                            </a>
                        </div>
                    )}
                </div>
            )}

            {/* Main Layout with Sidebar and Content */}
            <div className="flex">
                {/* Table of Contents Sidebar */}
                {tableOfContents.length > 0 && <ContentTable tableOfContents={tableOfContents} />}

                {/* Content Container - Centered */}
                <div className="flex-1 flex justify-center items-start px-4 lg:px-8 lg:pr-[420px]">
                    <div className={`w-full max-w-4xl bg-white dark:bg-darkTheme border border-gray-200 dark:border-white/20 rounded-lg p-8 md:p-12 ${className}`.trim()}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

// Section Component - Main section wrapper (Level 0)
// Usage: <Section id="intro" title="Introduction">Content here</Section>
export function Section({ id, title, children, className = '' }) {
    const combinedClassName = `mb-12 scroll-mt-24 ${className}`.trim();

    return (
        <section id={id} className={combinedClassName}>
            {title && (
                <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">
                    {title}
                </h2>
            )}
            {children}
        </section>
    );
}

// SubSection Component - Subsection wrapper (Level 1)
// Usage: <SubSection id="details" title="Details">Content here</SubSection>
export function SubSection({ id, title, children, className = '' }) {
    const combinedClassName = `mt-8 scroll-mt-24 ${className}`.trim();

    return (
        <div id={id} className={combinedClassName}>
            {title && (
                <h3 className="text-xl font-Ovo text-gray-800 dark:text-white mb-3">
                    {title}
                </h3>
            )}
            {children}
        </div>
    );
}

// Paragraph Component - Text paragraph with consistent styling
// Usage: <Paragraph>Your text content goes here.</Paragraph>
export function Paragraph({ children, className = '' }) {
    const combinedClassName = `text-gray-700 dark:text-white/80 leading-relaxed mb-4 ${className}`.trim();

    return (
        <p className={combinedClassName}>
            {children}
        </p>
    );
}

// Heading Component - H3 heading with consistent styling
// Usage: <Heading>Your Heading Text</Heading>
export function Heading({ children, className = '' }) {
    const combinedClassName = `text-xl font-Ovo text-gray-800 dark:text-white mb-3 ${className}`.trim();

    return (
        <h3 className={combinedClassName}>
            {children}
        </h3>
    );
}

// List Component - Unordered list with consistent styling
// Usage: <List items={['Item 1', 'Item 2', 'Item 3']} />
export function List({ items, className = '' }) {
    const combinedClassName = `list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4 mb-6 ${className}`.trim();

    return (
        <ul className={combinedClassName}>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}

// SubsectionHighlight Component - Highlighted callout box with optional heading
// Usage: <SubsectionHighlight heading="Note:">Important content here</SubsectionHighlight>
// Usage without heading: <SubsectionHighlight>Important content here</SubsectionHighlight>
export function SubsectionHighlight({ heading, children, className = '' }) {
    const containerClassName = `bg-pink-50 dark:bg-pink-900/20 border-l-4 border-pink-500 p-4 rounded-r-lg my-6 ${className}`.trim();
    const headingClassName = 'text-gray-800 dark:text-white font-semibold mb-2';

    return (
        <div className={containerClassName}>
            {heading && (
                <p className={headingClassName}>{heading}</p>
            )}
            {children}
        </div>
    );
}

// Code Component - Code snippet display with syntax highlighting styling
// Usage: <Code>{`const example = 'code here';\nconsole.log(example);`}</Code>
export function Code({ children, className = '' }) {
    const containerClassName = `bg-gray-900 dark:bg-gray-800 rounded-lg p-4 border border-gray-700 my-6 overflow-x-auto ${className}`.trim();
    const preClassName = 'text-sm text-gray-100 dark:text-gray-200 font-mono';

    return (
        <div className={containerClassName}>
            <pre className={preClassName}>
                {children}
            </pre>
        </div>
    );
}

// ImageDisplay Component - Smart image display that handles single or multiple images
// Single image usage: <ImageDisplay images={[{ title: 'Image Title', description: 'Optional description' }]} />
// Multiple images usage: <ImageDisplay images={[{ title: 'Image 1' }, { title: 'Image 2' }]} />
// With custom columns: <ImageDisplay images={[...]} cols={3} />
export function ImageDisplay({ images = [], cols = 2, className = '' }) {
    // Single image - no grid
    if (images.length === 1) {
        const image = images[0];
        const containerClassName = `bg-gray-100 dark:bg-white/5 rounded-lg p-4 border border-gray-300 dark:border-white/20 my-6 ${className}`.trim();
        
        return (
            <div className={containerClassName}>
                {image.title && (
                    <p className="text-center text-gray-700 dark:text-white/80 font-medium">
                        {image.title}
                    </p>
                )}
                {image.description && (
                    <p className="text-center text-sm text-gray-600 dark:text-white/60 mt-2">
                        {image.description}
                    </p>
                )}
            </div>
        );
    }

    // Multiple images - grid layout
    const gridClassName = `grid grid-cols-1 md:grid-cols-${cols} gap-4 my-6 ${className}`.trim();
    
    return (
        <div className={gridClassName}>
            {images.map((image, index) => (
                <div 
                    key={index}
                    className="bg-gray-100 dark:bg-white/5 rounded-lg p-4 border border-gray-300 dark:border-white/20"
                >
                    {image.title && (
                        <p className="text-center text-gray-700 dark:text-white/80 font-medium">
                            {image.title}
                        </p>
                    )}
                    {image.description && (
                        <p className="text-center text-sm text-gray-600 dark:text-white/60 mt-2">
                            {image.description}
                        </p>
                    )}
                </div>
            ))}
        </div>
    );
}
