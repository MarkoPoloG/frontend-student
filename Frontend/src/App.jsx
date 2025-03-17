import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Student_components/Navbar";
import UserDetails from "./components/Student_components/UserDetails";
import Announcements from "./components/Student_components/Announcements";
import DashboardPage from "./views/Student_pages/DashboardPage";
import AttendancePage from "./views/Student_pages/AttendancePage";
import GradesPage from "./views/Student_pages/Gradespage";
import AnnouncementsPage from "./views/Student_pages/AnnouncementsPage";

function App() {
  return (
    <>
      <Navbar />

      {/* UserDetails and Announcements will always be visible */}
      <div className="mx-auto bg-light rounded-bottom">
      </div>

      {/* Page Routing - Changes Below UserDetails and Announcements */}
      <div className="container w-100 mx-auto" style={{ marginTop: "40px" }}>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/attendance" element={<AttendancePage />} />
          <Route path="/grades" element={<GradesPage />} />
          <Route path="/announcements" element={<AnnouncementsPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
