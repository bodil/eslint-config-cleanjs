module.exports = {
  parserOptions: {
    ecmaVersion: 7,
    sourceType: "module",
    experimentalObjectRestSpread: true
  },
  plugins: [
    "immutable",
    "better"
  ],
  rules: {
    // eslint-plugin-immutable rules
    "immutable/no-let": 2,
    "immutable/no-this": 2,
    "immutable/no-mutation": 2,
    // eslint-plugin-better rules
    "no-classes": 2,
    "no-deletes": 2,
    "no-exceptions": 2,
    "no-exports": 0,
    "no-fors": 0,
    "no-function-expressions": 0,
    "no-ifs": 2,
    "no-imports": 0,
    "no-instanceofs": 2,
    "no-new": 2,
    "no-nulls": 2,
    "no-reassigns": 2,
    "no-switches": 0,
    "no-this": 0, // handled by immutable
    "no-typeof": 0,
    "no-undefined": 2,
    "no-variable-declaration": 0,
    "no-whiles": 2,
    "explicit-return": 2,
    // eslint standard rules
    "no-var": 2,
    "prefer-spread": 2,
    "prefer-rest-params": 2
  }
};
