
const subjectname = [
    { id: 1, subnectname: "English", class10:[
    { id: 1, classname: "Class-10", subject: "English", year: "2025" },
    { id: 2, classname: "Class-10", subject: "English", year: "2025" },
    { id: 3, classname: "Class-10", subject: "English", year: "2025" },
    { id: 4, classname: "Class-10", subject: "English", year: "2025" },
    { id: 5, classname: "Class-10", subject: "English", year: "2025" },
    { id: 6, classname: "Class-10", subject: "English", year: "2025" },
    { id: 7, classname: "Class-10", subject: "English", year: "2025" },
    { id: 8, classname: "Class-10", subject: "History", year: "2025" },
    { id: 9, classname: "Class-10", subject: "English", year: "2025" },
    { id: 10, classname: "Class-10", subject: "English", year: "2025" },
] },
    { id: 2, subnectname: "Mathematics",class10:[
    { id: 1, classname: "Class-10", subject: "English", year: "2025" },
    { id: 2, classname: "Class-10", subject: "English", year: "2025" },
    { id: 3, classname: "Class-10", subject: "English", year: "2025" },
    { id: 4, classname: "Class-10", subject: "English", year: "2025" },
    { id: 5, classname: "Class-10", subject: "English", year: "2025" },
    { id: 6, classname: "Class-10", subject: "English", year: "2025" },
    { id: 7, classname: "Class-10", subject: "English", year: "2025" },
    { id: 8, classname: "Class-10", subject: "History", year: "2025" },
    { id: 9, classname: "Class-10", subject: "English", year: "2025" },
    { id: 10, classname: "Class-10", subject: "English", year: "2025" },
] },
    { id: 3, subnectname: "Science",class10:[
    { id: 1, classname: "Class-10", subject: "English", year: "2025" },
    { id: 2, classname: "Class-10", subject: "English", year: "2025" },
    { id: 3, classname: "Class-10", subject: "English", year: "2025" },
    { id: 4, classname: "Class-10", subject: "English", year: "2025" },
    { id: 5, classname: "Class-10", subject: "English", year: "2025" },
    { id: 6, classname: "Class-10", subject: "English", year: "2025" },
    { id: 7, classname: "Class-10", subject: "English", year: "2025" },
    { id: 8, classname: "Class-10", subject: "History", year: "2025" },
    { id: 9, classname: "Class-10", subject: "English", year: "2025" },
    { id: 10, classname: "Class-10", subject: "English", year: "2025" },
] },
    { id: 4, subnectname: "Social Science",class10:[
    { id: 1, classname: "Class-10", subject: "English", year: "2025" },
    { id: 2, classname: "Class-10", subject: "English", year: "2025" },
    { id: 3, classname: "Class-10", subject: "English", year: "2025" },
    { id: 4, classname: "Class-10", subject: "English", year: "2025" },
    { id: 5, classname: "Class-10", subject: "English", year: "2025" },
    { id: 6, classname: "Class-10", subject: "English", year: "2025" },
    { id: 7, classname: "Class-10", subject: "English", year: "2025" },
    { id: 8, classname: "Class-10", subject: "History", year: "2025" },
    { id: 9, classname: "Class-10", subject: "English", year: "2025" },
    { id: 10, classname: "Class-10", subject: "English", year: "2025" },
] },
    { id: 5, subnectname: "Hindi",class10:[
    { id: 1, classname: "Class-10", subject: "English", year: "2025" },
    { id: 2, classname: "Class-10", subject: "English", year: "2025" },
    { id: 3, classname: "Class-10", subject: "English", year: "2025" },
    { id: 4, classname: "Class-10", subject: "English", year: "2025" },
    { id: 5, classname: "Class-10", subject: "English", year: "2025" },
    { id: 6, classname: "Class-10", subject: "English", year: "2025" },
    { id: 7, classname: "Class-10", subject: "English", year: "2025" },
    { id: 8, classname: "Class-10", subject: "History", year: "2025" },
    { id: 9, classname: "Class-10", subject: "English", year: "2025" },
    { id: 10, classname: "Class-10", subject: "English", year: "2025" },
] },
]

const Class10Question = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-390 w-[90%] mx-auto ">

            {subjectname.map((item) => (
             <div className="flex flex-col gap-5 bg-white p-5">
                   <div key={item.id} className=' flex flex-col gap-3 border hover:bg-[#ecedfe]  h-fit bg-[#F5F0FE] border-[#7C3BED3D] rounded-sm p-5'>
                    <p className='text-[20px] text-center  text-[#212227] font-bold'>{item.subnectname}</p>
                    <p className='text-[12px] font-normal text-white bg-[#320D6D] border w-fit px-2 py-1 border-[#7C3BED3D rounded-sm' >View All</p>

                </div>
                  <div className="flex flex-col gap-5">
                            {item.class10?.map((item, index) => (
                                <div
                                    key={index}
                                    className="group flex items-center gap-2 text-[14px] hover:bg-[#320D6D] hover:text-white font-semibold text-[#212227] justify-between border border-[#212227] rounded-sm px-4 py-1"
                                >
                                    <p>{item.id}</p>

                                    <span className="flex-1 h-0.5 bg-[#212227] group-hover:bg-white"></span>

                                    <p>{item.classname}</p>

                                    <span className="flex-1 h-0.5 bg-[#212227] group-hover:bg-white"></span>

                                    <p>{item.subject}</p>

                                    <span className="flex-1 h-0.5 bg-[#212227] group-hover:bg-white"></span>

                                    <p>{item.year}</p>
                                </div>
                            ))}
                        </div>
             </div>
            ))}

        </div>
    );
}

export default Class10Question;
