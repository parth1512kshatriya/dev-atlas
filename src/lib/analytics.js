import ReactGA from "react-ga4";

export const initGA = () => {

    ReactGA.initialize(
        "G-JS92M23N2N"
    );

};

export const trackPageView = (path) => {

    ReactGA.send({
        hitType: "pageview",
        page: path,
    });

};