/** @type {import('next-sitemap').IConfig} */
const fetchGameRoutes = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/game`); // Use dynamic base URL
    const games = await res.json();
    return games.map((game) => `/play/${game.metaUrl}`);
};

const config = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000', // Dynamically set site URL
    generateRobotsTxt: false,
    exclude: ['/admin/*', '/api/*'],
    robotsTxtOptions: {
        additionalSitemaps: [
            `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/sitemap.xml`,
        ],
    },
    additionalPaths: async (config) => {
        const gameRoutes = await fetchGameRoutes();
        return gameRoutes.map((route) => ({
            loc: route,
            lastmod: new Date().toISOString(),
        }));
    },
};

module.exports = config;