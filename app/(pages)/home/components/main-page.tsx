"use client";

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

const dataActive: string[] = ["Question Papers", "Notes & Solutions"];

const MainPage = () => {
    const [active,setActive]=useState<string | null>("Question Papers");
    const [data, setData] = useState<QuestionPaper[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [openPdf, setOpenPdf] = useState<string | null>(null);
    const [filterClass, setFilterClass] = useState("10th");

    const filteredData = data.filter(
        (item) => item.class_name === `${filterClass}`
    );

    // Filter data for Class 10
    const class10Data = data.filter(item => item.class_name === "10th");

    // Filter data for Class 12
    const class12Data = data.filter(item => item.class_name === "12th");


    // Backend base URL
    const API_BASE_URL = "http://localhost:5000";

    useEffect(() => {
        fetch(`${API_BASE_URL}/api/questionpapers`)
            .then((res) => {
                if (!res.ok) throw new Error("Network response was not ok");
                return res.json();
            })
            .then((json) => {
                setData(json.data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="flex flex-col pb-20 gap-5">
<div className="lg:w-[80%] w-full mx-auto flex flex-col lg:flex-row gap-8">
  {dataActive.map((item: string, index: number) => (
    <button
      key={index}
      onClick={() => setActive(item)}
      className={`${
        active === item
          ? "bg-[#3db7c7] text-white"
          : "bg-white text-[#3db7c7] border border-[#3db7c7]"
      } shadow cursor-pointer font-bold text-[22px] py-3 w-full rounded-lg transition-all duration-300`}
    >
      {item}
    </button>
  ))}
</div>


  <div>
             {active === "Question Papers" ? <div className="">
                  <div className="flex flex-col ">

                <div className="grid grid-cols-1  lg:grid-cols-2 gap-5 ">
                    <div className="bg-white   shadow p-5 flex flex-col gap-5">
                        <div className="flex justify-between items-center">
                            <p className="text-[18px] md:text-[22px]  text-[#212227]   font-bold">Question Papers Matric (Class 10)</p>


                            <button className="relative text-[14px] cursor-pointer text-[#212227] font-medium px-3 py-1 rounded-xl bg-linear-to-r from-white to-[#3db7c7] shadow-lg hover:scale-105 transition-all duration-300 animate-glow">
                                View All  🚀
                            </button>



                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {class10Data.map((item) => (
                                <div
                                    key={item.id}
                                    className="border shadow-xl flex flex-col gap-0.5 p-5 rounded-sm  bg-[#F5F0FE] border-[#7C3BED3D]"
                                >
                                    <div className="flex justify-between">
                                        <p className="text-[14px] md:text-[18px] font-bold text-[#212227]">Class</p>
                                        <p className="text-[14px] md:text-[18px] font-bold text-[#212227]">{item.class_name}</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-[12px] md:text-[14px] text-[#212227] font-medium">Subject</p>
                                        <p className="text-[12px] md:text-[14px] text-[#212227] font-medium">{item.subject_name}</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-[12px] md:text-[14px] text-[#212227] font-medium">Year</p>
                                        <p className="text-[12px] md:text-[14px] text-[#212227] font-medium">{new Date(item.year).getFullYear()}</p>
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex justify-between w-full gap-2 mt-2">
                                        <p className="text-[12px] md:text-[14px] text-[#212227] font-medium">
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
                        <div className="flex  justify-between items-center">
                            <p className="text-[22px]  text-[#212227]   font-bold">Intermediate (Class 12)</p>
                            <button
                                className="bg-[#3db7c7] text-nowrap cursor-pointer text-white text-[14px] font-normal px-3 py-1 rounded hover:bg-[#3db7c7]/80"

                            >
                                View All
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {class12Data.splice(0, 6).map((item) => (
                                <div
                                    key={item.id}
                                    className="border shadow-xl flex flex-col gap-0.5 p-5 rounded-sm  bg-[#F5F0FE] border-[#7C3BED3D]"
                                >
                                    <div className="flex justify-between">
                                        <p className="text-[18px] font-bold text-[#3db7c7]">Class</p>
                                        <p className="text-[18px] font-bold text-[#FF6B35]">{item.class_name}</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-[14px] text-[#212227] font-medium">Subject</p>
                                        <p className="text-[14px] text-[#212227] font-medium">{item.subject_name}</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-[14px] text-[#212227] font-medium">Year</p>
                                        <p className="text-[14px] text-[#212227] font-medium">{new Date(item.year).getFullYear()}</p>
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex justify-between w-full gap-2 mt-2">
                                        <p className="text-[14px] text-[#212227] font-medium">
                                            {new Date(item.created_at).toLocaleDateString("en-CA", {

                                                day: "2-digit",
                                                year: "numeric",
                                                month: "2-digit",
                                            }).replace(/-/g, ". ")}
                                        </p>

                                        {/* View PDF in new tab */}
                                        <button
                                            className="bg-[#3db7c7] cursor-pointer text-white text-[14px] font-normal px-3 py-1 rounded hover:bg-[#3db7c7]/80"
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
             </div> :<div> sakir</div>  }
        </div>




           

          




        </div>
    );
};

export default MainPage;