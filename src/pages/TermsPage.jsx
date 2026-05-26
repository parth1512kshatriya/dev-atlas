import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import SEO from "../components/common/SEO";

function TermsPage() {

    return (
        <main className="min-h-screen bg-[#09090B] text-white">

            <SEO
                title="Terms & Conditions"
                description="Read the terms and conditions for using DevAtlas and external developer resources."
                keywords="terms and conditions, devatlas terms, developer platform terms"
            />

            <Navbar />

            <section className="px-6 py-24">

                <div className="mx-auto max-w-4xl">

                    <span className="text-sm text-blue-400">
                        Legal
                    </span>

                    <h1
                        className="
                            mt-4 text-5xl
                            font-semibold tracking-tight
                        "
                    >
                        Terms & Conditions
                    </h1>

                    <p
                        className="
                            mt-8 text-lg leading-8
                            text-zinc-400
                        "
                    >
                        By accessing DevAtlas, you agree
                        to use the platform responsibly
                        and comply with applicable laws.
                    </p>

                    <div className="mt-16 space-y-14">

                        <div>

                            <h2 className="text-2xl font-semibold">
                                Platform Usage
                            </h2>

                            <p
                                className="
                                    mt-5 leading-8
                                    text-zinc-400
                                "
                            >
                                Users are responsible for
                                how they use tools, repositories,
                                tutorials, and external resources
                                linked through DevAtlas.
                            </p>

                        </div>

                        <div>

                            <h2 className="text-2xl font-semibold">
                                External Links
                            </h2>

                            <p
                                className="
                                    mt-5 leading-8
                                    text-zinc-400
                                "
                            >
                                DevAtlas may contain links
                                to third-party websites,
                                GitHub repositories, courses,
                                and external educational content.
                            </p>

                        </div>

                        <div>

                            <h2 className="text-2xl font-semibold">
                                Content Accuracy
                            </h2>

                            <p
                                className="
                                    mt-5 leading-8
                                    text-zinc-400
                                "
                            >
                                While we strive to provide
                                accurate and updated information,
                                DevAtlas does not guarantee the
                                completeness or reliability of
                                third-party resources.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

            <Footer />

        </main>
    );
}

export default TermsPage;