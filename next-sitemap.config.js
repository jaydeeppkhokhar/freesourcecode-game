/** @type {import('next-sitemap').IConfig} */
const fetchGameRoutes = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/game`);
        const games = await res.json();
        return games.map((game) => ({
            loc: `/play/${game.metaUrl}`,
            lastmod: game.updatedAt || new Date().toISOString(),
            changefreq: 'weekly', // Adjust frequency based on game updates
            priority: 0.8, // Assign higher priority to games
        }));
    } catch (error) {
        console.error('Error fetching game routes for sitemap:', error);
        return [];
    }
};

const config = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    generateRobotsTxt: false, // Disable auto robots.txt generation
    exclude: ['/admin/*', '/api/*', '/login', '/admin'], // Exclude admin, API, and login pages
    robotsTxtOptions: {
        additionalSitemaps: [
            `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/sitemap.xml`,
        ],
    },
    additionalPaths: async (config) => {
        const gameRoutes = await fetchGameRoutes();
        return gameRoutes.map((route) => ({
            loc: route.loc,
            lastmod: route.lastmod,
            changefreq: route.changefreq,
            priority: route.priority,
        }));
    },
};

module.exports = config;
