module.exports = {
  preset: "jest-preset-angular",
  globals: {
    "ts-jest": {
      tsConfig: "<rootDir>/tsconfig.spec.json",
      stringifyContentPathRegex: "\\.html$",
    },
  },
  watchPlugins: ["jest-watch-typeahead/filename", "jest-watch-typeahead/testname"],
  setupFilesAfterEnv: ["<rootDir>/jest/setup.ts"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/dist/", "<rootDir>/src/test.ts"],
  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputName: "test-results/test-results.xml",
      },
    ],
  ],
  moduleFileExtensions: ["ts", "html", "js", "json"],
  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1",
    "^app/(.*)$": "<rootDir>/src/app/$1",
    "^assets/(.*)$": "<rootDir>/src/assets/$1",
    "^environments/(.*)$": "<rootDir>/src/environments/$1",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  coverageDirectory: "./coverage",
  collectCoverageFrom: ["src/app/**/*.ts", "!src/app/**/*.module.ts", "!src/app/app.component.ts"],
  coverageReporters: ["cobertura", "lcov", "json", "text"],
  coveragePathIgnorePatterns: ["/node_modules/", "<rootDir>/src/*.module.ts"],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
