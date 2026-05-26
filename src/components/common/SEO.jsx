import { Helmet } from "react-helmet-async";

function SEO({
    title,
    description,
    keywords,
}) {

    return (

        <Helmet>

            <title>
                {title} | DevAtlas
            </title>

            <meta
                name="description"
                content={description}
            />

            <meta
                name="keywords"
                content={keywords}
            />

            {/* Open Graph */}
            <meta
                property="og:title"
                content={`${title} | DevAtlas`}
            />

            <meta
                property="og:description"
                content={description}
            />

            <meta
                property="og:type"
                content="website"
            />

            {/* Twitter */}
            <meta
                name="twitter:card"
                content="summary_large_image"
            />

            <meta
                name="twitter:title"
                content={`${title} | DevAtlas`}
            />

            <meta
                name="twitter:description"
                content={description}
            />

        </Helmet>

    );
}

export default SEO;