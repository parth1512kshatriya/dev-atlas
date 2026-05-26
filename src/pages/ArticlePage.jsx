import { useMemo } from "react";

import {
    useParams,
    Link,
} from "react-router-dom";

import {
    ArrowLeft,
    ArrowUpRight,
    Clock,
} from "lucide-react";

import Navbar from "../components/layout/Navbar";

import Footer from "../components/layout/Footer";

import SEO from "../components/common/SEO";

import { articles } from "../data/articles";

function ArticlePage() {

    const { slug } = useParams();

    // Current article
    const article = useMemo(() => {

        return articles.find(
            (item) => item.slug === slug
        );

    }, [slug]);

    // Related articles
    const relatedArticles = useMemo(() => {

        return articles.filter(
            (item) =>
                item.category === article?.category &&
                item.slug !== article?.slug
        );

    }, [article]);

    // Not found
    if (!article) {

        return (
            <div
                className="
                    flex min-h-screen
                    items-center justify-center
                    bg-[#09090B]
                    text-white
                "
            >
                Article not found.
            </div>
        );
    }

    return (

        <main className="min-h-screen bg-[#09090B] text-white">

            {/* SEO */}
            <SEO
                title={article.title}
                description={article.description}
                keywords={`
                    ${article.title},
                    ${article.category},
                    developer article,
                    programming tutorial,
                    devatlas
                `}
            />

            <Navbar />

            <section className="px-6 py-24">

                <div className="mx-auto max-w-4xl">

                    {/* Back Button */}
                    <Link
                        to="/"
                        className="
                            inline-flex items-center gap-2
                            rounded-2xl border
                            border-zinc-800
                            bg-zinc-900 px-5 py-3
                            text-sm text-zinc-300
                            transition-all duration-300
                            hover:border-zinc-700
                            hover:bg-zinc-800
                        "
                    >

                        <ArrowLeft size={16} />

                        Back to Home

                    </Link>

                    {/* Category */}
                    <div className="mt-12">

                        <span
                            className="
                                rounded-full
                                border border-blue-500/20
                                bg-blue-500/10
                                px-4 py-2
                                text-sm text-blue-400
                            "
                        >
                            {article.category}
                        </span>

                    </div>

                    {/* Title */}
                    <h1
                        className="
                            mt-8 text-5xl
                            font-semibold
                            leading-tight
                            tracking-tight

                            md:text-6xl
                        "
                    >
                        {article.title}
                    </h1>

                    {/* Meta */}
                    <div
                        className="
                            mt-8 flex items-center
                            gap-3 text-zinc-400
                        "
                    >

                        <Clock size={16} />

                        <span>
                            {article.readTime}
                        </span>

                    </div>

                    {/* Description */}
                    <p
                        className="
                            mt-10 text-xl
                            leading-9
                            text-zinc-400
                        "
                    >
                        {article.description}
                    </p>

                    {/* Divider */}
                    <div
                        className="
                            mt-14 h-px
                            bg-zinc-800
                        "
                    />

                    {/* Article Content */}
                    <div
                        className="
                            prose prose-invert
                            prose-zinc
                            mt-16 max-w-none

                            prose-headings:text-white
                            prose-p:text-zinc-300
                            prose-p:leading-8

                            prose-li:text-zinc-300
                            prose-strong:text-white

                            whitespace-pre-line
                        "
                    >
                        {article.content}
                    </div>

                    {/* Ad Section */}
                    <div
                        className="
                            mt-20 flex min-h-[140px]
                            items-center justify-center
                            rounded-3xl border
                            border-dashed border-zinc-800
                            bg-zinc-900/40
                            text-sm text-zinc-500
                        "
                    >
                        Google AdSense Placement
                    </div>

                    {/* Related Articles */}
                    {relatedArticles.length > 0 && (

                        <div className="mt-24">

                            <h2
                                className="
                                    text-3xl font-semibold
                                    tracking-tight
                                "
                            >
                                Related Articles
                            </h2>

                            <div
                                className="
                                    mt-10 grid gap-6
                                    md:grid-cols-2
                                "
                            >

                                {relatedArticles.map((item) => (

                                    <Link
                                        key={item.id}
                                        to={`/article/${item.slug}`}
                                        className="
                                            group rounded-3xl
                                            border border-zinc-800
                                            bg-zinc-900/50
                                            p-7 transition-all
                                            duration-300
                                            hover:border-zinc-700
                                        "
                                    >

                                        {/* Category */}
                                        <span
                                            className="
                                                text-sm text-blue-400
                                            "
                                        >
                                            {item.category}
                                        </span>

                                        {/* Title */}
                                        <h3
                                            className="
                                                mt-5 text-2xl
                                                font-semibold
                                                text-white
                                            "
                                        >
                                            {item.title}
                                        </h3>

                                        {/* Description */}
                                        <p
                                            className="
                                                mt-4 text-sm
                                                leading-7
                                                text-zinc-400
                                            "
                                        >
                                            {item.description}
                                        </p>

                                        {/* Bottom */}
                                        <div
                                            className="
                                                mt-8 flex
                                                items-center
                                                justify-between
                                            "
                                        >

                                            <span
                                                className="
                                                    text-sm
                                                    text-zinc-500
                                                "
                                            >
                                                {item.readTime}
                                            </span>

                                            <ArrowUpRight
                                                size={18}
                                                className="
                                                    text-zinc-500
                                                    transition
                                                    group-hover:text-white
                                                "
                                            />

                                        </div>

                                    </Link>

                                ))}

                            </div>

                        </div>

                    )}

                </div>

            </section>

            <Footer />

        </main>

    );
}

export default ArticlePage;