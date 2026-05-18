/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true
    },
    async redirects() {
        return [
            { source: '/chatbot-voor-:suffix', destination: '/chatbot', permanent: true },
            { source: '/voice-ai-voor-:suffix', destination: '/voice-ai', permanent: true },
            { source: '/reviews-voor-:suffix', destination: '/reviews', permanent: true },
            { source: '/seo-voor-:suffix', destination: '/seo', permanent: true },
            { source: '/social-media-voor-:suffix', destination: '/social-media', permanent: true },
            { source: '/blog/asbestdak-verwijderen-dakdekker-specialisme', destination: '/', permanent: true },
            { source: '/blog/boeidelen-vervangen-omzet-dakdekker', destination: '/', permanent: true },
            { source: '/blog/dakraam-plaatsen-dakdekker-specialisme-marges', destination: '/', permanent: true },
            { source: '/blog/drone-dakdekkers-vakmensen', destination: '/', permanent: true },
            { source: '/blog/sedumdak-en-zonnedak-lead-niche-voor-dakdekkers', destination: '/', permanent: true },
            { source: '/blog/verduurzaming-dakdekker-isolatie-zonnepanelen', destination: '/', permanent: true },
            { source: '/blog/verduurzamings-omzet-dakdekker-3-in-1-dakaanbod-bundeling-verduurzaming', destination: '/', permanent: true },
            { source: '/blog/verzekeringswerk-binnenhalen-dakdekker-tussenpersonen', destination: '/', permanent: true },
            { source: '/blog/portfolio-als-dakdekker-projectfotos', destination: '/gratis-website', permanent: true },
            { source: '/blog/portfolio-dakdekker-projectfotos', destination: '/gratis-website', permanent: true },
            { source: '/blog/no-shows-dakdekker-voorkomen', destination: '/blog/no-shows-voorkomen-dakdekker', permanent: true },
            { source: '/blog/google-mijn-bedrijf-dakdekker-profiel', destination: '/seo', permanent: true },
            { source: '/blog/social-media-voor-dakdekkers', destination: '/social-media', permanent: true },
        ];
    },
};

export default nextConfig;
