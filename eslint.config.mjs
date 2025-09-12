// ESLint flat config for Next.js 15 + TypeScript
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({ baseDirectory: process.cwd() });

// Helper: scope TS configs to TS only
const tsOnly = tseslint.configs.recommendedTypeChecked.map((c) => ({
  ...c,
  files: ["**/*.ts", "**/*.tsx"],
}));

export default [
  // Ignore build outputs and deps
  {
    ignores: [".next/**", "node_modules/**", "dist/**", "eslint.config.mjs"]
  },

  // Base JS rules
  js.configs.recommended,

  // Next.js Core Web Vitals rules (legacy config via compat)
  ...compat.extends("plugin:@next/next/core-web-vitals"),

  // TypeScript recommended (type-checked) rules, scoped to TS files
  ...tsOnly,

  // Project-specific settings
  {
    files: ["**/*.{ts,tsx,js,jsx}"] ,
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: process.cwd()
      }
    },
    rules: {
      // Reasonable defaults
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", ignoreRestSiblings: true }
      ]
    }
  }
  ,
  // Type definition files: relax some TS-only rules
  {
    files: ["**/*.d.ts"],
    rules: {
      "@typescript-eslint/triple-slash-reference": "off"
    }
  }
];
