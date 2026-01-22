export default function Accountancy() {
    return (
        <div className="w-full px-[12%] py-10 pt-32 scroll-mt-20">
            {/* Page Header */}
            <div className="text-center mb-12">
                <h4 className="text-center mb-2 text-lg font-Ovo text-gray-600 dark:text-white/80">Technical Documentation</h4>
                <h1 className="text-center text-5xl font-Ovo text-gray-800 dark:text-white mb-5">Business Accounting System with Django</h1>
                <div className="w-24 h-1 bg-gradient-to-r from-[#b820e6] to-[#da7d20] mx-auto rounded-full"></div>
            </div>

            {/* Content Container */}
            <div className="max-w-5xl mx-auto bg-white dark:bg-darkTheme border border-gray-200 dark:border-white/20 rounded-lg p-8 md:p-12">
                
                {/* Introduction Section */}
                <section className="mb-12">
                    <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">Introduction</h2>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
                        Accounting for small businesses is rarely complex — but it is messy.
                    </p>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
                        Daily collections come from multiple payment modes, bills arrive as images, dealer balances are tracked mentally or in notebooks, and understanding who owes what often requires manual calculations at the end of the day.
                    </p>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed">
                        This project, <strong>JBB Projects</strong>, was built to solve exactly that problem: to create a single system where daily money, bills, payments, dealer ledgers, and business insights live together in one place.
                    </p>
                </section>

                {/* The Problem */}
                <section className="mb-12">
                    <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">The Problem This Project Solves</h2>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
                        Most small businesses face the same operational issues:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4 mb-4">
                        <li>Daily income is split across cash, UPI, and cards</li>
                        <li>Bills arrive as physical images</li>
                        <li>Payments are made irregularly</li>
                        <li>Dealer balances are calculated manually</li>
                        <li>Business insights are guessed, not measured</li>
                    </ul>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-3">
                        The goal was not to build enterprise accounting software.
                    </p>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed">
                        The goal was simpler: <em>Build a system that reflects how small businesses actually work — and make financial visibility effortless.</em>
                    </p>
                </section>

                {/* What the System Does */}
                <section className="mb-12">
                    <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">What the System Does</h2>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
                        JBB Projects is a business accounting and management system that allows users to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4 mb-4">
                        <li>Record daily collections</li>
                        <li>Manage dealers and suppliers</li>
                        <li>Upload bill images</li>
                        <li>Track payments</li>
                        <li>View dealer-wise ledgers</li>
                        <li>Calculate outstanding balances</li>
                        <li>Visualize business performance through dashboards</li>
                        <li>Maintain daily operational tasks</li>
                    </ul>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed">
                        Everything is built around clarity, traceability, and simplicity.
                    </p>
                </section>

                {/* Design Philosophy */}
                <section className="mb-12">
                    <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">Design Philosophy</h2>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
                        Three principles guided the design:
                    </p>
                    <div className="bg-gray-100 dark:bg-white/10 rounded-lg p-6 border border-gray-300 dark:border-white/20">
                        <ul className="space-y-3">
                            <li className="text-gray-700 dark:text-white/90">
                                <strong>1.</strong> Data should be structured, not scattered
                            </li>
                            <li className="text-gray-700 dark:text-white/90">
                                <strong>2.</strong> Every number should be traceable
                            </li>
                            <li className="text-gray-700 dark:text-white/90">
                                <strong>3.</strong> Insights should come from real data, not assumptions
                            </li>
                        </ul>
                    </div>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed mt-4">
                        Instead of complex accounting rules, the system relies on clear relationships and transparent calculations.
                    </p>
                </section>

                {/* Core Data Model */}
                <section className="mb-12">
                    <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">Core Data Model: Keeping It Simple</h2>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
                        At the heart of the system are five core entities:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4 mb-4">
                        <li><strong>DailyMoneyInputs</strong> – tracks daily income by payment mode</li>
                        <li><strong>Dealers</strong> – stores supplier/party information</li>
                        <li><strong>Bills</strong> – stores bill images and amounts</li>
                        <li><strong>Payments</strong> – records payments made to dealers</li>
                        <li><strong>Tasklist</strong> – tracks daily operational tasks</li>
                    </ul>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
                        Each model mirrors a real business object, not a technical abstraction.
                    </p>
                    <div className="bg-pink-50 dark:bg-pink-900/20 border-l-4 border-pink-500 p-4 rounded-r-lg my-4">
                        <p className="text-gray-800 dark:text-white font-semibold mb-2">Key Design Decision</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4">
                            <li>Bills increase outstanding balance</li>
                            <li>Payments decrease outstanding balance</li>
                            <li>Dealer ledgers are calculated, not manually stored</li>
                        </ul>
                        <p className="text-gray-700 dark:text-white/80 leading-relaxed mt-3">
                            This avoids data duplication and keeps logic centralized.
                        </p>
                    </div>
                </section>

                {/* Daily Collection Tracking */}
                <section className="mb-12">
                    <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">Daily Collection Tracking</h2>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
                        The system allows only one collection entry per day.
                    </p>
                    <h3 className="text-xl font-Ovo text-gray-800 dark:text-white mb-3">This design choice:</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4 mb-4">
                        <li>Prevents duplicate records</li>
                        <li>Enforces data discipline</li>
                        <li>Makes trend analysis reliable</li>
                    </ul>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-3">
                        Each day's total is automatically calculated from:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4 mb-4">
                        <li>UPI</li>
                        <li>Cash</li>
                        <li>Card transactions</li>
                    </ul>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-3">
                        This single number becomes the foundation for:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4">
                        <li>Profit estimation</li>
                        <li>Dashboard analytics</li>
                        <li>Historical trends</li>
                    </ul>
                </section>

                {/* Dealer & Ledger Management */}
                <section className="mb-12">
                    <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">Dealer & Ledger Management</h2>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
                        Dealers are treated as long-term financial relationships, not just names in a list.
                    </p>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-3">
                        For each dealer, the system tracks:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4 mb-4">
                        <li>Opening balance</li>
                        <li>Bills received</li>
                        <li>Payments made</li>
                        <li>Current outstanding amount</li>
                    </ul>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
                        The ledger view combines bills and payments into a single chronological timeline, showing how balances evolve over time.
                    </p>
                    <div className="bg-gray-100 dark:bg-white/10 rounded-lg p-6 border border-gray-300 dark:border-white/20">
                        <p className="text-center text-gray-700 dark:text-white/90 font-medium">
                            Outstanding = Total Bills − Total Payments
                        </p>
                    </div>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed mt-4">
                        Instead of storing balances directly, the system calculates them using this formula. This guarantees correctness even if historical entries are updated.
                    </p>
                </section>

                {/* Bills as Images */}
                <section className="mb-12">
                    <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">Bills as Images, Not Just Numbers</h2>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
                        In real businesses, bills are not spreadsheets — they are photos.
                    </p>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-3">
                        This system supports:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4 mb-4">
                        <li>Uploading bill images</li>
                        <li>Associating them with dealers</li>
                        <li>Storing dates and amounts</li>
                        <li>Browsing bills in a gallery view</li>
                    </ul>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed">
                        This makes auditing and verification simple: numbers always link back to visual proof.
                    </p>
                </section>

                {/* Payments & Reconciliation */}
                <section className="mb-12">
                    <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">Payments & Reconciliation</h2>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
                        Payments are recorded independently of bills.
                    </p>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-3">
                        This allows:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4 mb-4">
                        <li>Partial payments</li>
                        <li>Multiple payment methods</li>
                        <li>Flexible reconciliation</li>
                    </ul>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed">
                        By separating bills and payments, the system avoids rigid accounting constraints while still maintaining accuracy.
                    </p>
                </section>

                {/* Dashboard */}
                <section className="mb-12">
                    <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">Dashboard: Turning Data into Insight</h2>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
                        The dashboard is designed for quick understanding, not accounting expertise.
                    </p>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-3">
                        It shows:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4 mb-4">
                        <li>Today's collection</li>
                        <li>Estimated profit</li>
                        <li>Bills received today</li>
                        <li>Outstanding balances</li>
                        <li>Daily, weekly, and monthly trends</li>
                    </ul>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed">
                        All charts are generated from real transaction data, using database-level aggregations instead of hardcoded logic.
                    </p>
                </section>

                {/* Task Management */}
                <section className="mb-12">
                    <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">Task Management for Daily Operations</h2>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
                        Accounting doesn't exist in isolation.
                    </p>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-3">
                        The built-in task list helps track:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4 mb-4">
                        <li>Follow-ups</li>
                        <li>Payment reminders</li>
                        <li>Operational to-dos</li>
                    </ul>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed">
                        It is intentionally lightweight — just enough to support daily workflow without becoming a project management tool.
                    </p>
                </section>

                {/* Filtering & Search */}
                <section className="mb-12">
                    <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">Filtering & Search: Finding What Matters</h2>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
                        As data grows, finding information quickly becomes critical.
                    </p>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-3">
                        The records page supports:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4 mb-4">
                        <li>Dealer-based filtering</li>
                        <li>Amount-based filtering</li>
                        <li>Date range filtering</li>
                        <li>Real-time search</li>
                    </ul>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed">
                        This allows users to move from summary to detail in seconds.
                    </p>
                </section>

                {/* Architecture & Technology */}
                <section className="mb-12">
                    <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">Architecture & Technology Choices</h2>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
                        The system is built using:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4 mb-4">
                        <li><strong>Django</strong> for backend logic</li>
                        <li><strong>PostgreSQL</strong> for reliable data storage</li>
                        <li><strong>Server-side rendering</strong> for simplicity</li>
                        <li><strong>Vanilla JavaScript</strong> for interactivity</li>
                    </ul>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
                        The focus was stability and clarity, not frontend complexity.
                    </p>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed">
                        The project is structured to be cloud-ready, with deployment planned on AWS infrastructure.
                    </p>
                </section>

                {/* Security & Production */}
                <section className="mb-12">
                    <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">Security & Production Reality</h2>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
                        The current version prioritizes functionality and clarity.
                    </p>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-3">
                        Some production features are intentionally deferred:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4 mb-4">
                        <li>Role-based authentication</li>
                        <li>Environment-based secrets</li>
                        <li>Audit logging</li>
                    </ul>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed">
                        These are acknowledged trade-offs, not oversights.
                    </p>
                </section>

                {/* What This Taught Me */}
                <section className="mb-12">
                    <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">What This Project Taught Me</h2>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed mb-4">
                        This project reinforced several real-world lessons:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-white/80 ml-4 mb-4">
                        <li>Good accounting software is about trust, not features</li>
                        <li>Simpler data models scale better</li>
                        <li>Calculated values are safer than stored values</li>
                        <li>Business logic must mirror real workflows</li>
                        <li>Dashboards should explain, not impress</li>
                    </ul>
                    <p className="text-gray-700 dark:text-white/80 leading-relaxed">
                        Most importantly, it showed how backend design directly affects business usability.
                    </p>
                </section>

                {/* Final Thoughts */}
                <section className="bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 rounded-lg p-8 border border-pink-200 dark:border-pink-500/30">
                    <h2 className="text-3xl font-Ovo text-gray-800 dark:text-white mb-5">Final Thoughts</h2>
                    <p className="text-gray-700 dark:text-white/90 leading-relaxed mb-4">
                        JBB Projects is not just a CRUD application.
                    </p>
                    <p className="text-gray-700 dark:text-white/90 leading-relaxed mb-4">
                        It is a practical accounting system built around:
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <span className="text-pink-500 text-xl">✓</span>
                            <span className="text-gray-700 dark:text-white/90">Real business problems</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-pink-500 text-xl">✓</span>
                            <span className="text-gray-700 dark:text-white/90">Transparent financial logic</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-pink-500 text-xl">✓</span>
                            <span className="text-gray-700 dark:text-white/90">Maintainable architecture</span>
                        </li>
                    </ul>
                    <p className="text-gray-700 dark:text-white/90 leading-relaxed mt-5">
                        The real success of this project is not in the number of features — it's in how clearly it models everyday business operations.
                    </p>
                </section>
            </div>
        </div>
    )
}