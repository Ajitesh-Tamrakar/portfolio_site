export default function Work() {
    const skills = {
        languages: ['English', 'Hindi'],
        programming: ['Python', 'HTML', 'CSS', 'JavaScript'],
        technologies: ['Git', 'GitHub', 'Linux','N8N',],
        technical: ['Data Structures and Algorithms', 'Data Preprocessing', 'Data Analysis'],
        soft: ['Time Management and Organization', 'Adaptability', 'Problem Solving'],
        frameworks: ['Django', 'React', 'Flask']
    };

    return (
        <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
            {/* Skills Section */}
            <h4 className="text-center mb-2 text-lg font-Ovo">What I know</h4>
            <h2 className="text-center text-5xl font-Ovo">My Skills</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">Here’s a snapshot of the technologies and tools I’ve used across internships and personal projects while building applied AI and full-stack systems.
</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
                {/* Languages Card */}
                <div className="bg-white dark:bg-darkTheme border border-gray-200 dark:border-white/20 rounded-lg p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white font-Ovo">Languages</h3>
                    <div className="flex flex-wrap gap-2">
                        {skills.languages.map((skill) => (
                            <span key={skill} className="px-4 py-2 bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-white/90 rounded-full text-sm">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Programming Languages Card */}
                <div className="bg-white dark:bg-darkTheme border border-gray-200 dark:border-white/20 rounded-lg p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white font-Ovo">Programming Languages</h3>
                    <div className="flex flex-wrap gap-2">
                        {skills.programming.map((skill) => (
                            <span key={skill} className="px-4 py-2 bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-white/90 rounded-full text-sm">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Tool*/}
                <div className="bg-white dark:bg-darkTheme border border-gray-200 dark:border-white/20 rounded-lg p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white font-Ovo">Tools</h3>
                    <div className="flex flex-wrap gap-2">
                        {skills.technologies.map((skill) => (
                            <span key={skill} className="px-4 py-2 bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-white/90 rounded-full text-sm">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Technical Skills Card */}
                <div className="bg-white dark:bg-darkTheme border border-gray-200 dark:border-white/20 rounded-lg p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white font-Ovo">Technical Skills</h3>
                    <div className="flex flex-wrap gap-2">
                        {skills.technical.map((skill) => (
                            <span key={skill} className="px-4 py-2 bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-white/90 rounded-full text-sm">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
                {/* Framework Card */}
                <div className="bg-white dark:bg-darkTheme border border-gray-200 dark:border-white/20 rounded-lg p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white font-Ovo">Frameworks</h3>
                    <div className="flex flex-wrap gap-2">
                        {skills.frameworks.map((skill) => (
                            <span key={skill} className="px-4 py-2 bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-white/90 rounded-full text-sm">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Soft Skills Card */}
                <div className="bg-white dark:bg-darkTheme border border-gray-200 dark:border-white/20 rounded-lg p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white font-Ovo">Soft Skills</h3>
                    <div className="flex flex-wrap gap-2">
                        {skills.soft.map((skill) => (
                            <span key={skill} className="px-4 py-2 bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-white/90 rounded-full text-sm">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}