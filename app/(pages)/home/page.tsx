"use client";
import MainPage from './components/main-page';
import PdfViewer from '@/app/_components/pdfveiver';
import StudentReviews from '@/app/_components/student-reviews';

import SubjectPage from './components/subject';

const HomePage = () => {
    
    return (
        <div className='max-w-390 flex flex-col gap-5 pb-20 w-[90%] mx-auto '>
          <MainPage/>
            <SubjectPage/>
          <StudentReviews/>
     
   
        </div>
    );
}

export default HomePage;
