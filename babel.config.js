module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ["module-resolver", {
        "alias": {
          "@/auth": "./src/auth",
          "@/lib": "./src/lib",
          "@/screens": "./src/screens",
          "@/types": "./src/types",
        },
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
        ]
      }],
      ["inline-dotenv"]
    ]
  };
};
