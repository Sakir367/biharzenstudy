"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import ProfessionalLoader from "@/app/_components/professiona-loader";

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
  console.log(data, "subject")
const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  // 🔹 Fetch API Data
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError("");

      try {
        const res = await fetch(`${apiUrl}/api/mcq`);
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
  }, [apiUrl]);


   if (loading) {
      return (
    <ProfessionalLoader/>
      );
    }
  
    // ✅ Error UI
    if (error) {
      return (
        <div className="text-center text-red-500 mt-10">
          {error}
        </div>
      );
    }

  return (
    <div className=" bg-[#effcf8] px-5  py-20 flex flex-col justify-center items-center gap-6 ">
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3  w-full">
        <div>

        </div>
        <div className="justify-center items-center ">
          <h1 className="text-[22px] lg:text-[30px] font-bold  text-center  text-[#53544f] ">Choose Your Subject and </h1>
          <h1 className="text-[22px] lg:text-[30px] font-bold text-center mb-6 text-[#53544f] ">Test Your Knowledge</h1>
        </div>

        <div className="flex h-fit justify-center xl:justify-end pb-10">
          <button onClick={() => router.push("/mcq")} className="cursor-pointer bg-linear-to-r from-[#004249] to-[#2aa3b3] 
    text-white px-10 py-3 rounded-full text-[16px] font-semibold 
    shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">
            ✨   View All Test
          </button>
        </div>
      </div>

      {loading && <p className="text-white">Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 justify-center">
        {data.map((s) => (
          <Link
            key={s.id}
            href={`/mcq/${s.id}`}
            className="bg-white 
              text-black px-5 lg:px-10 border border-[#004249] py-3 text-[16px] font-semibold 
              shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300  flex flex-col gap-2 rounded-xl cursor-pointer"
          >
            <div className="flex  gap-1">  <p>✨ {s.subjectName}</p>
              <p>{s.className}</p>
              <p>{s.mcqs.length} Questions</p></div>


            <p className="text-center text-[#004249] text-[14px] font-semibold">Start Quiz</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
