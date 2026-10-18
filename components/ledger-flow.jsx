'use client';
import {
  Document,
  Section,
  SubSection,
  Paragraph,
  List,
  Code,
  SubsectionHighlight,
  Heading,
  ImageDisplay,
  VideoDisplay
} from "./writingTools";
import Table from "./table";
import Bold from "./bold";
import Italic from "./italic";

export default function LedgerFlow() {
  const tableOfContents = [
    { id: "introduction", label: "1. Introduction", level: 0 },
    { id: "purpose", label: "  1.1 Purpose", level: 1 },
    { id: "target-users", label: "  1.2 Target users and design goal", level: 1 },
    { id: "scope", label: "  1.3 Scope", level: 1 },
    { id: "feature-summary", label: "  1.4 Feature summary and tech stack", level: 1 },
    { id: "requirements", label: "2. Requirements", level: 0 },
    { id: "functional-requirements", label: "  2.1 Functional requirements", level: 1 },
    { id: "non-functional-requirements", label: "  2.2 Non-functional requirements", level: 1 },
    { id: "system-architecture", label: "3. System Architecture", level: 0 },
    { id: "high-level-architecture", label: "  3.1 High-level architecture", level: 1 },
    { id: "backend-layers", label: "  3.2 Backend layers", level: 1 },
    { id: "repository-structure", label: "  3.3 Repository structure", level: 1 },
    { id: "request-lifecycle", label: "  3.4 Request lifecycle", level: 1 },
    { id: "data-design", label: "4. Data Design", level: 0 },
    { id: "entity-model", label: "  4.1 Entity model", level: 1 },
    { id: "relationships-constraints", label: "  4.2 Relationships and constraints", level: 1 },
    { id: "computed-values", label: "  4.3 Computed values", level: 1 },
    { id: "audit-history", label: "  4.4 Audit history", level: 1 },
    { id: "backend-design", label: "5. Backend Design", level: 0 },
    { id: "api-conventions", label: "  5.1 API conventions", level: 1 },
    { id: "tenant-isolation", label: "  5.2 Tenant isolation", level: 1 },
    { id: "validation-strategy", label: "  5.3 Validation strategy", level: 1 },
    { id: "bill-file-handling", label: "  5.4 Bill file handling", level: 1 },
    { id: "computed-endpoints", label: "  5.5 Computed endpoints", level: 1 },
    { id: "authentication-security", label: "6. Authentication and Security", level: 0 },
    { id: "registration-email-verification", label: "  6.1 Registration and email verification", level: 1 },
    { id: "otp-engine", label: "  6.2 The OTP engine", level: 1 },
    { id: "session-handling", label: "  6.3 Session handling", level: 1 },
    { id: "security-model", label: "  6.4 Security model", level: 1 },
    { id: "frontend-design", label: "7. Frontend Design", level: 0 },
    { id: "structure", label: "  7.1 Structure", level: 1 },
    { id: "api-layer", label: "  7.2 The API layer", level: 1 },
    { id: "state-data-fetching", label: "  7.3 State and data fetching", level: 1 },
    { id: "charts", label: "  7.4 Charts", level: 1 },
    { id: "key-workflows", label: "8. Key Workflows", level: 0 },
    { id: "record-payment", label: "  8.1 Record a payment", level: 1 },
    { id: "upload-bill-photos", label: "  8.2 Upload a bill from photos", level: 1 },
    { id: "save-cashbook", label: "  8.3 Save a day's cashbook", level: 1 },
    { id: "load-dashboard", label: "  8.4 Load the dashboard", level: 1 },
    { id: "design-decisions", label: "9. Design Decisions", level: 0 },
    { id: "testing-quality", label: "10. Testing and Quality", level: 0 },
    { id: "strategy", label: "  10.1 Strategy", level: 1 },
    { id: "coverage-by-area", label: "  10.2 Coverage by area", level: 1 },
    { id: "gaps", label: "  10.3 Gaps", level: 1 },
    { id: "setup-operations", label: "11. Setup and Operations", level: 0 },
    { id: "local-setup", label: "  11.1 Local setup", level: 1 },
    { id: "configuration", label: "  11.2 Configuration", level: 1 },
    { id: "deployment-status", label: "  11.3 Deployment status", level: 1 },
    { id: "limitations-roadmap", label: "12. Limitations and Roadmap", level: 0 },
    { id: "known-limitations", label: "  12.1 Known limitations", level: 1 },
    { id: "scalability-notes", label: "  12.2 Scalability notes", level: 1 },
    { id: "planned-work", label: "  12.3 Planned work", level: 1 },
    { id: "appendix", label: "Appendix", level: 0 },
    { id: "api-reference", label: "  A. API reference", level: 1 },
    { id: "glossary", label: "  B. Glossary", level: 1 },
    { id: "environment-dependencies", label: "  C. Environment and dependency list", level: 1 },
    { id: "verification-list", label: "REMOVE BEFORE PUBLISHING: Verification list", level: 0 },
  ];

  return (
    <Document
      tableOfContents={tableOfContents}
      title="LedgerFlow"
      subtitle="Technical Documentation"
    >
      {/* 1. Introduction */}
      <Section id="introduction" title="1. Introduction">

        <SubSection id="purpose" title="1.1 Purpose">
          <Paragraph>
            A small retail shop runs its day to day on credit. Goods come in on supplier bills; goods go out to walk-in customers and dealers on account; money arrives later, in cash, UPI (a mobile payment rail in India), cards, or cheques. In a paper ledger, the shop owner keeps the running balance of every relationship on a single page and re-derives it by hand after every entry. LedgerFlow exists to hold those same figures — dealers, bills, payments, and the daily cashbook — in one place, with the arithmetic done by the system.
          </Paragraph>
        </SubSection>

        <SubSection id="target-users" title="1.2 Target users and design goal">
          <Paragraph>
            The single target user is the retail shop owner, working from a phone or a desktop browser, usually in short sessions between customers. The design goal that shapes most of the system is that <Bold>entry should be no slower than a paper ledger</Bold>: one screen per transaction type, a few fields, no file required, no approval step. Where the paper ledger had a page per dealer, the system computes the balance; where it had a daily column, the cashbook supplies the row.
          </Paragraph>
        </SubSection>

        <SubSection id="scope" title="1.3 Scope">
          <Paragraph>
            The system does five things, each tied to a page in the app:
          </Paragraph>
          <Paragraph><Bold>Dealers</Bold> — a per-business register of counterparties, each with an opening balance, an optional GSTIN (India's goods-and-services-tax identifier), and an active/retired flag.</Paragraph>
          <Paragraph><Bold>Bills</Bold> — dated purchase records, each bound to a dealer and an amount, carrying a file: a PDF the owner already has, or photos the system compiles into one PDF.</Paragraph>
          <Paragraph><Bold>Payments</Bold> — dated collections, each bound to a dealer, an amount, and a method (cash, UPI, card, cheque, bank transfer).</Paragraph>
          <Paragraph><Bold>Cashbook</Bold> — one row per day with amounts by collection method; the day's total is derived.</Paragraph>
          <Paragraph><Bold>Dashboard</Bold> — computed views of the above: outstanding balances per dealer, collection trend, net cash flow, purchasing activity, plus a task list.</Paragraph>
          <Paragraph>
            It deliberately does not do invoicing, inventory, or itemized billing. A bill is a record of money and a file, not a line-item document; a payment is not linked to the specific bills it settles. There is no product catalog, no purchase-order workflow, and no tax reporting. The audit trail (see section 4.4) covers corrections to existing rows, not business events.
          </Paragraph>
        </SubSection>

        <SubSection id="feature-summary" title="1.4 Feature summary and tech stack">
          <Table
            headers={['Feature', 'What it covers', 'Backend', 'Frontend']}
            rows={[
              ['Accounts', 'Email-and-password registration with one-time-code (OTP) email verification, login, rotating token sessions, password change and code-based reset', 'Django 5.2, DRF, dj-rest-auth, allauth, simplejwt (blacklist)', 'React 19 pages: Login, Register, ForgotPassword, Settings'],
              ['Tenant isolation', 'Every business-owned resource scoped to the caller\'s business', '`BusinessScopedViewSet` / `BusinessScopedMixin` in `accountancy/api/base.py`', 'Nothing to do — scoping is invisible to the client'],
              ['Dealers', 'Register, search, opening balance, active/retired; computed outstanding balance', '`DealerViewSet`, `DealerSerializer`', 'Dealers page with browser-side search and paging'],
              ['Bills', 'PDF or photo upload compiled to PDF, date, dealer, amount; corrections via PATCH', '`BillViewSet`, `BillSerializer`, Pillow', 'Bills page, multipart upload, in-browser PDF viewer'],
              ['Payments', 'Date, dealer, amount, method; corrections via PATCH', '`PaymentViewSet`, `PaymentSerializer`', 'Payments page, side panel entry'],
              ['Cashbook', 'One row per day (UPI, cash, card), total as a database-generated column', '`CashbookByDateView` (PUT upsert by date)', 'Cashbook page and dashboard card'],
              ['Dashboard', 'Computed summary tray, collection trend, recent bills, tasks', '`DashboardSummaryView`, `CollectionTrendView`, `BillPurchasesView`', 'Dashboard page, hand-built SVG charts'],
              ['Storage', 'Bill PDFs on local disk, read back through an authenticated endpoint', 'Django file storage, `FileResponse`', 'Object URLs from authenticated fetches'],
            ]}
          />
          <Paragraph>
            The stack in one line: <Bold>Django 5.2.4 with Django REST Framework 3.16.0 and SQLite</Bold> for the API; <Bold>React 19 with Vite and React Router 7</Bold> for the app; Pillow for image-to-PDF compilation; django-simple-history for the audit trail. The backend is API-only in the sense that it renders no application templates of its own — it serves the built React app (via WhiteNoise) and the Django admin, and everything else is JSON.
          </Paragraph>
        </SubSection>
      </Section>

      {/* 2. Requirements */}
      <Section id="requirements" title="2. Requirements">

        <SubSection id="functional-requirements" title="2.1 Functional requirements">
          <Paragraph>
            The functional requirements map one-to-one onto the pages and endpoints:
          </Paragraph>
          <Paragraph><Bold>Accounts.</Bold> A person registers with a business name, an email, and a password; the email must be verified with a one-time code before login is possible. The owner can change the password (with the current password as the gate) and can reset it by code when signed out.</Paragraph>
          <Paragraph><Bold>Dealers.</Bold> Create, search, and correct dealers; set or change an opening balance (the balance the dealer was owed or credited with when the ledger started); retire and reactivate. The outstanding balance of each dealer is shown and is always computed, never entered.</Paragraph>
          <Paragraph><Bold>Bills.</Bold> Record a purchase: dealer, date, amount, and a file (a PDF, or photos compiled into one). Correct any of those later; replace the file. Never delete — a wrong bill is edited.</Paragraph>
          <Paragraph><Bold>Payments.</Bold> Record a collection: dealer, date, amount, method. Correct later. Never delete.</Paragraph>
          <Paragraph><Bold>Cashbook.</Bold> Enter a day's collections by method. Saving the same day again replaces that day's row rather than adding a second one; deleting a day's row is allowed.</Paragraph>
          <Paragraph><Bold>Dashboard.</Bold> Show, for the selected week, month, or quarter: cash collected so far this period and its pace against the same stretch of the previous period; net cash flow (collected minus paid); purchasing activity (bills and payments in the period); outstanding balances per dealer as of today (independent of the selected period); and a collection-trend series.</Paragraph>
          <Paragraph><Bold>Tasks.</Bold> A private to-do list per business: add, toggle done, delete.</Paragraph>
        </SubSection>

        <SubSection id="non-functional-requirements" title="2.2 Non-functional requirements">
          <Paragraph><Bold>Tenant isolation.</Bold> A tenant is a `Business` and everything it owns. The requirement is that one owner can never read, modify, or even confirm the existence of another tenant's data. This is the strongest requirement in the system and the one most of the backend design serves (section 5.2).</Paragraph>
          <Paragraph><Bold>Data integrity.</Bold> Money must never suffer floating-point error, so all amounts are `Decimal` (a fixed-point decimal type) end to end, from the database column through the JSON wire (serialized as strings). Structural rules — non-negative amounts, one cashbook row per day per business, unique dealer names per business — exist at the database level, so data written outside the API (admin, scripts, migrations) cannot corrupt the ledger.</Paragraph>
          <Paragraph><Bold>Auditability.</Bold> Financial rows keep a version history: every create, change, and delete is captured in a mirror table with the acting user and a timestamp (an audit trail, implemented by django-simple-history; section 4.4).</Paragraph>
          <Paragraph><Bold>Low entry effort.</Bold> Entry screens follow the paper-ledger shape: a few fields, one submit, the list updates in place without a refetch. No step should require a file the owner does not have.</Paragraph>
          <Paragraph><Bold>Security.</Bold> Credentials use one-time codes by email rather than links; sessions use short-lived access tokens and rotating, blacklisted refresh tokens; the public endpoints are rate-limited and answer identically whether or not an account exists (section 6).</Paragraph>
        </SubSection>
      </Section>

      {/* 3. System Architecture */}
      <Section id="system-architecture" title="3. System Architecture">

        <SubSection id="high-level-architecture" title="3.1 High-level architecture">
          <Paragraph>
            One browser application talks to one JSON API, which owns one database file and one directory of uploaded files. The React app is a single-page application (SPA): it loads once and the client-side router (`BrowserRouter` in `frontend/src/App.jsx`) switches pages without further server document loads. In a deployment build, the same Django process that serves the API also serves the built app — the Vite build's asset base is `/static/` in production mode (`frontend/vite.config.js`), the built files are collected into Django's static root and served by WhiteNoise, and a catch-all route (`spa_index` in `jbb_projects/views.py`) returns `index.html` for any non-API path. In local development the two run as separate processes: the Vite dev server on port 5173 and the Django dev server on port 8000, with the browser talking to both.
          </Paragraph>
          <Paragraph>
            Uploaded bill PDFs live in a directory on the same machine (`MEDIA_ROOT`, under a `DATA_DIR` that defaults to the repository root and is overridable by the `DJANGO_DATA_DIR` environment variable). The database is a SQLite file in the same `DATA_DIR`. File and database therefore have identical durability properties: both survive a process restart, both are lost if the disk is lost.
          </Paragraph>
        </SubSection>

        <SubSection id="backend-layers" title="3.2 Backend layers">
          <Paragraph>
            A request passes through four layers, in this order (top to bottom as code is read):
          </Paragraph>
          <Paragraph><Bold>URL routing.</Bold> `jbb_projects/urls.py` mounts the Django admin, the dj-rest-auth auth routes under `/api/auth/`, the project's OTP routes under `/api/auth/otp/`, the business API under `/api/` (from `accountancy/api/urls.py`), the public media path `/bill_imgs/`, and finally the SPA catch-all, which must stay last. `accountancy/api/urls.py` registers the four plain resources (`dealers`, `tasks`, `bills`, `payments`) on a DRF router and hand-routes the computed and by-date endpoints (`business/`, `cashbook/`, `cashbook/by-date/&lt;date&gt;/`, `collection-trend/`, `dashboard-summary/`, `bills/purchases/` — the last must sit before the router so the router's detail pattern cannot swallow the word `purchases` as an id).</Paragraph>
          <Paragraph><Bold>Views</Bold> (`accountancy/api/views.py` plus `base.py`). Plain resources use `BusinessScopedViewSet`; the summaries, the business singleton, and the cashbook views use the mixin plus a plain DRF class view. Views own the query (including the balance annotation) and the computed endpoints' arithmetic.</Paragraph>
          <Paragraph><Bold>Serializers</Bold> (`accountancy/api/serializers.py`). Declare the wire format, validate input, and carry the file-handling logic for bills. Serializers receive the caller's business in their context from the base class (section 5.2).</Paragraph>
          <Paragraph><Bold>Models</Bold> (`accountancy/models.py`). Django ORM models with `Decimal` money fields, `CHECK` constraints, and simple-history tracking. The models contain no business logic beyond the generated cashbook total.</Paragraph>
          <Paragraph>
            A serializer is the object that translates between HTTP and a model row — it validates incoming data, enforces field-level rules, and renders outgoing data.
          </Paragraph>
        </SubSection>

        <SubSection id="repository-structure" title="3.3 Repository structure">
          <Code>{`LedgerFlow/
├── jbb_projects/            Django project
│   ├── settings.py          all configuration: JWT, OTP, CORS, email, DRF
│   ├── urls.py              admin, /api/auth/, /api/, /bill_imgs/, SPA catch-all
│   └── views.py             spa_index (serves built app) + serve_media
├── accountancy/             the single app; everything lives here
│   ├── models.py            Business, Dealer, Bill, Payment, Cashbook, Task, OTPCode
│   ├── migrations/          5 migrations, incl. a temporary default-business bootstrap
│   ├── api/
│   │   ├── base.py          HasBusiness, BusinessScopedMixin, BusinessScopedViewSet
│   │   ├── views.py         the 4 viewsets + 6 custom/computed views
│   │   ├── serializers.py   all serializers, bill file handling
│   │   ├── urls.py          router + hand-routes + DateConverter
│   │   ├── filters.py       django-filter FilterSets (search, date ranges, method)
│   │   └── converters.py    <date> URL segment → datetime.date
│   ├── auth_views.py        4 public OTP endpoints (verify-email, password ×3)
│   ├── auth_serializers.py  registration, verification, reset serializers
│   ├── otp.py               the one-time-code engine
│   ├── adapter.py           CodeEmailAdapter (link → code swap)
│   ├── tests.py             the whole API test suite (87 tests)
│   └── templates/.../otp_code.txt   the one email template
├── frontend/                Vite + React app
│   ├── src/api/             one module per resource + config, tokenRefresh, auth (apiRequest)
│   ├── src/pages/           Login, Register, ForgotPassword, Dashboard, Payments, Cashbook, Dealers, Bills, Settings
│   ├── src/components/      Card, DataTable, DateField, DealerPicker, FormField, Navbar, ...
│   ├── src/lib/             format.js, errors.js, cashbook.js (pure helpers)
│   └── vite.config.js       production base /static/ for the single-container build
├── scripts/seed_dummy_data.py  dev seed: ~700 API calls, Jan 2025 → today
├── requirements.txt         pinned Python dependencies
├── Dockerfile               two-stage: node build → python runtime
└── uploads/                 bill PDFs (gitignored in a clean checkout)`}</Code>
        </SubSection>

        <SubSection id="request-lifecycle" title="3.4 Request lifecycle">
          <Paragraph>
            What happens to one authenticated request, say `GET /api/dealers/?search=acme` with a bearer token:
          </Paragraph>
          <Paragraph>The middleware stack runs (CORS first, then security, WhiteNoise, session, common, CSRF, authentication, allauth — in the order in `settings.py`).</Paragraph>
          <Paragraph>DRF's authentication layer validates the `Authorization: Bearer &lt;access&gt;` header via simplejwt, including a blacklist check; this sets `request.user`. Invalid or absent token → `401` before any view code runs (the project-wide default permission is `IsAuthenticated`).</Paragraph>
          <Paragraph>`HasBusiness` (in `accountancy/api/base.py`) rejects an authenticated user whose account has no `Business` — for example a superuser created with `createsuperuser`, which bypasses registration — with `403` and the message "This account is not linked to a business."</Paragraph>
          <Paragraph>The view's `get_queryset()` filters every query by `business=request.user.business` (section 5.2). The dealer list view then annotates each row with its computed outstanding balance, and the `DealerFilter` applies `?search=` (name or GSTIN, case-insensitive) inside that scope.</Paragraph>
          <Paragraph>The serializer renders each row: stored fields plus the read-only `outstanding_balance`, with money as two-decimal strings.</Paragraph>
          <Paragraph>The response is paginated — 50 per page, envelope `&#123;count, next, previous, results&#125;` — and the browser merges pages as it follows `next`.</Paragraph>
        </SubSection>
      </Section>

      {/* 4. Data Design */}
      <Section id="data-design" title="4. Data Design">

        <SubSection id="entity-model" title="4.1 Entity model">
          <Paragraph>
            The domain has five models plus two support models, all in `accountancy/models.py`:
          </Paragraph>
          <Paragraph><Bold>`Business`</Bold> — one per owner. Fields: `name` (100 chars), `owner` (one-to-one to the user, `PROTECT`), timestamps, history. It is the tenant and the single foreign key every business-owned row carries.</Paragraph>
          <Paragraph><Bold>`Dealer`</Bold> — a counterparty. Fields: `name` (unique per business), `gstin` (nullable, 15 chars), `opening_balance` (Decimal 10,2), `is_active`, `business` (cascade), timestamps, history.</Paragraph>
          <Paragraph><Bold>`Bill`</Bold> — a dated purchase. Fields: `image` (a file under `bill_images/`), `pages` (the page count of a compiled PDF; null for a dropped-in PDF, which the server cannot count without a PDF-reader dependency it deliberately avoids), `date`, `dealer` (`PROTECT`), `business` (cascade), `amount` (Decimal 10,2), timestamps, history. Indexed on `(business, dealer, date)`.</Paragraph>
          <Paragraph><Bold>`Payment`</Bold> — a dated collection. Fields: `dealer` (`PROTECT`), `business`, `date`, `amount` (Decimal 10,2), `method` (choice: cash, UPI, card, cheque, bank transfer), timestamps, history. Indexed on `(business, dealer, date)`.</Paragraph>
          <Paragraph><Bold>`Cashbook`</Bold> — one row per day. Fields: `upi`, `cash`, `cards` (each Decimal 10,2), `date`, `total` (a database-generated column: `upi + cash + cards`), `business`, timestamps, history.</Paragraph>
          <Paragraph><Bold>`Task`</Bold> — a private to-do item: `title` (500 chars, blank at the model level), `created_at` (date), `is_done`, `business`. The only domain model without history.</Paragraph>
          <Paragraph><Bold>`OTPCode`</Bold> — auth support, not domain. Fields: `email`, `code_hash` (64 chars), `purpose` (`verify_email` or `password_reset`), `created_at`, `expires_at`, `attempt_count`, `consumed_at`. Indexed on `(email, purpose)`. It has no history deliberately — it is transient and non-financial.</Paragraph>
          <Paragraph>
            In addition, allauth contributes an `EmailAddress` model (the verified flag gates login), simplejwt contributes `OutstandingToken`/`BlacklistedToken` (the token blacklist), and simple-history contributes one mirror table per versioned model: `HistoricalBusiness`, `HistoricalDealer`, `HistoricalBill`, `HistoricalPayment`, `HistoricalCashbook`.
          </Paragraph>
        </SubSection>

        <SubSection id="relationships-constraints" title="4.2 Relationships and constraints">
          <Table
            headers={['Constraint', 'Where', 'What it enforces']}
            rows={[
              ['`Business.owner` one-to-one, `PROTECT`', 'models', 'one business per account; the business cannot be deleted while it exists'],
              ['`unique_dealer_name_per_business`', 'Dealer', 'two businesses may both have an "Acme"; one business may not'],
              ['`Bill.dealer` / `Payment.dealer`, `PROTECT`', 'models', 'a dealer with bills or payments cannot be deleted (no API path deletes dealers anyway)'],
              ['`*`, `business` cascade', 'all business-owned models', 'deleting a business (not possible via the API) would remove its data'],
              ['`bill_amount_gte_0`, `payment_amount_gte_0`', 'CHECK constraints', 'non-negative money, even for rows written outside the API'],
              ['`payment_method_valid`', 'CHECK constraint', 'method must be one of the five values; the value list is duplicated from the `Method` choices class because `Meta` cannot see it'],
              ['`unique_cashbook_date_per_business`', 'Cashbook', 'one row per day per business — the basis of the idempotent PUT'],
              ['`cashbook_upi_gte_0`, `cashbook_cash_gte_0`, `cashbook_cards_gte_0`', 'CHECK constraints', 'each method\'s daily amount is non-negative'],
              ['`total` generated field', 'Cashbook', 'the day\'s total is `upi + cash + cards`, computed and persisted by the database; the API cannot set it'],
            ]}
          />
          <Paragraph>
            The API layer adds its own, stricter floors on top (section 5.3): bill and payment amounts must be <Bold>strictly</Bold> greater than zero, because a zero-amount bill or payment is meaningless even though the database would accept it for data written elsewhere.
          </Paragraph>
        </SubSection>

        <SubSection id="computed-values" title="4.3 Computed values">
          <Paragraph>
            <Bold>Outstanding balance</Bold> is the system's central figure. For a dealer it is:
          </Paragraph>
          <Code>{"outstanding_balance = opening_balance + (sum of all bills to the dealer) − (sum of all payments to the dealer)"}</Code>
          <Paragraph>
            It is computed on read and <Bold>never stored</Bold>. There is no such column on `Dealer`. In `DealerViewSet.get_queryset()` (in `accountancy/api/views.py`) each dealer row is annotated with two correlated subqueries — one summing that dealer's bills, one summing its payments — and the balance is derived from those plus the stored opening balance. The two sums are deliberately separate subqueries: aggregating bills and payments in one query would join the two tables together and multiply (a dealer with 6 bills and 3 payments would be summed 18 times). A dealer with no bills or payments reads `0.00` for that side through a `COALESCE`. A positive balance means the shop still owes the dealer; a negative balance means the dealer is in credit (overpaid).
          </Paragraph>
          <Paragraph>
            The dashboard's outstanding panel uses the same formula but computed in Python: it sums bills and payments per dealer in two grouped queries and walks the dealers. The figures are identical; the two implementations serve different response shapes.
          </Paragraph>
          <Paragraph>
            <Bold>Cashbook total</Bold> is the one derived figure that <Bold>is</Bold> stored: a generated, persisted column the database maintains on every write. The API treats it as read-only, and after a save the view re-reads the field (`refresh_from_db(fields=["total"])`) because Django does not refresh a generated field in memory.
          </Paragraph>
        </SubSection>

        <SubSection id="audit-history" title="4.4 Audit history">
          <Paragraph>
            `Business`, `Dealer`, `Bill`, `Payment`, and `Cashbook` all carry `HistoricalRecords()` (django-simple-history 3.7). Every create, change, or delete of such a row writes a row into the model's mirror table recording the field values, a change type, a timestamp, and the acting user. Because the API never deletes financial rows and corrections go through `PATCH`, the history in practice records the correction chain of each bill, payment, dealer, and cashbook row — which is how a shop can answer "what was this balance before you edited it?" `Task` and `OTPCode` are not versioned.
          </Paragraph>
        </SubSection>
      </Section>

      {/* 5. Backend Design */}
      <Section id="backend-design" title="5. Backend Design">

        <SubSection id="api-conventions" title="5.1 API conventions">
          <Paragraph><Bold>REST resources with a deliberate method restriction.</Bold> The four plain resources — dealers, tasks, bills, payments — are DRF viewsets, but the shared base class sets `http_method_names = ["get", "post", "patch", "head", "options"]`: <Bold>PUT and DELETE are off by default</Bold>. Financial records are corrected through `PATCH` (a partial update), never replaced whole and never deleted. `TaskViewSet` re-enables `DELETE` (a to-do item is disposable); everything else keeps the restriction. The business singleton accepts only `GET` and `PATCH`; the cashbook-by-date view accepts `GET`, `PUT`, and `DELETE` (its PUT is the idempotent create-or-replace; section 8.3). `PUT` is "replace the whole resource"; `PATCH` is "change these fields"; "idempotent" means repeating the same request has the same effect as making it once.</Paragraph>
          <Paragraph><Bold>Error format.</Bold> Validation failures are DRF `400` responses mapping field names to message arrays; the frontend's `firstMessage()` helper (`frontend/src/lib/errors.js`) flattens that shape to the first human-readable string for display. Authentication failures are `401`; permission failures `403`; cross-tenant object access `404` (section 5.2); disallowed methods `405`.</Paragraph>
          <Paragraph><Bold>Pagination, filtering, ordering.</Bold> All list endpoints paginate at 50 per page (`PageNumberPagination`). `django-filter` provides per-resource filtersets (`accountancy/api/filters.py`): dealers by `?search=` (name or GSTIN) and `?is_active=`; bills and payments by `?dealer=`, `?date_from=`, `?date_to=` (and payments also `?method=`); cashbook by `?date_from=`/`?date_to=`. `OrderingFilter` handles `?ordering=`; each resource sets a deterministic default order so pages are stable.</Paragraph>
          <Paragraph><Bold>Money on the wire</Bold> is always a two-decimal string (DRF's `DecimalField` rendering), which preserves the `Decimal` value exactly through JSON. Computed summaries widen the display precision to 14 digits because a headline figure can sum many rows.</Paragraph>
        </SubSection>

        <SubSection id="tenant-isolation" title="5.2 Tenant isolation">
          <Paragraph>
            All ten business-owned endpoints share one authorization layer in `accountancy/api/base.py`. It works in four parts:
          </Paragraph>
          <Paragraph><Bold>A permission pair.</Bold> `BusinessScopedMixin` sets `permission_classes = [IsAuthenticated, HasBusiness]`. The second checks that `request.user.business` exists, catching authenticated users with no business (an admin-created account).</Paragraph>
          <Paragraph><Bold>A scoped queryset.</Bold> `BusinessScopedViewSet.get_queryset()` appends `.filter(business=self.business)`, where `self.business` is `request.user.business` — resolved from the verified token, never from the request body. Every list, every object lookup, and every computed query flows through this filter.</Paragraph>
          <Paragraph><Bold>Server-stamped ownership.</Bold> `perform_create` saves new rows with `business=self.business`. A `business` field sent in the request body is simply not a field on any serializer, so a client cannot claim another tenant.</Paragraph>
          <Paragraph><Bold>404, not 403.</Bold> Because the queryset is filtered first, looking up another tenant's object id matches nothing and DRF raises `404` — the response confirms nothing exists, rather than confirming "that exists but is not yours." The one place existence leaks is by design of the message, not the status: creating a bill or payment with a dealer id that belongs to another business returns `400` with the deliberately vague "No such dealer." (`DealerScopedMixin` in `accountancy/api/serializers.py` performs the check using the business from the serializer context, which the mixin injects.)</Paragraph>
          <Paragraph>
            The computed views (`CollectionTrendView`, `DashboardSummaryView`, `BillPurchasesView`, `BusinessView`, `CashbookByDateView`) are not viewsets — there is nothing for a router to route — so they use the mixin directly and filter their own queries. `BusinessView` resolves its single object from `request.user.business`, so there is no `&#123;id&#125;` in its URL at all.
          </Paragraph>
        </SubSection>

        <SubSection id="validation-strategy" title="5.3 Validation strategy: API rules and database rules">
          <Paragraph>
            Both layers validate, and each exists because the other cannot do its job:
          </Paragraph>
          <Paragraph><Bold>The API validates strictly.</Bold> Bill and payment amounts must be greater than zero (the model floor is ≥ 0 — the database must accept zero because data may be written outside the API, e.g. through the admin, while the product rule is that a zero-amount bill is meaningless). Dealer names must be unique <Bold>within the caller's business</Bold> — a rule the database also enforces, but the API performs it in `DealerSerializer.validate_name()` using the business from context, because DRF cannot see the composite key without it. Payment methods must be one of the five choices. Bill files must be PDFs, or decodable images.</Paragraph>
          <Paragraph><Bold>The database validates structurally.</Bold> The `CHECK` constraints and unique constraints in section 4.2 hold regardless of how the row was written. A test (`PaymentAPITests.test_db_rejects_bad_method`) confirms a bad method is rejected even when the serializer is bypassed entirely.</Paragraph>
          <Paragraph>
            The split: the API enforces <Bold>product</Bold> rules (what a bill may be); the database enforces <Bold>invariants</Bold> (what a row can be).
          </Paragraph>
        </SubSection>

        <SubSection id="bill-file-handling" title="5.4 Bill file handling">
          <Paragraph>
            A bill carries exactly one file source, chosen at create or replacement — the two are mutually exclusive and the serializer rejects a request that supplies both (`BillSerializer.validate`).
          </Paragraph>
          <Paragraph><Bold>A PDF.</Bold> Accepted only with content type `application/pdf`, up to 10 MB (`MAX_BILL_UPLOAD_BYTES`, read with a 10 MB default — the setting is not defined in `settings.py`, so the default always applies). The `pages` field is set to null: the server has no PDF-reader dependency and does not count pages of a file it cannot open.</Paragraph>
          <Paragraph><Bold>Photo pages.</Bold> Accepted as repeated multipart parts named `images`, in the order the user arranged them. Per file, the code classifies the upload by content type first and file extension as fallback (browsers are unreliable about HEIC types): PNG, JPEG, and WebP are accepted; <Bold>HEIC/HEIF is rejected by name</Bold> with a message that names the accepted formats (Pillow cannot decode HEIC without an extra dependency the project deliberately avoids); anything else is rejected. Each accepted image is then genuinely opened and verified with Pillow — a renamed or corrupt file fails before anything is stored — and the whole set must fit the 10 MB ceiling.</Paragraph>
          <Paragraph><Bold>Compilation.</Bold> The pages are written, in order, into one PDF with Pillow (alpha channels are flattened onto white, since PDF cannot hold alpha), stored as the bill's `image`, and `pages` is set to the photo count — known because there was one page per photo.</Paragraph>
          <Paragraph><Bold>Delivery.</Bold> The stored file is never exposed at its media path in the API response: `image` is write-only, and the response carries `file_url`, pointing at `GET /api/bills/&#123;id&#125;/file/` — an authenticated endpoint that streams the PDF (inline by default, `?download=1` for a named download) and is tenant-scoped through the same `get_object()` path. Replacing a bill's file deletes the old PDF from disk after the new one is saved (`BillViewSet.perform_update`), unless the new file overwrote the old path in place.</Paragraph>
        </SubSection>

        <SubSection id="computed-endpoints" title="5.5 Computed endpoints">
          <Paragraph>
            Three summary endpoints exist because the figures they return are not rows: there is no model behind a "this month's collections," so a viewset would have nothing to route. Each takes `?period=week|month|quarter` (default month, case-insensitive; anything else is a `400`).
          </Paragraph>
          <Paragraph>
            <Bold>Calendar-aligned periods</Bold> (`_period_bounds` in `accountancy/api/views.py`): a week is the Monday-anchored calendar week containing today; a month is the calendar month; a quarter is the calendar quarter. The <Bold>previous</Bold> period is defined as the calendar period containing the day before the current one starts — which makes year and quarter boundaries fall out correctly (January's previous period is December of the prior year).
          </Paragraph>
          <Paragraph><Bold>`GET /api/dashboard-summary/`</Bold> feeds the five dashboard cards in one document. <Bold>In progress</Bold> sums cashbook rows from the period start through <Bold>today</Bold> (a running period is clipped at the current day) and compares pace against the same number of elapsed days in the previous period, clamped to that period's end. <Bold>Net cash flow</Bold> is collected minus paid over the whole selected period. <Bold>Purchasing</Bold> sums bills and payments with counts over the period. <Bold>Outstanding</Bold> computes every dealer's balance as of today (section 4.3) and deliberately <Bold>ignores the period</Bold>, so toggling Week/Month/Quarter never moves the balance cards.</Paragraph>
          <Paragraph><Bold>`GET /api/collection-trend/`</Bold> returns the period comparison plus a gap-filled series: week and month bucket by day, quarter buckets by week (90+ daily points would be unreadable). Every day of the current period appears in the series; days with no cashbook entry — including not-yet-reached days of a running month — read `0.00`, so the axis stays full and comparable. `change_percent` compares current to previous totals and is `null` when the previous total was zero (no baseline).</Paragraph>
          <Paragraph><Bold>`GET /api/bills/purchases/`</Bold> returns the Bills page's headline and per-dealer breakdown: one grouped sum per dealer over the calendar period, plus total and count. The page's money figures come from this endpoint, never from summing the (paginated, filterable) bill list in the browser.</Paragraph>
        </SubSection>
      </Section>

      {/* 6. Authentication and Security */}
      <Section id="authentication-security" title="6. Authentication and Security">

        <SubSection id="registration-email-verification" title="6.1 Registration and email verification">
          <Paragraph>
            Registration is the dj-rest-auth endpoint `POST /api/auth/registration/`, extended by `CustomRegisterSerializer` (in `accountancy/auth_serializers.py`) with one extra required field, `business_name`. On success the flow is: allauth creates the user and an <Bold>unverified</Bold> `EmailAddress`; `custom_signup` creates the `Business` (so registration and tenancy are one atomic step); and the project's `CodeEmailAdapter` (in `accountancy/adapter.py`) intercepts allauth's confirmation-mail step, which normally sends a link, and instead issues a one-time code and emails it. The email is a short plain-text template with the code and its expiry.
          </Paragraph>
          <Paragraph>
            Login is gated: with `ACCOUNT_EMAIL_VERIFICATION = "mandatory"`, dj-rest-auth's login serializer refuses a login for an address that is not verified. Verification happens at `POST /api/auth/otp/verify-email/` with the code; the serializer then marks <Bold>exactly one</Bold> address row verified through allauth's own `set_verified()` guard (a blanket queryset update was tried and abandoned — it skips allauth's conflict check and could hit a database constraint as an uncaught 500). The standard dj-rest-auth `login`, `logout`, `token/refresh`, `user`, and `password/change` endpoints are otherwise unmodified. dj-rest-auth also mounts its stock session-based password-reset routes, but the app uses the project's code-based endpoints instead, because allauth's stock flow depends on a session cookie that a token-based client does not carry.
          </Paragraph>
        </SubSection>

        <SubSection id="otp-engine" title="6.2 The OTP engine">
          <Paragraph>
            `accountancy/otp.py` is a small, deliberately stateless engine shared by email verification and password reset. A one-time password (OTP) here is a <Bold>6-digit numeric code</Bold> generated with a cryptographically secure random source, used once, and stored only as a keyed hash: an HMAC (hash-based message authentication code) of the code with the Django secret key, so a database breach exposes hashes that cannot be inverted without the key.
          </Paragraph>
          <Paragraph>
            Per code row (`OTPCode`):
          </Paragraph>
          <Paragraph><Bold>Expiry.</Bold> Verification codes live 15 minutes; reset codes 10 (`OTP` settings block in `settings.py`, mirrored as defaults in `otp.py`).</Paragraph>
          <Paragraph><Bold>Attempt limit.</Bold> At most 5 failed comparisons; the fifth failure consumes the code (lockout), and a locked code cannot be retried.</Paragraph>
          <Paragraph><Bold>Single live code.</Bold> `issue()` invalidates every previously unconsumed code for that (email, purpose) before minting a new one, so a resend supersedes the old code rather than stacking with it.</Paragraph>
          <Paragraph><Bold>Resend cooldown.</Bold> A new code cannot be requested for 60 seconds after the last (the registration send is exempt, since no prior code exists).</Paragraph>
          <Paragraph><Bold>Consumption.</Bold> A correct code sets `consumed_at`; a replay of the same code then fails. The reset flow has a `check()` variant that verifies <Bold>without consuming</Bold> (the Settings page verifies a code before unlocking the new-password fields, then confirms with the same code), though failed checks still burn attempts.</Paragraph>
          <Paragraph><Bold>Throttling.</Bold> The four public endpoints carry DRF per-IP rate limits — 10 requests/hour for code requests, 20/hour for verifications — on top of the per-code attempt limit.</Paragraph>
          <Paragraph><Bold>Enumeration safety.</Bold> `POST /api/auth/otp/password/request/` returns the same 200 with the same "If that email has an account…" message whether or not the address has an account, and stays equally quiet when inside the cooldown window; the verify-email endpoint reports an unknown address as "Incorrect or expired code." The registration endpoint answers a repeat signup for a <Bold>pending</Bold> address with the same 201 as a fresh one (section 9, decision 8) and only rejects outright when the address is already verified.</Paragraph>
        </SubSection>

        <SubSection id="session-handling" title="6.3 Session handling">
          <Paragraph>
            Sessions are JWT-based (simplejwt 5.5.1, via dj-rest-auth with `USE_JWT`). The configuration in `settings.py`:
          </Paragraph>
          <Paragraph><Bold>Access token:</Bold> 1 hour lifetime, sent by the client as an `Authorization: Bearer` header on every request.</Paragraph>
          <Paragraph><Bold>Refresh token:</Bold> 7 day lifetime, <Bold>rotated on every refresh</Bold> and the old one <Bold>blacklisted</Bold> server-side (`ROTATE_REFRESH_TOKENS`, `BLACKLIST_AFTER_ROTATION`, with the `token_blacklist` app); a blacklisted token is rejected on any subsequent use, including logout replay.</Paragraph>
          <Paragraph><Bold>Storage split.</Bold> The access token lives in browser <Bold>web storage</Bold> — `localStorage`, or `sessionStorage` when the login's "remember me" box is unchecked (`Login.jsx`). An HttpOnly cookie is a browser cookie that JavaScript cannot read, which stops same-origin scripts from stealing it. The <Bold>functional</Bold> refresh token lives in an <Bold>HttpOnly</Bold> cookie named `ledgerflow_refresh` (dj-rest-auth's `JWT_AUTH_HTTPONLY` is on, so the login response body carries an empty `refresh` field and the real token travels only in the cookie). The frontend sends `credentials: "include"` on every fetch so the cookie rides along, and CORS is configured with `CORS_ALLOW_CREDENTIALS` for the reason stated in `settings.py`: without it a browser blocks a cross-origin response that sets the cookie, and token refresh works in curl but fails on the page.</Paragraph>
          <Paragraph>
            One honest wrinkle: `Login.jsx` also writes the (empty) `refresh` value from the response body into the chosen storage, and the "remember me" branch stores the access token in `sessionStorage` — but `apiRequest` and the refresher only ever read `localStorage`, so a session started with "remember me" unchecked is not actually found by the API layer [VERIFY: confirm whether the sessionStorage path is intended dead code or a known bug]. The access token in `localStorage` is readable by any script on the origin, which is a standing XSS trade-off (section 6.4).
          </Paragraph>
        </SubSection>

        <SubSection id="security-model" title="6.4 Security model">
          <Paragraph>
            <Bold>What is protected.</Bold> Every endpoint under `/api/` except the four public OTP routes and the dj-rest-auth public routes requires a valid, non-blacklisted access token and an account linked to a business. Tenant data is scoped as described in section 5.2; bill files are readable only through the authenticated per-bill endpoint; the OTP surface is hashed, expiring, attempt-limited, cooldown-limited, throttled, and enumeration-safe; passwords use Django's four standard validators and a required current password for in-session changes.
          </Paragraph>
          <Paragraph>
            <Bold>Known gaps, stated plainly.</Bold> These are the current state of `settings.py` and the client, not aspirations:
          </Paragraph>
          <Table
            headers={['Area', 'Current state', 'Consequence']}
            rows={[
              ['Access token storage', '`localStorage` (script-readable)', 'A same-origin XSS can read the access token for up to its 1-hour life'],
              ['"Remember me" branch', 'Stores the token in `sessionStorage`, which nothing reads', 'The unchecked-remember-me path is inert [VERIFY]'],
              ['Refresh cookie', 'HttpOnly, but not `Secure`-flagged in `settings.py` (`JWT_AUTH_SECURE` unset, default False)', 'The cookie would travel over a non-HTTPS origin'],
              ['CORS', '`CORS_ALLOW_ALL_ORIGINS = True` (hardcoded) alongside `CORS_ALLOW_CREDENTIALS` and a localhost-only origin list', 'Any origin can make credentialed cross-origin requests to the API'],
              ['Uploaded files', 'Served at `/bill_imgs/<path>` by `serve_media` with no authentication, in addition to the authenticated endpoint', 'Anyone who knows or guesses a stored filename can fetch the PDF without a token'],
              ['Debug / hosts', '`DEBUG` defaults to on (`IS_DEVELOPMENT`); `ALLOWED_HOSTS` defaults to localhost', 'Development posture; a deployment must set both via environment'],
              ['Email', 'Console backend by default (codes print to the terminal)', 'A non-debug run with the console backend logs a startup warning, since users could never receive codes'],
              ['Throttling', 'Applied to the public OTP scopes only', 'Authenticated endpoints (including login) have no per-IP ceiling beyond DRF defaults'],
            ]}
          />
        </SubSection>
      </Section>

      {/* 7. Frontend Design */}
      <Section id="frontend-design" title="7. Frontend Design">

        <SubSection id="structure" title="7.1 Structure">
          <Paragraph>
            The app is plain React 19 with no state library, no component library, and no chart library — the only runtime dependencies in `frontend/package.json` are `react`, `react-dom`, and `react-router-dom`. Routes in `frontend/src/App.jsx` are: `/login`, `/signup`, `/forgot-password`, `/dashboard`, `/payments`, `/cashbook`, `/dealers`, `/bills`, `/settings`. There is no proactive route guard: a page fetch that ends in a 401, and then a failed refresh, redirects the whole browser to `/login` from the API layer (section 7.2), which is the actual enforcement mechanism.
          </Paragraph>
          <Paragraph>
            Shared components (`frontend/src/components/`) — Card, DataTable, DateField, DealerPicker, FormField, Navbar, PageShell, PillButton, SectionLabel, CountUp — are plain presentational pieces. Pure helper modules (`frontend/src/lib/`) hold no React: `format.js` (Indian digit-grouped rupee formatting, compact k/lakh/crore figures, date and percent formatters, file sizes), `errors.js` (first-message extraction from API errors), and `cashbook.js` (window math: rolling/custom date ranges capped at 120 days, day listing, and the per-day status derivation that distinguishes a recorded ₹0 day from a missing day).
          </Paragraph>
        </SubSection>

        <SubSection id="api-layer" title="7.2 The API layer">
          <Paragraph>
            Every network call in the app goes through one function, `apiRequest` in `frontend/src/api/auth.jsx`. It: prefixes `API_BASE_URL`; attaches `Authorization: Bearer &lt;token&gt;` where a token exists in `localStorage`; always sets `credentials: "include"` for the refresh cookie; omits the JSON content type for `FormData` bodies (the browser must compute the multipart boundary); and on a 401 calls `refreshAccessToken()` exactly once, retries the original request, and — if the refresh fails — removes the access token and redirects to `/login`. Non-OK responses reject with `&#123;status, data&#125;`; a `raw: true` option returns the `Response` itself for byte reads (the bill PDF viewer).
          </Paragraph>
          <Paragraph>
            `refreshAccessToken()` in `frontend/src/api/tokenRefresh.jsx` is <Bold>single-flight</Bold>: concurrent 401s share one in-flight refresh promise (a module-level variable, cleared in `finally`), so ten expiring requests at once produce one refresh call. The refresh POSTs to `/auth/token/refresh/` with the cookie; the response carries the new access token in the body (the rotated refresh token is re-set as the HttpOnly cookie by the view) and the new access token is written to `localStorage`.
          </Paragraph>
          <Paragraph>
            `API_BASE_URL` (`frontend/src/api/config.js`) is <Bold>build-time configurable</Bold> via the `VITE_API_BASE_URL` environment variable, defaulting to `http://127.0.0.1:8000/api`; the Dockerfile passes it as a build argument, and the comment notes the value must match the host the browser actually uses, because the refresh cookie is only sent back to its origin. One resource module exists per backend area (`bills.js`, `payments.js`, `dealers.js`, `cashbook.js`, `tasks.js`, `business.js`, `dashboard.js`); the list-reading modules for bills, payments, and dealers follow pagination `next` links until exhausted and merge all pages in the browser, because those pages do their own filtering, sorting, and paging.
          </Paragraph>
        </SubSection>

        <SubSection id="state-data-fetching" title="7.3 State and data fetching">
          <Paragraph>
            There is no global store. Each page owns local state (`useState`/`useEffect`) and its own fetches; cards are presentational and receive finished data plus callbacks. The one shared state in the app is the <Bold>period</Bold> on the dashboard (`Dashboard.jsx`): a single `period` value — week, month, or quarter — that the Collection-trend card's buttons mutate, and one effect that re-fetches both the dashboard summary and the collection trend whenever it changes, so one toggle switches every period-dependent card together. Period-independent data (tasks, recent bills) is fetched once on mount. Each effect tracks an `active` flag so a response landing after the user has moved on is dropped rather than painted over newer data.
          </Paragraph>
        </SubSection>

        <SubSection id="charts" title="7.4 Charts">
          <Paragraph>
            All three charts are hand-built SVG with no library: the collection-trend card draws bars over the API's gap-filled series; the cashbook's daily chart is a Catmull-Rom-smoothed line where a recorded ₹0 day dips to the baseline and a <Bold>missing</Bold> day breaks the line (a gap, never a zero — the design distinction `lib/cashbook.js` encodes); the methods split is a donut built from stroke-dash segments of a circle. The reason there is no chart library: the data shapes are fixed and small (a month is at most 31 points; a quarter at most about 14 week-points), so a general plotting dependency would buy nothing against its size and versioning cost.
          </Paragraph>
        </SubSection>
      </Section>

      {/* 8. Key Workflows */}
      <Section id="key-workflows" title="8. Key Workflows">

        <SubSection id="record-payment" title="8.1 Record a payment">
          <Paragraph><Bold>Trigger.</Bold> On the Payments page the owner opens the "Record a payment" side panel and enters dealer, date, amount, and method (retired dealers remain deliberately selectable — a final settlement is the usual reason to touch a closed account).</Paragraph>
          <Paragraph><Bold>Frontend call.</Bold> `createPayment()` posts JSON to `/api/payments/`.</Paragraph>
          <Paragraph><Bold>API processing.</Bold> JWT authentication and the business permission pair; the scoped queryset; `PaymentSerializer` validates — amount strictly greater than zero, method one of the five, and the dealer id belonging to the caller's business (`DealerScopedMixin`); `perform_create` stamps the business from the token.</Paragraph>
          <Paragraph><Bold>Database effect.</Bold> One `Payment` row; the `CHECK` constraints independently hold; a history row is written.</Paragraph>
          <Paragraph><Bold>Response.</Bold> `201` with the complete row as saved (dealer name, timestamps, the amount as a string). The panel swaps the new row into the in-browser list in place — no refetch — and the month tile and method breakdown recompute from the merged list.</Paragraph>
        </SubSection>

        <SubSection id="upload-bill-photos" title="8.2 Upload a bill from photos">
          <Paragraph><Bold>Trigger.</Bold> On the Bills page the owner chooses the photo source, takes or picks photos, and arranges their order (a physical bill may be double-sided).</Paragraph>
          <Paragraph><Bold>Frontend call.</Bold> `createBill()` builds a `FormData` with the dealer, date, amount as ordinary fields and the photos as repeated `images` parts; the client pre-checks the 10 MB ceiling.</Paragraph>
          <Paragraph><Bold>API processing.</Bold> The multipart body reaches `BillSerializer`: each part is classified (accepted / HEIC-unreadable / other — the HEIC case is rejected with a message naming the format and the accepted alternatives), each accepted image is opened and verified by Pillow, the total size is checked, and `validate()` compiles the pages, in the arranged order, into one PDF and sets `pages` to the count.</Paragraph>
          <Paragraph><Bold>Database effect.</Bold> One `Bill` row (business stamped from the token) plus the compiled PDF on disk; history recorded.</Paragraph>
          <Paragraph><Bold>Response.</Bold> `201` carrying `file_url` (the authenticated endpoint — never the raw storage path), `file_size`, and `pages`. The list row appears in place and the purchases summary is refetched, because the headline figure comes from its own endpoint. Viewing the bill fetches the PDF as a blob with the token and hands the viewer an object URL, since an `&lt;iframe src&gt;` cannot carry a bearer header.</Paragraph>
        </SubSection>

        <SubSection id="save-cashbook" title="8.3 Save a day's cashbook">
          <Paragraph><Bold>Trigger.</Bold> In the dashboard's cashbook card or on the Cashbook page, the owner enters the day's UPI, cash, and card totals and saves.</Paragraph>
          <Paragraph><Bold>Frontend call.</Bold> `saveCashbookEntry()` does `PUT /api/cashbook/by-date/&#123;date&#125;/` — one call whether or not the day already has a row.</Paragraph>
          <Paragraph><Bold>API processing.</Bold> `CashbookByDateView` (a `GenericAPIView` under the mixin) filters `business` and `date`; the serializer accepts the three method amounts and nothing else — `date` comes from the URL and `total` is read-only, so neither can be smuggled in the body.</Paragraph>
          <Paragraph><Bold>Database effect.</Bold> The PUT is <Bold>idempotent</Bold>: no row for that day → one is created (`201`); a row exists → it is replaced in place (`200`), never duplicated (the unique `(business, date)` constraint makes duplication impossible). The database recomputes the generated `total` column on the write; the view then re-reads that one field before responding.</Paragraph>
          <Paragraph><Bold>Response.</Bold> The row as saved, including the computed total. GET and DELETE on a day with no row return 404; POST and PATCH on the by-date URL return 405 (the view's methods are `get`, `put`, `delete`).</Paragraph>
        </SubSection>

        <SubSection id="load-dashboard" title="8.4 Load the dashboard">
          <Paragraph><Bold>Trigger.</Bold> Navigating to `/dashboard`.</Paragraph>
          <Paragraph><Bold>Frontend calls.</Bold> On mount, four fetches in two effects: the period effect requests `GET /api/dashboard-summary/?period=…` and `GET /api/collection-trend/?period=…`; a second effect requests `GET /api/tasks/` and `GET /api/bills/` (one page, for the recent-bills card). Selecting a day in the cashbook card issues `GET /api/cashbook/by-date/&#123;date&#125;/` (a 404 translates to an empty form) plus one month-bounded list call for the calendar's saved-date dots.</Paragraph>
          <Paragraph><Bold>API processing.</Bold> Each summary runs its period arithmetic (section 5.5) entirely inside the caller's business scope.</Paragraph>
          <Paragraph><Bold>Database effect.</Bold> Read-only; several aggregate queries per load.</Paragraph>
          <Paragraph><Bold>Response.</Bold> Cards appear as their own data lands — the trend card first (its buttons are the period UI), then the summary tray's four cards together, then tasks and recent bills. Toggling Week/Month/Quarter re-runs the first effect and everything period-dependent switches in one motion.</Paragraph>
        </SubSection>
      </Section>

      {/* 9. Design Decisions */}
      <Section id="design-decisions" title="9. Design Decisions">

        <Paragraph>
          Each decision is recorded in the fixed format: context, decision, alternatives considered, consequences.
        </Paragraph>

        <SubSection id="decision-1" title="1. Tenant isolation in one base class">
          <Paragraph><Italic>Context.</Italic> Every business-owned endpoint needs the same four guarantees: authentication, an existing business, a scoped queryset, and server-stamped creation. <Italic>Decision.</Italic> One mixin (`BusinessScopedMixin`) plus one viewset base (`BusinessScopedViewSet`) in `accountancy/api/base.py`; non-viewset endpoints mix in the same mixin and scope their own queries. <Italic>Alternatives.</Italic> Per-view permission classes and filters (repeated ten times, drift-prone); a `BusinessMiddleware` stamping `request.business` (hides the scope in middleware, harder to test per view). <Italic>Consequences.</Italic> One place to audit or change tenancy; the cost is that the scoping lives in `get_queryset()` rather than a visible query parameter, so a query written by hand outside the viewset pattern is <Bold>not</Bold> automatically scoped — every hand-written view filters its own queries by the business (the business singleton resolves its row from the signed-in user rather than querying), and the test suite checks each endpoint's scoping individually.</Paragraph>
        </SubSection>

        <SubSection id="decision-2" title="2. Computed balances">
          <Paragraph><Italic>Context.</Italic> The dealer's outstanding balance is the figure the whole app is about. <Italic>Decision.</Italic> Compute `opening + bills − payments` on every read (annotated subqueries in the dealer list; a grouped-sum walk in the dashboard); never store it. <Italic>Alternatives.</Italic> A stored balance column updated by the payment/bill saves (requires a transactional invariant across two tables, breaks with back-dated entries, and can silently drift); a nightly job. <Italic>Consequences.</Italic> The number is always correct, including after corrections and back-dated rows, at the cost of the aggregate running on every request — acceptable at one-shop volume, the first thing to change at scale (section 12.2).</Paragraph>
        </SubSection>

        <SubSection id="decision-3" title="3. Decimal money with database constraints">
          <Paragraph><Italic>Context.</Italic> Money must survive JSON, the database, and arithmetic without floating-point drift. <Italic>Decision.</Italic> `DecimalField(max_digits=10, decimal_places=2)` everywhere, serialized as two-decimal strings; `CHECK` constraints on the floor (≥ 0) and on the payment method enum; the API enforces the stricter product rule (&gt; 0). <Italic>Alternatives.</Italic> Integer paise/cents (loses the "this is money, not a count" semantics at the column level); API-only validation (trusts that nothing ever writes outside the API). <Italic>Consequences.</Italic> Correctness holds for admin and script writes too; the cost is a duplicated rule set (model floor vs API floor) that must be kept in step, and a value list copied into the method `CHECK` because Django `Meta` cannot reference a nested choices class.</Paragraph>
        </SubSection>

        <SubSection id="decision-4" title="4. Cashbook by date with a generated total">
          <Paragraph><Italic>Context.</Italic> A day's cashbook is naturally addressed by its date, and the total is defined by its parts. <Italic>Decision.</Italic> A URL-addressed view (`/api/cashbook/by-date/&#123;date&#125;/`) whose PUT is create-or-replace, a unique `(business, date)` constraint, and a database-generated persisted `total` column; `date` and `total` are read-only fields on the serializer. <Italic>Alternatives.</Italic> Id-keyed CRUD with a client-managed "one row per day" rule (duplicates possible until the constraint fights it; the client must know the id); computing the total in the API (the database would then not enforce it for external writes). <Italic>Consequences.</Italic> Saving a day is idempotent and cannot double-count; the total is unforgeable; the cost is that this resource deliberately breaks the other viewsets' method pattern (it has PUT/DELETE but no POST/PATCH) and the date must be a valid ISO segment or the URL 404s cleanly (`DateConverter`).</Paragraph>
        </SubSection>

        <SubSection id="decision-5" title="5. No hard deletes, plus an audit trail">
          <Paragraph><Italic>Context.</Italic> A wrong ledger entry discovered next week must be correctable <Bold>and</Bold> explicable. <Italic>Decision.</Italic> Financial resources expose no DELETE (the base viewset omits it); corrections are PATCH; versioned models write simple-history rows on every change. <Italic>Alternatives.</Italic> Delete-and-recreate (destroys the correction story); soft-delete flags (adds a null-ness tax to every query). <Italic>Consequences.</Italic> The history table answers "what did this look like before?" for every financial row; the cost is that the history has no API of its own (it is inspectable via the admin) and "retiring" a dealer is a flag, so retired dealers remain in search results until filtered.</Paragraph>
        </SubSection>

        <SubSection id="decision-6" title="6. JWT with a rotating HttpOnly refresh cookie">
          <Paragraph><Italic>Context.</Italic> A token client has no session; the refresh token is the crown jewel. <Italic>Decision.</Italic> 1-hour access tokens in a header; 7-day refresh tokens in an HttpOnly cookie, rotated on every refresh with the old one blacklisted; `credentials: include` plus CORS credentials on the client. <Italic>Alternatives.</Italic> Refresh token in `localStorage` (exposed to any XSS for 7 days); a server session (abandons the stateless client the design wants). <Italic>Consequences.</Italic> A stolen page-session is capped at one hour, and a stolen refresh cookie dies on first reuse after rotation; the costs are the standing XSS exposure of the access token, the CSRF-adjacent care needed around the cookie, and the client's awkward storage of an empty `refresh` body field (section 6.3).</Paragraph>
        </SubSection>

        <SubSection id="decision-7" title="7. A custom OTP engine">
          <Paragraph><Italic>Context.</Italic> allauth's confirmation flow is link-based and, for its by-code flow, session-cookie-based; a token client carries neither usefully. <Italic>Decision.</Italic> A small engine (`accountancy/otp.py`) issuing 6-digit codes stored as key-dependent hashes with per-purpose TTLs, a 5-attempt lockout, a 60-second resend cooldown, superseding-on-resend, and per-IP throttles on the public routes — with an adapter that swaps only allauth's mail-sending step, leaving the verified-flag machinery untouched. <Italic>Alternatives.</Italic> allauth's by-code flow (needs a session the client doesn't carry); TOTP apps (unusable for a shop owner verifying by phone). <Italic>Consequences.</Italic> Exactly the behavior the product needs in ~170 lines; the cost is owning the security surface (hashing, timing-safe compare, lockout) and a `check()`/`verify()` pair that must not drift.</Paragraph>
        </SubSection>

        <SubSection id="decision-8" title="8. Duplicate-signup handling">
          <Paragraph><Italic>Context.</Italic> dj-rest-auth only refuses a registration whose email is already <Bold>verified</Bold>; a second signup for a <Bold>pending</Bold> address would create a second unverified account, and allauth's partial unique index allows exactly one verified row per address — so two pending accounts for one address could <Bold>never both</Bold> be verified, and either of them could be DoS'd by anyone who knew the address, with no credentials. <Italic>Decision.</Italic> `CustomRegisterSerializer.save()` returns the existing pending account instead of creating a second: the caller re-sends a confirmation code to the mailbox, the existing account (password, business) is untouched, and the response is the identical 201. <Italic>Alternatives.</Italic> Rejecting the duplicate (leaks that the address is pending); letting duplicates through (the original DoS hole). <Italic>Consequences.</Italic> The mailbox controller always recovers what they need; nobody learns anything from the response; the legacy duplicate rows that predate the fix are still handled politely at verification (one wins, the other is refused with a message, tested).</Paragraph>
        </SubSection>

        <SubSection id="decision-9" title="9. Server-side PDF compilation">
          <Paragraph><Italic>Context.</Italic> The owner's bill is usually a photographed piece of paper; the product wants one stored artifact per bill. <Italic>Decision.</Italic> Accept photo pages (PNG/JPEG/WebP) and compile them, in the user's order, into one PDF with Pillow — already a dependency — rejecting HEIC by name because Pillow cannot decode it without an extra dependency. <Italic>Alternatives.</Italic> Storing the photos separately (the bill has no single viewable artifact); adding a HEIC transcoder dependency (native-compiler weight for an edge case); client-side compilation (the browser cannot produce a PDF without a JS library the project declined). <Italic>Consequences.</Italic> One artifact, order preserved, zero new dependencies; the cost is a 10 MB ceiling on the set and a `pages` count that is known for compiled bills but null for dropped-in PDFs.</Paragraph>
        </SubSection>

        <SubSection id="decision-10" title="10. Dedicated summary endpoints">
          <Paragraph><Italic>Context.</Italic> The dashboard and the Bills page need period-aggregated figures; deriving them client-side from the paginated, filterable lists would compute over a random subset of rows. <Italic>Decision.</Italic> Three hand-routed GET endpoints (`dashboard-summary`, `collection-trend`, `bills/purchases`) that run the aggregation server-side over the whole period and return one document each. <Italic>Alternatives.</Italic> Client-side sums over merged list pages (wrong once the user's filters narrow the list); a single "everything" endpoint (couples five cards to one payload and one failure mode). <Italic>Consequences.</Italic> The numbers are always over the full population and the cards can fail independently; the cost is three more endpoints to maintain and period arithmetic living in view code rather than in the models.</Paragraph>
        </SubSection>

        <SubSection id="decision-11" title="11. A frontend with no extra libraries">
          <Paragraph><Italic>Context.</Italic> The app is nine pages of forms, lists, and three small charts. <Italic>Decision.</Italic> Runtime dependencies limited to React, react-dom, and react-router-dom; charts hand-built as SVG; lists filtered, sorted, and paged in the browser; one `fetch` wrapper as the only network code. <Italic>Alternatives.</Italic> A component library, a data-fetching library (React Query), a chart library, a state library — each buying generality the app does not use. <Italic>Consequences.</Italic> A small, auditable client that a non-framework specialist can maintain; the costs are the browser-side paging of full lists (fine at one shop's row counts) and the 34 standing lint warnings section 10.3 lists.</Paragraph>
        </SubSection>

        <SubSection id="decision-12" title="12. SQLite for development">
          <Paragraph><Italic>Context.</Italic> One shop, one machine, zero ops budget. <Italic>Decision.</Italic> SQLite for the checked-in configuration (`DATA_DIR/db.sqlite3`), with the directory overridable by one environment variable so a deployment can point it at a persistent volume. <Italic>Alternatives.</Italic> Postgres from day one (an ops dependency the product cannot yet justify). <Italic>Consequences.</Italic> `pip install` and `migrate` is the whole setup, and the seed script's ~700 calls run fine; the costs are single-writer concurrency and no database-level tooling, and the fact that `requirements.txt` already carries `psycopg2-binary` and `dj-database-url` from deployment experimentation while `settings.py` hardcodes the sqlite3 engine — the switch to Postgres is a settings change waiting on a decision, not a code change.</Paragraph>
        </SubSection>

        <Table
          headers={['#', 'Decision', 'Trade-off', 'Where in the code']}
          rows={[
            ['1', 'Tenancy in one base class', 'auditability vs per-query responsibility', '`accountancy/api/base.py`'],
            ['2', 'Computed balances', 'always correct vs per-read cost', '`api/views.py` (DealerViewSet, DashboardSummaryView)'],
            ['3', 'Decimal + DB constraints', 'invariant integrity vs duplicated rules', '`models.py`, `api/serializers.py`'],
            ['4', 'Cashbook by date, generated total', 'idempotent day vs nonstandard methods', '`api/views.py` (CashbookByDateView), `models.py`'],
            ['5', 'No hard deletes + history', 'correctable-and-explained vs no history UI', '`api/base.py`, `models.py` (HistoricalRecords)'],
            ['6', 'Rotating HttpOnly refresh', '1-hour exposure cap vs cookie care', '`settings.py` (SIMPLE_JWT, REST_AUTH), `frontend/src/api/tokenRefresh.jsx`'],
            ['7', 'Custom OTP engine', 'exact fit vs owning the security surface', '`accountancy/otp.py`, `adapter.py`'],
            ['8', 'Duplicate signup returns existing', 'no DoS, no leak vs a 201 that is sometimes "already here"', '`accountancy/auth_serializers.py`'],
            ['9', 'Server-side PDF compile', 'one artifact, no new deps vs 10 MB ceiling, no HEIC', '`api/serializers.py` (`_compile_images`)'],
            ['10', 'Dedicated summary endpoints', 'full-population numbers vs endpoint sprawl', '`api/views.py` (three computed views)'],
            ['11', 'No extra frontend libraries', 'small auditable client vs browser-side paging', '`frontend/package.json`, `frontend/src/api/`'],
            ['12', 'SQLite for development', 'zero-ops setup vs single-writer ceiling', '`jbb_projects/settings.py`'],
          ]}
        />
      </Section>

      {/* 10. Testing and Quality */}
      <Section id="testing-quality" title="10. Testing and Quality">

        <SubSection id="strategy" title="10.1 Strategy">
          <Paragraph>
            The backend has a real API-level test suite: `accountancy/tests.py`, ten `TestCase` classes using DRF's `APIClient` against the actual URL conf, serializers, and middleware — no mocked views. Tests exercise the public HTTP surface: status codes, response shapes, the throttling cache (cleared in `setUp`), the email outbox (the console backend's locmem stand-in), the blacklist tables, and a temporary media root for file tests. Authenticated tests mint real JWTs via `RefreshToken.for_user` and set the `Authorization` header, so the JWT path is what is tested.
          </Paragraph>
        </SubSection>

        <SubSection id="coverage-by-area" title="10.2 Coverage by area">
          <Table
            headers={['Area', 'Test class', 'Tests', 'What it pins']}
            rows={[
              ['Auth flows', '`AuthFlowTests`', '7', 'register → verify → login → logout/blacklist; single-use codes; resend supersedes; reset by code; enumeration safety; verify-without-consume; attempt lockout'],
              ['Duplicate signup', '`DuplicateRegistrationTests`', '5', 'no second account for a pending address; original untouched; still verifiable after a repeat; verified address still rejected; legacy duplicates refuse instead of crashing'],
              ['Dealers (tenancy)', '`DealerAPITests`', '9', 'scoped list; 404-not-403 across tenants; create stamps from token ignoring body; PUT/DELETE 405; per-business name uniqueness; scoped filters; default ordering; 401/403 pair'],
              ['Tasks', '`TaskAPITests`', '6', 'DELETE re-enabled and scoped; PUT still 405; title required; PATCH semantics; base still applies'],
              ['Bills (files)', '`BillAPITests`', '21', 'cross-tenant dealer; PDF-only input; size caps; write-only image; tenant-scoped file endpoint; photo→PDF compile; HEIC rejection (both type and extension); file replacement deletes the old file; pages semantics; amount floor'],
              ['Bill purchases', '`BillPurchasesAPITests`', '3', 'scoped summary; empty period reads zero; invalid period 400'],
              ['Payments', '`PaymentAPITests`', '10', 'method enum; methods endpoint; filters; amount floors; the DB constraint firing when the serializer is bypassed; cross-tenant dealer; method gating'],
              ['Business', '`BusinessAPITests`', '7', 'singleton without owner; rename; PUT 405; no `{id}` route; per-user scoping; nested copy in `/auth/user/`; 401/403'],
              ['Cashbook', '`CashbookAPITests`', '10', '404 on missing day; PUT create-then-replace; idempotency; delete-then-404; no POST/PATCH; bad date 404; total uneditable; scoping; date-range list; negatives'],
              ['Collection trend', '`CollectionTrendAPITests`', '9', 'the month spec example; week/quarter bucketing; zero-baseline null; year-boundary previous period; scoping; gating; case-insensitivity'],
            ]}
          />
          <Paragraph>
            <Bold>Total: 87 tests.</Bold> Running the suite as of this writing: <Bold>86 pass, 1 errors</Bold> — `AuthFlowTests.test_full_registration_to_logout_flow`, which fails at `OutstandingToken.objects.get(token=refresh)` because it reads `refresh` from the login response <Bold>body</Bold>, which is empty under `JWT_AUTH_HTTPONLY: True` (the real refresh token travels only in the cookie). The correct fix is to read the token from the client's cookie (`ledgerflow_refresh`) rather than the body. This is reported here as a known defect, not papered over.
          </Paragraph>
        </SubSection>

        <SubSection id="gaps" title="10.3 Gaps">
          <Paragraph><Bold>No frontend tests.</Bold> `package.json` has no test script and no test framework in `devDependencies`; the entire React app — routing, the refresh-retry logic, the chart math, the cashbook window derivation — is untested. The pure helpers in `src/lib/` are the most testable surface (no React imports) and the obvious first target.</Paragraph>
          <Paragraph><Bold>Lint.</Bold> The frontend lints with oxlint (`npm run lint`, configured in `.oxlintrc.json`): the current run reports <Bold>34 warnings and 0 errors</Bold> (exit 0). The dominant classes are `set-state-in-effect` (synchronous `setState` inside effects, ~12 occurrences across the cashbook, bills, dealers, and dashboard pages), a few unused imports/catch parameters, and `only-export-components` warnings on `api/auth.jsx` (it exports functions alongside the re-exported `API_BASE_URL`, defeating React Fast Refresh for that module). There is no linter on the Python side in the repository.</Paragraph>
        </SubSection>
      </Section>

      {/* 11. Setup and Operations */}
      <Section id="setup-operations" title="11. Setup and Operations">

        <SubSection id="local-setup" title="11.1 Local setup">
          <Paragraph>
            <Bold>Backend.</Bold> Create a Python 3.11 virtual environment and `pip install -r requirements.txt` (fully pinned: Django 5.2.4, DRF 3.16.0, simplejwt 5.5.1, dj-rest-auth 7.2.0, allauth 65.19.2, cors-headers 4.9.0, django-filter 25.1, simple-history 3.7.0, Pillow 11.3.0, gunicorn, WhiteNoise, and more). Set `DJANGO_SECRET_KEY` in the environment — the settings read it from `os.environ` with <Bold>no default and no dotenv loading in the code</Bold>, so a missing variable is a startup crash by design (a gitignored `.env` file is the intended local vehicle [VERIFY: how the developer's shell or editor is expected to load it, since no `load_dotenv` call exists]). Then `python manage.py migrate` and `python manage.py runserver` — port 8000. `DJANGO_DATA_DIR` (default: the repository root) holds `db.sqlite3` and `uploads/`.
          </Paragraph>
          <Paragraph>
            <Bold>Frontend.</Bold> In `frontend/`, `npm install` and `npm run dev` (Vite on port 5173; the dev config keeps the asset base at `/` and needs no proxy, because `API_BASE_URL` defaults to the absolute `http://127.0.0.1:8000/api`).
          </Paragraph>
          <Paragraph>
            <Bold>Seed data.</Bold> `python scripts/seed_dummy_data.py &lt;access-token&gt; [base-url]` drives the <Bold>running</Bold> API over HTTP: it renames the business, creates six dealers, about 54 bills (each with a generated single-page PDF), about 28 payments (dated 3–45 days after a bill, with per-dealer pay ratios chosen so the outstanding board shows a mix of owed/credit/near-zero), about 580 weekend-weighted cashbook days from January 2025 to today, and ten tasks. It refuses to run if the business already has dealers, so an accidental re-run cannot double the data. Note the token argument: the access token expires in one hour, and the script makes roughly 700 requests.
          </Paragraph>
          <Paragraph>
            <Bold>Tests.</Bold> `DJANGO_SECRET_KEY=… python manage.py test accountancy` (87 tests; currently 86 pass, 1 error — section 10.2).
          </Paragraph>
        </SubSection>

        <SubSection id="configuration" title="11.2 Configuration">
          <Paragraph>
            The current development state of `settings.py`, listed plainly:
          </Paragraph>
          <Table
            headers={['Setting', 'Value', 'Source']}
            rows={[
              ['`SECRET_KEY`', 'required from `DJANGO_SECRET_KEY`; startup crash if unset', 'environment (a gitignored `.env` locally; no dotenv loader in code)'],
              ['`DEBUG`', 'parsed from `IS_DEVELOPMENT`, <Bold>defaults to on</Bold>', 'environment'],
              ['`ALLOWED_HOSTS`', 'from `APP_HOSTS`, defaults to `127.0.0.1,localhost`', 'environment'],
              ['`CORS_ALLOW_ALL_ORIGINS`', '`True`, hardcoded (with `CORS_ALLOW_CREDENTIALS` also on, and a localhost:5173 entry in `CORS_ALLOWED_ORIGINS` that the wildcard makes moot)', 'settings'],
              ['Database', '<Bold>SQLite</Bold> at `DATA_DIR/db.sqlite3`', 'settings (`DJANGO_DATA_DIR` moves the directory)'],
              ['Email', '<Bold>console backend</Bold> by default; `EMAIL_*` and `DEFAULT_FROM_EMAIL` overridable via environment for SMTP; a startup warning fires if DEBUG is off and the console backend is still in use', 'settings'],
              ['JWT', '1-hour access; 7-day rotating, blacklisted refresh in the `ledgerflow_refresh` HttpOnly cookie', '`SIMPLE_JWT`, `REST_AUTH`'],
              ['OTP', '6-digit codes; 5 attempts; 60 s cooldown; 15/10-minute TTLs; per-IP 10/h and 20/h throttles', '`OTP` block, `REST_FRAMEWORK`'],
              ['Media', '`MEDIA_ROOT = DATA_DIR/uploads`, `MEDIA_URL = /bill_imgs/`', 'settings'],
              ['Upload ceiling', '10 MB, via a `getattr` default — `MAX_BILL_UPLOAD_BYTES` is referenced but never defined in settings', '`api/serializers.py`'],
            ]}
          />
        </SubSection>

        <SubSection id="deployment-status" title="11.3 Deployment status">
          <Paragraph>
            The repository <Bold>contains a deployment path</Bold>: a two-stage `Dockerfile` (Node 22 builds the SPA with `VITE_API_BASE_URL` as a build argument; Python 3.12-slim runs `gunicorn` with three workers behind WhiteNoise; `migrate` runs at container start; `DJANGO_DATA_DIR` is intended to point at a persistent volume), and git history showing a single-container/Railway-oriented configuration effort. It also pins `psycopg2-binary`, `dj-database-url`, and the AWS Elastic Beanstalk CLI in `requirements.txt` — traces of deployment experimentation. What the repository does <Bold>not</Bold> contain: any CI configuration, any evidence that a live deployment exists or where, or a non-SQLite database in the checked-in settings (the engine is hardcoded to sqlite3), and the checked-in posture is the development one (DEBUG on by default, console email, wildcard CORS). Until the environment is pointed at a real host, SMTP, and a persistent volume, "deployment" is a path the code is ready to take, not a thing the repository proves [VERIFY: whether a live deployment exists].
          </Paragraph>
        </SubSection>
      </Section>

      {/* 12. Limitations and Roadmap */}
      <Section id="limitations-roadmap" title="12. Limitations and Roadmap">

        <SubSection id="known-limitations" title="12.1 Known limitations">
          <Paragraph>
            Stated plainly, from the code:
          </Paragraph>
          <Paragraph><Bold>Client token storage.</Bold> The access token sits in `localStorage` (script-readable for up to one hour); the "remember me" unchecked branch writes to `sessionStorage`, which the API layer never reads, so that branch is inert [VERIFY].</Paragraph>
          <Paragraph><Bold>CORS is open.</Bold> `CORS_ALLOW_ALL_ORIGINS = True` with credentials allowed: any website the owner visits can make credentialed requests to the API with the owner's cookie.</Paragraph>
          <Paragraph><Bold>Uploaded files have a public path.</Bold> `/bill_imgs/&lt;path&gt;` is served without authentication next to the authenticated endpoint; a guessed filename (date + dealer slug is the storage pattern) is retrievable without a token.</Paragraph>
          <Paragraph><Bold>No route guard.</Bold> Protected pages render first and enforce by reacting to 401s; there is no upfront redirect or business bootstrap check before a page's effects fire.</Paragraph>
          <Paragraph><Bold>SQLite.</Bold> Single-writer; fine for one shop, a ceiling the moment real concurrency arrives.</Paragraph>
          <Paragraph><Bold>Balances aggregate per read.</Bold> The dashboard's outstanding panel runs a per-dealer grouped sum of all bills and all payments on every load; cost grows with the ledger's age, not its size.</Paragraph>
          <Paragraph><Bold>Dropped-in PDFs have no page count</Bold> (the server deliberately has no PDF reader); the UI shows "unknown."</Paragraph>
          <Paragraph><Bold>The admin site is live</Bold> at `/admin/` with all models registered, including read-only OTP rows; its exposure posture depends entirely on who the accounts are.</Paragraph>
          <Paragraph><Bold>One failing backend test</Bold> (section 10.2) and <Bold>34 standing frontend lint warnings</Bold> (section 10.3); <Bold>no frontend tests at all</Bold>.</Paragraph>
          <Paragraph><Bold>Throttling covers only the public OTP scopes.</Bold></Paragraph>
        </SubSection>

        <SubSection id="scalability-notes" title="12.2 Scalability notes">
          <Paragraph>
            Where the design would change at higher volume: the computed outstanding balance would move from per-read aggregation to a maintained figure — either a cached per-dealer balance or a ledger table of signed movements summed by index; SQLite would give way to PostgreSQL (the drivers are already in `requirements.txt`; the engine line in settings is the switch); the local uploads directory would move to object storage with the signed-URL or authenticated-redirect pattern; and the single gunicorn process would sit behind a load balancer with the token blacklist in a shared database. None of these is needed for one shop; all of it is deliberately <Bold>not</Bold> built.
          </Paragraph>
        </SubSection>

        <SubSection id="planned-work" title="12.3 Planned work">
          <Paragraph>
            The repository contains no roadmap document, so the honest list is the work the code itself is positioned for: switching `EMAIL_BACKEND` to SMTP (the settings already read `EMAIL_HOST`, `EMAIL_PORT`, `EMAIL_HOST_USER`, `EMAIL_HOST_PASSWORD` and `DEFAULT_FROM_EMAIL` from the environment), pointing `DJANGO_DATA_DIR` at a persistent volume and `DJANGO_SECRET_KEY`/`APP_HOSTS` at real values in the deploy environment, setting the `VITE_API_BASE_URL` build argument, and deciding the CORS posture for that host. Reasonable next engineering steps, in the order the code hints at: fix the one failing auth test (read the refresh from the cookie), work down the lint warnings, add frontend tests for `src/lib/` and the refresh-retry path, close the unauthenticated media path, and add a route guard. [VERIFY: confirm the maintainer's actual priorities before publishing any of this as "planned."]
          </Paragraph>
        </SubSection>
      </Section>

      {/* Appendix */}
      <Section id="appendix" title="Appendix">

        <SubSection id="api-reference" title="A. API reference">
          <Paragraph>
            All paths under the API base. "Scope" — <Bold>all</Bold>: every authenticated user with a business; the object is visible only within the caller's tenant.
          </Paragraph>
          <Table
            headers={['Endpoint', 'Methods', 'Purpose']}
            rows={[
              ['`/api/auth/registration/`', 'POST', 'Create account + business; emails a verification code (201)'],
              ['`/api/auth/registration/resend-email/`', 'POST', 'Re-issue the verification code (supersedes the old; allauth rate-limits resends)'],
              ['`/api/auth/otp/verify-email/`', 'POST', 'Verify the code; flips the address to verified; login then possible'],
              ['`/api/auth/otp/password/request/`', 'POST', 'Email a reset code; identical response whether or not the account exists'],
              ['`/api/auth/otp/password/verify/`', 'POST', 'Check a reset code without consuming it (Settings page)'],
              ['`/api/auth/otp/password/confirm/`', 'POST', 'Confirm code + set the new password (current password validators apply)'],
              ['`/api/auth/login/`', 'POST', 'Verify email+password (verification mandatory); returns access + user; refresh set as HttpOnly cookie'],
              ['`/api/auth/logout/`', 'POST', 'Blacklist the refresh token (read from the cookie); clear cookies'],
              ['`/api/auth/token/refresh/`', 'POST', 'Rotate the refresh, blacklist the old, issue a new access + refresh cookie'],
              ['`/api/auth/token/verify/`', 'POST', 'Check an access token (dj-rest-auth)'],
              ['`/api/auth/user/`', 'GET, PATCH', 'The signed-in user plus a nested read-only `{id, name}` business'],
              ['`/api/auth/password/change/`', 'POST', 'Change password; current password required (enforced in settings)'],
              ['`/api/dealers/`', 'GET, POST, PATCH', 'List (search, is_active, 50/page) / create / correct; balance computed; no PUT/DELETE'],
              ['`/api/dealers/{id}/`', 'GET, PATCH', 'Read / correct one dealer (404 if not the caller\'s)'],
              ['`/api/bills/`', 'GET, POST, PATCH', 'List (dealer, date range) / create (PDF or photos) / correct; no PUT/DELETE'],
              ['`/api/bills/{id}/`', 'GET, PATCH', 'Read / correct (file replace via multipart PATCH)'],
              ['`/api/bills/{id}/file/`', 'GET', 'The bill\'s PDF, authenticated; `?download=1` for attachment'],
              ['`/api/bills/purchases/`', 'GET', '`?period=week\\|month\\|quarter` — period total, count, per-dealer split'],
              ['`/api/payments/`', 'GET, POST, PATCH', 'List (dealer, method, date range) / create / correct; no PUT/DELETE'],
              ['`/api/payments/{id}/`', 'GET, PATCH', 'Read / correct one payment'],
              ['`/api/payments/methods/`', 'GET', 'The five method choices as `{value, label}` pairs'],
              ['`/api/cashbook/`', 'GET', 'List (date range, 50/page)'],
              ['`/api/cashbook/by-date/{date}/`', 'GET, PUT, DELETE', 'Read a day (404 if none) / idempotent create-or-replace / delete a day'],
              ['`/api/business/`', 'GET, PATCH', 'The caller\'s singleton business; rename via PATCH; no `{id}` route, no PUT'],
              ['`/api/tasks/`', 'GET, POST, PATCH, DELETE', 'List / add / correct / delete (the only resource with DELETE)'],
              ['`/api/tasks/{id}/`', 'GET, PATCH, DELETE', 'Read / correct / delete one task'],
              ['`/api/collection-trend/`', 'GET', '`?period=…` — current vs previous period, change %, gap-filled series'],
              ['`/api/dashboard-summary/`', 'GET', '`?period=…` — in progress, net cash flow, purchasing, outstanding tray'],
              ['`/bill_imgs/<path>`', 'GET', '<Bold>Unauthenticated</Bold> static serving of uploaded files (the authenticated endpoint is the intended reader; see section 12.1)'],
              ['`/(anything else)`', 'GET', 'The built SPA\'s `index.html` (Django catch-all)'],
            ]}
          />
        </SubSection>

        <SubSection id="glossary" title="B. Glossary">
          <Table
            headers={['Term', 'Meaning in this system']}
            rows={[
              ['<Bold>Tenant</Bold>', 'A `Business` row and everything that carries its id — the unit of isolation. One account owns exactly one tenant.'],
              ['<Bold>Dealer</Bold>', 'A counterparty with an account in the ledger: a name, optional GSTIN, an opening balance, an active/retired flag. The paper ledger\'s page per relationship.'],
              ['<Bold>Outstanding balance</Bold>', '`opening_balance + all bills − all payments` for a dealer, computed on read and never stored. Positive: the shop owes the dealer. Negative: the dealer is in credit.'],
              ['<Bold>Cashbook</Bold>', 'The day\'s collections by method (UPI, cash, card) with a database-derived total; one row per day per business. The paper ledger\'s daily column, digitized.'],
              ['<Bold>OTP</Bold>', 'One-time password: the 6-digit numeric code emailed for verification or reset, stored as a keyed hash, single-use, expiring, attempt-capped.'],
              ['<Bold>Audit trail</Bold>', 'The simple-history mirror tables: one row per create/change/delete of a versioned model, with the acting user and timestamp.'],
              ['<Bold>HttpOnly cookie</Bold>', 'A browser cookie JavaScript cannot read; used here so the 7-day refresh token is invisible to page scripts.'],
              ['<Bold>Idempotent</Bold>', 'Repeating an operation has the same effect as doing it once; the cashbook\'s per-day PUT is the system\'s example.'],
              ['<Bold>Serializer</Bold>', 'The DRF layer that validates request data and renders response data for a model or shape.'],
              ['<Bold>Generated column</Bold>', 'A database column whose value the database computes from other columns (the cashbook total); the API treats it as read-only.'],
              ['<Bold>Single-flight</Bold>', 'Collapsing many concurrent identical operations into one in-flight operation that all waiters share; the frontend\'s refresh does this.'],
            ]}
          />
        </SubSection>

        <SubSection id="environment-dependencies" title="C. Environment and dependency list">
          <Paragraph>
            <Bold>Python (pinned in `requirements.txt`)</Bold> — Django 5.2.4 · djangorestframework 3.16.0 · djangorestframework-simplejwt 5.5.1 · dj-rest-auth 7.2.0 · django-allauth 65.19.2 · django-cors-headers 4.9.0 · django-filter 25.1 · django-simple-history 3.7.0 · django-widget-tweaks 1.5.0 · Pillow 11.3.0 · PyJWT 2.13.0 · gunicorn 23.0.0 · whitenoise 6.12.0 · psycopg2-binary 2.9.10 · dj-database-url 3.0.1 · python-dotenv 1.2.4 (listed, but no `load_dotenv` call exists in the code) · awsebcli 3.25 + botocore + fabric/invoke/paramiko (deployment-tooling traces) · django-stubs (type-checking support).
          </Paragraph>
          <Paragraph>
            <Bold>JavaScript (`frontend/package.json`)</Bold> — react 19.2.8 · react-dom 19.2.8 · react-router-dom 7.18.4 (runtime); vite 8.3.0 · @vitejs/plugin-react 6.1.1 · oxlint 1.81.0 · TypeScript type packages (dev). No test framework, no chart library, no state library.
          </Paragraph>
          <Paragraph>
            <Bold>Build</Bold> — `node:22-alpine` for the SPA stage, `python:3.12-slim` for the runtime stage (Dockerfile); the SPA build is configured for a `/static/` asset base in production mode.
          </Paragraph>
        </SubSection>
      </Section>

      {/* Verification List */}
      <Section id="verification-list" title="REMOVE BEFORE PUBLISHING: Verification list">

        <Paragraph>
          <Bold>[VERIFY] items used in the text</Bold>
        </Paragraph>

        <SubSection id="verify-1" title="1. Section 6.3 / 12.1 — remember me sessionStorage bug">
          <Paragraph>
            The "remember me" unchecked branch in `Login.jsx` writes the access token to `sessionStorage`, but `apiRequest` and `tokenRefresh.jsx` read only `localStorage`. Described as inert; confirm with the maintainer whether this is a known bug or intended (and whether the `refresh` value written to web storage — always empty under `JWT_AUTH_HTTPONLY` — is dead code to delete).
          </Paragraph>
        </SubSection>

        <SubSection id="verify-2" title="2. Section 11.1 — .env loading">
          <Paragraph>
            `settings.py` reads `DJANGO_SECRET_KEY` from the environment with no default, and `python-dotenv` is pinned but no `load_dotenv()` call exists anywhere in the repository. A gitignored `.env` file is present in the working tree. Confirm how the developer's local environment actually loads `.env` (shell, editor run configuration, or an uncommitted helper) before describing local setup.
          </Paragraph>
        </SubSection>

        <SubSection id="verify-3" title="3. Section 11.3 — live deployment">
          <Paragraph>
            Confirm whether a live deployment exists (the Dockerfile and settings comments reference Railway; nothing in the repository proves one is running, and `requirements.txt` shows traces of both Railway and AWS EB experimentation).
          </Paragraph>
        </SubSection>

        <SubSection id="verify-4" title="4. Section 12.3 — actual priorities">
          <Paragraph>
            Confirm the maintainer's actual prioritized backlog; the "planned work" list is inferred from configuration levers already present in the code, not from any roadmap file.
          </Paragraph>
        </SubSection>

        <SubSection id="verify-5" title="5. Diagram checklist">
          <Paragraph>
            The outline references `docs/ARCHITECTURE.md` (container and ER diagrams "already drafted"), but no `docs/` directory exists anywhere in the repository. All 22 placeholders in this document were written from the code alone.
          </Paragraph>
        </SubSection>

        <SubSection id="disagreements" title="Where the code and the outline's starting facts disagreed or needed qualification">

          <SubSection id="disagree-6" title="6. Hash precision">
            <Paragraph>
              The outline's "one-time codes are stored as hashes" is more precisely: stored as <Bold>HMAC-SHA256 digests keyed with `SECRET_KEY`</Bold> (`otp.hash_code`), not plain hashes — the text says so.
            </Paragraph>
          </SubSection>

          <SubSection id="disagree-7" title="7. API-only claim">
            <Paragraph>
              The outline's "the backend is API-only" is true of application UI, but the process also serves the Django admin and the built SPA via WhiteNoise, and public media — stated in 3.1 and 6.4 rather than a blanket "API-only" claim.
            </Paragraph>
          </SubSection>

          <SubSection id="disagree-8" title="8. Test report discrepancy">
            <Paragraph>
              The outline expected a clean test report; the real result is <Bold>87 tests, 86 pass, 1 error</Bold> (`AuthFlowTests.test_full_registration_to_logout_flow`). Root cause confirmed by experiment: under dj-rest-auth 7.2.0 with `JWT_AUTH_HTTPONLY: True`, the login response body carries `refresh: ""` (the real token is only in the cookie), and the test asserts on the body value. This is a pre-existing test defect (the setting predates the test file in git history), reported in 10.2, not fixed.
            </Paragraph>
          </SubSection>

          <SubSection id="disagree-9" title="9. Lint warnings quantified">
            <Paragraph>
              The outline's "lint warnings" gap is quantified from a real run: oxlint reports <Bold>34 warnings, 0 errors</Bold> (exit 0) — but only because `node_modules` had to be installed first (it is not committed).
            </Paragraph>
          </SubSection>

          <SubSection id="disagree-10" title="10. MAX_BILL_UPLOAD_BYTES undefined">
            <Paragraph>
              `MAX_BILL_UPLOAD_BYTES` is referenced in `api/serializers.py` via `getattr(settings, …, 10 MB)` but is <Bold>not defined in `settings.py`</Bold> — the 10 MB default always applies and is only overridable in tests. The frontend mirrors the same 10 MB with a comment acknowledging it is "today's server fallback, not a setting."
            </Paragraph>
          </SubSection>
        </SubSection>

        <SubSection id="notices" title="Notices">

          <SubSection id="notice-11" title="11. Uncommitted changes">
            <Paragraph>
              The working tree contains <Bold>uncommitted changes</Bold> to `jbb_projects/settings.py` (switching `SECRET_KEY` from a hardcoded insecure fallback to a required environment variable) and `requirements.txt` (from loose ranges to full pinning), plus untracked `LedgerFlow.zip` / `LedgerFlow1.zip` archives. This document describes the <Bold>working tree</Bold> as found; if the uncommitted work is not merged, section 11.2's `SECRET_KEY` row and Appendix C's "fully pinned" wording need revisiting.
            </Paragraph>
          </SubSection>

          <SubSection id="notice-12" title="12. Traces in requirements.txt">
            <Paragraph>
              `requirements.txt` pins `psycopg2-binary` and `dj-database-url` while `settings.py` hardcodes the sqlite3 engine, and `django-stubs`/`python-dotenv` appear unused by the checked-in code — listed in Appendix C as traces rather than explained as active configuration.
            </Paragraph>
          </SubSection>

          <SubSection id="notice-13" title="13. Unauthenticated media route">
            <Paragraph>
              The unauthenticated `/bill_imgs/&lt;path&gt;` media route is reachable regardless of DEBUG (it is a normal URL, not the debug static handler); it is reported as a gap in 6.4/12.1. Whether it should be gated, deleted, or left for a local-dev convenience is a maintainer decision.
            </Paragraph>
          </SubSection>

          <SubSection id="notice-14" title="14. No history API endpoint">
            <Paragraph>
              The historical (audit) tables are browsable only through the Django admin — there is no API endpoint exposing history — worth a one-liner if the "auditability" requirement is read by an external audience.
            </Paragraph>
          </SubSection>
        </SubSection>
      </Section>
    </Document>
  );
}
