import js from "@eslint/js"
import tseslint from "typescript-eslint"
import prettier from "eslint-config-prettier"

export default tseslint.config(
    { ignores: ["build/"] },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    prettier,
    {
        // Type-aware linting only for the library sources covered by tsconfig.json
        files: ["src/**/*.ts", "src/**/*.tsx"],
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        rules: {
            "@typescript-eslint/no-floating-promises": ["error"],
        },
    },
    {
        rules: {
            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    varsIgnorePattern: "^_",
                    argsIgnorePattern: "^_",
                    ignoreRestSiblings: true,
                },
            ],
            "@typescript-eslint/no-explicit-any": 0,
            "@typescript-eslint/no-this-alias": 0,
            "@typescript-eslint/ban-ts-comment": 0,
        },
    },
)
