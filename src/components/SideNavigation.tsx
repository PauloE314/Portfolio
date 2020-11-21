import React, { useEffect, useRef, useState } from "react";

import { BsCircleFill } from "react-icons/bs";
import useScroll from "../utils/useScroll";
import "./SideNavigationStyle.css";

export default function SideNavigation() {
  const listRef = useRef<HTMLUListElement>(null);
  const scroll = useScroll();
  const [currentSection, setCurrentSection] = useState(0);
  const [sections, setSections] = useState<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const list = listRef.current;
    const elements: { el: HTMLElement; id: number }[] = [];
    const top = window.scrollY;
    const bottom = top + window.innerHeight;

    // Checks if list is loaded
    if (list) {
      if (top < window.innerHeight) {
        list.style.opacity = "0";
        list.style.left = "-10rem";
        console.log("Landing");
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
  }, [scroll.y]);

  useEffect(() => {
    setSections([
      document.getElementById("skills"),
      document.getElementById("projects"),
      document.getElementById("resume"),
      document.getElementById("contact"),
    ]);
  }, []);

  useEffect(() => {
    for (let i = 0; i < sections.length; i++) {
      const link = document.getElementById("nav-link-" + i);
      if (i <= currentSection) {
        link?.classList.add("active");
      } else {
        link?.classList.remove("active");
      }
    }
  }, [currentSection]);

  return (
    <ul id="side-navigation" ref={listRef}>
      {sections.map((section, index) => (
        <li key={index}>
          <a
            id={"nav-link-" + index}
            href={"#" + section?.id || "landing"}
            className={currentSection >= index ? "active" : ""}
          >
            <BsCircleFill />
          </a>
        </li>
      ))}
    </ul>
  );
}
