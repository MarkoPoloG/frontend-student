import Navbar from "./components/Teacher_Components/Navbar"; // Teacher Navbar (Unused for now)
import Dashboard from "./views/Teacher_Pages/Dashboard"; // Teacher Dashboard (Unused for now)
import "@/css/App.css";

// Teacher Pages (Kept for Future)
import UpdateGrades from "./views/Teacher_Pages/UpdateGrades";
import UpdateResources from "./views/Teacher_Pages/UpdateResources";
import PostAnnouncements from "./views/Teacher_Pages/PostAnnouncements";
import TakeAttendance from "./views/Teacher_Pages/TakeAttendance";

// Student Pages (Functional)
import StudentNavbar from "./components/Student_components/Navbar";
import StudentDashboard from "./views/Student_Pages/DashboardPage";

// CMS Pages (Admin, Parent, Student Management)
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin_SignUp from "./views/CMS_Pages/admin_signup";
import Admin_LogIn from "./views/CMS_Pages/admin_login";
import CMS_Dashboard from "./views/CMS_Pages/CMS_dashboard";
import ParentAccount from "./views/CMS_Pages/Parent_account";
import ParentCreate from "./views/CMS_Pages/Parent_create.jsx";
import ParentSelect from "./views/CMS_Pages/Parent_select.jsx";
import ParentUpdate from "./views/CMS_Pages/Parent_update.jsx";
import StudentAccount from "./views/CMS_Pages/Student_account.jsx";
import StudentCreate from "./views/CMS_Pages/Student_create.jsx";
import StudentSelect from "./views/CMS_Pages/Student_select.jsx";
import StudentUpdate from "./views/CMS_Pages/Student_update.jsx";
import Homepage from "./views/CMS_Pages/CMS_homepage";
import SuccessfulAccount from "./views/CMS_Pages/Student_confirm";
import CreateWebsitePage from "./views/CMS_Pages/CreateWebsite";
import WebsiteDesignPage from "./views/CMS_Pages/WebsiteDesign";
import AccountUpdateConfirmation from "./views/CMS_Pages/Account_update_confirmation";
import Layout from "./views/CMS_Pages/Layout.jsx";

export default function App() {
  return (
    <Router>
      <div className="App">
        {/* Use Student Navbar for now */}
        <StudentNavbar />

        <Routes>
          {/* Student Dashboard is active instead of Teacher Dashboard */}
          <Route path="/" element={<StudentDashboard />} />

          {/* Teacher Routes (Kept for Future Use) */}
          <Route path="/teacher/dashboard" element={<Dashboard />} />
          <Route path="/teacher/grades" element={<UpdateGrades />} />
          <Route path="/teacher/resources" element={<UpdateResources />} />
          <Route path="/teacher/announcements" element={<PostAnnouncements />} />
          <Route path="/teacher/attendance" element={<TakeAttendance />} />

          {/* CMS/Admin Routes */}
          <Route path="/cms" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="signup" element={<Admin_SignUp />} />
            <Route path="login" element={<Admin_LogIn />} />
            <Route path="parentcreate" element={<ParentCreate />} />
            <Route path="parentselect" element={<ParentSelect />} />
            <Route path="studentaccount" element={<StudentAccount />} />
            <Route path="studentcreate" element={<StudentCreate />} />
            <Route path="studentselect" element={<StudentSelect />} />
            <Route path="edit-student/:studentId" element={<StudentUpdate />} />
            <Route path="edit-parent/:parentId" element={<ParentUpdate />} />
            <Route path="AccountSuccessful" element={<SuccessfulAccount />} />
            <Route path="AccountUpdateSuccessful" element={<AccountUpdateConfirmation />} />
            <Route path="websitecreate" element={<CreateWebsitePage />} />
            <Route path="dashboard" element={<CMS_Dashboard />} />
            <Route path="parentmanagement" element={<ParentAccount />} />
            <Route path="websitedesign" element={<WebsiteDesignPage />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
