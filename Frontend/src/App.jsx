import Navbar from "./components/Teacher_Components/Navbar";
import Dashboard from "./views/Teacher_Pages/Dashboard";
import "@/css/App.css";

import UpdateGrades from "./views/Teacher_Pages/UpdateGrades";
import UpdateResources from "./views/Teacher_Pages/UpdateResources";
import PostAnnouncements from "./views/Teacher_Pages/PostAnnouncements";
import TakeAttendance from "./views/Teacher_Pages/TakeAttendance";
//cms:

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
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/grades" element={<UpdateGrades />} />
        <Route path="/resources" element={<UpdateResources />} />
        <Route path="/announcements" element={<PostAnnouncements />} />
        <Route path="/attendance" element={<TakeAttendance />} />
        {/* prefixing with cms for now */}
        <Route path="/cms" element={<Layout />}>
          <Route index element={<Homepage />} />{" "}
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
          <Route
            path="AccountUpdateSuccessful"
            element={<AccountUpdateConfirmation />}
          />
          <Route path="websitecreate" element={<CreateWebsitePage />} />
          <Route path="dashboard" element={<CMS_Dashboard />} />
          <Route path="parentmanagement" element={<ParentAccount />} />
          <Route path="websitedesign" element={<WebsiteDesignPage />} />
        </Route>
      </Routes>
    </div>
  );
}