import { useState } from "react";

import {
    Search,
    Menu,
    X,
} from "lucide-react";

import { Link } from "react-router-dom";

import { useSearch } from "../../context/SearchContext";

function Navbar() {

    // Mobile menu
    const [isOpen, setIsOpen] = useState(false);

    // Search modal
    const {
        setIsOpen: setSearchOpen,
    } = useSearch();

    return (
        <>

            {/* Navbar */}
            <header
                className="
                    sticky top-0 z-50
                    border-b border-white/5
                    bg-[#09090B]/70
                    backdrop-blur-2xl
                "
            >

                <div
                    className="
                        mx-auto flex h-16
                        max-w-7xl items-center
                        justify-between
                        px-4 md:px-6
                    "
                >

                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex items-center gap-3"
                    >

                        <div
                            className="
                                flex h-10 w-10
                                items-center justify-center
                                rounded-2xl
                                border border-white/10
                                bg-white/[0.03]
                            "
                        >
                            <span className="text-sm font-semibold text-white">
                                DA
                            </span>
                        </div>

                        <h1
                            className="
                                text-xl font-semibold
                                tracking-tight text-white
                            "
                        >
                            DevAtlas
                        </h1>

                    </Link>

                    {/* Desktop Nav */}
                    <nav
                        className="
                            hidden items-center
                            gap-8 md:flex
                        "
                    >

                        <a
                            href="#categories"
                            className="
                                text-sm text-zinc-400
                                transition hover:text-white
                            "
                        >
                            Categories
                        </a>

                        <a
                            href="#roadmaps"
                            className="
                                text-sm text-zinc-400
                                transition hover:text-white
                            "
                        >
                            Roadmaps
                        </a>

                        <a
                            href="#educators"
                            className="
                                text-sm text-zinc-400
                                transition hover:text-white
                            "
                        >
                            Educators
                        </a>

                        <a
                            href="#certifications"
                            className="
                                text-sm text-zinc-400
                                transition hover:text-white
                            "
                        >
                            Certifications
                        </a>

                    </nav>

                    {/* Right */}
                    <div className="flex items-center gap-3">

                        {/* Desktop Search */}
                        <button
                            onClick={() => setSearchOpen(true)}
                            className="
                                hidden md:flex items-center
                                gap-3 rounded-2xl
                                border border-white/10
                                bg-white/[0.03]
                                px-4 py-3
                                text-sm text-zinc-400
                                transition-all duration-300
                                hover:border-white/20
                                hover:bg-white/[0.05]
                            "
                        >

                            <Search size={16} />

                            Search

                            <span
                                className="
                                    rounded-lg
                                    border border-white/10
                                    bg-white/[0.03]
                                    px-2 py-1 text-xs
                                "
                            >
                                Ctrl K
                            </span>

                        </button>

                        {/* Mobile Search */}
                        <button
                            onClick={() => setSearchOpen(true)}
                            className="
                                flex h-11 w-11
                                items-center justify-center
                                rounded-2xl
                                border border-white/10
                                bg-white/[0.03]
                                text-zinc-300
                                transition hover:bg-white/[0.06]
                                md:hidden
                            "
                        >
                            <Search size={18} />
                        </button>

                        {/* Mobile Menu */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="
                                flex h-11 w-11
                                items-center justify-center
                                rounded-2xl
                                border border-white/10
                                bg-white/[0.03]
                                text-zinc-300
                                transition hover:bg-white/[0.06]
                                md:hidden
                            "
                        >

                            {isOpen ? (
                                <X size={18} />
                            ) : (
                                <Menu size={18} />
                            )}

                        </button>

                    </div>

                </div>

            </header>

            {/* Mobile Menu */}
            {isOpen && (

                <div
                    className="
                        fixed inset-x-4 top-20
                        z-40 rounded-3xl
                        border border-white/10
                        bg-[#09090B]/95
                        p-6 backdrop-blur-2xl
                        shadow-2xl md:hidden
                    "
                >

                    <nav className="flex flex-col gap-5">

                        <a
                            href="#categories"
                            onClick={() => setIsOpen(false)}
                            className="
                                text-zinc-300
                                transition hover:text-white
                            "
                        >
                            Categories
                        </a>

                        <a
                            href="#roadmaps"
                            onClick={() => setIsOpen(false)}
                            className="
                                text-zinc-300
                                transition hover:text-white
                            "
                        >
                            Roadmaps
                        </a>

                        <a
                            href="#educators"
                            onClick={() => setIsOpen(false)}
                            className="
                                text-zinc-300
                                transition hover:text-white
                            "
                        >
                            Educators
                        </a>

                        <a
                            href="#certifications"
                            onClick={() => setIsOpen(false)}
                            className="
                                text-zinc-300
                                transition hover:text-white
                            "
                        >
                            Certifications
                        </a>

                    </nav>

                </div>

            )}

        </>
    );
}

export default Navbar;