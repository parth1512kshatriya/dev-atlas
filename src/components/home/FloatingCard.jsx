import { motion } from "framer-motion";

function FloatingCard({ tool, className }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className={`
        absolute hidden w-[280px]
        rounded-3xl border border-zinc-800
        bg-zinc-900/70 p-5
        backdrop-blur-2xl
        lg:block
        ${className}
      `}
        >
            <div className="flex items-center justify-between">

                <span className="rounded-full border border-zinc-700 bg-zinc-800 px-3 py-1 text-xs text-zinc-400">
                    {tool.category}
                </span>

                <span className="h-2 w-2 rounded-full bg-emerald-400" />
            </div>

            <h3 className="mt-5 text-lg font-semibold text-white">
                {tool.title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-zinc-400">
                {tool.description}
            </p>
        </motion.div>
    );
}

export default FloatingCard;