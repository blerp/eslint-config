module.exports = {
  parser: "babel-eslint",
  extends: [
    "xo",
    "plugin:flowtype/recommended",
    "prettier",
    "prettier/flowtype"
  ],
  plugins: ["flowtype", "prettier"],
  rules: {
    "prettier/prettier": "error"
  }
};
