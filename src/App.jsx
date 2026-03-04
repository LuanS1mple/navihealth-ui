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
import Feedback from "./pages/Users/Feedback/Feedback"
import PaymentResult from "./pages/Users/Payment/PaymentResult"
import PaymentSuccess from "./pages/Users/Payment/PaymentSuccess"
import PaymentCancel from "./pages/Users/Payment/PaymentCancel"

// Admin Pages
import MainScreen from "./pages/Admins/MainScreen/MainScreen"
import UserManagement from "./pages/Admins/UserManagement/UserManagement"
import DashBoard from "./pages/Admins/DasbBoard/DashBoard"

// Other Pages
import Guest from "./pages/Guest/Guest"
import Privacy from "./pages/Privacy/Privacy"

import { useState, useEffect } from "react"
import { Snackbar, Alert } from "@mui/material"

function App() {
  const [notification, setNotification] = useState({
    open: false,
    message: "",
    severity: "info"
  });

  useEffect(() => {
    const handleNotification = (event) => {
      setNotification({
        open: true,
        message: event.detail.message,
        severity: event.detail.severity || "info"
      });
    };

    window.addEventListener('show-notification', handleNotification);
    return () => window.removeEventListener('show-notification', handleNotification);
  }, []);

  const handleClose = () => setNotification({ ...notification, open: false });

  return (
    <>
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
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/payment-result" element={<PaymentResult />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/payment-cancel" element={<PaymentCancel />} />
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

      <Snackbar
        open={notification.open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        sx={{ mt: 7 }}
      >
        <Alert onClose={handleClose} severity={notification.severity} variant="filled" sx={{ width: '100%' }}>
          {notification.message}
        </Alert>
      </Snackbar>
    </>
  )
}

export default App
