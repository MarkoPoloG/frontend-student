import Announcements from "./components/Student_components/Announcements";
import UserDetails from "./components/Student_components/UserDetails";
import Links from "./components/Student_components/Links";
import Navbar from "./components/Student_components/Navbar";
import { useNavigate } from "react-router-dom";


export default function Dashboard() {
  const navigate = useNavigate();
  function handleRouting(type) {
    if (type === "Grades") {
      navigate("/grades");
    } else if (type === "Resources") {
      navigate("/resources");
    } else if (type === "Announcements") {
      navigate("/announcements");
    } else if (type === "Attendance") {
      navigate("/attendance");
    }
  }
  return (
    <div id="container" style={{ padding: "20px" }}>
      <div>
        <Navbar />
      </div>
      <div className="mx-auto bg-light rounded-bottom">
        <UserDetails />
        <Announcements />
        <div className="container w-100 mx-auto" style={{ marginTop: "100px" }}>
          <div className="row ">
            <div className="col">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}