const testMatch = ["**/*.spec.ts"];
const ignoredTests = ["node_modules/"];

module.exports = {
  testMatch,
  testPathIgnorePatterns: ignoredTests,
  verbose: true,
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  reporters: [
    "default",
    ["<rootDir>/node_modules/kelonio/out/plugin/jestReporter", { keepStateAtStart: false, keepStateAtEnd: false, printReportAtEnd: true }]
  ],
  setupFilesAfterEnv: [
    "<rootDir>/node_modules/kelonio/out/plugin/jestReporterSetup.js",
  ],
};
