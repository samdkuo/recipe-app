module.exports = {
  extends: ["@react-native-community", "plugin:prettier/recommended"],

  rules: {
    // TODO: fix these and delete them
    "no-case-declarations": ["warn"],
    "no-dupe-keys": ["warn"],
    "no-empty-pattern": ["warn"],
    "no-extra-boolean-cast": ["warn"],
    "no-useless-catch": ["warn"],
    "no-var": ["warn"],
    "prefer-const": ["warn"],
    "@typescript-eslint/ban-ts-comment": ["warn"],
    "@typescript-eslint/ban-types": ["warn"],
    "@typescript-eslint/no-empty-function": ["warn"],
    "@typescript-eslint/no-empty-interface": [
      "warn",
      { allowSingleExtends: true },
    ],
    "@typescript-eslint/no-var-requires": ["off"],
    "@typescript-eslint/no-unused-vars": ["warn"],
    "react/display-name": ["warn"],
    "react/jsx-key": ["warn"],
    "react/jsx-no-target-blank": ["warn"],
    "react/no-deprecated": ["warn"],
    "react/no-unescaped-entities": ["warn"],
    "react-native/no-single-element-style-arrays": ["warn"],
    quotes: ["error", "double"],
    "@typescript-eslint/quotes": [
      2,
      "double",
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    "react-native/no-inline-styles": 0,
    "prettier/prettier": 0
  },

  overrides: [
    {
      files: ["**/*.js?(x)", "**/*.ts?(x)"],
      rules: {
        "@typescript-eslint/no-var-requires": 1,
        "react-native/no-inline-styles": 0,
      },
    },
  ],
};
