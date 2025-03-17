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
    <div id="container" style={{ padding: "20px" }}>
      <Navbar />
      <div className="mx-auto bg-light rounded-bottom">
        <UserDetails />
        <Announcements />
        <div className="container w-100 mx-auto" style={{ marginTop: "100px" }}>
          <div className="row">
            <div className="col">
              <Links type="View Grades" onSubmit={() => handleRouting("Grades")}>
                {/* SVG Icon Here */}
              </Links>
            </div>
            <div className="col">
              <Links type="View Announcements" onSubmit={() => handleRouting("Announcements")}>
                {/* SVG Icon Here */}
              </Links>
            </div>
            <div className="col">
              <Links type="View Attendance" onSubmit={() => handleRouting("Attendance")}>
                {/* SVG Icon Here */}
              </Links>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}