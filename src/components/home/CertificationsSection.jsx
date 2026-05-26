import { certifications } from "../../data/certifications";

function CertificationsSection() {
    return (
        <section id="certifications" className="px-6 pb-28">

            <div className="mx-auto max-w-7xl">

                {/* Heading */}
                <div className="max-w-3xl">

                    <span className="text-sm text-blue-400">
                        Certifications
                    </span>

                    <h2 className="mt-4 text-5xl font-semibold tracking-tight text-white">
                        Best industry-recognized certifications.
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-zinc-400">
                        Explore globally recognized certifications
                        across cybersecurity, cloud, AI,
                        programming, DevOps, and more.
                    </p>

                </div>

                {/* Grid */}
                <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

                    {certifications.map((cert) => (
                        <a
                            key={cert.id}
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                rounded-3xl border border-zinc-800
                bg-zinc-900/50 p-7
                transition-all duration-300
                hover:-translate-y-1
                hover:border-zinc-700
              "
                        >

                            <span className="text-sm text-blue-400">
                                {cert.category}
                            </span>

                            <h3 className="mt-4 text-2xl font-semibold text-white">
                                {cert.title}
                            </h3>

                            <p className="mt-4 text-sm text-zinc-400">
                                Provider: {cert.provider}
                            </p>

                            <div className="mt-6 inline-flex rounded-full border border-zinc-800 bg-zinc-950 px-4 py-2 text-xs text-zinc-400">
                                {cert.level}
                            </div>

                        </a>
                    ))}

                </div>

            </div>

        </section>
    );
}

export default CertificationsSection;