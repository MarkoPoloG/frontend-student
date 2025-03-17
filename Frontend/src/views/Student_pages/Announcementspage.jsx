import React from 'react';
import Announcements from '../../components/Student_components/Announcements';

const AnnouncementsPage = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
          <h3 className="h3 mt-5 text-center">All Announcements</h3>
      <Announcements />
    </div>
  );
};

export default AnnouncementsPage;
