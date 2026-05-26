import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import CategoryPage from "../pages/CategoryPage";
import RoadmapPage from "../pages/RoadmapPage";
import ScrollToTop from "../components/common/ScrollToTop";

import AboutPage from "../pages/AboutPage";

import PrivacyPage from "../pages/PrivacyPage";

import TermsPage from "../pages/TermsPage";
import ArticlePage from "../pages/ArticlePage";
import ContactPage from "../pages/ContactPage";

function AppRoutes() {
    return (
        <BrowserRouter>

            <ScrollToTop />

            <Routes>

                <Route path="/" element={<Home />} />

                <Route
                    path="/category/:categoryName"
                    element={<CategoryPage />}
                />

                <Route
                    path="/roadmap/:slug"
                    element={<RoadmapPage />}
                />


                <Route
                    path="/about"
                    element={<AboutPage />}
                />

                <Route
                    path="/privacy-policy"
                    element={<PrivacyPage />}
                />

                <Route
                    path="/terms"
                    element={<TermsPage />}
                />

                <Route
                    path="/contact"
                    element={<ContactPage />}
                />

                <Route
                    path="/article/:slug"
                    element={<ArticlePage />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default AppRoutes;