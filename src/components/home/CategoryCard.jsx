import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function CategoryCard({ category }) {
    const Icon = category.icon;

    return (
        <Link
            to={`/category/${category.slug}`}
            className="block"
        >
            <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="
          group relative overflow-hidden
          rounded-3xl border border-zinc-800
          bg-zinc-900/50
          p-7
          backdrop-blur-xl
          transition-all duration-300
          hover:border-zinc-700
        "
            >

                {/* Glow */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
                </div>

                {/* Icon */}
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900">
                    <Icon size={26} className="text-zinc-200" />
                </div>

                {/* Text */}
                <div className="relative z-10 mt-6">
                    <h3 className="text-xl font-semibold text-white">
                        {category.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-zinc-400">
                        {category.description}
                    </p>
                </div>

            </motion.div>
        </Link>
    );
}

export default CategoryCard;