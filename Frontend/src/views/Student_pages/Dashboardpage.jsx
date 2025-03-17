// src/views/student_pages/DashboardPage.jsx
import Announcements from "../../components/Student_components/Announcements";
import UserDetails from "../../components/Student_components/UserDetails";
import Links from "../../components/Student_components/Links";
import Navbar from "../../components/Student_components/Navbar";
import { useNavigate } from "react-router-dom";

export default function DashboardPage() {
  const navigate = useNavigate();

  function handleRouting(type) {
    if (type === "Grades") navigate("/grades");
    else if (type === "Announcements") navigate("/announcements");
    else if (type === "Attendance") navigate("/attendance");
  }

  return (
      <div>
        <UserDetails />
        <h3 className="h3 mt-5 text-center">Recent announcements</h3>
        <Announcements />
      </div>
  );
}