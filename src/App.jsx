import React from "react"
import { Routes, Route } from "react-router-dom"

// Layouts
import MainLayout from "./layouts/MainLayout"

// Auth Pages
import Login from "./pages/Login"
import Register from "./pages/Register"
import ResetPassword from "./pages/ResetPassword/ResetPassword"
import EmailReset from "./pages/EmailReset/EmailReset"

// User Pages
import Main from "./pages/Users/Main/Main"
import HealthRecordList from "./pages/Users/HealthRecordList/HealthRecordList"
import ChatBot from "./pages/Users/ChatBot/ChatBot"
import ReminderList from "./pages/Users/ReminderList/ReminderList"
import ServicePlans from "./pages/Users/ServicePlans/ServicePlans"
import Profile from "./pages/Profile/Profile"

// Admin Pages
import MainScreen from "./pages/Admins/MainScreen/MainScreen"
import UserManagement from "./pages/Admins/UserManagement/UserManagement"
import DashBoard from "./pages/Admins/DasbBoard/DashBoard"

// Other Pages
import Guest from "./pages/Guest/Guest"
import Privacy from "./pages/Privacy/Privacy"

function App() {
  return (
    <Routes>
      {/* Landing Page */}
      <Route path="/" element={<Guest />} />

      {/* Auth */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/reset" element={<ResetPassword />} />
      <Route path="/email" element={<EmailReset />} />

      {/* User Routes */}
      <Route element={<MainLayout isAdmin={false} />}>
        <Route path="/main" element={<Main />} />
        <Route path="/health-records" element={<HealthRecordList />} />
        <Route path="/chatbot" element={<ChatBot />} />
        <Route path="/reminders" element={<ReminderList />} />
        <Route path="/services" element={<ServicePlans />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/privacy" element={<Privacy />} />
      </Route>

      {/* Admin Routes */}
      <Route element={<MainLayout isAdmin={true} />}>
        <Route path="/main-screen" element={<MainScreen />} />
        <Route path="/users" element={<UserManagement />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Route>

      {/* Default redirect to Guest */}
      <Route path="*" element={<Guest />} />
    </Routes>
  )
}

export default App
