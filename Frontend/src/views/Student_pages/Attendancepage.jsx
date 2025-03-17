import React from 'react';

const AttendancePage = () => {
  const attendance = [
    { date: '2025-03-10', course: 'Mathematics', status: 'Present' },
    { date: '2025-03-11', course: 'Science', status: 'Absent' },
    { date: '2025-03-12', course: 'History', status: 'Present' },
    { date: '2025-03-13', course: 'Mathematics', status: 'Late' },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Attendance</h1>
      <p style={styles.subtitle}>Track your attendance record here.</p>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>Date</th>
            <th style={styles.tableHeader}>Course</th>
            <th style={styles.tableHeader}>Status</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map((record, index) => (
            <tr key={index} style={styles.tableRow}>
              <td style={styles.tableCell}>{record.date}</td>
              <td style={styles.tableCell}>{record.course}</td>
              <td style={styles.tableCell}>{record.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: { padding: '20px', fontFamily: 'Arial, sans-serif' },
  title: { fontSize: '28px', color: '#333' },
  subtitle: { fontSize: '16px', color: '#666', marginBottom: '20px' },
  table: { width: '100%', borderCollapse: 'collapse' },
  tableHeader: { backgroundColor: '#2a5885', color: '#fff', padding: '10px', textAlign: 'left' },
  tableRow: { borderBottom: '1px solid #ddd' },
  tableCell: { padding: '10px', color: '#444' },
};

export default AttendancePage;