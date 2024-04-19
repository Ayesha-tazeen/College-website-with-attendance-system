


import React from 'react';
import FeaturedCourses from './FeaturedCourses';
import Footer from '../../components/Footer';
import CollegeDescription from './CollegeDescription';

const AccordionItem = ({ title, content, subItems }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
<>


    <div className=' flex items-center justify-center'>


    <div className="border-b w-[95%]">
      <button
        className="w-full flex justify-between items-center text-white px-4 py-2 font-serif bg-slate-600 "
        onClick={toggleAccordion}
      >
        <span className="text-lg">{title}</span>
        <svg
          className={`w-6 h-6 transition-transform transform ${isOpen ? 'rotate-180' : ''}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10 12l-5-5h10z" />
        </svg>
      </button>
      {isOpen && (
        <div className="py-4 px-1 bg-white">
          {content && <p className=' py-2 px-1 bg-gray-200'>{content}</p>}
          {subItems && (
            <div className="mt-4 space-y-2">
              {subItems.map((item, index) => (
                <div key={index}>
                  <AccordionItem title={item.title} content={item.content} subItems={item.subItems} />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
    </div>
    </>
  );
};

const CoursesPage = () => {
  return (
    <>
    <CollegeDescription/>
    <div className="container mx-auto mt-8">
      <div className="heading mb-4">Courses</div>
      <div className="accordion">
        <AccordionItem
          title="Engineering"
          subItems={[
            {
              title: "Computer Science",
              subItems: [
                { title: "B.Tech", content: "B.Tech in Computer Science . BTech CSE is a four-year undergraduate program that focuses on practical and theoretical knowledge of computer hardware and advanced software. The program focuses on computer software and hardware process design and development.Total fees of this program is approxiamtely Rs.4,50,000" },
                { title: "M.Tech", content: "M.Tech in Computer Science. The Master of Technology in Computer Science is a postgraduate program that provides advanced knowledge and skills in the field of computer science. Students focus on specialized areas such as artificial intelligence, data science, and cybersecurity. The program equips graduates with the expertise needed for careers in research, development, and academia." },
              ],
            },
            {
              title: "Mechanical Engineering",
              subItems: [
                { title: "B.Tech", content: "B.Tech in Mechanical EngineeringB.Tech in Mechanical Engineering: This undergraduate program spans four years and covers fundamental principles and advanced concepts in mechanical engineering. Students learn about design, analysis, and manufacturing processes, preparing them for careers in various industries such as automotive, aerospace, and energy. The total fees for this program are approximately Rs. 4,20,000." },
                { title: "M.Tech", content: "M.Tech in Mechanical Engineering: The Master of Technology in Mechanical Engineering is a postgraduate program that offers specialized knowledge and skills in areas such as thermal engineering, fluid mechanics, and materials science. Students engage in research and development projects to solve complex engineering problems and innovate in the field. The program duration is two years, and the total fees are approximately Rs. 3,80,000." },
              ],
            },
          ]}
        />
        <AccordionItem
          title="Arts"
          subItems={[
            {
              title: "Literature",
              subItems: [
                { title: "BA", content: "The Bachelor of Arts in Literature is a three-year undergraduate program that explores various literary genres, movements, and authors from different cultural and historical contexts. Students analyze literary works critically and develop strong writing and communication skills. The program fosters a deep appreciation for literature and prepares graduates for careers in writing, publishing, education, and more." },
                { title: "MA", content: "MA in Literature: The Master of Arts in Literature is a postgraduate program that offers advanced study and research opportunities in literature. Students delve into specialized areas such as literary theory, comparative literature, and cultural studies. The program duration is two years, and graduates are equipped with the analytical and critical thinking skills needed for careers in academia, research, and cultural organizations." },
              ],
            },
            {
              title: "History",
              subItems: [
                { title: "BA", content: "The Bachelor of Arts in History is a three-year undergraduate program that examines human civilizations, events, and societies from ancient to modern times. Students analyze historical sources, interpret primary documents, and explore diverse perspectives on significant historical developments. The program fosters critical thinking, research, and communication skills essential for careers in fields such as education, public service, and heritage management." },
                { title: "MA", content: "The Master of Arts in History is a postgraduate program that offers advanced study and research opportunities in history. Students specialize in areas such as social history, political history, and cultural history, conducting original research and contributing to historical scholarship. The program duration is two years, and graduates are prepared for careers in academia, research, archives, museums, and public history." },
              ],
            },
          ]}
        />
        <AccordionItem
          title="Medical"
          subItems={[
            {
              title: "MBBS",
              content: " MBBS is an undergraduate medical degree program that spans five and a half years, including one year of compulsory internship. Students acquire comprehensive knowledge of medical sciences, clinical skills, and patient care through theoretical study and practical training. The program prepares graduates for careers as medical doctors, enabling them to diagnose, treat, and prevent illnesses in individuals and communities.",
            },
            {
              title: "MD",
              content: " MD is a postgraduate medical degree program that offers specialized training and expertise in various medical specialties. Students choose a specific area of focus such as internal medicine, pediatrics, surgery, or psychiatry and undergo advanced clinical training and research. The program duration varies depending on the specialty chosen, typically ranging from three to six years. Graduates of MD programs are qualified to practice as specialist physicians and may pursue careers in clinical practice, teaching, research, or healthcare administration.",
            },
          ]}
        />
      </div>


     
    </div>
     <FeaturedCourses/>
     <Footer/>
     </>
  );
};

export default CoursesPage;
