import React from "react";

import LandingPage from "./app/LandingPage";
import Skills from "./app/Skills";
import Projects from "./app/Projects";

import "./styles/BaseStyle.css";

export default function App() {
  return (
    <>
      <LandingPage />
      <Skills />
      <Projects />
    </>
  );
}
