import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import SEO from "../components/common/SEO";

function PrivacyPage() {

    return (
        <main className="min-h-screen bg-[#09090B] text-white">

            <SEO
                title="Privacy Policy"
                description="Read the Privacy Policy of DevAtlas and learn how we handle user information and analytics."
                keywords="privacy policy, devatlas privacy, developer platform privacy"
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
                        Privacy Policy
                    </h1>

                    <p
                        className="
                            mt-8 text-lg leading-8
                            text-zinc-400
                        "
                    >
                        DevAtlas respects your privacy and
                        is committed to protecting user data.
                        We only collect minimal analytics
                        required to improve the platform.
                    </p>

                    <div className="mt-16 space-y-14">

                        <div>

                            <h2 className="text-2xl font-semibold">
                                Information Collection
                            </h2>

                            <p
                                className="
                                    mt-5 leading-8
                                    text-zinc-400
                                "
                            >
                                DevAtlas may collect anonymous
                                analytics such as browser type,
                                device information, and usage
                                statistics to improve the user
                                experience.
                            </p>

                        </div>

                        <div>

                            <h2 className="text-2xl font-semibold">
                                Cookies
                            </h2>

                            <p
                                className="
                                    mt-5 leading-8
                                    text-zinc-400
                                "
                            >
                                Cookies may be used to enhance
                                performance, personalize content,
                                and improve analytics.
                            </p>

                        </div>

                        <div>

                            <h2 className="text-2xl font-semibold">
                                Third-Party Services
                            </h2>

                            <p
                                className="
                                    mt-5 leading-8
                                    text-zinc-400
                                "
                            >
                                DevAtlas may integrate third-party
                                services such as Google Analytics,
                                Google AdSense, GitHub, and external
                                learning resources.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

            <Footer />

        </main>
    );
}

export default PrivacyPage;