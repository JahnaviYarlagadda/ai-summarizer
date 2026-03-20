import OpenAI from "openai";
import { buildPrompt } from "./prompt.js";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export const summarize = async (text) => {
  const res = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: buildPrompt(text) }]
  });

  const output = res.choices[0].message.content;

  try {
    return JSON.parse(output);
  } catch {
    throw new Error("Invalid JSON from model");
  }
};
