'use client';
import React from 'react';
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
        <div className="w-full py-6 md:py-10 pt-24 md:pt-32 scroll-mt-20">
            {/* Page Header */}
            {(title || subtitle) && (
                <div className="text-center mb-8 md:mb-12 px-4 md:px-8 lg:px-[12%]">
                    {subtitle && (
                        <h4 className="text-center mb-2 text-base md:text-lg font-Ovo text-gray-600 dark:text-white/80">
                            {subtitle}
                        </h4>
                    )}
                    {title && (
                        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-Ovo text-gray-800 dark:text-white mb-4 md:mb-5">
                            {title}
                        </h1>
                    )}
                    <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-[#b820e6] to-[#da7d20] mx-auto rounded-full"></div>
                    
                    {/* See Demo Link - shown when showDemo prop is true */}
                    {showDemo && (
                        <div className="mt-4 md:mt-6">
                            <a
                                href="#demo"
                                onClick={scrollToDemo}
                                className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-2.5 text-sm md:text-md font-Ovo font-medium bg-gradient-to-r from-[#b820e6] to-[#da7d20] bg-clip-text text-transparent hover:opacity-70 hover:scale-105 transition-all duration-300"
                            >
                                See Demo
                    
                            </a>
                        </div>
                    )}
                </div>
            )}

            {/* Main Layout with Sidebar and Content */}
            <div className="flex flex-col lg:flex-row">
                {/* Table of Contents Sidebar - Hidden on mobile */}
                {tableOfContents.length > 0 && (
                    <div className="hidden lg:block">
                        <ContentTable tableOfContents={tableOfContents} />
                    </div>
                )}

                {/* Content Container - Centered */}
                <div className="flex-1 flex justify-center items-start px-4 md:px-6 lg:px-8 lg:pr-[420px]">
                    <div className={`w-full max-w-4xl bg-white dark:bg-darkTheme border border-gray-200 dark:border-white/20 rounded-lg p-4 sm:p-6 md:p-8 lg:p-12 ${className}`.trim()}>
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
    const combinedClassName = `mb-8 md:mb-12 scroll-mt-24 ${className}`.trim();

    return (
        <section id={id} className={combinedClassName}>
            {title && (
                <h2 className="text-2xl md:text-3xl font-Ovo text-gray-800 dark:text-white mb-4 md:mb-5">
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
    const combinedClassName = `mt-6 md:mt-8 scroll-mt-24 ${className}`.trim();

    return (
        <div id={id} className={combinedClassName}>
            {title && (
                <h3 className="text-lg md:text-xl font-Ovo text-gray-800 dark:text-white mb-2 md:mb-3">
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
    const combinedClassName = `text-lg md:text-xl font-Ovo text-gray-800 dark:text-white mb-2 md:mb-3 ${className}`.trim();

    return (
        <h3 className={combinedClassName}>
            {children}
        </h3>
    );
}

// List Component - Unordered list with consistent styling
// Usage: <List items={['Item 1', 'Item 2', 'Item 3']} />
export function List({ items, className = '' }) {
    const combinedClassName = `list-disc list-inside space-y-1.5 md:space-y-2 text-sm md:text-base text-gray-700 dark:text-white/80 ml-2 md:ml-4 mb-4 md:mb-6 ${className}`.trim();

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
    const containerClassName = `bg-pink-50 dark:bg-pink-900/20 border-l-4 border-pink-500 p-3 md:p-4 rounded-r-lg my-4 md:my-6 ${className}`.trim();
    const headingClassName = 'text-sm md:text-base text-gray-800 dark:text-white font-semibold mb-2';

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
    const containerClassName = `bg-gray-900 dark:bg-gray-800 rounded-lg p-3 md:p-4 border border-gray-700 my-4 md:my-6 overflow-x-auto ${className}`.trim();
    const preClassName = 'text-xs md:text-sm text-gray-100 dark:text-gray-200 font-mono';

    return (
        <div className={containerClassName}>
            <pre className={preClassName}>
                {children}
            </pre>
        </div>
    );
}

// ImageDisplay Component - Smart image display that handles single or multiple images with lightbox functionality
// Single image usage: <ImageDisplay images={[{ src: '/path/to/image.png', title: 'Image Title', description: 'Optional description' }]} />
// Multiple images usage: <ImageDisplay images={[{ src: '/path1.png', title: 'Image 1' }, { src: '/path2.png', title: 'Image 2' }]} />
// With custom columns: <ImageDisplay images={[...]} cols={3} />
export function ImageDisplay({ images = [], cols = 2, className = '' }) {
    const [lightboxOpen, setLightboxOpen] = React.useState(false);
    const [selectedImage, setSelectedImage] = React.useState(null);

    const openLightbox = (image) => {
        setSelectedImage(image);
        setLightboxOpen(true);
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        setSelectedImage(null);
        document.body.style.overflow = 'unset';
    };

    // Close on Escape key
    React.useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && lightboxOpen) {
                closeLightbox();
            }
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [lightboxOpen]);

    // Single image - no grid
    if (images.length === 1) {
        const image = images[0];
        const containerClassName = `bg-gray-100 dark:bg-white/5 rounded-lg p-3 md:p-4 border border-gray-300 dark:border-white/20 my-4 md:my-6 ${className}`.trim();
        
        return (
            <>
                <div className={containerClassName}>
                    {image.src && (
                        <img 
                            src={image.src} 
                            alt={image.title || 'Image'} 
                            className="w-full h-auto rounded-lg mb-3 cursor-pointer hover:opacity-90 transition-opacity"
                            onClick={() => openLightbox(image)}
                        />
                    )}
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

                {/* Lightbox Modal */}
                {lightboxOpen && selectedImage && (
                    <div 
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-2 md:p-4"
                        onClick={closeLightbox}
                    >
                        <div className="relative w-full h-full md:max-w-7xl md:max-h-[90vh] flex items-center justify-center">
                            <img 
                                src={selectedImage.src} 
                                alt={selectedImage.title || 'Image'} 
                                className="max-w-full max-h-full object-contain rounded-lg"
                                onClick={(e) => e.stopPropagation()}
                            />
                            <button
                                onClick={closeLightbox}
                                className="absolute top-2 right-2 md:top-8 md:right-8 w-10 h-10 md:w-auto md:h-auto flex items-center justify-center text-white hover:text-gray-300 text-3xl md:text-4xl font-light transition-colors bg-black/50 md:bg-transparent rounded-full md:rounded-none"
                            >
                                ×
                            </button>
                        </div>
                    </div>
                )}
            </>
        );
    }

    // Multiple images - grid layout
    const gridClassName = `grid grid-cols-1 md:grid-cols-${cols} gap-3 md:gap-4 my-4 md:my-6 ${className}`.trim();
    
    return (
        <>
            <div className={gridClassName}>
                {images.map((image, index) => (
                    <div 
                        key={index}
                        className="bg-gray-100 dark:bg-white/5 rounded-lg p-3 md:p-4 border border-gray-300 dark:border-white/20"
                    >
                        {image.src && (
                            <img 
                                src={image.src} 
                                alt={image.title || `Image ${index + 1}`} 
                                className="w-full h-auto rounded-lg mb-3 cursor-pointer hover:opacity-90 transition-opacity"
                                onClick={() => openLightbox(image)}
                            />
                        )}
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

            {/* Lightbox Modal */}
            {lightboxOpen && selectedImage && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-2 md:p-4"
                    onClick={closeLightbox}
                >
                    <div className="relative w-full h-full md:max-w-7xl md:max-h-[90vh] flex items-center justify-center">
                        <img 
                            src={selectedImage.src} 
                            alt={selectedImage.title || 'Image'} 
                            className="max-w-full max-h-full object-contain rounded-lg"
                            onClick={(e) => e.stopPropagation()}
                        />
                        <button
                            onClick={closeLightbox}
                            className="absolute top-2 right-2 md:top-8 md:right-8 w-10 h-10 md:w-auto md:h-auto flex items-center justify-center text-white hover:text-gray-300 text-3xl md:text-4xl font-light transition-colors bg-black/50 md:bg-transparent rounded-full md:rounded-none"
                        >
                            ×
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

// VideoDisplay Component - Video player with consistent styling and optional poster
// Usage: <VideoDisplay src="/demos/video.mp4" webmSrc="/demos/video.webm" poster="/demos/poster.jpg" description="Demo video" />
// Note: Provide both MP4 (for Safari/iOS) and WebM (for better compression) for maximum compatibility
export function VideoDisplay({ src, webmSrc, poster, title, description, className = '' }) {
    const containerClassName = `mt-6 md:mt-8 bg-gray-100 dark:bg-white/5 rounded-lg p-3 md:p-6 border border-gray-300 dark:border-white/20 ${className}`.trim();

    return (
        <div className={containerClassName}>
            <div className="aspect-video w-full bg-gray-900 dark:bg-black rounded-lg overflow-hidden">
                <video 
                    className="w-full h-full rounded-lg"
                    controls
                    poster={poster}
                    muted={true}
                    playsInline
                >
                    {/* MP4 should come first for better Safari compatibility */}
                    {src && <source src={src} type="video/mp4" />}
                    {webmSrc && <source src={webmSrc} type="video/webm" />}
                    Your browser does not support the video tag.
                </video>
            </div>
            {(title || description) && (
                <div className="mt-3 md:mt-4">
                    {title && (
                        <p className="text-center text-sm md:text-base text-gray-700 dark:text-white/80 font-medium mb-1 md:mb-2">
                            {title}
                        </p>
                    )}
                    {description && (
                        <p className="text-xs md:text-sm text-gray-600 dark:text-white/60 text-center">
                            {description}
                        </p>
                    )}
                </div>
            )}
        </div>
    );
}
