"use client";
import MainPage from './components/main-page';
import PdfViewer from '@/app/_components/pdfveiver';
import StudentReviews from '@/app/_components/student-reviews';

import SubjectPage from './components/subject';

const HomePage = () => {
    
    return (
        <div className='max-w-390 flex flex-col gap-5 pb-20 w-full mx-auto '>
<div className='bg-[#effcf8]'>
                      <div className="overflow-hidden w-[90%] mx-auto  py-10 ">
  <p
    className="marquee-text text-[18px] md:text-[30px] text-center font-bold text-[#DC2626]"
    style={{
      textShadow: "2px 2px 2px #ffffff",
    }}
  >
    बिहार बोर्ड 10वीं और 12वीं की पूरी तैयारी अब हमारी वेबसाइट पर – Previous Year Papers, Notes और MCQ Test के साथ।
  </p>
</div>
</div>
          <MainPage/>
            <SubjectPage/>
          <StudentReviews/>
     
   
        </div>
    );
}

export default HomePage;
