module.exports = {
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    setupFilesAfterEnv: ["setupTests.js"],
    testEnvironment: "jsdom",
  },
};
