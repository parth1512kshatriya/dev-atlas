import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "../../lib/analytics";

function ScrollToTop() {

    const { pathname } = useLocation();

    useEffect(() => {

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        trackPageView(pathname);

    }, [pathname]);

    return null;
}

export default ScrollToTop;