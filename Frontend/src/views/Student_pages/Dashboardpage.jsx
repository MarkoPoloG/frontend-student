import Announcements from "../../components/Student_components/Announcements";
import UserDetails from "../../components/Student_components/UserDetails";
import "../../css/Dashboard.css";

export default function DashboardPage() {
  return (
    <div className="dashboard-container">
      <div className="student-details-section">
        <h3 className="h3 text-center mb-3">Student details</h3>
        <UserDetails />
      </div>
      <div className="recent-announcements-section">
        <h3 className="h3 text-center mb-3">Recent Announcements</h3>
        <Announcements limit={3} />
      </div>
    </div>
  );
}
