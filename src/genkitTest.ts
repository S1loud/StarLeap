import { gemini15Flash, googleAI } from '@genkit-ai/googleai';
import { genkit } from 'genkit';

// Create the Genkit AI instance with your Google AI plugin
const ai = genkit({
  plugins: [googleAI()],
  model: gemini15Flash,
});

async function helloFlow(name: string) {
  const { text } = await ai.generate(`Hello Gemini, my name is ${name}`);
  console.log('AI says:', text);
}

helloFlow('S Loud'); // Replace 'S Loud' with your name or anything you want