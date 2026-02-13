import React from 'react';
import { footer } from '../data/data';
import { FaInstagram } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className=' bg-[#2b2e33]  '>
   <div className='flex flex-col gap-8 max-w-390 mx-auto py-5 px-5 w-[95%]'>
       <div  className=' grid grid-cols-1 lg:grid-cols-3 gap-8'>
 <div className=''>
        <p className="text-[20px] md:text-[24px] font-bold text-white  md:text-left">
      <span className='text-[#DC2626]'>Bihar</span>Notes  Hub
        </p>
        <p className='text-[14px] lg:text-[16px] mt-2 font-normal text-[#c3c5b8]'>MCQs, notes & past papers in one place</p>
      </div>
      <div className='flex flex-col  gap-5'>
        {footer.map((item, index) => (
          <div key={index} className='flex flex-col gap-3'>
            <p className="text-[16px] md:text-[22px] font-bold text-white  md:text-left">{item.headinng}</p>
            <div className='grid grid-cols-2 lg:justify-center  gap-3 lg:grid-cols-3'>
              {item.subheading.map((item, index) => (
                <div key={index}>
                  <p className='text-[14px] lg:text-[16px] font-normal text-[#d1e460]'>{item.name}</p>
                  <div>
                    {item.ontion?.map((item,index)=>(
                      <div key={index}>
                        <p className='text-[12px] lg:text-[15px] font-normal text-[#c3c5b8]'>{item.class}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className='flex flex-col gap-3 '>
        <p className="text-[16px] md:text-[22px] font-bold text-white  md:text-left">Developed by : <span className='text-[#DC2626]'>Sakir Ali</span> </p>
        <p className='text-[14px] lg:text-[16px] font-normal text-[#d1e460]'>Email : support@yourdomain.com</p>

<div className='flex gap-1 items-center'>
  <FaInstagram className='text-pink-500 text-2xl' />
  <p className='text-[12px] lg:text-[15px] font-normal text-[#c3c5b8]'>sakir.367</p>
</div>
      </div>
      </div>
    
   </div>
     <div className='pb-5'>
        <p className=' py-3  border-b border-[#c3c5b8] text-[#c3c5b8] text-[12px] lg:text-[14px] font-normal text-center'>© 2026 Bihar Board Notes | Developed by Sakir Ali</p>
      </div>
     
    </div>
  );
}

export default Footer;
