import React from "react";
import {
  Navbar,
  Footer,
  Hero,
  About,
  Courses,
  Contact,
} from "./components/components";
import "./App.css";

// Fonts
import "@fontsource/inter/300.css";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Courses />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
