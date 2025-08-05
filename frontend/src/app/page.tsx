'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';


type Quiz = {
  id: string;
  title: string;
};

export default function Home() {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const fetchQuizzes = async () => {
    try {
      const res = await fetch(`${API_URL}/quizzes`);
      const data = await res.json();
      setQuizzes(data);
    } catch (err) {
      console.error('Failed to fetch quizzes:', err);
    }
  };

  useEffect(() => {
    fetchQuizzes();
  }, []);

  const deleteQuiz = async (id: string) => {
    if (confirm('Delete this quiz?')) {
      try {
        await axios.delete(`${API_URL}/quizzes/${id}`);
        fetchQuizzes(); // оновити список
      } catch (err) {
        console.error('Failed to delete quiz:', err);
      }
    }
  };

  return (
    <main className="max-w-2xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-white text-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">My Quizzes</h1>
      <div className="mb-8">
        <Link
          href="/create"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Create New Quiz
        </Link>
      </div>

      {quizzes.length === 0 ? (
        <p className="text-gray-600">No quizzes found.</p>
      ) : (
        <ul className="space-y-4">
          {quizzes.map((quiz) => (
            <li
              key={quiz.id}
              className="border border-gray-300 p-4 rounded flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition"
            >
              <span>{quiz.title}</span>
              <Link
                href={`/quizzes/${quiz.id}`}
                className="text-blue-600 hover:underline"
              >
                View
              </Link>
              <button
                onClick={() => deleteQuiz(quiz.id)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </main>
  );

}
