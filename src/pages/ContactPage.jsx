import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import SEO from "../components/common/SEO";

function ContactPage() {

    return (
        <main className="min-h-screen bg-[#09090B] text-white">

            <SEO
                title="Contact DevAtlas"
                description="Get in touch with DevAtlas for suggestions, feedback, partnerships, or collaboration opportunities."
                keywords="contact devatlas, developer resources contact, partnership"
            />

            <Navbar />

            <section className="px-6 py-24">

                <div className="mx-auto max-w-3xl">

                    <span className="text-sm text-blue-400">
                        Contact
                    </span>

                    <h1
                        className="
                            mt-4 text-5xl
                            font-semibold tracking-tight
                        "
                    >
                        Get in touch.
                    </h1>

                    <p
                        className="
                            mt-6 text-lg leading-8
                            text-zinc-400
                        "
                    >
                        Have suggestions, feedback,
                        collaboration ideas, or partnership
                        opportunities? We'd love to hear from you.
                    </p>

                    <div
                        className="
                            mt-14 rounded-3xl
                            border border-zinc-800
                            bg-zinc-900/50 p-8
                        "
                    >

                        <input
                            type="text"
                            placeholder="Your Name"
                            className="
                                mb-5 w-full rounded-2xl
                                border border-zinc-800
                                bg-zinc-950 px-5 py-4
                                text-white outline-none
                                placeholder:text-zinc-500
                            "
                        />

                        <input
                            type="email"
                            placeholder="Email Address"
                            className="
                                mb-5 w-full rounded-2xl
                                border border-zinc-800
                                bg-zinc-950 px-5 py-4
                                text-white outline-none
                                placeholder:text-zinc-500
                            "
                        />

                        <textarea
                            rows="6"
                            placeholder="Message"
                            className="
                                w-full rounded-2xl
                                border border-zinc-800
                                bg-zinc-950 px-5 py-4
                                text-white outline-none
                                placeholder:text-zinc-500
                            "
                        />

                        <button
                            className="
                                mt-6 rounded-2xl
                                bg-white px-6 py-4
                                font-medium text-black
                                transition hover:bg-zinc-200
                            "
                        >
                            Send Message
                        </button>

                    </div>

                </div>

            </section>

            <Footer />

        </main>
    );
}

export default ContactPage;