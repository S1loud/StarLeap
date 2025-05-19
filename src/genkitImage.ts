import { genkit } from "genkit";
import { googleAI, gemini15Flash } from "@genkit-ai/googleai";

const ai = genkit({
  plugins: [googleAI({ apiKey: process.env.GOOGLE_API_KEY })],
  model: gemini15Flash,
});

async function generateImage() {
  const prompt = "A colorful rocket launching into space, cartoon style";

  // Use the googleAI plugin's specific image generation method
  const response = await ai.googleAI.generateImage(prompt, {
    size: "1024x1024",
    n: 1,  // number of images to generate
  });

  if (response && response.data && response.data.length > 0) {
    console.log("Generated image URLs:", response.data.map(img => img.url));
  } else {
    console.log("No images generated. Full response:", response);
  }
}

generateImage();