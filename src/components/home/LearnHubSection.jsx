import { Link } from "react-router-dom";

import { ArrowUpRight } from "lucide-react";

import { articles } from "../../data/articles";

function LearnHubSection() {

    return (
        <section
            id="learnhub"
            className="px-6 py-24"
        >

            <div className="mx-auto max-w-7xl">

                {/* Heading */}
                <div className="max-w-3xl">

                    <span className="text-sm text-blue-400">
                        Learn Hub
                    </span>

                    <h2
                        className="
                            mt-4 text-5xl
                            font-semibold tracking-tight
                            text-white
                        "
                    >
                        Learn modern technology.
                    </h2>

                    <p
                        className="
                            mt-6 text-lg leading-8
                            text-zinc-400
                        "
                    >
                        Explore developer guides,
                        cybersecurity tutorials,
                        AI resources, career advice,
                        and programming concepts.
                    </p>

                </div>

                {/* Articles */}
                <div
                    className="
                        mt-16 grid gap-6
                        md:grid-cols-2
                        xl:grid-cols-3
                    "
                >

                    {articles.map((article) => (

                        <Link
                            key={article.id}
                            to={`/article/${article.slug}`}
                            className="
                                group rounded-3xl
                                border border-zinc-800
                                bg-zinc-900/50
                                p-7 transition-all
                                duration-300
                                hover:border-zinc-700
                            "
                        >

                            {/* Category */}
                            <span
                                className="
                                    text-sm text-blue-400
                                "
                            >
                                {article.category}
                            </span>

                            {/* Title */}
                            <h3
                                className="
                                    mt-5 text-2xl
                                    font-semibold text-white
                                "
                            >
                                {article.title}
                            </h3>

                            {/* Description */}
                            <p
                                className="
                                    mt-4 text-sm
                                    leading-7 text-zinc-400
                                "
                            >
                                {article.description}
                            </p>

                            {/* Bottom */}
                            <div
                                className="
                                    mt-8 flex items-center
                                    justify-between
                                "
                            >

                                <span
                                    className="
                                        text-sm text-zinc-500
                                    "
                                >
                                    {article.readTime}
                                </span>

                                <ArrowUpRight
                                    size={18}
                                    className="
                                        text-zinc-500
                                        transition
                                        group-hover:text-white
                                    "
                                />

                            </div>

                        </Link>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default LearnHubSection;