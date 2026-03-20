import dotenv from "dotenv";
import { summarize } from "./llm.js";

dotenv.config();

const input = process.argv.slice(2).join(" ");

if (!input) {
  console.log("❌ Please provide input text");
  process.exit(1);
}

try {
  const result = await summarize(input);

  console.log("\n=== RESULT ===\n");
  console.log("Summary:", result.summary);
  console.log("\nKey Points:");
  result.keyPoints.forEach((p, i) => console.log(`${i + 1}. ${p}`));
  console.log("\nSentiment:", result.sentiment);

} catch (err) {
  console.error("❌ Error:", err.message);
}
