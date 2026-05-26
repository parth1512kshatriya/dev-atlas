import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import SEO from "../components/common/SEO";
import { ArrowLeft } from "lucide-react";

import {
    ArrowUpRight,
    Globe,
} from "lucide-react";

import Navbar from "../components/layout/Navbar";

import { tools } from "../data/tools";

function CategoryPage() {
    const { categoryName } = useParams();

    const filteredTools = useMemo(() => {
        return tools.filter(
            (tool) => tool.category === categoryName
        );
    }, [categoryName]);

    return (
        <main className="min-h-screen bg-[#09090B] text-white">

            <Navbar />

            <SEO
                title={`${category.title} Resources`}
                description={category.description}
                keywords={`${category.title}, developer resources, github repositories`}
            />

            <section className="px-6 py-14">

                <div className="mx-auto max-w-7xl">

                    <Link
                        to="/"
                        className="
    inline-flex items-center gap-2
    rounded-xl border border-zinc-800
    bg-zinc-900 px-4 py-2 mb-8
    text-sm text-zinc-400
    transition-all duration-300
    hover:border-zinc-700
    hover:text-white
  "
                    >
                        <ArrowLeft size={16} />
                        Back to Home
                    </Link>

                    {/* Heading */}
                    <div className="max-w-3xl">

                        <span className="text-sm text-blue-400">
                            Category
                        </span>

                        <h1 className="mt-4 text-5xl font-semibold tracking-tight capitalize">
                            {categoryName.replace("-", " ")}
                        </h1>

                        <p className="mt-5 text-lg leading-8 text-zinc-400">
                            Explore curated tools and repositories related to{" "}
                            {categoryName}.
                        </p>

                    </div>

                    {/* Grid */}
                    <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

                        {filteredTools.map((tool) => (
                            <div
                                key={tool.id}
                                className="
                  rounded-3xl border border-zinc-800
                  bg-zinc-900/50 p-6
                  backdrop-blur-xl
                "
                            >

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">

                                    {tool.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="
                        rounded-full border border-zinc-800
                        bg-zinc-900 px-3 py-1
                        text-xs text-zinc-400
                      "
                                        >
                                            {tag}
                                        </span>
                                    ))}

                                </div>

                                {/* Title */}
                                <h2 className="mt-5 text-2xl font-semibold">
                                    {tool.title}
                                </h2>

                                {/* Description */}
                                <p className="mt-4 text-sm leading-7 text-zinc-400">
                                    {tool.description}
                                </p>

                                {/* Buttons */}
                                <div className="mt-8 flex gap-3">

                                    <a
                                        href={tool.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                      flex h-11 items-center gap-2
                      rounded-xl border border-zinc-800
                      bg-zinc-900 px-4
                      text-sm transition
                      hover:border-zinc-700
                    "
                                    >
                                        <Globe size={16} />
                                        GitHub
                                    </a>

                                    <a
                                        href={tool.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                      flex h-11 items-center gap-2
                      rounded-xl bg-white px-4
                      text-sm text-black transition
                      hover:bg-zinc-200
                    "
                                    >
                                        <ArrowUpRight size={16} />
                                        Website
                                    </a>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>

            </section>

        </main>
    );
}

export default CategoryPage;