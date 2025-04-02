import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Remet le scroll en haut de la page à chaque changement de route
  }, [pathname]);
console.log("fdgdfgdf");

  return null;
}

export default ScrollToTop;