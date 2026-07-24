export const optiFlowPipeline = [
  {
    step: "01",
    title: "Capture & normalize",
    detail: "Acquire the PRECAL form from mobile and prepare it for reliable model inference.",
  },
  {
    step: "02",
    title: "Detect fields",
    detail: "Use YOLO11 to locate structured regions before task-specific recognition.",
  },
  {
    step: "03",
    title: "Route recognition",
    detail: "Classify empty or filled fields, read numbers with TrOCR, text with GLM-OCR, and evaluate checkboxes.",
  },
  {
    step: "04",
    title: "Resolve & validate",
    detail: "Apply RapidFuzz catalogue matching, confidence thresholds, and business validation rules.",
  },
  {
    step: "05",
    title: "Review & learn",
    detail: "Pre-fill the form, route uncertainty to a human, and retain corrections as feedback memory.",
  },
] as const;

export const optiFlowChallenges = [
  {
    title: "Mixed field semantics",
    detail:
      "A single form contains positional fields, empty/filled states, numerical values, free text, and checkboxes. The pipeline separates these tasks instead of forcing one model to solve all of them.",
  },
  {
    title: "Confidence is not correctness",
    detail:
      "Model confidence is combined with catalogue resolution and business rules. Ambiguous predictions remain reviewable instead of being silently accepted.",
  },
  {
    title: "Automation without losing control",
    detail:
      "Human-in-the-loop validation protects the final workflow and turns corrections into reusable feedback for later processing.",
  },
] as const;

export const optiFlowLearnings = [
  "Decompose document intelligence into measurable, independently testable stages.",
  "Treat human review as an architectural capability rather than a fallback screen.",
  "Use domain rules and catalogue resolution to complement model predictions.",
  "Evaluate both model quality and the complete operator workflow.",
] as const;
