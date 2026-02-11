
"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { FaQuoteLeft } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";
// import { HiOutlineArrowLongLeft } from "react-icons/hi2";

const messages = [
    { chat: `The interior design team completely transformed my space Every corner ref!`, name: "Sakir Ali", clinet: "New Client", image: "/images/Screenshot 2026-01-06 165101.png", star: "3" },
    { chat: `The interior design teamcompletely tr`, name: "Kasif ", clinet: "New Client", image: "/images/Screenshot 2026-01-06 165101.png", star: "2" },
    { chat: `very good`, name: "Sakir Ali", clinet: "New Client", image: "/images/Screenshot 2026-01-06 165101.png", star: "4" },
    { chat: `The interior design team completely transformed my space Every corner reflects elegance and comfort. Their attention to detail and creative vision made my home look stunning and functional. Highly recommended!`, name: "Sakir Ali", clinet: "New Client", image: "/images/Screenshot 2026-01-06 165101.png", star: "5" },
    { chat: `The interior design team  corner reflects elegancention to detail and creative vision made my home look stunning and functional. Highly recommended!`, name: "Salman", clinet: "New Client", image: "/images/Screenshot 2026-01-06 165101.png", star: "3" },
    { chat: `The interior design team completely transformed my space Every corner reflects elegance and comfort. Their attention to detail and creative vision made my home look stunning and functional. Highly recommended!`, name: "Sakir Ali", clinet: "New Client", image: "/images/Screenshot 2026-01-06 165101.png", star: "3" }

]
const StudentReviews = () => {
    const [current, setCurrent] = useState(0);
    const itemsPerSlide = 3;

    // Auto slide every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) =>
                prev + itemsPerSlide >= messages.length ? 0 : prev + itemsPerSlide
            );
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const visibleMessages = messages.slice(current, current + itemsPerSlide);

    return (
        <div className="bg-[#F0F0F0]  w-full mx-auto ">
            <div className=' max-w-390 lg:w-[95%] mx-auto'>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-end gap-5">
          <div className="hidden xl:block"></div>
                    <div className='columns-2 flex flex-col items-center  py-5'>
                   
                    <p className='text-[18px] xl:text-[26px] text-md:[22px]  font-normal text-[#6D6E67]'>What Students Say About Our</p>
                    <p className='text-[18px]  xl:text-[25px] text-md:[22px]  font-normal text-[#6D6E67]'>Question Paper Resources</p>

                </div>
             <div className="flex h-fit justify-center xl:justify-end pb-10">
    <button className="bg-linear-to-r from-[#3db7c7] to-[#2aa3b3] 
    text-white px-10 py-3 rounded-full text-[16px] font-semibold 
    shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">
        ✨ Share Your Experience
    </button>
</div>
    </div>





                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-8 lg:px-6 md:px-12">
                    {visibleMessages.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col border border-[#3db7c7] rounded-sm gap-6 bg-white p-6  shadow-md hover:shadow-xl transition-all"
                        >
                            <FaQuoteLeft className="text-4xl text-[#3db7c7]" />
                            <p className="text-[16px] text-justify  font-normal text-[#6D6E67] leading-relaxed">
                                {item.chat}
                            </p>

                            <div className="lg:flex-col gap-2 items-center flex justify-between">

                                <div className="flex gap-3 justify-center items-center">
                                    <Image alt='/assets/about/image.jpg' src={item.image} className=' rounded-full aspect-square' width={50} height={50} />
                                    <div className="">
                                        <p className="text-[#414244] text-[20px] font-normal">
                                            {item.name}
                                        </p>
                                        <p className="ext-[16px]  font-normal text-[#6D6E67]">{item.clinet}</p>


                                    </div>

                                </div>

                                <div className="flex gap-1 items-end">
                                    {[1, 2, 3, 4, 5].map((starIndex) => (
                                        <IoIosStar
                                            key={starIndex}
                                            className={
                                                starIndex <= Number(item.star)
                                                    ? " text-[#3db7c7]"
                                                    : "text-yellow-400"
                                            }
                                        />
                                    ))}
                                </div>

                            </div>

                        </div>
                    ))}
                </div>

                {/* Dots + Center Text */}
                <div className="flex flex-col items-center mt-8">
                    <div className="flex gap-3">
                        {Array.from(
                            { length: Math.ceil(messages.length / itemsPerSlide) },
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
