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
function App() {
  return (
    <>
      {/* <Login/> */}
      {/* <Register/> */}
      {/* <SideBar/> */}
      {/* <Main/> */}
      {/* <HealthRecordList/> */}
      <ChatBot/>
    </>
  )
}

export default App
