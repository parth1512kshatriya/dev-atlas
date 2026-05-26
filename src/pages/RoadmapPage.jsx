import { useParams } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import { roadmaps } from "../data/roadmaps";
import SEO from "../components/common/SEO";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

function RoadmapPage() {
    const { slug } = useParams();

    const roadmap = roadmaps.find(
        (item) => item.slug === slug
    );

    if (!roadmap) {
        return (
            <div className="min-h-screen bg-[#09090B] text-white">
                Not found
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-[#09090B] text-white">

            <SEO
                title={`${roadmap.title} Roadmap`}
                description={roadmap.description}
                keywords={`${roadmap.title}, roadmap, developer career, programming`}
            />

            <Navbar />

            <section className="px-6 py-14">

                <div className="mx-auto max-w-6xl">

                    <div className="flex flex-col gap-6">

                        <Link
                            to="/"
                            className="
      flex w-fit items-center gap-2
      rounded-2xl border border-zinc-800
      bg-zinc-900/80 px-5 py-3
      text-sm font-medium text-zinc-300
      transition-all duration-300
      hover:border-zinc-700
      hover:bg-zinc-800
    "
                        >
                            <ArrowLeft size={16} />
                            Back to Home
                        </Link>

                        <span className="text-sm font-medium text-blue-400">
                            Career Roadmap
                        </span>

                    </div>
                    <h1 className="mt-4 text-6xl font-semibold tracking-tight">
                        {roadmap.title}
                    </h1>

                    <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
                        {roadmap.description}
                    </p>

                    {/* Stats */}
                    <div className="mt-10 flex flex-wrap gap-4">

                        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 px-5 py-4">
                            <p className="text-sm text-zinc-500">
                                Demand
                            </p>

                            <p className="mt-2 text-lg font-semibold">
                                {roadmap.demand}
                            </p>
                        </div>

                        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 px-5 py-4">
                            <p className="text-sm text-zinc-500">
                                Salary
                            </p>

                            <p className="mt-2 text-lg font-semibold">
                                {roadmap.salary}
                            </p>
                        </div>

                    </div>

                    {/* Skills */}
                    <div className="mt-20">

                        <h2 className="text-3xl font-semibold">
                            Required Skills
                        </h2>

                        <div className="mt-8 flex flex-wrap gap-3">

                            {roadmap.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="
                    rounded-full border border-zinc-800
                    bg-zinc-900 px-4 py-2
                    text-sm text-zinc-300
                  "
                                >
                                    {skill}
                                </span>
                            ))}

                        </div>

                    </div>

                    {/* Tools */}
                    <div className="mt-20">

                        <h2 className="text-3xl font-semibold">
                            Best Tools
                        </h2>

                        <div className="mt-8 flex flex-wrap gap-3">

                            {roadmap.tools.map((tool) => (
                                <span
                                    key={tool}
                                    className="
                    rounded-full border border-zinc-800
                    bg-zinc-900 px-4 py-2
                    text-sm text-zinc-300
                  "
                                >
                                    {tool}
                                </span>
                            ))}

                        </div>

                    </div>

                    {/* Projects */}
                    <div className="mt-20">

                        <h2 className="text-3xl font-semibold">
                            Recommended Projects
                        </h2>

                        <div className="mt-8 grid gap-4 md:grid-cols-2">

                            {roadmap.projects.map((project) => (
                                <div
                                    key={project}
                                    className="
                    rounded-2xl border border-zinc-800
                    bg-zinc-900 p-5
                  "
                                >
                                    {project}
                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
}

export default RoadmapPage;