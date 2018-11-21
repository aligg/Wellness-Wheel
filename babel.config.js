module.exports = {
    presets: ["@babel/react", "@babel/preset-env"],
    plugins: [
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-transform-modules-commonjs",
    ],
    env: {
        build: {
            presets: ["@babel/react", [
                "@babel/preset-env",
                {
                    forceAllTransforms: true,
                },
            ]],
        },
    },
};
