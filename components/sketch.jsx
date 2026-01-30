"use client";
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
  VideoDisplay,
} from "./writingTools";

export default function Sketch() {
  const tableOfContents = [
    { id: "introduction", label: "Introduction", level: 0 },
    { id: "System Architecture", label: "System Architecture", level: 0 },
    { id: "Geometry Extraction", label: "Geometry Extraction", level: 0 },
    {
      id: "Text Extraction & Mapping",
      label: "Text Extraction & Mapping",
      level: 0,
    },
    {
      id: "Human Validation Workflow",
      label: "Human Validation Workflow",
      level: 0,
    },
    { id: "Estimate Generation", label: "Estimate Generation", level: 0 },
    {
      id: "Limitations and Future Work",
      label: "Limitations and Future Work",
      level: 0,
    },
    { id: "Conclusion", label: "Conclusion", level: 0 },
    { id: "demo", label: "See Demo", level: 0 },
  ];

  const scrollToDemo = (e) => {
    e.preventDefault();
    const demoSection = document.getElementById("demo");
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const systemSupposedToDOItems = [
    "Analyze design images ",
    "Detect shapes and their dimensions",
    "Collect additional manufacturing context (e.g., thickness, coating)",
    "Generate an estimation quickly",
  ];

  const scopeAndAssumptionsItems = [
    "Most real-world design samples provided by manufacturers consisted primarily of rectangular shapes.",
    "For the prototype, the system was intentionally limited to rectangle detection.",
    "Dimensions are typically written near the corresponding edges of shapes.",
    "OCR accuracy is not expected to be perfect; hence, a human-in-the-loop correction step is necessary.",
    "The system is designed to be semi-automated, not fully autonomous.",
  ];

  const FinalRectContourHierarchyPoints = [
    "exceeded a minimum area threshold ",
    "did not act as parent containers for other shapes",
    "were accepted as valid rectangles. This prevented outer bounding regions from being misclassified as glass components.",
  ];
  const edgeDesc = `
    'top_side': {'points': ((x,y), (x+w,y)), 'orientation': 'horizontal'}, 

    'right_side': {'points': ((x+w,y), (x+w,y+h)), 'orientation': 'vertical'}, 

    'bottom_side': {'points': ((x+w,y+h), (x,y+h)), 'orientation': 'horizontal'}, 

    'left_side': {'points': ((x,y+h), (x,y)), 'orientation': 'vertical'}
    `;
  const filterOnOCRText = [
    "“→144.0” → 144.0 ",
    "“32.7 cm” → 32.7 ",
    "“Height: 8.5” → 8.5 ",
    "“ABC” → rejected ",
  ];
  const strucRepDetectedDimensions = [
    "Its four corner coordinates ",
    "Explicit dimensions for top, right, bottom, and left edges ",
    "Confidence metadata from OCR ",
    "Original text location information ",
  ];
  const humanpoints = [
    "View the original uploaded image for context ",
    "Inspect individual cropped components ",
    "Edit incorrectly detected values ",
    "Manually enter missing dimensions ",
  ];
  const centeroid_dr = `        "10m"  ← Text centroid
         ↓ (distance = 25 pixels)
    ─────────────────  ← Rectangle edge`;
  const textassignment_dr = `Text "10m" at position (200, 50)

Rectangle 1 - Top edge at y=100: distance = 50px
Rectangle 2 - Bottom edge at y=30: distance = 20px  ← SELECTED
Rectangle 3 - Top edge at y=200: distance = 150px

Result: "10m" assigned to Rectangle 2's bottom edge`;

  const reactStorage = `{
    "Rectangle_id": rect["Rectangle_id"],
    "Rectangle_coordinates": rect["Rectangle_coordinate"],
    "Start_point": start_point,
    "End_point": end_point,
    "Centroid": centroid,
    "Distance": distance,
    "Text": about_text["Text"],
    "Confidence": about_text["Confidence"],
    "Alignment": about_text['alignment']
}`;
  return (
    <Document
      tableOfContents={tableOfContents}
      title={"Glass Estimation Automation System"}
      subtitle={"Technical Documentation"}
      showDemo={true}
    >
      <Section id={"introduction"} title={"Introduction"}>
        <Paragraph>
          The objective of this project was to automate the estimation
          generation process for glass manufacturers by analyzing design images
          shared by glass vendors.{" "}
        </Paragraph>
        <Paragraph>
          Traditionally, vendors send hand-drawn or annotated design sketches
          (often via WhatsApp), and manufacturers manually interpret these
          drawings to calculate material requirements and cost. This process is
          slow and delays quotation delivery, which directly affects deal
          conversion.{" "}
        </Paragraph>

        {/* <Heading>What the System Is Supposed to Do </Heading> */}
        <SubSection title={"What the System Is Supposed to Do"}>
          <Paragraph>The idea was to build a system that can: </Paragraph>
          <List items={systemSupposedToDOItems}></List>
          <Paragraph>
            Thereby reducing response time and improving deal closure rates.
          </Paragraph>
        </SubSection>

        <SubSection
          id={"scope-and-assumptions"}
          title={"Scope and Assumptions"}
        >
          <List items={scopeAndAssumptionsItems}></List>
        </SubSection>
      </Section>
      <Section id={"System Architecture"} title={"System Architecture"}>
        <ImageDisplay
          images={[
            {
              src: "/demos/sketch/sktechArchitecture.png",
              title: "System Architecture",
            },
          ]}
        ></ImageDisplay>
      </Section>
      <Section id={"Geometry Extraction"} title={"Geometry Extraction"}>
        <Paragraph>
          To detect glass components from the design images, I developed a
          Python-based image processing pipeline using OpenCV and NumPy.{" "}
        </Paragraph>
        <Paragraph>Steps involved: </Paragraph>
        <SubSection>
          <Heading>
            Image Preprocessing: Separating Shapes from the Background
          </Heading>
          <Paragraph>
            The input images were hand-drawn design sketches captured under
            inconsistent lighting, with uneven pencil strokes and background
            noise. Direct shape detection on these raw images produced
            fragmented contours and unreliable results, making preprocessing a
            necessary first step.
          </Paragraph>
          <ImageDisplay
            images={[
              { src: "/demos/sketch/orignalImg.png", title: "Orginal Image" },
              { src: "demos/sketch/grayScale.png", title: "Gray scale" },
            ]}
          ></ImageDisplay>
          <Paragraph>
            The image was first simplified by converting it to grayscale,
            removing unnecessary color information while preserving structural
            details like edges and strokes. To reduce noise and smooth irregular
            pencil lines, a Gaussian blur was applied, helping stabilize
            subsequent processing.{" "}
          </Paragraph>
          <ImageDisplay
            images={[
              { src: "/demos/sketch/GaussainBlur.png", title: "Gaussain blur" },
              {
                src: "/demos/sketch/adavtiveThreshold.png",
                title: "Adaptive threshold",
              },
            ]}
          ></ImageDisplay>
          <Paragraph>
            The key separation step was adaptive thresholding, which converted
            the image into a high-contrast binary form. Unlike a global
            threshold, adaptive thresholding computes local thresholds, allowing
            the system to handle uneven lighting, shadows, and variations in
            pencil pressure across the image.{" "}
          </Paragraph>
          <Paragraph>
            This produced a clean binary image where drawn shapes appeared as
            continuous white regions on a black background, forming a reliable
            foundation for later morphological operations and contour detection.
          </Paragraph>
        </SubSection>
        <SubSection title={"Improving Shape Continuity and Reducing Noise "}>
          <Paragraph>
            After thresholding, the binary image still suffered from two common
            issues found in hand-drawn sketches: broken lines and unwanted
            noise.
          </Paragraph>
          <Paragraph>
            Broken edges appeared because of uneven pencil pressure, paper
            texture, and minor thresholding artifacts. At the same time, small
            specks and isolated pixels—introduced by shadows or background
            texture—were incorrectly detected as foreground elements. If left
            unaddressed, both issues would lead to fragmented contours and false
            shape detections.
          </Paragraph>
          <Paragraph>
            To resolve this, the system applied a sequence of morphological
            operations designed to first restore shape continuity and then
            remove noise.
          </Paragraph>
          <Paragraph>
            The first operation focused on closing gaps in shapes. By briefly
            expanding the detected foreground regions and then shrinking them
            back, small breaks along rectangle edges were bridged without
            altering the overall geometry. This step helped transform broken
            strokes into continuous outlines, ensuring that rectangle boundaries
            formed complete, enclosed shapes.
          </Paragraph>

          <Paragraph>
            Once continuity was restored, a second operation was applied to
            clean up noise. This step removed small isolated pixels and smoothed
            minor protrusions while preserving the now-solid shapes. Using a
            smaller structural scale ensured that only unwanted artifacts were
            removed, without eroding valid geometry.{" "}
          </Paragraph>
          <Paragraph>
            The order of these operations was critical. Restoring continuity
            first ensured that legitimate shapes were protected, while noise
            removal afterward cleaned the image without reintroducing gaps.
            Reversing this order risked breaking edges further or amplifying
            noise.{" "}
          </Paragraph>
          <ImageDisplay
            images={[
              {
                src: "/demos/sketch/MorphologicalFillGaps.png",
                title: "Morphological -Fill gaps",
              },
              {
                src: "/demos/sketch/morphologicalOpen.png",
                title: "Morphological -Remove noise",
              },
            ]}
          ></ImageDisplay>
          <Paragraph>
            After these steps, the binary image contained clean, continuous
            rectangular shapes with minimal noise—providing a reliable input for
            the next stage of contour detection and shape analysis.
          </Paragraph>
        </SubSection>
        <SubSection title={"Identifying Candidate Shapes Using Contours "}>
          <Paragraph>
            Once the binary image was cleaned and shape continuity was restored,
            the next step was to identify which regions in the image could
            represent actual glass components. This was done using contour
            analysis, a technique that traces the boundaries of connected
            foreground regions.
          </Paragraph>
          <Paragraph>
            At this stage, the goal was not to immediately find perfect
            rectangles, but to generate a broad set of candidate shapes that
            could be refined through filtering
          </Paragraph>
          <ImageDisplay
            images={[
              {
                src: "/demos/sketch/detectedContours.png",
                title: "All detected contours",
              },
            ]}
          ></ImageDisplay>
        </SubSection>
        <SubSection title={"Extracting Contours from the Binary Image "}>
          <Paragraph>
            The system scanned the binary image to locate continuous boundaries
            surrounding white regions. Each detected contour represented a
            closed shape defined by a sequence of coordinate points. This
            initial pass was intentionally inclusive and produced a large number
            of contours, including valid rectangles, noise artifacts, text
            characters, and incomplete shapes.
          </Paragraph>
          <ImageDisplay></ImageDisplay>
          <Paragraph>
            A hierarchical contour retrieval strategy was used, allowing the
            system to detect nested shapes—such as rectangles drawn inside other
            rectangles—which occasionally appeared in real design sketches. To
            keep processing efficient, contour points were compressed so that
            only essential boundary information was retained instead of every
            edge pixel.{" "}
          </Paragraph>
          <Paragraph>
            At this point, visualizing all detected contours made it clear that
            further filtering was necessary: while the relevant shapes were
            present, they were mixed with a large amount of irrelevant
            geometry.{" "}
          </Paragraph>
        </SubSection>
        <SubSection title={"Filtering Contours to Isolate Likely Rectangles "}>
          <Paragraph>
            To narrow down the candidate list, each contour was evaluated using
            simple geometric constraints based on its bounding box and enclosed
            area.{" "}
          </Paragraph>
          <Paragraph>
            First, the contour’s bounding rectangle was computed to estimate its
            width and height. From this, an aspect ratio check was applied to
            discard shapes that were effectively line segments or extremely thin
            artifacts. This quickly eliminated many false positives such as
            stray strokes and edge fragments.
          </Paragraph>
          <Paragraph>
            Next, a minimum area threshold was applied. Small contours—typically
            corresponding to noise, text characters, or minor imperfections—were
            removed, leaving behind only substantial shapes large enough to
            plausibly represent glass components.
          </Paragraph>
          <Paragraph>
            This two-stage filtering strategy was intentionally ordered for
            efficiency: a fast, coarse filter reduced the candidate set before
            applying more computationally expensive checks. The result was a
            clean list of large, well-defined contours suitable for further
            analysis.
          </Paragraph>
          <ImageDisplay
            images={[
              {
                src: "/demos/sketch/AreaFilteredContours.png",
                title: "Area filtered contours",
              },
            ]}
          ></ImageDisplay>
          <SubsectionHighlight heading={"Why This Step Matters "}>
            <Paragraph>
              Without this filtering stage, the system would attempt to process
              hundreds of irrelevant contours, dramatically increasing
              computation time and introducing false rectangle detections. By
              isolating only meaningful geometric regions early on, subsequent
              steps—such as rectangle validation and dimension association—could
              operate more reliably and efficiently.
            </Paragraph>
            <Paragraph>
              The specific thresholds used for aspect ratio and area were chosen
              based on typical drawing characteristics and image resolution, and
              can be adjusted as input conditions change.
            </Paragraph>
            <Paragraph>
              At the end of this stage, the system had a manageable set of
              candidate shapes that closely matched the expected geometry of
              glass components, ready for precise rectangle validation and
              measurement extraction.
            </Paragraph>
          </SubsectionHighlight>
        </SubSection>
        <SubSection title={"Validating Rectangular Geometry "}>
          <Paragraph>
            After identifying candidate shapes, the next challenge was to ensure
            that these shapes truly represented valid rectangles and not
            distorted contours or container artifacts. This stage focuses on
            refining geometry and extracting precise structural information
            required for accurate dimension association.
          </Paragraph>
        </SubSection>
        <SubSection title={"Isolating Geometry on a Clean Canvas "}>
          <Paragraph>
            To eliminate any remaining influence from the original sketch—such
            as text, shading, or background artifacts—the filtered contours were
            redrawn onto a clean white canvas. This effectively created an
            idealized version of the detected shapes, containing only the
            geometry of interest.
          </Paragraph>
          <Paragraph>
            Working with this simplified representation significantly improved
            the reliability of subsequent geometric analysis by removing any
            residual noise from earlier stages.
          </Paragraph>
          <ImageDisplay
            images={[
              {
                src: "/demos/sketch/contoursWhiteBackground.png",
                title: "Contours on white board",
              },
            ]}
          ></ImageDisplay>
        </SubSection>
        <SubSection title={"Reinforcing Shape Integrity "}>
          <Paragraph>
            Once redrawn, the clean canvas was reprocessed to ensure crisp
            binary separation and stronger edge continuity. A more aggressive
            morphological closing step was applied to guarantee that all
            rectangle edges were fully connected, even in cases where minor gaps
            remained after earlier cleanup.
          </Paragraph>
          <Paragraph>
            This ensured that each rectangle formed a complete, enclosed
            boundary suitable for precise geometric reasoning.
          </Paragraph>
        </SubSection>
        <SubSection title={"Skeletonization for Precise Geometry "}>
          <Paragraph>
            A key step in this validation process was skeletonization. This
            operation reduced thick, hand-drawn lines into single-pixel-wide
            representations while preserving their overall structure.{" "}
          </Paragraph>
          <Paragraph>
            By collapsing each edge into its central axis, skeletonization
            removed variations in line thickness and produced clean,
            mathematically precise geometry. This greatly simplified corner
            detection, contour approximation, and edge orientation
            analysis.{" "}
          </Paragraph>
          <Paragraph>
            At this point, the shapes were no longer approximate sketches—they
            had become idealized geometric forms.{" "}
          </Paragraph>
          <ImageDisplay
            images={[
              { src: "demos/sketch/SkeletonImage.png", title: "Skeletonized" },
              {
                src: "demos/sketch/threshSkeleton.png",
                title: "Thresholding on skeletonized",
              },
            ]}
          ></ImageDisplay>
        </SubSection>
        <SubSection
          title={"Final Rectangle Validation Using Contours and Hierarchy "}
        >
          <Paragraph>
            Contours were extracted again from the skeletonized image to
            identify the final set of rectangular shapes. Hierarchical contour
            information was used to distinguish between independent rectangles
            and container-like outlines that enclosed other shapes.{" "}
          </Paragraph>
          <Paragraph>Only contours that: </Paragraph>
          <List items={FinalRectContourHierarchyPoints}></List>
        </SubSection>
        <SubSection title={"Extracting and Storing Geometric Structure "}>
          <Paragraph>
            For each validated rectangle, precise geometric information was
            recorded. This included the coordinates of all four corners and a
            structured representation of each edge, capturing its orientation
            (horizontal or vertical) and endpoints.{" "}
          </Paragraph>
          <Paragraph>
            This geometric metadata formed the foundation for later stages of
            the pipeline, particularly the logic that associates detected
            dimension text with the correct rectangle edges.{" "}
          </Paragraph>
          <Code>{edgeDesc}</Code>
          <SubsectionHighlight heading={"Why This Validation Stage Matters"}>
            <Paragraph>
              This multi-stage validation process transformed noisy, hand-drawn
              contours into clean, reliable geometric entities. By isolating
              geometry, enforcing continuity, simplifying line structure, and
              applying hierarchical reasoning, the system ensured that only true
              rectangular components progressed further in the pipeline.{" "}
            </Paragraph>
            <Paragraph>
              The result was a robust set of validated rectangles with precise
              structural information—ready for accurate dimension mapping and
              estimation.
            </Paragraph>
          </SubsectionHighlight>
          <ImageDisplay
            images={[
              { src: "/demos/sketch/superImpose.png", title: "Fill contours" },
            ]}
          ></ImageDisplay>
        </SubSection>
      </Section>

      <Section
        id={"Text Extraction & Mapping"}
        title={"Text Extraction & Mapping"}
      >
        <Paragraph>
          While the geometry pipeline focused on identifying glass shapes, a
          parallel challenge was extracting the dimension values written
          alongside those shapes. These dimensions are typically handwritten,
          vary in orientation, and often appear close to edges rather than
          inside shapes, making them difficult to detect reliably. Simply
          running OCR on the entire image produced inconsistent results. Noise,
          overlapping strokes, and background artifacts frequently caused
          misreads or merged text blocks. To address this, a dedicated text
          extraction pipeline was designed with OCR reliability as its primary
          goal.{" "}
        </Paragraph>
        <SubSection title={"Text Localization and Recognition "}>
          <Paragraph>
            Detecting dimension labels in hand-drawn sketches turned out to be
            far more challenging than detecting shapes. Unlike rectangles, text
            varies wildly — different handwriting styles, inconsistent spacing,
            faded strokes, arrows, units, and sometimes even mixed languages.
            Running a single OCR engine directly on the full image produced
            unreliable results.{" "}
          </Paragraph>
          <Paragraph>
            To make the system more robust, I designed a hybrid OCR pipeline
            that separates text localization from text recognition.{" "}
          </Paragraph>
          <Paragraph>
            The process begins with image enhancement. The input image is first
            converted to grayscale, and contrast is increased using histogram
            stretching. This helps amplify faint pencil strokes and improves
            readability in poorly lit or low-contrast sketches. Clean contrast
            makes a noticeable difference in downstream OCR performance.{" "}
          </Paragraph>
          <Paragraph>
            Next, EasyOCR is used to scan the entire image and identify
            potential text regions. Instead of focusing only on reading text,
            EasyOCR is primarily used here for localization — identifying where
            text exists in the image. It returns bounding boxes around candidate
            text areas along with confidence scores. This works well even when
            handwriting styles vary.{" "}
          </Paragraph>
          <Paragraph>
            Rather than sending the entire image to an OCR engine, each detected
            text region is cropped individually. This isolates the text from
            surrounding lines, shapes, and background noise, significantly
            improving recognition accuracy.{" "}
          </Paragraph>
          <Paragraph>
            For recognition, the cropped regions can optionally be passed to
            Google Cloud Vision API. In practice, EasyOCR performs well at
            identifying text locations, while Google Vision provides stronger
            recognition performance, especially for handwritten or slightly
            rotated text. Combining the two leverages the strengths of both
            systems — on
          </Paragraph>
          <Paragraph>
            This two-stage OCR design proved significantly more reliable than
            relying on a single engine alone. By separating localization from
            recognition and narrowing the OCR scope to focused regions, the
            system achieved more consistent and usable dimension extraction from
            real-world sketches.{" "}
          </Paragraph>

          <ImageDisplay
            images={[
              {
                src: "/demos/sketch/OCR_Processing_flow.png",
                title: "OCR processing Flow",
              },
            ]}
          ></ImageDisplay>
        </SubSection>
        <SubSection title={"Cleaning and Structuring Extracted Dimensions "}>
          <Paragraph>
            OCR output from hand-drawn sketches is rarely clean. Even when
            recognition is successful, the detected text often includes extra
            symbols, arrows, units, or formatting inconsistencies. For example,
            a dimension might appear as “→144.0”, “32.7 cm”, or even “Height:
            8.5”. While these are readable to humans, they are not immediately
            usable for computation.{" "}
          </Paragraph>
          <Paragraph>
            To make the extracted data reliable, a dedicated text-cleaning layer
            was introduced.{" "}
          </Paragraph>
          <Paragraph>
            The first step is removing unnecessary characters such as arrows,
            plus signs, or decorative symbols that frequently appear in
            annotated drawings. These characters add visual meaning for humans
            but interfere with numeric parsing.{" "}
          </Paragraph>
          <Paragraph>
            Next, numeric patterns are extracted using regular expressions.
            Instead of trusting the entire OCR string, the system isolates only
            valid numeric sequences — digits and decimal points — from the
            cleaned text. This ensures that surrounding words or units do not
            affect the extracted value.{" "}
          </Paragraph>
          <Paragraph>
            The system also validates numeric formatting. For example, if the
            OCR output contains multiple decimal points (such as “12.34.56”),
            the value is rejected to prevent corrupt data from entering the
            pipeline.{" "}
          </Paragraph>
          <Paragraph>
            Once validated, the number is converted into a structured
            floating-point value that can be used for geometric reasoning and
            estimation.{" "}
          </Paragraph>
          <Paragraph>Examples of how this works in practice: </Paragraph>
          <List items={filterOnOCRText}></List>
          <Paragraph>
            This cleaning step acts as a safeguard between OCR and the reasoning
            layer. Instead of passing noisy, ambiguous text forward, the system
            ensures that only clean, structured numerical values are used for
            dimension–edge association and downstream estimation.
          </Paragraph>
        </SubSection>
        <SubSection title={"Mapping Dimensions to Rectangle Edges "}>
          <Paragraph>
            Once rectangles and cleaned numerical values are extracted, the next
            challenge is determining which dimension belongs to which side of a
            shape. Detecting text alone is not enough — the system must
            understand the relationship between annotations and geometry.{" "}
          </Paragraph>
          <Paragraph>
            To solve this, a lightweight reasoning layer was introduced that
            mimics how humans interpret technical drawings.{" "}
          </Paragraph>
          <Paragraph>
            The first constraint used is orientation matching. In most sketches,
            dimensions are written in alignment with the edge they describe.
            Horizontal measurements are typically written horizontally near the
            top or bottom edges, while vertical measurements are written
            vertically alongside left or right edges.{" "}
          </Paragraph>
          <Paragraph>
            The system leverages this convention by analyzing the aspect ratio
            of each text bounding box. If the bounding box is wider than it is
            tall, the text is treated as horizontally aligned. If it is taller
            than it is wide, it is treated as vertically aligned. This
            immediately narrows down the possible edges the text could belong to
            and prevents incorrect cross-orientation assignments.{" "}
          </Paragraph>
          <Paragraph>
            Text Horizontal → Check only horizontal edges (top, bottom)
          </Paragraph>
          <Paragraph>
            Text Vertical → Check only vertical edges (left, right)
          </Paragraph>
          <Paragraph>
            However, orientation alone is not sufficient. Multiple rectangles
            may exist, and several edges may share the same orientation. To
            resolve this ambiguity, a second constraint is applied:
            distance-based association.{" "}
          </Paragraph>
          <Paragraph>
            For each candidate edge with matching orientation, the perpendicular
            distance from the center of the text bounding box (its centroid) to
            the edge is calculated. The dimension is then assigned to the edge
            with the smallest distance.{" "}
          </Paragraph>
          <Code>{centeroid_dr}</Code>
          <Paragraph>
            This geometric reasoning closely mirrors how humans interpret
            annotated drawings. When we look at a sketch, we naturally associate
            a measurement with the edge it is closest to. By formalizing this
            intuition into distance calculations, the system achieves consistent
            and logical text-to-edge mapping.{" "}
          </Paragraph>
          <Paragraph>
            The result is a structured representation where each rectangle
            stores its dimensions explicitly by side — top, right, bottom, and
            left — enabling accurate validation, visualization, and estimation
            in later stages of the pipeline.{" "}
          </Paragraph>
          <SubsectionHighlight
            heading={"Why Text Extraction Alone Is Not Enough "}
          >
            <Paragraph>
              At this stage, the system could successfully detect and read
              dimension values from the sketch. However, OCR alone does not
              provide semantic meaning—knowing that “10cm” exists in the image
              does not indicate which edge or which rectangle it belongs
              to.{" "}
            </Paragraph>
            <Paragraph>
              This limitation leads directly to the next challenge: associating
              detected dimensions with the correct geometric edges based on
              spatial and orientation cues.{" "}
            </Paragraph>
          </SubsectionHighlight>
        </SubSection>
        <SubSection title={"Structured Representation of Detected Dimensions "}>
          <Paragraph>
            After each dimension is successfully associated with a specific
            rectangle edge, the system converts the results into a structured
            data format. This step is crucial because raw detections alone are
            not sufficient for reliable downstream processing.{" "}
          </Paragraph>
          <Paragraph>
            Instead of treating rectangles and text as loosely connected
            entities, each rectangle is represented as a structured object
            containing:{" "}
          </Paragraph>
          <List items={strucRepDetectedDimensions}></List>
          <Paragraph>
            By organizing the data in this way, the system moves from
            image-based reasoning to a clean, machine-readable representation of
            geometry and measurements.{" "}
          </Paragraph>
          <Paragraph>
            This structured format serves multiple purposes.{" "}
          </Paragraph>
          <Paragraph>
            First, it enables reliable human validation. Since each side of a
            rectangle has an explicitly assigned value, users can easily review
            and correct dimensions without ambiguity.{" "}
          </Paragraph>
          <Paragraph>
            Second, it simplifies visual annotation rendering. Because each
            dimension is already linked to a specific edge, the system can
            redraw clean, labeled versions of the original sketch.{" "}
          </Paragraph>
          <Paragraph>
            Finally, it supports downstream estimation logic. The structured
            representation makes it straightforward to compute areas, apply
            pricing rules, and generate quotations in a deterministic and
            traceable manner.{" "}
          </Paragraph>
          <Paragraph>
            In essence, this stage transforms unstructured image data into a
            structured geometric model — bridging computer vision outputs with
            practical business logic.{" "}
          </Paragraph>
          <Code>{textassignment_dr}</Code>

          <ImageDisplay
            images={[
              {
                src: "/demos/sketch/textpipeline.png",
                title: "Complete text processing ",
              },
            ]}
          ></ImageDisplay>
          {/* <Heading>Structure of detected components</Heading> */}
          {/* <Code>{reactStorage}</Code> */}
        </SubSection>
      </Section>
      <Section
        id={"Human Validation Workflow"}
        title={"Human Validation Workflow"}
      >
        <Paragraph>
          Even with structured geometry extraction and hybrid OCR, automated
          interpretation of hand-drawn sketches cannot be fully trusted.
          Variations in handwriting, overlapping annotations, and ambiguous
          placements can still lead to incorrect or missing dimensions.{" "}
        </Paragraph>
        <Paragraph>
          To ensure reliability, a validation layer was intentionally integrated
          before quotation generation.{" "}
        </Paragraph>
        <Paragraph>
          After dimension–edge association is completed, each detected rectangle
          is presented in a review interface along with its mapped dimensions.
          Users can:{" "}
        </Paragraph>
        <List items={humanpoints}></List>
        <Paragraph>
          All corrections are saved as structured data, preserving both the
          automated output and the user-verified values. The system never
          overwrites raw detection results; instead, it builds a validated layer
          on top of them.{" "}
        </Paragraph>
        <Paragraph>
          This approach maintains the speed benefits of automation while
          ensuring that the final quotation is based on verified measurements
          rather than unchecked OCR output.{" "}
        </Paragraph>
      </Section>
      <Section id={"Estimate Generation"} title={"Estimate Generation"}>
        <Paragraph>
          Estimate generation was implemented using a static, rule-based model.
          After user-validated dimensions were confirmed, predefined pricing
          rules were applied to compute areas and generate a PDF quotation.{" "}
        </Paragraph>
        <Paragraph>
          The long-term design allows this layer to be replaced with AI-driven
          material and context inference (e.g., from vendor messages), but the
          prototype prioritizes correctness and reliability over premature
          automation.{" "}
        </Paragraph>
      </Section>
      <Section
        id={"Limitations and Future Work"}
        title={"Limitations and Future Work"}
      >
        <Paragraph>
          This implementation focuses on validating the most technically complex
          layer of the system: reliable geometry and dimension extraction from
          hand-drawn sketches.{" "}
        </Paragraph>
        <Paragraph>
          The current geometry pipeline is built entirely using classical
          computer vision techniques with OpenCV. As a result, the system is
          limited to detecting rectangular shapes based on contour analysis and
          geometric constraints. While this works well for structured industrial
          sketches dominated by rectangles, it does not generalize to arbitrary
          polygons, curved shapes, or complex assemblies.{" "}
        </Paragraph>
        <Paragraph>
          Extending this system to handle a wider variety of shapes would
          require training deep learning–based detection models capable of
          learning shape semantics rather than relying on handcrafted geometric
          rules. Additionally, understanding relationships between multiple
          shapes (e.g., shared edges, composite components, nested structures)
          would require higher-level structural reasoning beyond contour-based
          detection.{" "}
        </Paragraph>
        <Paragraph>
          Material context extraction (e.g., thickness, coating, glass type)
          from conversational sources such as WhatsApp was part of the broader
          vision but was not implemented in this prototype. Instead, estimation
          was performed using static pricing rules applied to validated
          dimensions.{" "}
        </Paragraph>
        <Paragraph>
          By intentionally constraining the scope, this prototype remains
          deterministic, testable, and modular. The architecture separates
          geometry extraction, text reasoning, validation, and estimation
          layers, allowing future integration of deep learning–based shape
          detection and contextual inference without redesigning the entire
          pipeline.{" "}
        </Paragraph>
      </Section>
      <Section id={"Conclusion"} title={"Conclusion"}>
        <Paragraph>
          This prototype demonstrates that semi-automated interpretation of
          hand-drawn technical sketches is both feasible and practical when
          approached with structured reasoning and controlled scope.{" "}
        </Paragraph>
        <Paragraph>
          By combining classical computer vision techniques, hybrid OCR,
          geometric constraints, and a human-in-the-loop validation layer, the
          system successfully transforms unstructured design sketches into
          structured, verifiable data ready for quotation generation. Rather
          than attempting full automation prematurely, the architecture
          prioritizes reliability, modularity, and testability.{" "}
        </Paragraph>
        <Paragraph>
          Although currently limited to rectangular geometries and rule-based
          estimation, the foundation has been intentionally designed for
          extensibility. Deep learning–based shape detection, contextual
          material inference, and multi-shape relational reasoning can be
          integrated in future iterations without redesigning the pipeline.{" "}
        </Paragraph>
        <Paragraph>
          More importantly, this project illustrates a practical engineering
          principle: automation should enhance workflows, not replace human
          judgment blindly. By balancing algorithmic reasoning with human
          validation, the system achieves speed without sacrificing trust —
          which is essential in real-world business applications.{" "}
        </Paragraph>
      </Section>

      {/* Demo Section */}
      <Section id="demo" title="Project Demo">
        <VideoDisplay
          src={"/demos/sketch.mp4"}
          webmSrc={"/demos/sketch.webm"}
          description={
            "Demo video showing the complete workflow from sketch upload to PDF generation"
          }
        ></VideoDisplay>
      </Section>
    </Document>
  );
}
