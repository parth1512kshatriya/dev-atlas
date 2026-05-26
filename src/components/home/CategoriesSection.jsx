import { categories } from "../../data/categories";

import CategoryCard from "./CategoryCard";

function CategoriesSection() {
    return (
        <section id="categories" className="relative px-6 pb-24">

            <div className="mx-auto max-w-7xl">

                {/* Heading */}
                <div className="max-w-3xl">

                    <span className="text-sm text-blue-400">
                        Categories
                    </span>

                    <h2 className="mt-4 text-5xl font-semibold tracking-tight text-white">
                        Explore powerful tech ecosystems.
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-zinc-400">
                        Discover curated resources, GitHub repositories,
                        tools, frameworks, and learning platforms
                        across modern technology domains.
                    </p>

                </div>

                {/* Grid */}
                <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

                    {categories.map((category) => (
                        <CategoryCard
                            key={category.slug}
                            category={category}
                        />
                    ))}

                </div>

            </div>

        </section>
    );
}

export default CategoriesSection;