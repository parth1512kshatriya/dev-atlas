import { educators } from "../../data/educators";

function EducatorsSection() {
    return (
        <section id="educators" className="px-6 py-24">

            <div className="mx-auto max-w-7xl">

                {/* Heading */}
                <div className="max-w-3xl">

                    <span className="text-sm text-blue-400">
                        Best Educators
                    </span>

                    <h2 className="mt-4 text-5xl font-semibold tracking-tight text-white">
                        Learn from world-class creators.
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-zinc-400">
                        Discover top educators, creators,
                        and developers across different
                        technology ecosystems.
                    </p>

                </div>

                {/* Grid */}
                <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

                    {educators.map((educator) => (
                        <a
                            key={educator.id}
                            href={educator.youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                group rounded-3xl border border-zinc-800
                bg-zinc-900/50 p-7
                transition-all duration-300
                hover:-translate-y-1
                hover:border-zinc-700
              "
                        >

                            {/* Top */}
                            <div className="flex items-center gap-5">

                                <img
                                    src={educator.image}
                                    alt={educator.name}
                                    className="
                    h-20 w-20 rounded-2xl
                    border border-zinc-700
                    object-cover
                  "
                                />

                                <div>

                                    <h3 className="text-xl font-semibold text-white">
                                        {educator.name}
                                    </h3>

                                    <p className="mt-1 text-sm text-blue-400">
                                        {educator.category}
                                    </p>

                                    <p className="mt-2 text-xs text-zinc-500">
                                        {educator.subscribers}
                                    </p>

                                </div>

                            </div>

                            {/* Description */}
                            <p className="mt-7 text-sm leading-7 text-zinc-400">
                                {educator.description}
                            </p>

                            {/* Expertise */}
                            <div className="mt-6 flex flex-wrap gap-2">

                                {educator.expertise
                                    .split(", ")
                                    .map((item) => (
                                        <span
                                            key={item}
                                            className="
                        rounded-full border border-zinc-800
                        bg-zinc-950 px-3 py-1
                        text-xs text-zinc-400
                      "
                                        >
                                            {item}
                                        </span>
                                    ))}

                            </div>

                        </a>
                    ))}

                </div>

            </div>

        </section>
    );
}

export default EducatorsSection;