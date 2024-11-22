/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: 'https://www.arcadehub.io', // Replace with your domain
    generateRobotsTxt: true, // Automatically generate robots.txt
    exclude: ['/admin/*', '/api/*'], // Exclude restricted routes
    robotsTxtOptions: {
        additionalSitemaps: [
            'https://www.arcadehub.io/sitemap.xml',
        ],
    },
};

module.exports = config;