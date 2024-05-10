import React from "react";
import { Navbar, Footer, NotFound } from "./components/components";
import { Home, Courses, Login, SignUp } from "./pages/pages";
import "./App.css";

// Fonts
import "@fontsource/inter/300.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
