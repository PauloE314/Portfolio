import React, { useEffect, useRef, useState } from "react";

import { BsCircleFill } from "react-icons/bs";
import "./SideNavigationStyle.css";

export default function SideNavigation() {
  const listRef = useRef<HTMLUListElement>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [controlList, setControlList] = useState<React.ReactNode[]>();
  const [sections, setSections] = useState<(HTMLElement | null)[]>([]);

  function handleScroll() {
    const list = listRef.current;
    const elements: { el: HTMLElement; id: number }[] = [];
    const top = window.scrollY;
    const bottom = top + window.innerHeight;

    // Checks if list is loaded
    if (list) {
      if (top < window.innerHeight) {
        list.style.opacity = "0";
        list.style.left = "-10rem";
        return;
      }
      list.style.opacity = "1";
      list.style.left = "0";

      // Checks which section is been visualized
      sections.forEach((section, index) => {
        if (section) {
          const objTop = section.offsetTop;
          const objBottom = objTop + section.offsetHeight;

          if (objTop < bottom && objBottom > top) {
            elements.push({ el: section, id: index });
          }
        }
      });

      // Gets the first
      if (elements[0]) {
        setCurrentSection(elements[0].id);
      }
    }
  }

  useEffect(() => {
    setSections([
      document.getElementById("skills"),
      document.getElementById("projects"),
      document.getElementById("resume"),
      document.getElementById("contact"),
    ]);
  }, []);

  useEffect(() => {
    setControlList(() =>
      sections.map((section, index) => (
        <li key={index} id={"#" + section?.id || "landing"}>
          <a
            href={"#" + section?.id || "landing"}
            className={currentSection >= index ? "active" : ""}
          >
            <BsCircleFill />
          </a>
        </li>
      ))
    );
  }, [currentSection]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ul id="side-navigation" ref={listRef}>
      {controlList}
    </ul>
  );
}
