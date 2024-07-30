import React, { useEffect } from "react";
import { Navbar, Footer, NotFound } from "./components/components";
import { Home, Courses, Login, SignUp, Profile, Course } from "./pages/pages";
import "./styles/App.css";

// Fonts
import "@fontsource/inter/300.css";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const excludedRoutes = ["/", "/courses"];
  const loc = useLocation();
  localStorage.setItem("name","Falonchi")
  const name = localStorage.getItem("name")

  return (
    <>
      {excludedRoutes.includes(loc.pathname) && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:slug" element={<Course />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {excludedRoutes.includes(loc.pathname) && <Footer />}
    </>
  );
}

export default App;
