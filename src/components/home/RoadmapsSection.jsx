import { Link } from "react-router-dom";
import { roadmaps } from "../../data/roadmaps";

function RoadmapsSection() {
    return (
        <section id="roadmaps" className="px-6 py-24">

            <div className="mx-auto max-w-7xl">

                {/* Heading */}
                <div className="max-w-3xl">

                    <span className="text-sm text-blue-400">
                        Career Roadmaps
                    </span>

                    <h2 className="mt-4 text-5xl font-semibold tracking-tight text-white">
                        Explore high-demand tech careers.
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-zinc-400">
                        Discover complete learning paths,
                        required skills, tools, projects,
                        and career opportunities.
                    </p>

                </div>

                {/* Grid */}
                <div className="mt-16 grid gap-6 md:grid-cols-2">

                    {roadmaps.map((roadmap) => (
                        <Link
                            key={roadmap.id}
                            to={`/roadmap/${roadmap.slug}`}
                            className="
                rounded-3xl border border-zinc-800
                bg-zinc-900/50 p-8
                transition-all duration-300
                hover:-translate-y-1
                hover:border-zinc-700
              "
                        >

                            <div className="flex items-center justify-between">

                                <span className="rounded-full border border-zinc-800 bg-zinc-950 px-4 py-2 text-xs text-zinc-400">
                                    {roadmap.level}
                                </span>

                                <span className="text-sm text-emerald-400">
                                    {roadmap.demand}
                                </span>

                            </div>

                            <h3 className="mt-8 text-3xl font-semibold text-white">
                                {roadmap.title}
                            </h3>

                            <p className="mt-5 text-zinc-400 leading-7">
                                {roadmap.description}
                            </p>

                            <div className="mt-8 flex flex-wrap gap-2">

                                {roadmap.skills.slice(0, 4).map((skill) => (
                                    <span
                                        key={skill}
                                        className="
                      rounded-full border border-zinc-800
                      bg-zinc-950 px-3 py-1
                      text-xs text-zinc-400
                    "
                                    >
                                        {skill}
                                    </span>
                                ))}

                            </div>

                            <div className="mt-8 text-sm text-blue-400">
                                Salary: {roadmap.salary}
                            </div>

                        </Link>
                    ))}

                </div>

            </div>

        </section>
    );
}

export default RoadmapsSection;