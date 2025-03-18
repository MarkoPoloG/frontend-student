import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Student_components/Navbar";
import DashboardPage from "./views/Student_pages/Dashboardpage";
import AttendancePage from "./views/Student_pages/Attendancepage";
import GradesPage from "./views/Student_pages/Gradespage";
import AnnouncementsPage from "./views/Student_pages/Announcementspage";
import StudentResources from "./views/Student_pages/Resourcepage"; 

function App() {
  return (
    <>
      <Navbar />
      <div className="mx-auto bg-light rounded-bottom">
      </div>
      <div className="container w-100 mx-auto" style={{ marginTop: "40px" }}>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/attendance" element={<AttendancePage />} />
          <Route path="/grades" element={<GradesPage />} />
          <Route path="/announcements" element={<AnnouncementsPage />} />
          <Route path="resources" element={<StudentResources />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
