import { Link } from "react-router-dom";

function Footer() {

    return (
        <footer
            className="
                border-t border-zinc-800
                px-6 py-16
            "
        >

            <div
                className="
                    mx-auto grid max-w-7xl
                    gap-12 md:grid-cols-4
                "
            >

                {/* Brand */}
                <div>

                    <Link
                        to="/"
                        className="
                            text-2xl font-semibold
                            tracking-tight text-white
                        "
                    >
                        DevAtlas
                    </Link>

                    <p
                        className="
                            mt-5 text-sm leading-7
                            text-zinc-400
                        "
                    >
                        Discover the best developer
                        tools, resources, educators,
                        roadmaps, and certifications.
                    </p>

                </div>

                {/* Categories */}
                <div>

                    <h3
                        className="
                            text-sm font-semibold
                            uppercase tracking-wider
                            text-white
                        "
                    >
                        Categories
                    </h3>

                    <div
                        className="
                            mt-5 flex flex-col
                            gap-3 text-sm
                            text-zinc-400
                        "
                    >

                        <a href="#categories">
                            AI Tools
                        </a>

                        <a href="#categories">
                            Cybersecurity
                        </a>

                        <a href="#categories">
                            Productivity
                        </a>

                        <a href="#categories">
                            Open Source
                        </a>

                    </div>

                </div>

                {/* Roadmaps */}
                <div>

                    <h3
                        className="
                            text-sm font-semibold
                            uppercase tracking-wider
                            text-white
                        "
                    >
                        Career Paths
                    </h3>

                    <div
                        className="
                            mt-5 flex flex-col
                            gap-3 text-sm
                            text-zinc-400
                        "
                    >

                        <a href="#roadmaps">
                            Frontend Developer
                        </a>

                        <a href="#roadmaps">
                            AI Engineer
                        </a>

                        <a href="#roadmaps">
                            DevOps Engineer
                        </a>

                        <a href="#roadmaps">
                            Cybersecurity
                        </a>

                    </div>

                </div>

                {/* SEO */}
                <div>

                    <h3
                        className="
            text-sm font-semibold
            uppercase tracking-wider
            text-white
        "
                    >
                        Platform
                    </h3>

                    <div
                        className="
            mt-5 flex flex-col
            gap-3 text-sm
            text-zinc-400
        "
                    >

                        <Link to="/about">
                            About
                        </Link>

                        <Link to="/contact">
                            Contact
                        </Link>

                        <Link to="/privacy-policy">
                            Privacy Policy
                        </Link>

                        <Link to="/terms">
                            Terms & Conditions
                        </Link>

                    </div>

                </div>

            </div>

            {/* Bottom */}
            <div
                className="
                    mx-auto mt-16
                    flex max-w-7xl
                    flex-col items-center
                    justify-between gap-4
                    border-t border-zinc-800
                    pt-8 text-sm
                    text-zinc-500
                    md:flex-row
                "
            >

                <p>
                    © 2026 DevAtlas. All rights reserved.
                </p>

                <p>
                    Built for developers worldwide.
                </p>

            </div>

        </footer>
    );
}

export default Footer;