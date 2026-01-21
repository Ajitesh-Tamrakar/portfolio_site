export default function Services() {
    const services = [
        {
            name: 'Sketch',
            icon: '/assets/web-icon.png',
            description: 'Automated Estimation Generation from Glass Design Images',
            link: '/sketch',
        },
        {
            name: 'Mobile app',
            icon: '/assets/mobile-icon.png',                                                 
            description: 'Web development is the process of building, programming...',
            link: '#',
        },
        {
            name: 'UI/ UX design',
            icon: '/assets/ui-icon.png',
            description: 'Web development is the process of building, programming...',
            link: '#',
        },
        {
            name: 'Graphics design',
            icon: '/assets/graphics-icon.png',
            description: 'Web development is the process of building, programming...',
            link: '#',
        }
    ];
    return (
        <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">What i offer</h4>
            <h2 className="text-center text-5xl font-Ovo">My services</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">I am a frontend developer from California, USA with 10 years of experience in multiple companies like Microsoft, Tesla and Apple.</p>

            <div className="grid grid-cols-auto gap-6 my-10">
                {services.map((service) => (
                    <div key={service.name} className="bg-white dark:bg-[#1a0a2e] rounded-lg overflow-hidden border border-gray-300 dark:border-white/30 hover:shadow-black cursor-pointer hover:-translate-y-1 duration-500 dark:hover:shadow-white transition-all">
                        {/* Gradient Header with Icon */}
                        <div className="w-full h-48 bg-gradient-to-br from-pink-200 to-purple-200 dark:from-pink-900/40 dark:to-purple-900/40 flex items-center justify-center">
                            <div className="w-16 h-16 bg-pink-500 dark:bg-pink-600 rounded-full flex items-center justify-center">
                                <img src={service.icon} alt="" className="w-8 h-8 object-contain" />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <h3 className="text-lg mb-3 text-gray-700 dark:text-white font-Ovo">{service.name}</h3>
                            <p className="text-sm text-gray-600 leading-5 dark:text-white/80 mb-5">{service.description}</p>
                            
                            <div className="flex items-center justify-between">
                                <a href={service.link} className="inline-flex items-center gap-2 text-sm text-gray-700 dark:text-white hover:text-pink-500 dark:hover:text-pink-400 transition-colors group">
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
                                </a>
                                
                                <a href={service.link} className="inline-flex items-center gap-2 text-sm text-gray-700 dark:text-white hover:text-pink-500 dark:hover:text-pink-400 transition-colors group">
                                    <img src="/assets/github-icon.png" alt="" className="w-5 dark:hidden group-hover:scale-110 transition-transform" />
                                    <img src="/assets/github-icon-dark.png" alt="" className="w-5 hidden dark:block group-hover:scale-110 transition-transform" />
                                    Repo
                                    <img src="/assets/arrow-icon.png" alt="" className="w-2 dark:hidden group-hover:translate-x-1 transition-transform" />
                                    <img src="/assets/arrow-icon-dark.png" alt="" className="w-2 hidden dark:block group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}