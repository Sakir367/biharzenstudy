

const About = () => {
    return (
        <div className="max-w-390 mx-auto w-full lg:w-[90%] flex flex-col gap-5 py-10 px-5 bg-white lg:p-5 lg:py-10">
           <p  className="text-[30px] font-bold text-center  text-[#6D6E67] ">About Us</p>

           <p  className="text-[14px] lg:text-[18px] font-normal mt-4  text-[#6D6E67] ">This platform provides Previous Year Question Papers, Notes, and MCQ Tests to help students prepare for exams easily and effectively</p> 

           <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-5">
<div className="lg:p-5 flex flex-col gap-5">
    <p className="text-[24px] font-bold text-center  text-[#DC2626] ">Our mission</p>
    <p  className="text-[14px] lg:text-[16px] font-normal mt-4  text-[#6D6E67] ">Our mission is to make quality education accessible to every student by providing structured study materials, practice questions, and exam-focused resources.</p>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
<div>
    <p  className="text-[18px] lg:text-[22px]    font-semibold text-[#6D6E67]"> What We Provide</p>
 <div className=" text-[12px] lg:text-[14px] font-normal text-[#6D6E67]  flex flex-col gap-1">
       <p>📘 Previous Year Question Papers</p>
    <p>📝 Exam Notes & Study Materials</p>
    <p>🧠 MCQ Practice Tests</p>
    <p>📊 Performance Based Learning</p>
 </div>
</div>

<div>
    <p  className="text-[18px] lg:text-[22px] font-semibold  text-nowrap  text-[#6D6E67] ">   Who Can Use This Platform</p>
 <div className="text-[12px] lg:text-[14px]font-normal text-[#6D6E67]  flex flex-col gap-1">
       <p>School Students</p>
    <p>College Students</p>
    <p>Competitive Exam Aspirants</p>
    <p>📊 Performance Based Learning</p>
 </div>
</div>
    </div>
</div>


 <img
            className="w-full rounded-sm h-full object-cover bg-[#157e8b]"
            src="images/bglogo.png"
            alt="logo"
          />






           </div>

           
        </div>
    );
}

export default About;
