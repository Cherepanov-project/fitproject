module.exports = {
    reactStrictMode: true,
    images: {
        domains: ["https://api.realworld.io/images/"],
    },
    experimental: {
        // Enables the styled-components SWC transform
        styledComponents: true,
    },
    eslint: {
        dirs: [
            "pages",
            "utils",
            "API",
            "common",
            "components",
            "containers",
            "model",
            "services",
            "store",
            "stories",
        ], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
    },
}
