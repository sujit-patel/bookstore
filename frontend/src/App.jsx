import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./home/Home.jsx";
import Course from "./courses/Courses.jsx";
import Signup from "./Components/Signup.jsx";
import Contact from "./contacts/Contacts.jsx";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={authUser ? <Course /> : <Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
