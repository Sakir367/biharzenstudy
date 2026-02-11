"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

// ✅ MCQ Type
export interface MCQType {
  id: number;
  question: string;
  options: string[];
  answer: string;
}

// ✅ Subject Type
interface SubjectMCQType {
  id: number;
  subjectName: string;
  className: string;
  mcqs: MCQType[];
}

export default function SubjectPage() {
  const router = useRouter();

  const [data, setData] = useState<SubjectMCQType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

  // 🔹 Fetch API Data
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError("");

      try {
        const res = await fetch(`${API_BASE_URL}/api/mcq`);
        if (!res.ok) throw new Error("Network response was not ok");

        const json = await res.json();

        // Normalize API data to match TypeScript interface
        const formattedData: SubjectMCQType[] = (json.data || []).map((item: any) => ({
          id: item.id,
          subjectName: item.subject_name,
          className: item.class_name,
          mcqs: item.mcqs || [],
        }));

        setData(formattedData);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [API_BASE_URL]);

  return (
    <div className=" bg-white pb-20  py-20 flex flex-col justify-center items-center gap-6 ">
      <div>
        <h1 className="text-2xl font-bold  text-[#212227] mt-6">Choose Your Subject and </h1>
        <h1 className="text-2xl font-bold text-center mb-6 text-[#212227] ">Test Your Knowledge</h1>
      </div>

      {loading && <p className="text-white">Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 justify-center">
        {data.map((s) => (
          <Link
            key={s.id}
            href={`/mcq/${s.id}`}
            className="bg-linear-to-r  from-[#3db7c7] to-[#2aa3b3] 
              text-white px-10 py-3 text-[16px] font-semibold 
              shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 flex  gap-1 rounded-xl cursor-pointer"
          >
            <p>✨ {s.subjectName}</p>
            <p>{s.className}</p>
            <p>{s.mcqs.length} Questions</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
