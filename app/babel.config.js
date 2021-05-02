module.exports = {
  presets: [["@babel/preset-env", { targets: { node: "current" } }]],
  env: {
    test: {
      presets: [["@babel/preset-env", { targets: { node: "current" } }]],
      plugins: [
        ["@babel/plugin-proposal-decorators", { legacy: true }],
        ["@babel/plugin-proposal-class-properties", { legacy: true }],
      ],
    },
  },
};
