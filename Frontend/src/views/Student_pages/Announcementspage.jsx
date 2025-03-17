import React from 'react';

const AnnouncementsPage = () => {
  const announcements = [
    { title: 'Spring Break Notice', date: '2025-03-15', content: 'School closed March 20th-27th.' },
    { title: 'Exam Schedule Released', date: '2025-03-12', content: 'Check your dashboard for details.' },
    { title: 'Club Fair This Friday', date: '2025-03-10', content: 'Join us at 3 PM in the main hall!' },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Announcements</h1>
      <p style={styles.subtitle}>Stay updated with the latest news.</p>
      <div style={styles.announcementList}>
        {announcements.map((announcement, index) => (
          <div key={index} style={styles.announcementCard}>
            <h2 style={styles.announcementTitle}>{announcement.title}</h2>
            <p style={styles.announcementDate}>Posted on: {announcement.date}</p>
            <p style={styles.announcementContent}>{announcement.content}</p>
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
  announcementList: { display: 'flex', flexDirection: 'column', gap: '15px' },
  announcementCard: { border: '1px solid #ddd', padding: '15px', borderRadius: '5px', backgroundColor: '#f9f9f9' },
  announcementTitle: { fontSize: '20px', color: '#2a5885', marginBottom: '5px' },
  announcementDate: { fontSize: '14px', color: '#888', marginBottom: '10px' },
  announcementContent: { fontSize: '16px', color: '#444' },
};

export default AnnouncementsPage;