module.exports = {
  preset: "jest-preset-angular",
  globals: {
    "ts-jest": {
      tsConfig: "<rootDir>/tsconfig.spec.json",
      stringifyContentPathRegex: "\\.html$",
      astTransformers: [require.resolve("jest-preset-angular/InlineHtmlStripStylesTransformer")],
      diagnostics: true,
      isolatedModules: true,
    },
  },
  setupFilesAfterEnv: ["<rootDir>/jest/setup.ts"],
  transform: {
    "^.+\\.(ts|js|html)$": "ts-jest",
  },
  transformIgnorePatterns: ["node_modules/(?!@angular-mdc|@material)"],
  testPathIgnorePatterns: [
    "<rootDir>/src/test.ts",
    "<rootDir>/src/app/property-metadata.service.spec.ts",
    "<rootDir>/src/app/operating-statement/",
    "<rootDir>/src/app/component-library/spreadsheet/",
  ],
  testEnvironment: "jest-environment-jsdom-thirteen",
  moduleFileExtensions: ["ts", "html", "js", "json"],
  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1",
    "^app/(.*)$": "<rootDir>/src/app/$1",
    "^assets/(.*)$": "<rootDir>/src/assets/$1",
    "^environments/(.*)$": "<rootDir>/src/environments/$1",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  snapshotSerializers: ["jest-preset-angular/AngularSnapshotSerializer.js", "jest-preset-angular/HTMLCommentSerializer.js"],
  watchPlugins: ["jest-watch-typeahead/filename", "jest-watch-typeahead/testname"],
  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputName: "test-results/test-results.xml",
      },
    ],
  ],
  coverageDirectory: "./coverage",
  collectCoverageFrom: ["src/app/**/*.ts", "!src/app/**/*.module.ts", "!src/app/app.component.ts"],
  coverageReporters: ["cobertura", "lcov", "json", "text"],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "<rootDir>/src/*.module.ts",
    "<rootDir>/src/app/app.component.ts",
    "<rootDir>/src/app/shared/interceptors/fake-backend.interceptor.ts",
    "<rootDir>/src/app/property-metadata.service.spec.ts",
    "<rootDir>/src/app/operating-statement/",
    "<rootDir>/src/app/component-library/spreadsheet/",
  ],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
