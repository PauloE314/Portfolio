import React from "react";

import LandingPage from "./app/LandingPage";
import Skills from "./app/Skills";
import Projects from "./app/Projects";
import Resume from "./app/Resume";
import Contact from "./app/Contact";
import Footer from "./app/Footer";

import "./styles/BaseStyle.css";
import useScreen from "./utils/useScreen";

export default function App() {
  const screen = useScreen();

  return (
    <>
      <LandingPage screen={screen} />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}
