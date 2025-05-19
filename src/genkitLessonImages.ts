// src/genkitLessonImages.ts
import { genkit } from "genkit";
import { googleAI, gemini15Flash } from "@genkit-ai/googleai";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyC-jyXCD6jsGmy1XrqrFVCC9MiCWz6ZWcU",
  authDomain: "starleap.firebaseapp.com",
  projectId: "starleap",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Genkit setup
const ai = genkit({
  plugins: [googleAI({ apiKey: process.env.GOOGLE_API_KEY })],
  model: gemini15Flash,
});

async function generateLessonImages() {
  const lessonsCol = collection(db, "lessons");
  const snapshot = await getDocs(lessonsCol);

  for (const doc of snapshot.docs) {
    const { title } = doc.data();
    const prompt = `Generate a fun, educational, colorful cartoon image for a lesson titled "${title}".`;

    const response = await ai.generate({
      prompt,
      image: {
        size: "1024x1024",
        count: 1,
      },
    });

    const url = response.custom?.candidates?.[0]?.image?.url;
    console.log(`Lesson: ${title}`);
    console.log(`Image URL: ${url || "No image generated"}`);
  }
}

generateLessonImages();