"use client";
import { useState, useEffect } from "react";
import ContentTable from "./contentTable";
import {
  Document,
  Section,
  SubSection,
  Paragraph,
  Heading,
  List,
  SubsectionHighlight,
  Code,
  ImageDisplay,
} from "./writingTools";
import Head from "next/head";
export default function AssetGeneration() {
  const tableOfContents = [
    {
      id: "introduction",
      label: "Introduction: The Real Problem Behind AI Marketing Assets ",
      level: 0,
    },
    {
      id: "SystemArchitecture",
      label: "High-Level System Architecture",
      level: 0,
    },
    {
      id: "FormBuilder",
      label: "Dynamic Admin-Driven Form Builder ",
      level: 0,
    },
    {
      id: "AI-PoweredBrandContextGeneration",
      label: "AI-Powered Brand Context Generation",
      level: 0,
    },
    {
      id: "TheCriticalDesignPivot",
      label: "The Critical Design Pivot ",
      level: 0,
    },
    {
      id: "ImageGeneration&OrchestrationPipeline",
      label: "Image Generation & Orchestration Pipeline ",
      level: 0,
    },
    {
      id: "Grid-BasedLayoutAbstraction",
      label: "Grid-Based Layout Abstraction ",
      level: 0,
    },
    {
      id: "FinalAssetCompositionEngine",
      label: "Final Asset Composition Engine ",
      level: 0,
    },
    {
      id: "LimitationsFutureImprovements",
      label: "Limitations & Future Improvements",
      level: 0,
    },
    { id: "Conclusion", label: "Conclusion", level: 0 },
    { id: "demo", label: "Project Images", level: 0 },
  ];
  return (
    <Document
      title={"AI-Powered Marketing Creatives Platform"}
      tableOfContents={tableOfContents}
      subtitle={"Technical Documentation"}
      showDemo={true}
    >
      <ImageDisplay
        images={[
          {
            src: "demos/assetGeneration/sampleOutput.png",
            title: "Sample Output",
            description:
              "Prompt for this output was : I'm offering customers a new brunch experience in the mountain greenwoods, enjoying the fresh air and all that nature offers. This provides an exclusive experience of a new kind of luxury that brings calm to the soul.",
          },
        ]}
      ></ImageDisplay>
      <Section
        title={"Introduction: The Real Problem Behind AI Marketing Assets"}
        id={"introduction"}
      >
        <Paragraph>
          When people hear “AI-powered marketing creatives,” the first thing
          that comes to mind is text-to-image models generating posters
          automatically.
        </Paragraph>
        <Paragraph>
          But in practice, generating an image is not the hard part.{" "}
        </Paragraph>
        <Paragraph>
          The real challenge is generating usable marketing assets.{" "}
        </Paragraph>
        <Paragraph>
          Most end-to-end AI image generation tools can create visually
          impressive images. However, when applied to real marketing workflows,
          several problems appear immediately:{" "}
        </Paragraph>
        <List
          items={[
            "Text is often distorted or unreadable ",
            "Logos are misaligned or incorrectly rendered ",
            "Brand colors are ignored ",
            "Layout structure varies unpredictably ",
            "Industry-specific design conventions are not respected ",
          ]}
        ></List>
        <Paragraph>
          A food advertisement requires bold typography and vibrant contrast. A
          real estate banner demands clean spacing, balanced composition, and
          restrained color palettes.{" "}
        </Paragraph>
        <Paragraph>
          Generic AI models do not understand these constraints by default. And
          that’s where the core problem exists.{" "}
        </Paragraph>
        <SubSection title={"The Gap Between “AI Image” and “Marketing Asset” "}>
          <Paragraph>
            An AI-generated image is not the same thing as a marketing
            creative.{" "}
          </Paragraph>
          <Paragraph>A marketing creative must: </Paragraph>
          <List
            items={[
              "Follow brand guidelines ",
              "Maintain consistent layout structure ",
              "Keep text readable ",
              "Position logos correctly ",
              "Respect hierarchy (Title → Offer → CTA → Branding) ",
              "Adapt to industry design patterns ",
            ]}
          ></List>
          <Paragraph>
            Without structure, even a visually appealing image becomes unusable
            in a real campaign.
          </Paragraph>
          <Paragraph>
            Not just to generate images — but to generate controlled,
            brand-consistent, layout-aware marketing assets.
          </Paragraph>
        </SubSection>
        <SubSection title={"Core Objective "}>
          <Paragraph>
            The objective of this platform was to design a system that balances:
          </Paragraph>
          <List
            items={[
              "AI-driven creativity ",
              "Structured layout control ",
              "Brand personalization ",
              "Industry-aware styling ",
            ]}
          ></List>
          <Paragraph>
            Instead of relying entirely on generative models to handle
            everything, the system introduces structured constraints and
            workflow orchestration to improve reliability
          </Paragraph>
          <Paragraph>
            The result is not just an image — but a reproducible, controlled
            marketing output.{" "}
          </Paragraph>
        </SubSection>
      </Section>
      <Section
        id={"SystemArchitecture"}
        title={"High-Level System Architecture"}
      >
        <SubSection title={"React + Django + n8n "}>
          <Paragraph>
            When building this platform, I didn’t want a single monolithic
            system where UI logic, business rules, and AI workflows were tightly
            coupled together. The goal was flexibility, experimentation speed,
            and long-term scalability.{" "}
          </Paragraph>
          <Paragraph>
            To achieve that, I designed the system as a three-layer
            architecture:{" "}
          </Paragraph>
          <Paragraph>
            React (Frontend) → Django (Backend) → n8n (Workflow
            Orchestration){" "}
          </Paragraph>
          <Paragraph>
            Each layer has a clearly defined responsibility.{" "}
          </Paragraph>
        </SubSection>
        <ImageDisplay images={[{src: "/demos/assetGeneration/techresponsibilty.png"}]}></ImageDisplay>
        <SubsectionHighlight heading={"Why This Architecture? "}>
          <List
            items={[
              "Separation of Concerns",
              "Flexibility",
              "Faster Experimentation",
            ]}
          ></List>
        </SubsectionHighlight>
      </Section>
      <Section id={"FormBuilder"} title={"Dynamic Admin-Driven Form Builder"}>
        <Paragraph>
          One of the most critical parts of the platform wasn’t AI — it was
          structure. Before generating meaningful marketing creatives, the
          system needed clean, structured brand data. Different industries
          require different inputs: a restaurant cares about menu highlights and
          offers, while a real estate agency focuses on property details.
          Hardcoding separate forms for each use case would have created
          constant backend changes and redeployments.{" "}
        </Paragraph>
        <Paragraph>
          To eliminate that bottleneck, I built a Dynamic Admin-Driven Form
          Builder — a schema-driven system that allows administrators to
          configure forms without writing code.{" "}
        </Paragraph>
        <SubSection title={"Core Architecture "}>
          <Paragraph>The system operates in two layers: </Paragraph>
          <SubSection title={"Admin Layer (Form Builder):"}>
            <Paragraph>
              {" "}
              Administrators define form structure through a UI. They can create
              sections, choose field types, configure validation rules, and
              define conditional logic. The entire configuration is stored as
              structured JSON in the database.
            </Paragraph>
            <ImageDisplay
              images={[
                {
                  src: "/demos/assetGeneration/adminFormbuilder.png",
                  title: "Admin form builder",
                  description:
                    "Enable form builing with GUI interface. From are updated and created with need of redeploying",
                },
              ]}
            ></ImageDisplay>
          </SubSection>
          <SubSection title={"User Layer (Dynamic Renderer):"}>
            <Paragraph>
              When a user accesses a form, the frontend fetches the JSON schema,
              parses it, and dynamically renders fields using mapped React
              components. Validation rules and conditional display logic are
              interpreted at runtime.
            </Paragraph>
            <Paragraph>
              Because forms are schema-driven, no database migrations are
              required when requirements change. PostgreSQL JSON stores flexible
              definitions while maintaining a stable relational structure.
            </Paragraph>
          </SubSection>

          <SubSection title={"Intelligence & Flexibility "}>
            <Paragraph>
              The builder supports basic inputs (text, number, date), choice
              fields (dropdowns, radio buttons), and advanced elements such as
              file uploads, repeatable sections, calculated fields, and
              conditional visibility rules.{" "}
            </Paragraph>
            <Paragraph>
              The builder supports basic inputs (text, number, date), choice
              fields (dropdowns, radio buttons), and advanced elements such as
              file uploads, repeatable sections, calculated fields, and
              conditional visibility rules.{" "}
            </Paragraph>
            <Paragraph>
              This component became the foundation of the AI system — capturing
              structured brand context that powers personalized, scalable asset
              generation across industries without developer intervention.{" "}
            </Paragraph>
          </SubSection>
        </SubSection>
      </Section>
      <Section
        id={"AI-PoweredBrandContextGeneration"}
        title={"AI-Powered Brand Context Generation"}
      >
        <Paragraph>
          Generic AI tools can generate content, but they don’t understand your
          brand. They respond to prompts in isolation, without memory of tone,
          positioning, or audience. That gap creates inconsistency — especially
          in marketing.
        </Paragraph>
        <Paragraph>
          To address this, I built a Brand Context Generation layer that
          transforms structured business inputs into a reusable AI knowledge
          base.
        </Paragraph>
        <SubSection title={"What is Brand Context? "}>
          <Paragraph>
            Brand Context is an AI-generated brand intelligence profile that
            captures:{" "}
          </Paragraph>
          <List
            items={[
              "Brand voice and tone ",
              "Target audience characteristics ",
              "Visual preferences ",
              "Industry positioning ",
              "Messaging style ",
              "Product or service details ",
            ]}
          ></List>
          <Paragraph>
            Instead of rewriting prompts for every request, the system builds
            this context once and applies it across all future generations
          </Paragraph>
          <Heading>How It Works </Heading>
          <Heading>1. Structured Input Collection</Heading>
          <Paragraph>
            Brand data is collected through dynamic forms — covering business
            details, tone preferences, audience definitions and even example
            content uploads. This ensures the AI works with clean, structured
            inputs rather than vague instructions.
          </Paragraph>
          <Heading>2. AI Processing & Synthesis</Heading>
          <Paragraph>
            An AI pipeline analyzes the submitted data, extracts consistent
            messaging patterns, interprets visual signals (if assets are
            provided), and synthesizes everything into a structured Brand
            Profile Document stored in the database.
          </Paragraph>
          <Heading>3. Context-Aware Prompt Construction</Heading>
          <Paragraph>
            When a user requests content — for example, “Create a Instagram post
            for our new feature” — the system automatically injects brand voice,
            audience context, and industry style into the generation prompt.
          </Paragraph>
          <Paragraph>
            The result is output that feels aligned, not generic.{" "}
          </Paragraph>
          <SubsectionHighlight heading={"Why It Matters "}>
            This approach enables one-time setup with long-term reuse,
            consistent brand identity across assets, faster generation, and
            scalable personalization. Instead of being a generic content engine,
            the system becomes brand-aware infrastructure — turning automation
            into strategic marketing execution.
          </SubsectionHighlight>
        </SubSection>
      </Section>
      <Section
        id={"TheCriticalDesignPivot"}
        title={"The Critical Design Pivot"}
      >
        <Paragraph>
          When generative image models first became accessible, the natural
          instinct was simple: let the AI do everything. The workflow looked
          clean on paper — user enters a prompt, the model generates a complete
          marketing image. In reality, the results were unpredictable. Layouts
          changed every time. Text was often distorted or unreadable.
        </Paragraph>
        <Paragraph>
          Logos appeared stretched or misplaced. Brand colors were “almost
          right,” but never consistent.
        </Paragraph>
        <Paragraph>
          The breakthrough came from a simple realization: AI should not control
          structure. Humans should.{" "}
        </Paragraph>
        <Paragraph>
          Rather than asking the model to design entire compositions from
          scratch, the system was redesigned around layout constraints.
          Structural elements — canvas size, logo placement, text zones, CTA
          position, typography rules, and brand colors — were predefined in
          rigid templates. These elements never change.{" "}
        </Paragraph>
        <Paragraph>
          AI was then limited to what it does best: generating creative
          variations within boundaries. It could produce background visuals,
          suggest headlines within character limits, adapt tone, and harmonize
          colors — but only inside fixed regions.{" "}
        </Paragraph>
        <Paragraph>
          This separation of structure and content transformed the system.
          Outputs became predictable. Branding stayed consistent. Text remained
          readable.
        </Paragraph>
        <Paragraph>
          The shift wasn’t about restricting AI. It was about directing it.{" "}
        </Paragraph>
        <Paragraph>
          By combining human-defined structure with AI-driven creativity, the
          platform moved from chaotic experimentation to controlled scalability
          — turning generative design into a reliable production tool rather
          than an unpredictable black box.{" "}
        </Paragraph>
      </Section>
      <Section
        id={"ImageGeneration&OrchestrationPipeline"}
        title={"Image Generation & Orchestration Pipeline"}
      >
        <Paragraph>
          When a user clicks “Generate Image”, it looks instant. Behind the
          scenes, it’s anything but. The system must validate the request,
          trigger multiple AI services, store large files securely, handle
          failures, update databases, and notify the user — all without making
          them wait 60 seconds for an HTTP response. Doing this synchronously
          would cause timeouts and a terrible UX. The solution was an
          asynchronous orchestration pipeline, with Django as the control layer
          and n8n as the workflow engine.{" "}
        </Paragraph>
        <SubSection title={"The High-Level Flow "}>
          <ImageDisplay images={[{src: '/demos/assetGeneration/completeFlow.png', title: 'Flow diagram'}]}></ImageDisplay>
          <Paragraph>
            Django handles authentication, validation, quotas, and database
            records. It immediately returns a "queued" response so the UI stays
            responsive. The heavy lifting begins in the background.
          </Paragraph>
          <Heading>Inside the Workflow </Heading>
          <Paragraph>
            Once n8n receives the webhook, it orchestrates a structured
            pipeline:{" "}
          </Paragraph>
          <Heading>Preparation Phase </Heading>
          <List
            items={[
              "Load brand context ",
              "Fetch template definition ",
              "Get's user prompt",
            ]}
          ></List>
          <Heading>AI Generation Phase </Heading>
          <List
            items={[
              "Figure out content (title, CTA etc) ",
              "Fonts to use",
              "Generate the background image ",
              "Apply layout constraints and branding ",
              "Select colors for according to user's prompt and visibility on backgrond images",
            ]}
          ></List>
          <Heading>Storage & Callback </Heading>
          <Paragraph>
            When generation succeeds, the image is uploaded to object storage
            using tenant-isolated paths. Metadata (model used, generation time,
            cost) is stored alongside it.{" "}
          </Paragraph>
          <Paragraph>n8n then calls back to Django, which: </Paragraph>
          <List
            items={[
              "Generate image using data sent from N8N",
              "Updates the record (queued → completed) ",
              "Notifies the user via WebSocket",
            ]}
          ></List>
          <SubsectionHighlight heading={"Why This Works "}>
            <Paragraph>
              This architecture keeps responsibilities clean:{" "}
            </Paragraph>
            <List
              items={[
                "Django = state, auth, business logic",
                "n8n = orchestration and retries ",
                "AI services = pure generation ",
                "Object storage = scalable storage ",
              ]}
            ></List>
            <Paragraph>
              The result is a system that feels instant to users but operates
              reliably at scale — transforming AI image generation from a
              fragile experiment into a production-ready pipeline.{" "}
            </Paragraph>
          </SubsectionHighlight>
        </SubSection>
      </Section>
      <Section
        id={"Grid-BasedLayoutAbstraction"}
        title={"Grid-Based Layout Abstraction"}
      >
        <Paragraph>
          (Why semantic positioning beats raw pixel coordinates){" "}
        </Paragraph>
        <Paragraph>
          When I first built the image renderer, layouts were defined using
          fixed pixel coordinates:{" "}
        </Paragraph>
        <List
          items={[
            "title_bbox = (50, 150, 1030, 350)",
            "logo_bbox  = (50, 50, 250, 250)",
          ]}
        ></List>
        <Paragraph>It worked — until it didn’t. </Paragraph>
        <Paragraph>
          The moment I introduced multiple formats (1080×1080 posts and
          1080×1920 stories), everything became fragile. Each new canvas size
          required recalculating coordinates manually. Adjusting spacing meant
          trial-and-error math. Adding another format like landscape? Start over
          again.{" "}
        </Paragraph>
        <Paragraph>
          The core issue wasn’t the math. It was the mental model. AI can't
          imagine handling pixel accuracy because it doesn't actually know how
          much space elements gonna take, causing overlapping, text getting out
          of the image.
        </Paragraph>
        <Heading>The Shift: From Pixels to Semantics </Heading>
        <Paragraph>Instead of saying: </Paragraph>
        <Paragraph>“Put the logo at (50, 50)” </Paragraph>
        <Paragraph>The system now says: </Paragraph>
        <Paragraph>“Put the logo in the top-left zone.” </Paragraph>
        <Paragraph>
          This small conceptual shift changes everything. .{" "}
        </Paragraph>
        <Paragraph>
          Rather than storing hardcoded coordinates, templates define semantic
          zones like:{" "}
        </Paragraph>
        <List items={["top-left", "middle-center", "bottom-right"]}></List>
        <Paragraph>
          A grid system (for example, a 3×3 layout) calculates the actual pixel
          boundaries dynamically based on the canvas size.{" "}
        </Paragraph>
        <Paragraph>So whether the canvas is: </Paragraph>
        <List items={["1080×1080 (Post) ", "1080×1920 (Story) "]}></List>
        <Paragraph>…the same template definition works. </Paragraph>
        <SubsectionHighlight heading={"Why This Matters "}>
          <Paragraph>This abstraction makes the system: </Paragraph>
          <List
            items={[
              "Format-agnostic – One template adapts to any size ",
              "Easier to extend – New formats require no coordinate rewrites ",
              'Cleaner for orchestration – n8n passes "top-left" instead of {x: 50, y: 50} ',
              "Visually intuitive – Templates can be built with drag-and-drop logic ",
            ]}
          ></List>
          <Paragraph>
            The renderer no longer thinks in pixels. It thinks in spatial
            relationships. And that shift turns layout management from brittle
            math into scalable design logic.
          </Paragraph>
        </SubsectionHighlight>
      </Section>
      <Section
        id={"FinalAssetCompositionEngine"}
        title={"Final Asset Composition Engine"}
      >
        <Paragraph>
          At the final stage of the pipeline, Django acts as the compositor. The
          ImageRenderer class assembles structured inputs—background image,
          typography, brand colors, and logo—into a production-ready marketing
          asset. In practice, it functions like a scripted photo editor, but
          fully automated.
        </Paragraph>
        <Heading>Template Initialization </Heading>
        <Paragraph>Rendering begins with type-aware configuration. </Paragraph>
        <List items={["Post → 1080×1080 ", "Story → 1080×1920 "]}></List>
        <Paragraph>
          Based on the selected format, the renderer loads canvas dimensions,
          predefined text zones, font scales, and positioning rules. This allows
          multiple formats to share a single rendering engine while maintaining
          layout discipline per format.
        </Paragraph>
        <Heading>Background Processing </Heading>
        <Paragraph>
          The background image, received from the workflow layer, is:{" "}
        </Paragraph>
        <List
          items={[
            "Downloaded from its source URL ",
            "Opened using PIL ",
            "Resized to match canvas dimensions ",
            "Converted to RGBA for transparency support ",
          ]}
        ></List>
        <Heading>Typography Layering </Heading>
        <Paragraph>
          Text elements—title, offer, contact, and CTA—are rendered within
          bounded zones. For each element, the renderer:{" "}
        </Paragraph>
        <List
          items={[
            "Text elements—title, offer, contact, and CTA—are rendered within bounded zones. For each element, the renderer: ",
            ,
            "Measures text dimensions ",
            "Dynamically adjusts font size to fit constraints ",
            "Applies brand color",
            "Centers text and optionally adds shadow for contrast ",
          ]}
        ></List>
        <Paragraph>
          This ensures consistent readability regardless of text length.{" "}
        </Paragraph>
        <Heading>Brand & Element Composition </Heading>
        <Paragraph>
          Brand colors (received as hex values) are converted to RGB and applied
          selectively. Basic luminance checks help maintain sufficient
          contrast.{" "}
        </Paragraph>
        <Paragraph>
          The logo is resized proportionally and composited using alpha
          transparency. The CTA is drawn as a layered element—rounded rectangle
          background with centered text.{" "}
        </Paragraph>
        <Paragraph>Layering follows a strict order: </Paragraph>
        <Paragraph>Background → Text → CTA → Logo </Paragraph>
        <Heading>Output</Heading>
        <Paragraph>
          The final image is encoded to base64, uploaded to storage, and
          persisted in the database. Structured inputs become a brand-aligned
          creative in seconds—no manual design required.{" "}
        </Paragraph>
      </Section>
      <Section
        id={"Limitations&FutureImprovements"}
        title={"Limitations & Future Improvements"}
      >
        <Paragraph>
          The current system—centered around image_renderer.py, Django APIs, and
          React components—is production-ready but intentionally deterministic.
          Stability was prioritized over intelligence. That makes it
          predictable, yet limits adaptability at scale.
        </Paragraph>
        <Heading>1. Layout System Constraints</Heading>
        <Paragraph>
          Layouts rely on hardcoded bounding boxes and format-specific templates
          (Post, Story). While reliable, this approach is rigid:
        </Paragraph>
        <List
          items={[
            "No dynamic layout reasoning",
            "No collision detection between elements",
            "Adding new formats requires manual coordinate mapping",
            "Long text may overflow or truncate",
          ]}
        ></List>
        <Heading>Future direction:</Heading>
        <Paragraph>
          Shift toward a constraint-based layout engine. Instead of fixed pixel
          coordinates, define spatial relationships—“title below logo,” “avoid
          overlap,” “max 90% width.” This would allow automatic reflow when text
          length or canvas size changes, making multi-format expansion
          significantly easier.
        </Paragraph>
        <Heading>2. Typography & Visual Intelligence</Heading>
        <Paragraph>
          Typography is currently rule-based: selected font families, fixed size
          hierarchy, minimal contrast logic.
        </Paragraph>
        <Paragraph>
          Limitations include lack of adaptive font selection, weak luminance
          validation, and no hierarchy tuning based on content weight.
        </Paragraph>
        <Heading>Future direction:</Heading>
        <Paragraph>
          Introduce font intelligence and contrast-aware rendering. AI-assisted
          font selection combined with automated readability validation (e.g.,
          contrast ratio ≥ 4.5:1) would improve accessibility and brand
          alignment.
        </Paragraph>
        <Heading>3. Template Evolution</Heading>
        <Paragraph>
          Templates are static and developer-defined. There is no feedback loop.
        </Paragraph>
        <Heading>Future direction:</Heading>
        <Paragraph>
          Adopt semantic, zone-based templates and batch rendering APIs. A
          single design definition could generate Instagram, LinkedIn, Twitter,
          and print variants automatically.
        </Paragraph>
        <Heading>5. Intelligent Automation</Heading>
        <Paragraph>
          AI generates content—but not layout decisions. Next layers could
          include layout recommendation agents, visual quality scoring, and
          style learning from uploaded brand assets.
        </Paragraph>
      </Section>
      <Section id={"Conclusion"} title={"Conclusion"}>
        <Paragraph>
          What started as separate technical components—forms, AI generation,
          Django rendering, n8n workflows—reveals something bigger when viewed
          end-to-end. This isn’t just an image generator. It’s a structured
          system designed to turn brand intent into scalable marketing
          output.{" "}
        </Paragraph>
        <Paragraph>
          At the product level, the insight is simple: businesses don’t want
          “AI.” They want consistent visibility without hiring designers or
          spending hours every week creating posts. The real value isn’t
          generation—it’s reliability. One-time brand setup, repeated
          high-quality output.
        </Paragraph>
        <Paragraph>
          At the system level, every architectural decision reinforces that
          goal.{" "}
        </Paragraph>
        <List
          items={[
            "Dynamic forms capture structured brand intelligence. ",
            "Brand context converts raw answers into reusable meaning. ",
            "n8n handles orchestration asynchronously, keeping the UX fast. ",
            "Django focuses on deterministic rendering and composition. ",
            "Semantic grids abstract layout away from brittle pixel math. ",
          ]}
        ></List>
        <Paragraph>
          Each layer has a single responsibility. Each layer can evolve
          independently. That separation is what allows the system to scale
          without collapsing under its own complexity.{" "}
        </Paragraph>
      </Section>
      <Section id={"demo"} title={"Project Images"}>
        <ImageDisplay
          images={[
            {
              src: "demos/assetGeneration/homePage.png",
              title: "Platform Homepage",
              description:
                "Homepage give prompt window, access to user settings, Gallery, tools",
            },
          ]}
        ></ImageDisplay>
        <ImageDisplay
          images={[
            {
              src: "demos/assetGeneration/cropToolRect.png",
              title: "Croping tool 9:16",
              description: "used to crop user uploaded image into 9:16 ratio",
            },
            {
              src: "demos/assetGeneration/cropToolSq.png",
              title: "Croping tool 1:1",
              description: "used to crop user uploaded image into 1:1 ratio",
            },
            {
              src: "demos/assetGeneration/galleryView.png",
              title: "Gallery page",
              description:
                "Here user can see previously generated images along with title and other meta data ",
            },
            {
              src: "demos/assetGeneration/userSettings.png",
              title: "User setting page ",
              description: "User can change/update accoutant related details",
            },
            {
              src: "/demos/assetGeneration/adminFormbuilder.png",
              title: "Admin form builder",
              description:
                "Enable form builing with GUI interface. From are updated and created with need of redeploying",
            },
            {
              src: "/demos/assetGeneration/userDetailsPage.png",
              title: "User detail page",
              description:
                "User can  update, edit, and view their submitted details",
            },
          ]}
        ></ImageDisplay>
      </Section>
    </Document>
  );
}
