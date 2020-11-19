import React, { FunctionComponent, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

import Logo from "../../assets/Logo.svg";

interface IProps {
  isMobile: boolean;
}

const Header: FunctionComponent<IProps> = ({ isMobile, children }) => {
  const [showNavbar, setShowNavbar] = useState(false);

  function enableHeader() {
    setShowNavbar(true);
  }

  function disableHeader() {
    const bg = document.getElementById("nav-background");
    if (bg) bg.style.opacity = "0";

    setTimeout(() => setShowNavbar(false), 500);
  }

  function handleScreenClick(e: React.MouseEvent) {
    if (e.target === document.getElementById("nav-background")) {
      disableHeader();
    }
  }

  return (
    <header>
      <img src={Logo} alt="Logo" />

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
                <button onClick={disableHeader}>
                  <AiOutlineClose />
                </button>
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
