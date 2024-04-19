import React from 'react';
import colllege from "../photo/colllege.jpg"
import "../index.css"
import Events from './Events';
import CampusFacilities from './CampusFacilities';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className=''>
      <div className=' mt-2 md:text-3xl text-2xl font-serif text-blue-950'>EverGreen Education university </div>
      <span className=' text-blue-600'> <b>since(1992)</b></span>
      <div className='flex justify-center mb-2 mt-2 items-center'>
        <img src={colllege} alt="College" className=" w-[70%] lg:h-[590px] object-fit" />
      </div>
      
      <div id="scroll-container">
        <div id="scroll-text" className='text-black text-xs  lg:text-lg font-bold'>Admission open for UG and PG Courses . Last date of application submission is 24/06/2024
        <span className='lg:ml-20 ml-5 font text-red-800'>Scholarships available for meritonious students and for SC/ST/OBC  students. </span>
        <span></span>
        </div>
      </div>
      <Events/>
      <CampusFacilities/>
      <Footer/>
    </div>
  );
};

export default Home;
