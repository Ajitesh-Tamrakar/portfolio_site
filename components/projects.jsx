"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Projects() {
    const router = useRouter();
    
    const services = [
        {
            name: 'Sketch',
            image: '/thumbnails/sketch.jpg', // Add your project image path here
            description: 'Automated Estimation Generation from Glass Design Images',
            link: '/sketch',
            repoLink: '', // Add GitHub repo URL here if available
        },
        {
            name: 'AI-Powered Marketing Creatives',
            image: '/demos/assetGeneration/homePage.png',                                                 
            description: 'Web development is the process of building, programming...',
            link: '/asset-generation',
            repoLink: '', // Add GitHub repo URL here if available
        },
        {
            name: 'Object Detection',
            image: '/thumbnails/object_detection.jpg', // Add your project image path here
            description: 'Web development is the process of building, programming...',
            link: '/object-detection',
            repoLink: 'https://github.com/Ajitesh-Tamrakar/Object_detection_YOLOV5.git', // Add GitHub repo URL here if available
        },
        {
            name: 'Web Accountancy',
            image: '/thumbnails/accountancy-preview..png', // Add your project image path here
            description: 'Web development is the process of building, programming...',
            link: '/accountancy',
            repoLink: 'https://github.com/Ajitesh-Tamrakar/jbb_projects.git', // Add GitHub repo URL here if available
        }
    ];
    return (
        <div id="projects" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">From Concept to Code</h4>
            <h2 className="text-center text-5xl font-Ovo">Projects I Designed & Built</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">These projects represent my journey in applied AI and full-stack development — from object detection systems to accounting workflow automation. Each one was built to learn deeply and solve meaningful problems.</p>

            <div className="grid grid-cols-auto gap-6 my-10">
                {services.map((service) => (
                    <div 
                        key={service.name} 
                        onClick={() => router.push(service.link)}
                        className="bg-white dark:bg-[#1a0a2e] rounded-lg overflow-hidden border border-gray-300 dark:border-white/30 hover:shadow-black cursor-pointer hover:-translate-y-1 duration-500 dark:hover:shadow-white transition-all"
                    >
                        {/* Project Image */}
                        <div className="w-full h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
                            <img 
                                src={service.image} 
                                alt={service.name} 
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <h3 className="text-lg mb-3 text-gray-700 dark:text-white font-Ovo">{service.name}</h3>
                            <p className="text-sm text-gray-600 leading-5 dark:text-white/80 mb-5">{service.description}</p>
                            
                            <div className="flex items-center justify-between">
                                <span className="inline-flex items-center gap-2 text-sm text-gray-700 dark:text-white hover:text-pink-500 dark:hover:text-pink-400 transition-colors group">
                                    Read more 
                                    <svg 
                                        width="14" 
                                        height="14" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        strokeWidth="2" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round"
                                        className="group-hover:translate-x-1 transition-transform"
                                    >
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </span>
                                
                                {service.repoLink && (
                                    <a 
                                        href={service.repoLink} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        onClick={(e) => e.stopPropagation()}
                                        className="inline-flex items-center gap-2 text-sm text-gray-700 dark:text-white hover:text-pink-500 dark:hover:text-pink-400 transition-colors group"
                                    >
                                        <img src="/assets/github-icon.png" alt="" className="w-5 dark:hidden group-hover:scale-110 transition-transform" />
                                        <img src="/assets/github-icon-dark.png" alt="" className="w-5 hidden dark:block group-hover:scale-110 transition-transform" />
                                        Repo
                                        <img src="/assets/arrow-icon.png" alt="" className="w-2 dark:hidden group-hover:translate-x-1 transition-transform" />
                                        <img src="/assets/arrow-icon-dark.png" alt="" className="w-2 hidden dark:block group-hover:translate-x-1 transition-transform" />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}