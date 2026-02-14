
"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { FaQuoteLeft } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ProfessionalLoader from "./professiona-loader";
// import { useRouter } from "next/router";
// import { HiOutlineArrowLongLeft } from "react-icons/hi2";


const StudentReviews = () => {
    const [current, setCurrent] = useState(0);
  const router = useRouter();
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  console.log(data,"comment data")
    const itemsPerSlide = 3;

      const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

  // 🔹 Fetch API Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const res = await fetch(`${API_BASE_URL}/api/ucer-comment`);
        if (!res.ok) throw new Error("Network response was not ok");

        const json = await res.json();
        setData(json.data || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [API_BASE_URL]);

    // Auto slide every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) =>
                prev + itemsPerSlide >= data.length ? 0 : prev + itemsPerSlide
            );
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const visibleMessages = data.slice(current, current + itemsPerSlide);
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
        <div className="bg-[#F0F0F0] my-4  w-full mx-auto px-5">
            <div className=' max-w-390 lg:w-[95%] mx-auto'>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-end gap-5">
                    <div className="hidden xl:block"></div>
                    <div className='columns-2 flex flex-col items-center  py-5'>

                        <p className='text-[18px] xl:text-[26px] text-md:[22px]  font-normal text-[#6D6E67]'>What Students Say About Our</p>
                        <p className='text-[18px]  xl:text-[25px] text-md:[22px]  font-normal text-[#6D6E67]'>Question Paper Resources</p>

                    </div>
                    <div className="flex h-fit justify-center xl:justify-end pb-10">
                        <button onClick={()=> router.push("/comment")} className="cursor-pointer bg-linear-to-r from-[#3db7c7] to-[#2aa3b3] 
    text-white px-10 py-3 rounded-full text-[16px] font-semibold 
    shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">
                            ✨ Share Your Experience
                        </button>
                    </div>
                </div>





                <div className="grid grid-cols-1 mt-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-8 lg:px-6 md:px-12">
                    {visibleMessages.map((item, index) => (


                        <div
                            key={index}
                            className="group relative flex flex-col border border-[#3db7c7] rounded-sm gap-6 bg-white p-6 shadow-md hover:shadow-xl transition-all overflow-hidden"
                        >
                            {/* Blur Overlay */}
                            <div className="absolute inset-0  bg-white/60 backdrop-blur-md opacity-0 group-hover:opacity-100 transition duration-300 z-10 flex items-center justify-center">
                                <Link href={`comment/${item.id}`}  className="bg-[#3db7c7] cursor-pointer text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:scale-105 transition">
                                    View Comment
                                </Link>
                            </div>

                            {/* Card Content */}
                            <div className="group-hover:blur-sm transition duration-300">
                                <FaQuoteLeft className="text-4xl text-[#3db7c7]" />

                                <p className="text-[14px] mt-1 lg:text-[16px] line-clamp-2  font-normal text-[#6D6E67] leading-relaxed">
                                    {item.chat}
                                </p>

                                <div className="lg:flex-col mt-2 gap-2 items-center flex justify-between">
                                    <div className="flex gap-3 justify-center items-center">
                                        {item.image !== null  ? (
                                            <img
                                            alt={item.image}
                                            src={`${API_BASE_URL}${item.image}`}
                                            className="rounded-full aspect-square"
                                            width={50}
                                            height={50}
                                        />
                                        ): (null)}

                                        <div>
                                            <p className="text-[#414244] text-[16px] lg:text-[20px] font-normal">
                                                {item.name}
                                            </p>
                                            <p className="text-[12px] lg:text-[16px] font-normal text-[#6D6E67]">
                                                {item.client}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-1 items-end">
                                        {[1, 2, 3, 4, 5].map((starIndex) => (
                                            <IoIosStar
                                                key={starIndex}
                                                className={
                                                    starIndex <= Number(item.star)
                                                        ? "text-[#3db7c7]"
                                                        : "text-yellow-400"
                                                }
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>

                {/* Dots + Center Text */}
                <div className="flex flex-col  items-center mt-8">
                    <div className="flex gap-3">
                        {Array.from(
                            { length: Math.ceil(data.length / itemsPerSlide) },
                            (_, index) => (
                                <span
                                    key={index}
                                    onClick={() => setCurrent(index * itemsPerSlide)}
                                    className={`w-3 h-3 rounded-full cursor-pointer ${current / itemsPerSlide === index
                                        ? "bg-[#3db7c7]"
                                        : "bg-gray-300"
                                        }`}
                                ></span>
                            )
                        )}
                    </div>
                </div>



            </div>
        </div>
    );
}

export default StudentReviews;
