import React, { useEffect, useState } from "react";
import { createGlobalStyle } from "styled-components";
import MobileNav from "./MoblieNav";
import DesktopNav from "./DesktopNav";

function NavigationBar() {
  const [windowDimension, setWindowDimension] = useState(null);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension <= 1024;

  return (
    <div>
      <CSSReset />

      {isMobile ? <MobileNav /> : <DesktopNav />}
    </div>
  );
}

const CSSReset = createGlobalStyle`
  *,
  *::before, 
  *::after {
    margin: 0; 
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%; /*1rem = 10px*/
    box-sizing: border-box;      
  }  

  body {
    font-size: 1.4rem;
    font-family: sans-serif;
  }
`;

export default NavigationBar;
