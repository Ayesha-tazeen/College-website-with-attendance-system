import React from 'react';
import sports from "../photo/sports.jpg";
import career from "../photo/career.png"

const Events = () => {
    return (
        <>
<div className='text-center heading'>
    Events
</div>
            <div className="flex flex-col md:flex-row  justify-center items-center mt-8">
                {/* Image on the left */}
                <div className="lg:w-1/3 w-4/5 pr-5 pl-5">
                    <img src={sports} alt="Sports Day" className="w-full h-auto" />
                </div>
                {/* Description on the right */}
                <div className="lg:w-1/3 w-4/5">
                    <h2 className="heading mb-4">International Sports Day Event</h2>
                    <p className="text-gray-700">
                        Join us for a day of excitement and camaraderie as we celebrate International Sports Day!
                        Experience thrilling competitions, friendly matches, and team spirit like never before.
                        Whether you're a seasoned athlete or a casual participant, there's something for everyone.
                        Don't miss out on this unforgettable event filled with fun, fitness, and friendship.
                        Mark your calendars and be part of the action!
                    </p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center  items-center mt-8">


                {/* Description on the left */}
                <div className="lg:w-1/3 w-4/5">
                    <h2 className="heading mb-4">Career Counseling Event</h2>
                    <p className="text-gray-700">
                        Explore your potential and chart your career path with our comprehensive career counseling event.
                        Our expert counselors will provide valuable insights, guidance, and resources to help you make informed decisions.
                        Whether you're a student seeking direction or a professional looking for career advancement opportunities,
                        this event is designed to empower you with the knowledge and tools you need for success.
                        Don't miss this chance to take the next step towards a fulfilling and rewarding career.
                    </p>
                </div>
                {/* Image on the right */}
                <div className="lg:w-1/3 w-4/5 pr-5 pl-5">
                    <img src={career} alt="Sports Day" className="w-full rounded-full object-cover h-auto" />
                </div>
            </div>
        </>
    );
};

export default Events;











