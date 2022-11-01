module.exports = {
  extends: ["turbo", "prettier", "solid"],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  env: {
    node: true,
    es2022: true,
    browser: true,
  },
  extends: ['eslint:recommended'],
  rules: {},
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      extends: ['eslint:recommended', 'plugin:astro/recommended'],
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {},
    },
    {
      files: ['*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ["solid"],
      extends: ["eslint:recommended", "plugin:solid/typescript"]
    },
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        '@typescript-eslint/no-unused-vars': [
          'error',
          { argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_' },
        ],
        '@typescript-eslint/no-non-null-assertion': 'off',
      },
    },
    {
      // Define the configuration for `<script>` tag.
      // Script in `<script>` is assigned a virtual file name with the `.js` extension.
      files: ['**/*.astro/*.js', '*.astro/*.js'],
      parser: '@typescript-eslint/parser',
    },
  ],
}