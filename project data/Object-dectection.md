**1\. Introduction** 

**1.1 The Real-World Problem in Small Businesses** 

Many small businesses still manage their accounts manually using physical registers and paper bills. Every purchase, payment, and collection is written down by hand. While this system works, it comes with several limitations: 

* Bills are difficult to search later   
* Ledgers are prone to human error   
* Revenue trends are hard to visualize   
* Inventory decisions rely on flipping through past records   
* Data is not accessible remotely 

Most full-scale accounting software expects users to enter detailed item-level data for every bill. However, small shop owners often do not have the time, digital literacy, or operational need to input that level of detail. Their primary concern is simple: 

* Who gave the bill?   
* On what date?   
* What was the total amount?   
* How much money was collected today? 

The gap was clear — existing systems were either too manual or too complex. 

 

**1.2 Solution Approach: Keep It Simple, Make It Useful** 

Instead of building a heavy accounting system, this project focused on simplifying what small businesses already do. 

The idea was not to change their workflow — but to digitize it. 

Rather than forcing item-wise bill entry, the system allows users to: 

* Upload a photo of the bill   
* Enter dealer name, date, and total amount   
* Automatically maintain a digital ledger   
* Track daily collections divided into Cash, UPI, and Card   
* Access all past bills remotely 

This keeps the process familiar while removing friction. The shop owner still works the way they are used to — but now: 

* Bills are searchable   
* Ledgers are auto-calculated   
* Revenue trends can be visualized   
* Records are stored safely online 

This project was my first attempt at solving a real-world problem while learning web technologies. The primary goal was hands-on learning, but the direction was practical: build something simple enough for small businesses to actually use. 

**2\. Core System Architecture** 

The system is built using Django’s MVT (Model–View–Template) architecture, structured to keep business logic, data handling, and presentation clearly separated. 

At the outer layer, the **client (browser)** interacts with the application through HTTP requests. These requests are routed via urls.py, which maps each endpoint to a specific view function inside the accountancy app. 

The **View layer** acts as the execution core. Each view handles request validation, processes business logic, performs database queries using Django ORM, and prepares structured responses. For example, when a user uploads a bill, the view extracts form data, validates it, stores the image, and creates the corresponding database record. When accessing the dashboard, the view aggregates transactional data and computes balances dynamically. 

The **Model layer** defines the system’s data structure. Instead of writing raw SQL, Django ORM abstracts database operations into Python objects. This improves readability, maintainability, and reduces the risk of query-level errors. 

At the persistence level, the application uses a **PostgreSQL database hosted on AWS RDS**, ensuring reliable storage, transactional integrity, and production-level database management. 

Data flows in a predictable cycle: 

**Client → URL Routing → View Logic → ORM → Database → Template Response** 

This layered architecture keeps responsibilities isolated. Business logic remains in views, data structure in models, and presentation in templates. The result is a maintainable, scalable system that supports small-business ledger operations without architectural complexity. 

**Database Design & Model Relationships** 

The accounting system is built around a simple but intentional relational structure. Instead of designing a complex ERP-style schema, the database focuses on clarity, traceability, and practical ledger logic. 

At the center of the system is the **Dealers** model. This acts as the parent entity representing suppliers or business parties. Every financial interaction is tied back to a dealer, making it the anchor point of the ledger system. 

From this core entity, two dependent models extend outward: **Bills** and **Payments**. The relationship is one-to-many — a single dealer can have multiple bills and multiple payments over time. This separation is deliberate. Bills represent obligations (what the business owes), while Payments represent settlements. By keeping them independent, the system preserves full transaction history and maintains auditability. 

The ledger logic emerges directly from this structure: 

**Outstanding Balance \= Σ(Bills) − Σ(Payments)** 

Because both models reference the same dealer via foreign keys, calculating balances becomes a structured aggregation rather than manual bookkeeping. 

Two additional models remain independent. **DailyMoneyInputs** tracks overall daily collections (cash, UPI, cards) with a unique date constraint to prevent duplicate entries. This reflects real-world daily revenue recording rather than dealer-specific transactions. **Tasklist** functions separately for operational reminders and does not interfere with financial data. 

Cascade deletion ensures referential integrity — if a dealer is removed, all associated bills and payments are automatically cleaned up, preventing orphaned records. 

Overall, the database design favors clarity over complexity. Each table has a focused responsibility, relationships are intentional, and the structure directly supports how small businesses naturally think about money: bills, payments, and balances. 

**Business Workflow & Features** 

This system mirrors how a small business actually operates throughout the day — but digitizes each step without increasing complexity. 

 

**3.1 Digital Bill Management** 

Bills are uploaded as images rather than manually entering line-item details. Each bill record stores the image, dealer reference (foreign key), bill date, and amount. Once submitted, the backend validates inputs, stores the file using Django’s ImageField, and creates a database entry linked to the selected dealer. 

This transforms physical bill folders into a searchable digital repository. Users can filter by dealer, amount, or date range, and preview images using a lightbox interface. The business value is practical: instant retrieval, GST reference tracking, automatic outstanding updates, and zero dependency on physical storage. 

 

**3.2 Dealer & Ledger System** 

The ledger system is built around a central **Dealers** model. Each dealer connects to two transaction streams: **Bills** (money owed) and **Payments** (money settled). 

Outstanding logic follows: 

**Outstanding \= Σ(Bills) − Σ(Payments) \+ Opening Balance** 

Ledger entries are merged into a unified timeline and sorted chronologically. Running balance logic recalculates the outstanding amount dynamically. This structure ensures transparency, auditability, and easy reconciliation while maintaining complete transaction history. 

The Records page also highlights top outstanding dealers using aggregation queries, helping prioritize payments strategically. 

 

**3.3 Daily Collection Tracking (Cash, UPI, Cards)** 

Daily revenue is recorded through a single unified form. The model enforces a unique date constraint and automatically calculates: 

**in\_total \= UPI \+ Cash \+ Cards** 

Validation ensures numeric accuracy and prevents duplicate entries. This simplifies multi-channel revenue tracking and enables daily, weekly, and monthly aggregation for trend analysis. 

 

**3.4 Dashboard & Business Insights** 

The dashboard consolidates operational KPIs: 

* Today’s collection   
* Estimated profit (20% margin logic)   
* Bills received today   
* Total outstanding across dealers 

Time-based aggregations (daily, weekly, monthly) are generated using ORM functions like TruncWeek and TruncMonth. A task management widget operates via lightweight API endpoints (GET, POST, PATCH, DELETE), enabling real-time operational tracking. 

The dashboard acts as a decision layer — not just a reporting page. 

 

**3.5 Filtering, Records & Usability** 

Advanced filtering is implemented via django-filters, enabling precise queries without complex SQL. Combined filters allow multi-criteria searches (dealer \+ date \+ amount). 

UI decisions focus on workflow efficiency: modal forms prevent page reloads, responsive layouts adapt across devices, and inline quick actions reduce navigation friction. 

Overall, the workflow is intentionally structured:   
Capture → Store → Calculate → Visualize → Decide. 

**Security Gaps & Improvements** 

The current system prioritizes functionality and learning over production-grade security. Authentication is limited to Django Admin, while core routes such as /dashboard/, /records/, and /ledger-view/ are publicly accessible. This introduces clear access-control risks. 

There is no role-based authorization, meaning sensitive financial data could be viewed without restriction. Additionally, file uploads (bill images) rely on basic validation and do not enforce strict MIME-type or size constraints beyond default handling. 

Improvements would include: 

* Applying @login\_required to all financial routes   
* Introducing role-based access control (owner vs staff)   
* Adding stricter file validation and size limits   
* Enabling HTTPS enforcement and secure cookie settings   
* Adding audit logs for financial record changes 

These changes would transition the system from learning-grade to production-ready. 

 

**What I Learned from Building This** 

This project moved beyond CRUD development into structured business logic design. I learned how to: 

* Design relational models with meaningful foreign key constraints   
* Implement aggregation queries using Django ORM (Sum, annotate)   
* Build running-balance ledger systems   
* Structure daily → weekly → monthly time-based analytics   
* Separate transactional logic from visualization layers 

More importantly, I understood that accounting systems are not about complex UI — they are about consistency, correctness, and data relationships. 

It also exposed trade-offs between simplicity for users and architectural scalability. 

 

**Future Improvements** 

Several enhancements would strengthen the system: 

* Authentication & multi-user support   
* Indexing on date fields for faster filtering   
* Caching outstanding calculations   
* Configurable profit margins instead of fixed 20%   
* Export capabilities (CSV/PDF reports)   
* Automated GST summaries   
* REST API layer for mobile integration 

Long term, the system could evolve into a lightweight accounting SaaS tailored specifically for small businesses that prefer minimal data entry but still need structured financial visibility. 

This project marked the shift from “building features” to “designing systems.” 

 

