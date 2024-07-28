module.exports = {
  globals: {
    "ts-jest": {
      diagnostics: false,
      isolatedModules: true,
    },
  },
  coverageReporters: ["text", "html"],
  preset: "ts-jest/presets/default-esm",
  setupFilesAfterEnv: ["<rootDir>/test/setup-test.ts"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.module\\.css$": "identity-obj-proxy",
  },
  transform: {
    "\\.css$": "jest-css-modules-transform",
  },
};
