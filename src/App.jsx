import React from "react";
import { Navbar, Footer, NotFound } from "./components/components";
import { HomePage, AllCourses } from "./pages/pages";
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
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<AllCourses />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
