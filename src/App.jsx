import { Navbar, Footer, NotFound } from "./components/components";
import { Home, Courses, Login, SignUp, Profile, Course } from "./pages/pages";
import img from "./assets/course.jpg";
import "./styles/App.css";
import { Data } from "./context.jsx";

// Fonts
import "@fontsource/inter/300.css";

import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const excludedRoutes = ["/", "/courses"];
  const loc = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  }, [loc.pathname]);

  const user = true;

  const courses = [
    {
      name: "React JS",
      img: img,
      cost: "free",
    },
    {
      name: "Angular JS",
      img: img,
      cost: "free",
    },
    {
      name: "Vue JS",
      img: img,
      cost: "free",
    },
    {
      name: "SMM",
      img: img,
      cost: "299 ming",
    },
    {
      name: "Cyber Security",
      img: img,
      cost: "299 ming",
    },
    {
      name: "Node JS",
      img: img,
      cost: "free",
    },
  ];

  return (
    <>
      <Data.Provider value={{ courses, user }}>
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
      </Data.Provider>
    </>
  );
}

export default App;
