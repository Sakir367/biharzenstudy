"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

// ✅ TypeScript Types
interface MCQType {
  id: number;
  question: string;
  options: string[];
  answer: string;
}

interface SubjectMCQType {
  id: number;
  subject_name: string;
  class_name: string;
  mcqs: MCQType[];
}

export default function MCQPage() {
  const { mcqId } = useParams();
  const id = Number(mcqId); // convert string → number

  const [subject, setSubject] = useState<SubjectMCQType | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

  // 🔹 Fetch subject by ID
  useEffect(() => {
    const fetchSubject = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${API_BASE_URL}/api/mcq/${id}`);
        if (!res.ok) throw new Error("Failed to fetch subject");

        const json = await res.json();
        setSubject(json.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (!isNaN(id)) fetchSubject();
  }, [id, API_BASE_URL]);

  const mcqData = subject?.mcqs || [];

  const handleSelect = (qId: number, option: string) => {
    if (submitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [qId]: option }));
  };

  const handleSubmit = () => {
    let newScore = 0;
    mcqData.forEach((q) => {
      if (selectedAnswers[q.id] === q.answer) newScore++;
    });
    setScore(newScore);
    setSubmitted(true);
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
  if (!subject) return <p className="text-center mt-10">No subject found</p>;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-center">{subject.subject_name} Test</h1>
        <p className="text-center text-gray-500 mb-6">Class: {subject.class_name}</p>

        {mcqData.length === 0 && (
          <p className="text-center text-gray-500">No MCQs Found</p>
        )}

        {mcqData.map((q, index) => (
          <div key={q.id} className="mb-5 rounded-2xl shadow-md bg-white border">
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-4">
                {index + 1}. {q.question}
              </h2>
              <div className="grid gap-3">
                {q.options.map((opt, i) => {
                  const isSelected = selectedAnswers[q.id] === opt;
                  const isCorrect = q.answer === opt;

                  let optionClass = "border p-3 rounded-xl cursor-pointer transition";

                  if (submitted) {
                    if (isCorrect) optionClass += " bg-green-100 border-green-400";
                    else if (isSelected) optionClass += " bg-red-100 border-red-400";
                  } else {
                    if (isSelected) optionClass += " bg-blue-100 border-blue-400";
                    else optionClass += " hover:bg-gray-100";
                  }

                  return (
                    <div
                      key={i}
                      onClick={() => handleSelect(q.id, opt)}
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

        {!submitted && mcqData.length > 0 && (
          <div className="flex justify-center mt-6">
            <button
              className="rounded-2xl px-8 py-3 text-lg bg-[#004249] text-white hover:bg-[#004249] transition"
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
