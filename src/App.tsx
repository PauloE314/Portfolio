import React from "react";

import ContactPage from "./pages/ContactPage";
import LandingPage from "./pages/LandingPage";
import ProjectsPage from "./pages/ProjectsPage";
import ResumePage from "./pages/ResumePage";

import { GlobalStyles } from "./styles/AppStyle";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <LandingPage />
      <ResumePage />
    </>
  );
}
