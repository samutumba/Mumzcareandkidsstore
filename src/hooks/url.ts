import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// A custom hook that builds on useLocation to parse
// the query string for you.
export function useQuery() {
    const { search } = useLocation();
  
    return React.useMemo(() => new URLSearchParams(search), [search]);
}

// Window Size
export function useWindowSize() {

  const [windowSize, setWindowSize] = useState({
    width: 1930,
    height: 986,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}


  