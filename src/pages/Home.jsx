import Navbar from "../components/layout/Navbar";

import HeroSection from "../components/home/HeroSection";

import CategoriesSection from "../components/home/CategoriesSection";

import EducatorsSection from "../components/home/EducatorsSection";

import CertificationsSection from "../components/home/CertificationsSection";

import RoadmapsSection from "../components/home/RoadmapsSection";

import SearchModal from "../components/search/SearchModal";

import { useSearch } from "../context/SearchContext";

import FeaturesSection from "../components/home/FeaturesSection";

import AdSection from "../components/home/AdSection";

import Footer from "../components/layout/Footer";

import SEO from "../components/common/SEO";

import LearnHubSection from "../components/home/LearnHubSection";

import NewsletterSection from "../components/home/NewsletterSection";

import { useEffect } from "react";

function Home() {

    const {
        setIsOpen,
    } = useSearch();

    // Keyboard shortcuts
    useEffect(() => {

        const handleKeyDown = (e) => {

            // Ctrl + K
            if (
                (e.ctrlKey || e.metaKey)
                && e.key === "k"
            ) {
                e.preventDefault();

                setIsOpen(true);
            }

            // Escape
            if (e.key === "Escape") {
                setIsOpen(false);
            }

        };

        window.addEventListener(
            "keydown",
            handleKeyDown
        );

        return () => {
            window.removeEventListener(
                "keydown",
                handleKeyDown
            );
        };

    }, [setIsOpen]);

    return (

        <main className="relative">

            <SEO
                title="Best Developer Tools, AI Resources & Career Roadmaps"
                description="Discover the best AI tools, GitHub repositories, cybersecurity resources, developer roadmaps, certifications, and educators."
                keywords="developer tools, AI tools, GitHub repositories, cybersecurity, roadmaps, programming resources"
            />

            <Navbar />

            <SearchModal />

            <HeroSection />

            <CategoriesSection />

            <FeaturesSection />

            <AdSection />

            <RoadmapsSection />

            <EducatorsSection />

            <CertificationsSection />

            <LearnHubSection />

            <NewsletterSection />

            <Footer />

        </main>

    );
}

export default Home;