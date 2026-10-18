'use client';

// Table Component - Renders tabular data with headers and rows
// Usage: <Table headers={['Header 1', 'Header 2']} rows={[['Row 1 Col 1', 'Row 1 Col 2'], ['Row 2 Col 1', 'Row 2 Col 2']]} />
// Supports JSX inside rows for inline formatting (e.g., <Bold>text</Bold>)
export default function Table({ headers, rows }) {
    const containerClassName = 'my-4 md:my-6 overflow-x-auto';
    const tableClassName = 'min-w-full border-collapse text-sm md:text-base';
    const thClassName = 'text-left text-gray-800 dark:text-white font-semibold bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/20 px-3 py-2 md:px-4 md:py-3';
    const tdClassName = 'border border-gray-300 dark:border-white/20 px-3 py-2 md:px-4 md:py-3';

    return (
        <div className={containerClassName}>
            <table className={tableClassName}>
                <thead>
                    <tr>
                        {headers.map((header, i) => (
                            <th key={i}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
