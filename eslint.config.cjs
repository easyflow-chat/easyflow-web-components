module.exports = {
  "env": {
    "node": true,
    "es6": true
  },
  "extends": ["eslint:recommended"],
  "ignorePatterns": ["node_modules/*", ".out/*", "!.prettierrc"],
  "overrides": [
    {
      "files": ["**/*.ts", "**/*.tsx"],
      "parser": "@typescript-eslint/parser",
      "settings": {
        "import/ignore": [".css$", "node_modules/*"]
      },
      "env": {
        "browser": true,
        "node": true,
        "es6": true
      },
      "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended", // TypeScript rules
        "plugin:jsx-a11y/recommended" // Accessibility rules
      ],
      "rules": {
        "prettier/prettier": ["error", {}, { "usePrettierrc": true }],

        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off",

        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            "argsIgnorePattern": "^_",
            "varsIgnorePattern": "^_"
          }
        ],
        "@typescript-eslint/explicit-function-return-type": [
          "error",
          {
            "allowExpressions": true,
            "allowConciseArrowFunctionExpressionsStartingWithVoid": true
          }
        ],
        "@typescript-eslint/no-explicit-any": ["error"],
        "@typescript-eslint/no-floating-promises": ["error"],
        "jsx-a11y/anchor-is-valid": "off",
        "jsx-a11y/no-static-element-interactions": "off",
        "jsx-a11y/label-has-associated-control": "off",
        "jsx-a11y/no-noninteractive-element-interactions": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/mouse-events-have-key-events": "off",

        "valid-jsdoc": [
          "error",
          {
            "requireReturn": false,
            "requireReturnType": false,
            "requireParamType": false
          }
        ]
      }
    }
  ],
  "parserOptions": {
    "ecmaVersion": 8,
    "project": ["./tsconfig.json"]
  },
  "plugins": ["prettier"],
  "root": true
}
