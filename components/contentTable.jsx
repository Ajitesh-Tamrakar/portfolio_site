'use client';
import { useState, useEffect } from 'react';

export default function ContentTable({ tableOfContents }) {
    const [activeSection, setActiveSection] = useState('');

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
    }, [tableOfContents]);

    return (
        <aside className="hidden lg:block w-[420px] flex-shrink-0 pl-8">
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
    );
}
