"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

interface QuestionPaper {
    id: number;
    class_name: string;
    subject_name: string;
    year: string;
    file_path: string;
    file_url: string;
    created_at: string
}
const Notes10 = () => {
     const [data, setData] = useState<QuestionPaper[]>([]);
const [data12, setData12] = useState<QuestionPaper[]>([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState<string | null>(null);

const API_BASE_URL = "http://localhost:5000";

useEffect(() => {
  const fetchData = async () => {
    try {
      setLoading(true);

      const [res10, res12] = await Promise.all([
        fetch(`${API_BASE_URL}/api/notes/class10`),
        fetch(`${API_BASE_URL}/api/notes/class12`)
      ]);

      if (!res10.ok || !res12.ok) {
        throw new Error("Network response was not ok");
      }

      const json10 = await res10.json();
      const json12 = await res12.json();
console.log("jeson",json10,json12)
      setData(json10.data || []);
      setData12(json12.data || []);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, []);

            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error}</p>;
    return (
        <div>
             <div className="grid grid-cols-1  lg:grid-cols-2 gap-5 ">
                            <div className="bg-white   shadow p-5 flex flex-col gap-5">
                                <div className="flex justify-between items-center">
                                    <p className="text-[18px] md:text-[22px]  text-[#212227]   font-bold">Question Papers Matric (Class 10)</p>


                                       <Link href={"/notes-class10"} className="relative text-nowrap text-[14px] cursor-pointer text-white font-medium px-3 py-1 rounded-xl   bg-linear-to-r from-[#3db7c7] to-[#2aa3b3] shadow-lg hover:scale-105 transition-all duration-300 animate-glow">
                                      ✨  View All  
                                    </Link>




                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    {data?.map((item) => (
                                        <div
                                            key={item.id}
                                            className="border shadow-xl flex flex-col gap-0.5 p-5 rounded-sm  bg-[#F5F0FE] border-[#7C3BED3D]"
                                        >
                                            <div className="flex justify-between">
                                                <p className="text-[14px] md:text-[18px] font-bold text-[#212227]">Class</p>
                                                <p className="text-[14px] md:text-[18px] font-bold text-[#212227]">{item.class_name}</p>
                                            </div>
                                            <div className="flex justify-between">
                                                <p className="text-[12px] md:text-[14px] text-[#6D6E67] font-medium">Subject</p>
                                                <p className="text-[12px] md:text-[14px] text-[#6D6E67] font-medium">{item.subject_name}</p>
                                            </div>
                                            <div className="flex justify-between">
                                                <p className="text-[12px] md:text-[14px] text-[#6D6E67] font-medium">Year</p>
                                                <p className="text-[12px] md:text-[14px] text-[#6D6E67] font-medium">{new Date(item.year).getFullYear()}</p>
                                            </div>

                                            {/* Buttons */}
                                            <div className="flex justify-between w-full gap-2 mt-2">
                                                <p className="text-[12px] md:text-[14px] text-[#6D6E67] font-medium">
                                                    {new Date(item.created_at).toLocaleDateString("en-CA", {

                                                        day: "2-digit",
                                                        year: "numeric",
                                                        month: "2-digit",
                                                    }).replace(/-/g, ". ")}
                                                </p>

                                                {/* View PDF in new tab */}
                                                <button
                                                    className="bg-[#3db7c7] cursor-pointer text-white text-[14px] font-normal px-3 py-1 rounded hover:bg-[#63a6d6]/80"
                                                    onClick={() =>
                                                        window.open(`${API_BASE_URL}${item.file_url}`, "blank")
                                                    }
                                                >
                                                    View PDF
                                                </button>


                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
  <div className="bg-white   shadow p-5 flex flex-col gap-5">
                                <div className="flex justify-between items-center">
                                    <p className="text-[18px] md:text-[22px]  text-[#212227]   font-bold">Intermediate (Class 12)</p>


                                    <Link href={"/notes-class12"} className="relative text-nowrap text-[14px] cursor-pointer text-white font-medium px-3 py-1 rounded-xl   bg-linear-to-r from-[#3db7c7] to-[#2aa3b3] shadow-lg hover:scale-105 transition-all duration-300 animate-glow">
                                      ✨  View All  
                                    </Link>



                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    {data12?.map((item) => (
                                        <div
                                            key={item.id}
                                            className="border shadow-xl flex flex-col gap-0.5 p-5 rounded-sm  bg-[#F5F0FE] border-[#7C3BED3D]"
                                        >
                                            <div className="flex justify-between">
                                                <p className="text-[14px] md:text-[18px] font-bold text-[#212227]">Class</p>
                                                <p className="text-[14px] md:text-[18px] font-bold text-[#212227]">{item.class_name}</p>
                                            </div>
                                            <div className="flex justify-between">
                                                <p className="text-[12px] md:text-[14px] text-[#6D6E67] font-medium">Subject</p>
                                                <p className="text-[12px] md:text-[14px] text-[#6D6E67] font-medium">{item.subject_name}</p>
                                            </div>
                                            <div className="flex justify-between">
                                                <p className="text-[12px] md:text-[14px] text-[#6D6E67] font-medium">Year</p>
                                                <p className="text-[12px] md:text-[14px] text-[#6D6E67] font-medium">{new Date(item.year).getFullYear()}</p>
                                            </div>

                                            {/* Buttons */}
                                            <div className="flex justify-between w-full gap-2 mt-2">
                                                <p className="text-[12px] md:text-[14px] text-[#6D6E67] font-medium">
                                                    {new Date(item.created_at).toLocaleDateString("en-CA", {

                                                        day: "2-digit",
                                                        year: "numeric",
                                                        month: "2-digit",
                                                    }).replace(/-/g, ". ")}
                                                </p>

                                                {/* View PDF in new tab */}
                                                <button
                                                    className="bg-[#3db7c7] cursor-pointer text-white text-[14px] font-normal px-3 py-1 rounded hover:bg-[#63a6d6]/80"
                                                    onClick={() =>
                                                        window.open(`${API_BASE_URL}${item.file_url}`, "blank")
                                                    }
                                                >
                                                    View PDF
                                                </button>


                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div> 
        </div>
    );
}

export default Notes10;
