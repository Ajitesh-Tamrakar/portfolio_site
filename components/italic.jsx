'use client';

// Italic Component - Inline italic text wrapper for documentation
// Usage: <Italic>Emphasized text</Italic>
export default function Italic({ children, className = '' }) {
    const combinedClassName = `italic text-gray-700 dark:text-white/80 ${className}`.trim();
    return <i className={combinedClassName}>{children}</i>;
}
