import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

import Logo from "../../assets/Landing/Logo.svg";

interface IProps {
  isMobile: boolean;
}

const Header: FunctionComponent<IProps> = ({ isMobile, children }) => {
  const [showNavbar, setShowNavbar] = useState(false);

  function enableHeader() {
      setShowNavbar(true);
  }

  function changeStyle(show: boolean) {
    const bg = document.getElementById('nav-background');
    const collapseNav = document.getElementById('collapse-header');

    if (collapseNav && bg) {
      collapseNav.style.top = show ? "1rem" : "-50rem";
      bg.style.opacity = show ? "1" : "0";
    }
  }

  function disableHeader() {
    changeStyle(false);

    setTimeout(() => {
      setShowNavbar(false);
    }, 500);
  }

  useEffect(() => {
    changeStyle(true);
  }, [showNavbar])

  function handleScreenClick(e: React.MouseEvent) {
    if (e.target === document.getElementById("nav-background")) {
      disableHeader();
    }
  }

  return (
    <header>
      <img id="logo" src={Logo} alt="Logo" />

      {isMobile ? (
        <>
          <button id="collapse-button" onClick={enableHeader}>
            <AiOutlineMenu size={40} />
          </button>

          {/* Show navbar */}
          {showNavbar && (
            <div
              id="nav-background"
              className="filter"
              onClick={handleScreenClick}
            >
              <div id="collapse-header">
                <div id="nav-head">
                  <img id="logo" src={Logo} alt="Logo" />

                  <button onClick={disableHeader}>
                    <AiOutlineClose />
                  </button>
                </div>
                {children}
              </div>
            </div>
          )}
        </>
      ) : (
        children
      )}
    </header>
  );
};

export default Header;
