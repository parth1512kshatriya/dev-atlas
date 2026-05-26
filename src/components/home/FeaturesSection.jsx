import {
    Sparkles,
    Shield,
    Rocket,
    GraduationCap,
    BookOpen,
    Globe,
} from "lucide-react";

const features = [
    {
        icon: Sparkles,
        title: "Curated Resources",
        description:
            "Only high-quality tools, repositories, and resources selected for developers.",
    },

    {
        icon: Rocket,
        title: "Career Roadmaps",
        description:
            "Step-by-step learning paths for the most demanding tech careers.",
    },

    {
        icon: GraduationCap,
        title: "Best Educators",
        description:
            "Learn from world-class creators, educators, and software engineers.",
    },

    {
        icon: Shield,
        title: "Cybersecurity Resources",
        description:
            "Massive collection of ethical hacking, networking, and security tools.",
    },

    {
        icon: Globe,
        title: "Open Source Focus",
        description:
            "Discover powerful open-source alternatives and GitHub repositories.",
    },

    {
        icon: BookOpen,
        title: "Certification Guidance",
        description:
            "Explore globally recognized certifications and career opportunities.",
    },
];

function FeaturesSection() {

    return (
        <section
            className="px-6 py-24"
        >

            <div className="mx-auto max-w-7xl">

                {/* Heading */}
                <div className="max-w-3xl">

                    <span className="text-sm text-blue-400">
                        Why DevAtlas
                    </span>

                    <h2
                        className="
                            mt-4 text-5xl
                            font-semibold tracking-tight
                            text-white
                        "
                    >
                        Built for modern developers.
                    </h2>

                    <p
                        className="
                            mt-6 text-lg leading-8
                            text-zinc-400
                        "
                    >
                        DevAtlas helps developers discover
                        the best tools, educators, career
                        paths, certifications, and resources
                        in one place.
                    </p>

                </div>

                {/* Grid */}
                <div
                    className="
                        mt-16 grid gap-6
                        md:grid-cols-2
                        xl:grid-cols-3
                    "
                >

                    {features.map((feature) => {

                        const Icon = feature.icon;

                        return (

                            <div
                                key={feature.title}
                                className="
                                    rounded-3xl
                                    border border-zinc-800
                                    bg-zinc-900/50
                                    p-7 transition-all
                                    duration-300
                                    hover:border-zinc-700
                                "
                            >

                                <div
                                    className="
                                        flex h-14 w-14
                                        items-center justify-center
                                        rounded-2xl
                                        border border-zinc-800
                                        bg-zinc-950
                                    "
                                >

                                    <Icon
                                        size={24}
                                        className="text-white"
                                    />

                                </div>

                                <h3
                                    className="
                                        mt-7 text-2xl
                                        font-semibold text-white
                                    "
                                >
                                    {feature.title}
                                </h3>

                                <p
                                    className="
                                        mt-4 text-sm
                                        leading-7 text-zinc-400
                                    "
                                >
                                    {feature.description}
                                </p>

                            </div>

                        );
                    })}

                </div>

            </div>

        </section>
    );
}

export default FeaturesSection;