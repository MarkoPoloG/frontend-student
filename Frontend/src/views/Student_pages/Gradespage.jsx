import React from 'react';

const GradesPage = () => {
  const grades = [
    { course: 'Mathematics', assignments: [
      { name: 'Assignment 1', score: '85/100' },
      { name: 'Midterm Exam', score: '78/100' },
      { name: 'Quiz 1', score: '20/25' },
    ]},
    { course: 'Science', assignments: [
      { name: 'Lab Report', score: '92/100' },
      { name: 'Final Exam', score: '88/100' },
    ]},
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Grades</h1>
      <p style={styles.subtitle}>View your academic performance below.</p>
      <div style={styles.gradesList}>
        {grades.map((course, index) => (
          <div key={index} style={styles.courseCard}>
            <h2 style={styles.courseTitle}>{course.course}</h2>
            <ul style={styles.assignmentList}>
              {course.assignments.map((assignment, idx) => (
                <li key={idx} style={styles.assignmentItem}>
                  {assignment.name}: {assignment.score}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: { padding: '20px', fontFamily: 'Arial, sans-serif' },
  title: { fontSize: '28px', color: '#333' },
  subtitle: { fontSize: '16px', color: '#666', marginBottom: '20px' },
  gradesList: { display: 'flex', flexDirection: 'column', gap: '15px' },
  courseCard: { border: '1px solid #ddd', padding: '15px', borderRadius: '5px', backgroundColor: '#f9f9f9' },
  courseTitle: { fontSize: '20px', color: '#2a5885', marginBottom: '10px' },
  assignmentList: { listStyleType: 'none', padding: 0 },
  assignmentItem: { fontSize: '16px', color: '#444', marginBottom: '5px' },
};

export default GradesPage;