import { Send } from "lucide-react";

function NewsletterSection() {

    return (
        <section className="px-6 py-24">

            <div
                className="
                    relative mx-auto
                    max-w-6xl overflow-hidden
                    rounded-[32px]
                    border border-zinc-800
                    bg-zinc-900/50
                    px-8 py-20
                    text-center
                "
            >

                {/* Glow */}
                <div
                    className="
                        absolute left-1/2 top-1/2
                        h-[300px] w-[300px]
                        -translate-x-1/2
                        -translate-y-1/2
                        rounded-full
                        bg-blue-500/10
                        blur-[120px]
                    "
                />

                <div className="relative z-10">

                    <span className="text-sm text-blue-400">
                        Newsletter
                    </span>

                    <h2
                        className="
                            mt-5 text-5xl
                            font-semibold tracking-tight
                            text-white
                        "
                    >
                        Stay updated with DevAtlas.
                    </h2>

                    <p
                        className="
                            mx-auto mt-6 max-w-2xl
                            text-lg leading-8
                            text-zinc-400
                        "
                    >
                        Get updates about developer tools,
                        AI resources, cybersecurity,
                        roadmaps, articles, and more.
                    </p>

                    {/* Form */}
                    <div
                        className="
                            mx-auto mt-12 flex
                            max-w-2xl flex-col
                            gap-4 sm:flex-row
                        "
                    >

                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="
                                h-14 flex-1 rounded-2xl
                                border border-zinc-800
                                bg-zinc-950 px-5
                                text-white outline-none
                                placeholder:text-zinc-500
                            "
                        />

                        <button
                            className="
                                flex h-14 items-center
                                justify-center gap-2
                                rounded-2xl
                                bg-white px-7
                                font-medium text-black
                                transition hover:bg-zinc-200
                            "
                        >

                            <Send size={16} />

                            Subscribe

                        </button>

                    </div>

                    <p
                        className="
                            mt-5 text-sm
                            text-zinc-500
                        "
                    >
                        No spam. Unsubscribe anytime.
                    </p>

                </div>

            </div>

        </section>
    );
}

export default NewsletterSection;