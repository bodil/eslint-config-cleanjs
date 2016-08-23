module.exports = {
  extends: "plugin:fp/recommended",
  parserOptions: {
    ecmaVersion: 7,
    sourceType: "module",
    experimentalObjectRestSpread: true
  },
  plugins: [
    "fp",
    "better"
  ],
  rules: {
    // eslint-plugin-better rules
    "better/no-ifs": 2,
    "better/no-instanceofs": 2,
    "better/no-new": 2,
    "better/explicit-return": 2,
    // disable things handled by eslint-plugin-fp
    "no-classes": 0,
    "no-deletes": 0,
    "no-exceptions": 0,
    "no-exports": 0,
    "no-fors": 0,
    "no-function-expressions": 0,
    "no-imports": 0,
    "no-nulls": 0,
    "no-reassigns": 0,
    "no-switches": 0,
    "no-this": 0,
    "no-typeof": 0,
    "no-undefined": 0,
    "no-variable-declaration": 0,
    "no-whiles": 0,
    // eslint standard rules
    "no-var": 2,
    "prefer-spread": 2,
    "prefer-rest-params": 2
  }
};
