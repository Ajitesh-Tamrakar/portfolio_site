'use client';

// Bold Component - Inline bold text wrapper for documentation
// Usage: <Bold>Emphasized text</Bold>
export default function Bold({ children, className = '' }) {
    const combinedClassName = `font-bold text-gray-900 dark:text-white ${className}`.trim();
    return <b className={combinedClassName}>{children}</b>;
}
