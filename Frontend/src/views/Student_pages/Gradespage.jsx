import React, { useState } from 'react';
import '../../css/Grades.css';

const GradesPage = () => {
  const grades = [
    { course: 'Mathematics', assignments: [
      { name: 'Assignment 1', score: '85/100' },
      { name: 'Midterm Exam', score: '78/100' },
      { name: 'Quiz 1', score: '20/25' },
    ]},
    { course: 'Mathematics', assignments: [
      { name: 'Assignment 2', score: '55/100' },
      { name: 'Midterm Exam 2', score: '48/100' },
      { name: 'Quiz 2', score: '20/25' },
    ]},
    { course: 'Science', assignments: [
      { name: 'Lab Report', score: '92/100' },
      { name: 'Final Exam', score: '88/100' },
    ]},
    { course: 'English', assignments: [
      { name: 'Essay', score: '90/100' },
      { name: 'Oral Presentation', score: '85/100' },
    ]},
  ];

  // ✅ Merge courses and group assignments by name
  const mergedGrades = grades.reduce((acc, current) => {
    if (!acc[current.course]) {
      acc[current.course] = { course: current.course, assignments: {} };
    }
    current.assignments.forEach((assignment) => {
      if (!acc[current.course].assignments[assignment.name]) {
        acc[current.course].assignments[assignment.name] = [];
      }
      acc[current.course].assignments[assignment.name].push(assignment.score);
    });
    return acc;
  }, {});

  const courseList = Object.values(mergedGrades);

  const [selectedCourse, setSelectedCourse] = useState(courseList[0].course);

  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  const selectedCourseData = courseList.find(course => course.course === selectedCourse);

  return (
    <div className="grades-container">
      <h1 className="grades-title">Grades</h1>
      <div className="select-container">
        <label htmlFor="courseSelect" className="select-label">Select a Subject: </label>
        <select
          id="courseSelect"
          value={selectedCourse}
          onChange={handleCourseChange}
          className="course-select"
        >
          {courseList.map((course, index) => (
            <option key={index} value={course.course}>
              {course.course}
            </option>
          ))}
        </select>
      </div>
      <div className="grades-list">
        {selectedCourseData && (
          <div className="course-card">
            <h2 className="course-title">{selectedCourseData.course}</h2>
            <div className="assignments-container">
              {Object.entries(selectedCourseData.assignments).map(([assignmentName, scores], idx) => (
                <div key={idx} className="assignment-box">
                  <h3 className="assignment-name">{assignmentName}</h3>
                  <ul className="score-list">
                    {scores.map((score, index) => (
                      <li key={index} className="score-item">{score}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GradesPage;
