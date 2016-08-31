module.exports = {
  parserOptions: {
    ecmaVersion: 7,
    sourceType: "module",
    experimentalObjectRestSpread: true
  },
  plugins: [
    "fp",
    "better",
    "import"
  ],
  rules: {
    // eslint-plugin-fp rules
    "fp/no-arguments": 2,
    "fp/no-class": 2,
    "fp/no-delete": 2,
    "fp/no-events": 2,
    "fp/no-get-set": 2,
    "fp/no-let": 2,
    "fp/no-loops": 2,
    "fp/no-mutating-assign": 2,
    "fp/no-mutating-methods": 2,
    "fp/no-mutation": 2,
    "fp/no-nil": 2,
    "fp/no-proxy": 2,
    "fp/no-rest-parameters": 0,
    "fp/no-this": 2,
    "fp/no-throw": 2,
    "fp/no-unused-expression": 2,
    "fp/no-valueof-field": 2,
    // eslint-plugin-better rules
    "better/no-ifs": 2,
    "better/no-instanceofs": 2,
    "better/no-new": 2,
    "better/explicit-return": 2,
    // explicitly disable things handled by eslint-plugin-fp
    "better/no-classes": 0,
    "better/no-deletes": 0,
    "better/no-exceptions": 0,
    "better/no-exports": 0,
    "better/no-fors": 0,
    "better/no-function-expressions": 0,
    "better/no-imports": 0,
    "better/no-nulls": 0,
    "better/no-reassigns": 0,
    "better/no-switches": 0,
    "better/no-this": 0,
    "better/no-typeof": 0,
    "better/no-undefined": 0,
    "better/no-variable-declaration": 0,
    "better/no-whiles": 0,
    // eslint-plugin-import rules
    "import/no-commonjs": 2,
    "import/no-amd": 2,
    "import/export": 2,
    // eslint standard rules
    "no-var": 2,
    "prefer-spread": 2,
    "prefer-rest-params": 2
  }
};
