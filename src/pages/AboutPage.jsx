import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SEO from "../components/common/SEO";

function AboutPage() {

    return (
        <main className="min-h-screen bg-[#09090B] text-white">

            <SEO
                title="About DevAtlas"
                description="Learn more about DevAtlas and our mission to help developers discover the best tools and resources."
                keywords="about devatlas, developer resources"
            />

            <Navbar />

            <section className="px-6 py-24">

                <div className="mx-auto max-w-4xl">

                    <span className="text-sm text-blue-400">
                        About DevAtlas
                    </span>

                    <h1
                        className="
                            mt-4 text-5xl
                            font-semibold tracking-tight
                        "
                    >
                        Built for modern developers.
                    </h1>

                    <p
                        className="
                            mt-8 text-lg leading-8
                            text-zinc-400
                        "
                    >
                        DevAtlas is a modern platform for
                        discovering developer tools,
                        GitHub repositories, AI resources,
                        cybersecurity tools, certifications,
                        educators, and career roadmaps.
                    </p>

                    <div className="mt-16 space-y-10">

                        <div>

                            <h2 className="text-2xl font-semibold">
                                Our Mission
                            </h2>

                            <p
                                className="
                                    mt-4 leading-8
                                    text-zinc-400
                                "
                            >
                                Our mission is to help developers,
                                students, creators, and engineers
                                discover high-quality resources
                                faster and grow their careers.
                            </p>

                        </div>

                        <div>

                            <h2 className="text-2xl font-semibold">
                                What You Can Discover
                            </h2>

                            <ul
                                className="
                                    mt-6 space-y-4
                                    text-zinc-400
                                "
                            >

                                <li>
                                    • AI tools and resources
                                </li>

                                <li>
                                    • Cybersecurity tools
                                </li>

                                <li>
                                    • Open-source repositories
                                </li>

                                <li>
                                    • Career roadmaps
                                </li>

                                <li>
                                    • Educators and certifications
                                </li>

                            </ul>

                        </div>

                    </div>

                </div>

            </section>

            <Footer />

        </main>
    );
}

export default AboutPage;