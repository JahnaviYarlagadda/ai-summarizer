export const buildPrompt = (text) => `
You are an assistant that converts unstructured text into strict JSON.

Return ONLY valid JSON:
{
  "summary": "one sentence",
  "keyPoints": ["point 1", "point 2", "point 3"],
  "sentiment": "positive | neutral | negative"
}

Rules:
- summary must be exactly one sentence
- keyPoints must be exactly 3 short points
- sentiment must be one of allowed values
- no markdown
- no extra text

Text:
${text}
`;
