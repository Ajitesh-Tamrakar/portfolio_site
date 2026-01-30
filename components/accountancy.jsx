import {
  Document,
  Section,
  SubSection,
  Paragraph,
  List,
  Code,
  SubsectionHighlight,
  ImageDisplay,
} from "./writingTools";

export default function ObjectDetection() {
  const tableOfContents = [
    { id: "introduction", label: "Introduction", level: 0 },
    {
      id: "real-world-problem",
      label: "The Real-World Problem in Small Businesses",
      level: 1,
    },
    {
      id: "solution-approach",
      label: "Solution Approach: Keep It Simple, Make It Useful",
      level: 1,
    },
    { id: "architecture", label: "Core System Architecture", level: 0 },
    {
      id: "database-design",
      label: "Database Design & Model Relationships",
      level: 1,
    },
    {
      id: "business-workflow",
      label: "Business Workflow & Features",
      level: 0,
    },
    { id: "bill-management", label: "Digital Bill Management", level: 1 },
    { id: "ledger-system", label: "Dealer & Ledger System", level: 1 },
    { id: "daily-tracking", label: "Daily Collection Tracking", level: 1 },
    { id: "dashboard", label: "Dashboard & Business Insights", level: 1 },
    { id: "filtering", label: "Filtering, Records & Usability", level: 1 },
    { id: "security", label: "Security Gaps & Improvements", level: 0 },
    { id: "learnings", label: "What I Learned from Building This", level: 0 },
    { id: "future", label: "Future Improvements", level: 0 },
  ];

  return (
    <Document
      tableOfContents={tableOfContents}
      title="Accounting System for Small Businesses"
      subtitle="Technical Documentation"
    >
      {/* Introduction */}
      <Section id="introduction" title="Introduction">
        <SubSection
          id="real-world-problem"
          title="The Real-World Problem in Small Businesses"
        >
          <Paragraph>
            Many small businesses still manage their accounts manually using
            physical registers and paper bills. Every purchase, payment, and
            collection is written down by hand. While this system works, it
            comes with several limitations:
          </Paragraph>
          <List
            items={[
              "Bills are difficult to search later",
              "Ledgers are prone to human error",
              "Revenue trends are hard to visualize",
              "Inventory decisions rely on flipping through past records",
              "Data is not accessible remotely",
            ]}
          />
          <Paragraph>
            Most full-scale accounting software expects users to enter detailed
            item-level data for every bill. However, small shop owners often do
            not have the time, digital literacy, or operational need to input
            that level of detail. Their primary concern is simple:
          </Paragraph>
          <List
            items={[
              "Who gave the bill?",
              "On what date?",
              "What was the total amount?",
              "How much money was collected today?",
            ]}
          />
          <Paragraph>
            The gap was clear — existing systems were either too manual or too
            complex.
          </Paragraph>
        </SubSection>

        <SubSection
          id="solution-approach"
          title="Solution Approach: Keep It Simple, Make It Useful"
        >
          <Paragraph>
            Instead of building a heavy accounting system, this project focused
            on simplifying what small businesses already do.
          </Paragraph>
          <Paragraph>
            The idea was not to change their workflow — but to digitize it.
          </Paragraph>
          <Paragraph>
            Rather than forcing item-wise bill entry, the system allows users
            to:
          </Paragraph>
          <List
            items={[
              "Upload a photo of the bill",
              "Enter dealer name, date, and total amount",
              "Automatically maintain a digital ledger",
              "Track daily collections divided into Cash, UPI, and Card",
              "Access all past bills remotely",
            ]}
          />
          <Paragraph>
            This keeps the process familiar while removing friction. The shop
            owner still works the way they are used to — but now:
          </Paragraph>
          <List
            items={[
              "Bills are searchable",
              "Ledgers are auto-calculated",
              "Revenue trends can be visualized",
              "Records are stored safely online",
            ]}
          />
          <Paragraph>
            This project was my first attempt at solving a real-world problem
            while learning web technologies. The primary goal was hands-on
            learning, but the direction was practical: build something simple
            enough for small businesses to actually use.
          </Paragraph>
        </SubSection>
      </Section>

      {/* Core System Architecture */}
      <Section id="architecture" title="Core System Architecture">
        <Paragraph>
          The system is built using Django's MVT (Model–View–Template)
          architecture, structured to keep business logic, data handling, and
          presentation clearly separated.
        </Paragraph>
        <Paragraph>
          At the outer layer, the <strong>client (browser)</strong> interacts
          with the application through HTTP requests. These requests are routed
          via urls.py, which maps each endpoint to a specific view function
          inside the accountancy app.
        </Paragraph>
        <Paragraph>
          The <strong>View layer</strong> acts as the execution core. Each view
          handles request validation, processes business logic, performs
          database queries using Django ORM, and prepares structured responses.
          For example, when a user uploads a bill, the view extracts form data,
          validates it, stores the image, and creates the corresponding database
          record. When accessing the dashboard, the view aggregates
          transactional data and computes balances dynamically.
        </Paragraph>
        <Paragraph>
          The <strong>Model layer</strong> defines the system's data structure.
          Instead of writing raw SQL, Django ORM abstracts database operations
          into Python objects. This improves readability, maintainability, and
          reduces the risk of query-level errors.
        </Paragraph>
        <Paragraph>
          At the persistence level, the application uses a{" "}
          <strong>PostgreSQL database hosted on AWS RDS</strong>, ensuring
          reliable storage, transactional integrity, and production-level
          database management.
        </Paragraph>
        <Paragraph>Data flows in a predictable cycle:</Paragraph>
        <Code>
          {`Client → URL Routing → View Logic → ORM → Database → Template Response`}
        </Code>
        <Paragraph>
          This layered architecture keeps responsibilities isolated. Business
          logic remains in views, data structure in models, and presentation in
          templates. The result is a maintainable, scalable system that supports
          small-business ledger operations without architectural complexity.
        </Paragraph>

        <SubSection
          id="database-design"
          title="Database Design & Model Relationships"
        >
          <Paragraph>
            The accounting system is built around a simple but intentional
            relational structure. Instead of designing a complex ERP-style
            schema, the database focuses on clarity, traceability, and practical
            ledger logic.
          </Paragraph>
          <Paragraph>
            At the center of the system is the <strong>Dealers</strong> model.
            This acts as the parent entity representing suppliers or business
            parties. Every financial interaction is tied back to a dealer,
            making it the anchor point of the ledger system.
          </Paragraph>
          <Paragraph>
            From this core entity, two dependent models extend outward:{" "}
            <strong>Bills</strong> and <strong>Payments</strong>. The
            relationship is one-to-many — a single dealer can have multiple
            bills and multiple payments over time. This separation is
            deliberate. Bills represent obligations (what the business owes),
            while Payments represent settlements. By keeping them independent,
            the system preserves full transaction history and maintains
            auditability.
          </Paragraph>
          <Paragraph>
            The ledger logic emerges directly from this structure:
          </Paragraph>
          <Code>{`Outstanding Balance = Σ(Bills) − Σ(Payments)`}</Code>
          <ImageDisplay images={[{src: '/demos/accountancy/relationalER.png'}]}></ImageDisplay>
          <Paragraph>
            Because both models reference the same dealer via foreign keys,
            calculating balances becomes a structured aggregation rather than
            manual bookkeeping.
          </Paragraph>
          <Paragraph>
            Two additional models remain independent.{" "}
            <strong>DailyMoneyInputs</strong> tracks overall daily collections
            (cash, UPI, cards) with a unique date constraint to prevent
            duplicate entries. This reflects real-world daily revenue recording
            rather than dealer-specific transactions. <strong>Tasklist</strong>{" "}
            functions separately for operational reminders and does not
            interfere with financial data.
          </Paragraph>
          <ImageDisplay images={[{src: '/demos/accountancy/independentER.png'}]}></ImageDisplay>
          <Paragraph>
            Cascade deletion ensures referential integrity — if a dealer is
            removed, all associated bills and payments are automatically cleaned
            up, preventing orphaned records.
          </Paragraph>
          <Paragraph>
            Overall, the database design favors clarity over complexity. Each
            table has a focused responsibility, relationships are intentional,
            and the structure directly supports how small businesses naturally
            think about money: bills, payments, and balances.
          </Paragraph>
        </SubSection>
      </Section>

      {/* Business Workflow & Features */}
      <Section id="business-workflow" title="Business Workflow & Features">
        <Paragraph>
          This system mirrors how a small business actually operates throughout
          the day — but digitizes each step without increasing complexity.
        </Paragraph>

        <SubSection id="bill-management" title="Digital Bill Management">
          <Paragraph>
            Bills are uploaded as images rather than manually entering line-item
            details. Each bill record stores the image, dealer reference
            (foreign key), bill date, and amount. Once submitted, the backend
            validates inputs, stores the file using Django's ImageField, and
            creates a database entry linked to the selected dealer.
          </Paragraph>
          <Paragraph>
            This transforms physical bill folders into a searchable digital
            repository. Users can filter by dealer, amount, or date range, and
            preview images using a lightbox interface. The business value is
            practical: instant retrieval, GST reference tracking, automatic
            outstanding updates, and zero dependency on physical storage.
          </Paragraph>
        </SubSection>

        <SubSection id="ledger-system" title="Dealer & Ledger System">
          <Paragraph>
            The ledger system is built around a central <strong>Dealers</strong>{" "}
            model. Each dealer connects to two transaction streams:{" "}
            <strong>Bills</strong> (money owed) and <strong>Payments</strong>{" "}
            (money settled).
          </Paragraph>
          <Paragraph>Outstanding logic follows:</Paragraph>
          <Code>
            {`Outstanding = Σ(Bills) − Σ(Payments) + Opening Balance`}
          </Code>
          <Paragraph>
            Ledger entries are merged into a unified timeline and sorted
            chronologically. Running balance logic recalculates the outstanding
            amount dynamically. This structure ensures transparency,
            auditability, and easy reconciliation while maintaining complete
            transaction history.
          </Paragraph>
          <Paragraph>
            The Records page also highlights top outstanding dealers using
            aggregation queries, helping prioritize payments strategically.
          </Paragraph>

          <ImageDisplay images={[{src: '/demos/accountancy/ledger.png', title: 'Legder view'}]}></ImageDisplay>
        </SubSection>

        <SubSection
          id="daily-tracking"
          title="Daily Collection Tracking (Cash, UPI, Cards)"
        >
          <Paragraph>
            Daily revenue is recorded through a single unified form. The model
            enforces a unique date constraint and automatically calculates:
          </Paragraph>
          <Code>{`in_total = UPI + Cash + Cards`}</Code>
          <Paragraph>
            Validation ensures numeric accuracy and prevents duplicate entries.
            This simplifies multi-channel revenue tracking and enables daily,
            weekly, and monthly aggregation for trend analysis.
          </Paragraph>
          <ImageDisplay images={[ {src:'/demos/accountancy/dailyinput.png', title: 'Daily input'}]}></ImageDisplay>
        </SubSection>

        <SubSection id="dashboard" title="Dashboard & Business Insights">
          <Paragraph>The dashboard consolidates operational KPIs:</Paragraph>
          <List
            items={[
              "Today's collection",
              "Estimated profit (20% margin logic)",
              "Bills received today",
              "Total outstanding across dealers",
            ]}
          />
          <Paragraph>
            Time-based aggregations (daily, weekly, monthly) are generated using
            ORM functions like TruncWeek and TruncMonth. A task management
            widget operates via lightweight API endpoints (GET, POST, PATCH,
            DELETE), enabling real-time operational tracking.
          </Paragraph>
          <Paragraph>
            The dashboard acts as a decision layer — not just a reporting page.
          </Paragraph>

          <ImageDisplay images={[{src:"/demos/accountancy/dashboard.png", title: 'Dashboard page'}, {src: '/demos/accountancy/saletrends.png', title:'Sales trend'},]}></ImageDisplay>
        </SubSection>

        <SubSection id="filtering" title="Filtering, Records & Usability">
          <Paragraph>
            Advanced filtering is implemented via django-filters, enabling
            precise queries without complex SQL. Combined filters allow
            multi-criteria searches (dealer + date + amount).
          </Paragraph>
          <Paragraph>
            UI decisions focus on workflow efficiency: modal forms prevent page
            reloads, responsive layouts adapt across devices, and inline quick
            actions reduce navigation friction.
          </Paragraph>
          <Paragraph>
            Overall, the workflow is intentionally structured: Capture → Store →
            Calculate → Visualize → Decide.
          </Paragraph>
          <ImageDisplay images={[{src: '/demos/accoutancy_preview.png', title: 'Records page'}]}></ImageDisplay>
        </SubSection>
      </Section>

      {/* Security Gaps & Improvements */}
      <Section id="security" title="Security Gaps & Improvements">
        <Paragraph>
          The current system prioritizes functionality and learning over
          production-grade security. Authentication is limited to Django Admin,
          while core routes such as /dashboard/, /records/, and /ledger-view/
          are publicly accessible. This introduces clear access-control risks.
        </Paragraph>
        <Paragraph>
          There is no role-based authorization, meaning sensitive financial data
          could be viewed without restriction. Additionally, file uploads (bill
          images) rely on basic validation and do not enforce strict MIME-type
          or size constraints beyond default handling.
        </Paragraph>
        <Paragraph>Improvements would include:</Paragraph>
        <List
          items={[
            "Applying @login_required to all financial routes",
            "Introducing role-based access control (owner vs staff)",
            "Adding stricter file validation and size limits",
            "Enabling HTTPS enforcement and secure cookie settings",
            "Adding audit logs for financial record changes",
          ]}
        />
        <Paragraph>
          These changes would transition the system from learning-grade to
          production-ready.
        </Paragraph>
      </Section>

      {/* What I Learned */}
      <Section id="learnings" title="What I Learned from Building This">
        <Paragraph>
          This project moved beyond CRUD development into structured business
          logic design. I learned how to:
        </Paragraph>
        <List
          items={[
            "Design relational models with meaningful foreign key constraints",
            "Implement aggregation queries using Django ORM (Sum, annotate)",
            "Build running-balance ledger systems",
            "Structure daily → weekly → monthly time-based analytics",
            "Separate transactional logic from visualization layers",
          ]}
        />
        <Paragraph>
          More importantly, I understood that accounting systems are not about
          complex UI — they are about consistency, correctness, and data
          relationships.
        </Paragraph>
        <Paragraph>
          It also exposed trade-offs between simplicity for users and
          architectural scalability.
        </Paragraph>
      </Section>

      {/* Future Improvements */}
      <Section id="future" title="Future Improvements">
        <Paragraph>Several enhancements would strengthen the system:</Paragraph>
        <List
          items={[
            "Authentication & multi-user support",
            "Indexing on date fields for faster filtering",
            "Caching outstanding calculations",
            "Configurable profit margins instead of fixed 20%",
            "Export capabilities (CSV/PDF reports)",
            "Automated GST summaries",
            "REST API layer for mobile integration",
          ]}
        />
        <Paragraph>
          Long term, the system could evolve into a lightweight accounting SaaS
          tailored specifically for small businesses that prefer minimal data
          entry but still need structured financial visibility.
        </Paragraph>
        <Paragraph>
          This project marked the shift from "building features" to "designing
          systems."
        </Paragraph>
      </Section>
    </Document>
  );
}
