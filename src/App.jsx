import React from "react";
import { Navbar, Footer, NotFound } from "./components/components";
<<<<<<< HEAD
import { Home, AllCourses, About, Contact } from "./pages/pages";
=======
import { HomePage, AllCourses } from "./pages/pages";
>>>>>>> 2f00df46562d428979e5bc132cc32196ce9f2831
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
<<<<<<< HEAD
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<AllCourses />} />
          <Route path="/contact" element={<Contact />} />
=======
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<AllCourses />} />
>>>>>>> 2f00df46562d428979e5bc132cc32196ce9f2831
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
