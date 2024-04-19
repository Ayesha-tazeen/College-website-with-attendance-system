import React from 'react';
import library from '../photo/library.jpg';
import lab from "../photo/lab.jpg"
import hostel from "../photo/hostel.jpg";
import dinning from "../photo/dinning.jpg";
import study from "../photo/studyspace.jpg"



const CampusFacilities = () => {
    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="heading text-center  mb-6">Campus Facilities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {facilities.map((facility, index) => (
                        <div key={index} className="rounded-lg overflow-hidden shadow-md">
                            <img src={facility.image} alt={facility.name} className="w-full h-48 object-fit" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{facility.name}</h3>
                                <p className="text-gray-700">{facility.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Define campus facilities data
const facilities = [
    {
        name: 'Library',
        description: 'Explore a vast collection of books, journals, and digital resources to support your studies.',
        image: library,
    },
    {
        name: 'Laboratories',
        description: 'Access state-of-the-art laboratories equipped for various scientific and research activities.',
        image: lab,
    },
    {
        name: 'Sports Facilities',
        description: 'Stay active and healthy with our sports facilities including gyms, fields, and courts.',
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdMOEpWGufsQf4J4zCXEIHN2YqPAY959u4pJtRb1Kzkg&s",
    },
    {
        name: "Accomodation Facilities",
        description: "Evergreen Education University provides comfortable and secure hostel accommodations for students, offering a conducive living environment that fosters community and academic success.",
        image: hostel
    },
    {
        name:"Dinning area",
        description:"Our dining facilities offer a variety of nutritious and delicious meals to cater to diverse dietary preferences and requirements, ensuring students' well-being and satisfaction.",
        image:dinning
    },
    {
        name:"Study Space Area ",
        description:" Evergreen Education University offers dedicated study spaces equipped with modern amenities and conducive environments for focused academic work, collaboration, and group study sessions.",
        image:study
    }
  
];

export default CampusFacilities;
