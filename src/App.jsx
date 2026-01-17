import React from "react"
import NaviHealth from "../src/pages/Home/index"
import Login from "../src/pages/Login/index"
import Register from "../src/pages/Register/index"
import SideBar from "./components/SideBar/SideBar"
import { Box } from "@mui/material"
import Main from "./pages/Users/Main/Main"
import HealthRecord from "./components/HealthRecord/HealthRecord"
import HealthRecordList from "./pages/Users/HealthRecordList/HealthRecordList"
import ChatBot from "./pages/Users/ChatBot/ChatBot"
import ReminderList from "./pages/Users/ReminderList/ReminderList"
import SideBarAdmin from "./pages/Admins/SideBar/SideBarAdmin"
import MainScreen from "./pages/Admins/MainScreen/MainScreen"
import UserManagement from "./pages/Admins/UserManagement/UserManagement"
import DashBoard from "./pages/Admins/DasbBoard/DashBoard"
import { Routes, Route } from "react-router-dom"
import Privacy from "./pages/Privacy/Privacy"
function App() {
  return (
    <>
      <Routes>
        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Pages */}
        <Route path="/health-records" element={<HealthRecordList />} />
        <Route path="/reminders" element={<ReminderList />} />
        <Route path="/main-screen" element={<MainScreen />} />
        <Route path="/users" element={<UserManagement />} />
        <Route path="/dashboard" element={<DashBoard />} />

        {/* Components demo */}
        <Route path="/sidebar" element={<SideBar />} />
        <Route path="/main" element={<Main />} />
        <Route path="/chatbot" element={<ChatBot />} />

        {/* Default */}
        <Route path="*" element={<Login />} />
        {/* Privacy */}
        <Route path="/privacy" element={<Privacy/>}></Route>
      </Routes>
    </>
  )
}

export default App
