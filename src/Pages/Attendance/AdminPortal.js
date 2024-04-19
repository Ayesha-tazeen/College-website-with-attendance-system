
import React, { useState, useEffect } from 'react';

const AttendancePortal = () => {
    const [date, setDate] = useState('');
    const [students, setStudents] = useState([]);
    const [attendance, setAttendance] = useState([]);
    const [totalPresent, setTotalPresent] = useState(0);
    const [totalAbsent, setTotalAbsent] = useState(0);
    const [newStudentName, setNewStudentName] = useState('');
    const [newStudentRollNumber, setNewStudentRollNumber] = useState('');

    // Load student details from local storage on component mount
    useEffect(() => {
        const storedStudents = JSON.parse(localStorage.getItem('students')) || [];
        // Sort students array by name in ascending order
        const sortedStudents = storedStudents.sort((a, b) => a.name.localeCompare(b.name));
        setStudents(sortedStudents);
    }, []);

    // Update attendance and totals when date changes
    useEffect(() => {
        // Fetch attendance data for the selected date from local storage
        const storedAttendance = JSON.parse(localStorage.getItem(date)) || [];
        setAttendance(storedAttendance);
        calculateTotalAttendance(storedAttendance);
    }, [date]);

    const calculateTotalAttendance = (attendance) => {
        const presentCount = attendance.filter((status) => status === 'present').length;
        const absentCount = attendance.filter((status) => status === 'absent').length;
        setTotalPresent(presentCount);
        setTotalAbsent(absentCount);
    };

    const handleAttendanceChange = (index, type) => {
        // Update attendance for the student
        const updatedAttendance = [...attendance];
        updatedAttendance[index] = type;
        setAttendance(updatedAttendance);
        calculateTotalAttendance(updatedAttendance);
        // Save updated attendance to local storage
        localStorage.setItem(date, JSON.stringify(updatedAttendance));
    };

    const handleAddStudent = () => {
        if (newStudentName && newStudentRollNumber) {
            const newStudent = {
                name: newStudentName,
                rollNumber: newStudentRollNumber,
            };
            setStudents([...students, newStudent]);
            // Save updated student list to local storage
            localStorage.setItem('students', JSON.stringify([...students, newStudent]));
            setNewStudentName('');
            setNewStudentRollNumber('');
        }
    };

    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();

    const formattedToday = `${dd}-${mm}-${yyyy}`;

    return (
        <>
            <div className="container w-full mt-5 rounded-lg px-3 py-9 bg-gray-100  md:w-[75%] mx-auto">
                <h2 className="heading mb-4">Mark Students Attendance</h2>
                <div className="mb-4  flex justify-center items-center">
                    <label className="mr-2">Select Date:</label>
                    <input
                        type="date"
                        value={date}
                        placeholder={formattedToday}
                        onChange={(e) => setDate(e.target.value)}
                        className="border w-full rounded px-3 py-2"
                    />
                </div>
               

                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="px-4 border border-gray-400 bg-yellow-200 text-blue-950 py-2">Roll Number</th>
                            <th className="px-4  border border-gray-400 bg-yellow-200 text-blue-950 py-2">Name</th>
                            <th className="px-4 border border-gray-400 bg-yellow-200 text-blue-950 py-2">Attendance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student, index) => (
                            <tr key={index}>
                                <td className="border border-gray-700 px-4 py-2">{student.rollNumber}</td>
                                <td className="border  font-bold border-gray-700 px-4 py-2">{student.name}</td>
                                <td className="border border-gray-700 px-4 py-2">
                                    <select
                                        value={attendance[index] || ''}
                                        onChange={(e) => handleAttendanceChange(index, e.target.value)}
                                        className={`border focus:outline-none font-bold text-white  focus:none focus:border-none rounded px-3 py-2 w-full ${attendance[index] === 'present' ? 'bg-green-400' : attendance[index] === 'absent' ? 'bg-red-400' : 'bg-gray-200'}`}

                                    >
                                        <option  className='bg-white text-black'disabled value="">Select attendance</option>
                                        <option  className='bg-white text-black' value="present">Present</option>
                                        <option  className='bg-white text-black'value="absent">Absent</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="mt-4  font-bold font-serif flex flex-col items-start">
                <p>Total  Number of Students: {students.length}</p>
                    <p>Total Present: {totalPresent}</p>
                    <p>Total Absent: {totalAbsent}</p>
                </div>

                <h3 className='font-bold font-serif'>Add a new Student</h3>
                <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between">
                  
                    <div className="mb-2  md:mb-0">
                        <label className="mr-2">Name:</label>
                        <input
                            type="text"
                            value={newStudentName}
                            onChange={(e) => setNewStudentName(e.target.value)}
                            className="border rounded px-3 py-2"
                        />
                    </div>
                    <div className="mb-2 md:mb-0">
                        <label className="mr-2">Roll Number:</label>
                        <input
                            type="text"
                            value={newStudentRollNumber}
                            onChange={(e) => setNewStudentRollNumber(e.target.value)}
                            className="border rounded px-3 py-2"
                        />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <button onClick={handleAddStudent} className="bg-blue-500 w-[30%] md:w-fit hover:bg-blue-600 text-white px-4 py-2 rounded">
                            Add Student
                        </button>
                    </div>
                </div>

            </div>
        </>
    );
};

export default AttendancePortal;