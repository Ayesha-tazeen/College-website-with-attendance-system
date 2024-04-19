import React from 'react';

const FeaturedCourses = () => {
  return (
    <div className="container mx-auto mt-8">
      <div className="heading mb-4">Featured Courses</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-bold mb-2">Computer Science</h2>
          <p className="text-gray-700 mb-4">Explore the exciting world of computer science and develop cutting-edge software solutions.</p>
          <ul className="list-disc list-inside">
            <li>Practical and theoretical knowledge</li>
            <li>Expert faculty members</li>
            <li>Internship opportunities</li>
            <li>Career advancement prospects</li>
          </ul>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Learn More</button>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-bold mb-2">Business Administration</h2>
          <p className="text-gray-700 mb-4">Gain essential business skills and leadership qualities to thrive in today's competitive corporate environment.</p>
          <ul className="list-disc list-inside">
            <li>Strategic management principles</li>
            <li>Finance and accounting fundamentals</li>
            <li>Marketing strategies</li>
            <li>Entrepreneurship opportunities</li>
          </ul>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Learn More</button>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-bold mb-2">Environmental Science</h2>
          <p className="text-gray-700 mb-4">Study the intricate relationships between humans and the environment, and work towards a sustainable future.</p>
          <ul className="list-disc list-inside">
            <li>Eco-friendly practices</li>
            <li>Climate change mitigation</li>
            <li>Conservation efforts</li>
            <li>Fieldwork and research opportunities</li>
          </ul>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCourses;
