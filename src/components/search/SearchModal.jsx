import { AnimatePresence, motion } from "framer-motion";

import {
    Search,
    ArrowUpRight,
} from "lucide-react";

import { useSearch } from "../../context/SearchContext";

import { tools } from "../../data/tools";

function SearchModal() {

    const {
        isOpen,
        setIsOpen,
        searchQuery,
        setSearchQuery,
    } = useSearch();

    const filteredTools = tools.filter((tool) =>
        tool.title
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
    );

    if (!isOpen) return null;

    return (

        <AnimatePresence>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="
                    fixed inset-0 z-[100]
                    flex items-start justify-center
                    bg-black/60
                    px-4 pt-24
                    backdrop-blur-sm
                "
                onClick={() => setIsOpen(false)}
            >

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20,
                        scale: 0.96,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                    }}
                    exit={{
                        opacity: 0,
                        y: 20,
                        scale: 0.96,
                    }}
                    transition={{ duration: 0.2 }}
                    onClick={(e) => e.stopPropagation()}
                    className="
                        w-full max-w-2xl overflow-hidden
                        rounded-3xl border border-zinc-800
                        bg-[#09090B]
                        shadow-2xl
                    "
                >

                    {/* Search Input */}
                    <div
                        className="
                            flex items-center gap-3
                            border-b border-zinc-800
                            px-5 py-4
                        "
                    >

                        <Search
                            size={20}
                            className="text-zinc-500"
                        />

                        <input
                            type="text"
                            placeholder="Search tools, repositories, categories..."
                            value={searchQuery}
                            onChange={(e) =>
                                setSearchQuery(e.target.value)
                            }
                            autoFocus
                            className="
                                w-full bg-transparent
                                text-[15px] text-white
                                outline-none
                                placeholder:text-zinc-500
                            "
                        />

                    </div>

                    {/* Results */}
                    <div
                        className="
                            max-h-[500px]
                            overflow-y-auto p-3
                        "
                    >

                        {filteredTools.length > 0 ? (

                            <div className="space-y-2">

                                {filteredTools.map((tool) => (

                                    <a
                                        key={tool.id}
                                        href={tool.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            group flex items-center
                                            justify-between rounded-2xl
                                            border border-transparent
                                            p-4 transition-all duration-200
                                            hover:border-zinc-800
                                            hover:bg-zinc-900/70
                                        "
                                    >

                                        <div>

                                            <div
                                                className="
                                                    flex items-center
                                                    gap-3
                                                "
                                            >

                                                <h3
                                                    className="
                                                        text-sm font-medium
                                                        text-white
                                                    "
                                                >
                                                    {tool.title}
                                                </h3>

                                                <span
                                                    className="
                                                        rounded-full
                                                        border border-zinc-800
                                                        bg-zinc-900
                                                        px-2 py-1
                                                        text-[11px]
                                                        text-zinc-500
                                                    "
                                                >
                                                    {tool.category}
                                                </span>

                                            </div>

                                            <p
                                                className="
                                                    mt-2 text-sm
                                                    text-zinc-400
                                                "
                                            >
                                                {tool.description}
                                            </p>

                                        </div>

                                        <ArrowUpRight
                                            size={18}
                                            className="
                                                text-zinc-600
                                                transition
                                                group-hover:text-white
                                            "
                                        />

                                    </a>

                                ))}

                            </div>

                        ) : (

                            <div
                                className="
                                    py-16 text-center
                                    text-sm text-zinc-500
                                "
                            >
                                No tools found.
                            </div>

                        )}

                    </div>

                </motion.div>

            </motion.div>

        </AnimatePresence>

    );
}

export default SearchModal;