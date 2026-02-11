"use client";
import { useState } from "react";

// ✅ TypeScript Types
interface MCQType {
  id: number;
  question: string;
  options: string[];
  answer: string;
}

// Static Data
const mcqData: MCQType[] = [
  {
    id: 1,
    question: "What is React?",
    options: ["Library", "Framework", "Language", "Database"],
    answer: "Library",
  },
  {
    id: 2,
    question: "What is Next.js used for?",
    options: [
      "Backend Only",
      "Fullstack React Apps",
      "Database",
      "Design Tool",
    ],
    answer: "Fullstack React Apps",
  },
  {
    id: 3,
    question: "Which hook is used for state?",
    options: ["useRef", "useEffect", "useState", "useMemo"],
    answer: "useState",
  },
];

export default function MCQPage() {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  const handleSelect = (qId: number, option: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [qId]: option,
    }));
  };

  const handleSubmit = () => {
    let newScore = 0;

    mcqData.forEach((q) => {
      if (selectedAnswers[q.id] === q.answer) newScore++;
    });

    setScore(newScore);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">MCQ Test</h1>

        {mcqData.map((q, index) => (
          // ✅ Normal Card Div
          <div
            key={q.id}
            className="mb-5 rounded-2xl shadow-md bg-white border"
          >
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-4">
                {index + 1}. {q.question}
              </h2>

              <div className="grid gap-3">
                {q.options.map((opt, i) => {
                  const isSelected = selectedAnswers[q.id] === opt;
                  const isCorrect = q.answer === opt;

                  let optionClass =
                    "border p-3 rounded-xl cursor-pointer transition";

                  if (submitted) {
                    if (isCorrect) optionClass += " bg-green-100 border-green-400";
                    else if (isSelected)
                      optionClass += " bg-red-100 border-red-400";
                  } else {
                    if (isSelected) optionClass += " bg-blue-100 border-blue-400";
                    else optionClass += " hover:bg-gray-100";
                  }

                  return (
                    <div
                      key={i}
                      onClick={() => !submitted && handleSelect(q.id, opt)}
                      className={optionClass}
                    >
                      {opt}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}

        {/* ✅ Normal Button */}
        {!submitted && (
          <div className="flex justify-center mt-6">
            <button
              className="rounded-2xl px-8 py-3 text-lg bg-blue-600 text-white hover:bg-blue-700 transition"
              onClick={handleSubmit}
            >
              Submit Test
            </button>
          </div>
        )}

        {submitted && (
          <div className="text-center mt-8">
            <h2 className="text-2xl font-bold">
              Your Score: {score} / {mcqData.length}
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}
