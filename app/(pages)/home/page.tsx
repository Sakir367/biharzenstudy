"use client";
import MainPage from './components/main-page';
import PdfViewer from '@/app/_components/pdfveiver';
import StudentReviews from '@/app/_components/student-reviews';
import MCQPage from '@/app/_components/mcq';

const HomePage = () => {
    
    return (
        <div className='max-w-390 flex flex-col gap-5 pb-20 w-[90%] mx-auto '>
          <MainPage/>
          <StudentReviews/>
          <MCQPage/>
        </div>
    );
}

export default HomePage;
