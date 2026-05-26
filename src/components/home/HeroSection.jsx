import { motion } from "framer-motion";
import FloatingCard from "./FloatingCard";
import { featuredTools } from "../../data/featuredTools";

function HeroSection() {
    return (
        <section
            className="
                relative flex min-h-[92vh]
                items-center justify-center
                overflow-hidden px-5
                pt-24 pb-20
                sm:px-6
            "
        >

            {/* Background Glow */}
            <div
                className="
                    absolute left-1/2 top-1/2
                    h-[500px] w-[500px]
                    -translate-x-1/2 -translate-y-1/2
                    rounded-full bg-blue-500/10
                    blur-[140px]
                    md:h-[700px] md:w-[700px]
                "
            />

            {/* Grid */}
            <div
                className="
                    absolute inset-0
                    bg-[linear-gradient(to_right,#27272a14_1px,transparent_1px),linear-gradient(to_bottom,#27272a14_1px,transparent_1px)]
                    bg-[size:40px_40px]
                    md:bg-[size:44px_44px]
                "
            />

            {/* Floating Cards Desktop */}
            <div className="hidden xl:block">
                <FloatingCard
                    tool={featuredTools[0]}
                    className="left-[8%] top-[28%]"
                />

                <FloatingCard
                    tool={featuredTools[1]}
                    className="right-[5%] top-[24%]"
                />

                <FloatingCard
                    tool={featuredTools[2]}
                    className="bottom-[18%] right-[18%]"
                />
            </div>

            {/* Mobile Floating Pills */}
            <div
                className="
                    absolute top-24 left-1/2 z-10
                    flex -translate-x-1/2 gap-3
                    xl:hidden
                "
            >
                {/* 
                <div
                    className="
                        rounded-2xl border border-white/10
                        bg-white/[0.03]
                        px-4 py-2
                        text-xs text-zinc-300
                        backdrop-blur-xl
                    "
                >
                    AI Tools
                </div> */}

                <div
                    className="
                        rounded-2xl border border-white/10
                        bg-white/[0.03]
                        px-4 py-2
                        text-xs text-zinc-300
                        backdrop-blur-xl
                    "
                >
                    Open Source
                </div>

            </div>

            {/* Main Content */}
            <div
                className="
                    relative z-10 mx-auto
                    flex w-full max-w-6xl
                    flex-col items-center
                    text-center
                "
            >

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="
                        mb-8 inline-flex items-center gap-2
                        rounded-full border border-white/10
                        bg-white/[0.03]
                        px-5 py-2.5
                        text-xs font-medium
                        text-zinc-300
                        backdrop-blur-xl
                        sm:text-sm
                    "
                >
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />

                    Curated developer resources
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 34 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.7 }}
                    className="
                        max-w-5xl
                        text-5xl font-semibold
                        leading-[0.95]
                        tracking-[-0.06em]
                        text-white

                        sm:text-6xl
                        md:text-7xl
                        lg:text-[88px]
                    "
                >
                    Discover the best tools on the internet.
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.7 }}
                    className="
                        mt-7 max-w-2xl
                        text-base leading-8
                        text-zinc-400

                        sm:text-lg
                        md:text-xl
                    "
                >
                    Explore curated GitHub repositories,
                    AI tools, developer resources,
                    design inspiration, productivity apps,
                    and more.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                    className="
                        mt-12 flex w-full
                        flex-col items-center gap-4
                        sm:flex-row sm:justify-center
                    "
                >

                    <button
                        className="
                            w-full rounded-2xl
                            bg-white px-7 py-4
                            text-sm font-semibold
                            text-black
                            transition-all duration-300
                            hover:scale-[1.02]
                            hover:bg-zinc-200

                            sm:w-auto
                        "
                    >
                        Explore Tools
                    </button>

                    <button
                        className="
                            w-full rounded-2xl
                            border border-white/10
                            bg-white/[0.03]
                            px-7 py-4
                            text-sm font-semibold
                            text-white
                            backdrop-blur-xl
                            transition-all duration-300
                            hover:border-white/20
                            hover:bg-white/[0.05]

                            sm:w-auto
                        "
                    >
                        Trending Repositories
                    </button>

                </motion.div>

                {/* Bottom Stats */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="
                        mt-16 flex flex-wrap
                        items-center justify-center
                        gap-6 text-sm text-zinc-500
                    "
                >

                    <div>
                        1000+ Resources
                    </div>

                    <div className="hidden h-4 w-px bg-zinc-800 sm:block" />

                    <div>
                        50+ Categories
                    </div>

                    <div className="hidden h-4 w-px bg-zinc-800 sm:block" />

                    <div>
                        Updated Daily
                    </div>

                </motion.div>

            </div>

        </section>
    );
}

export default HeroSection;