// We recommend using Flow if you're using React.
//  That is why Flow is included in this config.

module.exports = {
  parser: "babel-eslint",
  extends: [
    "xo",
    "plugin:flowtype/recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "prettier/flowtype",
    "prettier/react"
  ],
  plugins: ["flowtype", "react", "jsx-a11y", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    "prettier/prettier": "error"
  }
};
