"use client";

import { useEffect, useState } from "react";
import Notes10 from "./notes10";
import QuestionPaper from "./question-paper";
import QuestionAll from "./question-paper";
// import QuestionPaper from "./question-paper";

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
    const [active, setActive] = useState<string | null>("Question Papers");
  



    return (
        <div className="flex flex-col w-[90%] mx-auto gap-5">
            <div className="lg:w-[80%] w-full mx-auto flex flex-col lg:flex-row gap-8">
                {dataActive.map((item: string, index: number) => (
                    <button
                        key={index}
                        onClick={() => setActive(item)}
                        className={`${active === item
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
                   <QuestionAll/>
                </div> : <div> <Notes10/> </div>}
            </div>











        </div>
    );
};

export default MainPage;