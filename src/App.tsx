import React from "react";

import LandingPage from "./app/LandingPage";
import Skills from "./app/Skills";
import Projects from "./app/Projects";
import Resume from "./app/Resume";
import Contact from "./app/Contact";
import Footer from "./app/Footer";

import "./styles/BaseStyle.css";
import useScreen from "./utils/useScreen";
import SideNavigation from "./components/SideNavigation";

export default function App() {
  const screen = useScreen();

  return (
    <div id="screen">
      <aside>
        <SideNavigation />
      </aside>
      <div id="screen-content">
        <LandingPage screen={screen} />
        <Skills />
        <Projects screen={screen} />
        <Resume screen={screen} />
        <Contact screen={screen} />
        <Footer />
      </div>
    </div>
  );
}
