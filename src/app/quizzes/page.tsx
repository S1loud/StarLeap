"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";

interface Quiz {
  lessonId: string;
  title: string;
  questions: any[];
}

export default function QuizzesPage() {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchQuizzes() {
      const quizCollection = collection(db, "lessons"); // assuming collection name is 'lessons'
      const quizSnapshot = await getDocs(quizCollection);
      const quizList = quizSnapshot.docs.map(doc => doc.data() as Quiz);
      setQuizzes(quizList);
      setLoading(false);
    }
    fetchQuizzes();
  }, []);

  if (loading) return <p>Loading quizzes...</p>;

  return (
    <div>
      <h1>All Quizzes</h1>
      <ul>
        {quizzes.map((quiz) => (
          <li key={quiz.lessonId}>
            <h2>{quiz.title}</h2>
            <p>{quiz.questions.length} questions</p>
          </li>
        ))}
      </ul>
    </div>
  );
}