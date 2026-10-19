'use client';
import {
  Document,
  Section,
  Paragraph,
  ImageDisplay,
} from "./writingTools";
import Bold from "./bold";
import Italic from "./italic";

export default function LedgerFlow() {
  const tableOfContents = [
    { id: "why-it-exists", label: "Why it exists", level: 0 },
    { id: "tenant-isolation", label: "One shop's data stays its own", level: 0 },
    { id: "computed-balance", label: "The balance is computed, never stored", level: 0 },
    { id: "audit-trail", label: "A ledger is an audit trail", level: 0 },
    { id: "cashbook-save", label: "Saving a day in the cashbook", level: 0 },
    { id: "frontend", label: "The frontend, deliberately bare", level: 0 },
    { id: "where-it-stands", label: "Where it stands", level: 0 },
  ];

  return (
    <Document tableOfContents={tableOfContents} title="LedgerFlow">
      <Paragraph>
        A web ledger for a small retail shop. I built it for how my father actually works — not for how accounting software thinks he should.
      </Paragraph>
      <Paragraph>
        <Bold>Stack:</Bold> Django + DRF + SQLite, React
      </Paragraph>

      <Section id="why-it-exists" title="Why it exists">
        <Paragraph>
          My father has run his shop on notebooks for years — dealer balances, daily money-in, physical bills filed in folders to cross-check what he owes. The pile now weighs kilos in our house. It worked, until it didn't have to. He bought a subscription to a proper accounting app and ended up abandoning it: to record today's cash, the app wants a bill, and the bill wants items in inventory with names, MRP, cost — <Italic>complete</Italic> accounting, and for a busy shop with no one dedicated to running it, that completeness is the problem. He ended up with more work, not less.
        </Paragraph>
        <Paragraph>
          So I built the digital version of what he was already doing. His daily UPI / cash / card column became a table with the same columns. His bill folders became rows — pick the dealer, type the amount, upload a photo of the bill (he was already photographing them when he couldn't carry them). His per-dealer diary became the payments page. And because it's digital, I can hand him numbers he'd never add up by hand.
        </Paragraph>
      </Section>

      <Section id="tenant-isolation" title="One shop's data stays its own">
        <Paragraph>
          From day one, the system is multi-tenant — isolation by construction, not by discipline. The server works out who you are from the token, never from what the request claims, and it stamps ownership on the server side when a record is created, so a client can't write into another shop. Every query runs against a queryset that is already scoped to the caller's business, before view logic even runs. And a foreign id doesn't 403 — it 404s. A filtered queryset simply matches nothing, so another shop's data never confirms its own existence.
        </Paragraph>
        <ImageDisplay
          images={[
            {
              src: '/LedgerFlow_assets/Tenant%20Isolation%20Authorization%20Flowchart.png',
              title: "How a request gets scoped to the caller's shop",
            },
          ]}
        />
      </Section>

      <Section id="computed-balance" title="The balance is computed, never stored">
        <Paragraph>
          The outstanding balance per dealer — the whole point of the app — is derived on every read: opening balance, plus his bills, minus his payments. I could have stored a balance column and updated it on every entry, but a stored balance rots. Bills and payments feed that column; miss the update in even one code path and it's silently wrong forever, with nothing to notice. And the app allows back-dated entries — which a stored balance would corrupt against numbers you'd already reconciled. Recomputing it can't drift, and at one shop's volume the cost is nothing.
        </Paragraph>
        <ImageDisplay
          images={[
            {
              src: '/LedgerFlow_assets/Dealer%20Outstanding%20Balance%20Formula.png',
              title: "Outstanding balance = opening + bills − payments",
            },
          ]}
        />
      </Section>

      <Section id="audit-trail" title="A ledger is an audit trail">
        <Paragraph>
          There is no delete in the backend — anywhere, except the to-do list, which is disposable. The domain rules this: once money moved, the record must stay explainable, so you <Italic>correct</Italic> an entry, you never erase it. Every change through an edit writes a history row, so "what did this look like before?" is always answerable. Even a dealer is <Italic>retired</Italic>, not removed — deleting him would orphan every bill and payment against him and destroy the proof that money changed hands, which is factually wrong: the shop <Italic>did</Italic> do business with him.
        </Paragraph>
        <ImageDisplay
          images={[
            {
              src: '/LedgerFlow_assets/Business%20Ownership%20and%20Historical%20ER%20Diagram.png',
              title: "Ownership and history: edits leave a trail, dealers retire",
            },
          ]}
        />
      </Section>

      <Section id="cashbook-save" title="Saving a day in the cashbook">
        <Paragraph>
          His daily money-in is one row per date — UPI, cash, card — and saving it uses a single endpoint for any date. It's an idempotent PUT: the client sends the whole day, the database recomputes the total (a generated column the client can never set), and a unique (shop, date) constraint makes a duplicate row impossible. So picking a past date, editing it, and saving again is the exact same call. One API, create or replace.
        </Paragraph>
        <ImageDisplay
          images={[
            {
              src: '/LedgerFlow_assets/Idempotent%20Cashbook%20Save%20Flow.png',
              title: "One endpoint for any date: idempotent PUT + unique constraint",
            },
          ]}
        />
      </Section>

      <Section id="frontend" title="The frontend, deliberately bare">
        <Paragraph>
          I'm primarily a backend person, so I kept the client's dependency surface to React and a router — and hand-drew the three charts in SVG — because I want to understand and own every part of what I ship. And for this problem, bare is the right call: the data shapes are small and fixed — a month is at most 31 points, a quarter about 14 — which is exactly the scale where a charting or state library would be <Italic>more</Italic> complexity than the problem has. The moment a shape stops being small and fixed — user-configurable charts, large datasets — the hand-rolled cost exceeds the dependency cost, and I'd reach for one.
        </Paragraph>
        <ImageDisplay
          images={[
            {
              src: '/LedgerFlow_assets/Frontend%20Module%20Map%20Infographic.png',
              title: "Per-page modules: page fetches, components render, no shared state library",
            },
          ]}
        />
      </Section>

      <Section id="where-it-stands" title="Where it stands">
        <Paragraph>
          The backend is tested against the real HTTP surface — I exercise the registration and email-verification flow, cross-tenant access, bill file handling, the cashbook's by-date save, and the period arithmetic. The frontend is still in progress; a test harness there is a next step.
        </Paragraph>
        <Paragraph>
          If I rebuilt it today I'd do one thing differently: use the auth library's built-in code-based verification instead of the engine I wrote from scratch — I've since learned it exists, and it does what I needed.
        </Paragraph>
        <Paragraph>
          <Bold>Next:</Bold> a mobile client — the least-friction way for him to add data, and the camera makes bill photos natural. Then dashboards that <Italic>answer a question</Italic> — the point is to make a lot of data readable in seconds, so the right graph per question, not something that just looks fancy. And Postgres when it's more than one shop.
        </Paragraph>
      </Section>
    </Document>
  );
}
