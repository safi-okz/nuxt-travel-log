import withNuxt from '@nuxt/eslint-config';
import antfu from '@anftu/eslint-config';

export default withNuxt(antfu({
    type: 'app',
    vue: true,
    typescript: true,
    formatters: true,
    stylistics: {
        indent: 2,
        semi: true,
        quotes: 'double'
    },
    rules: {
        "ts/no-redeclare": "off",
    "ts/consistent-type-definitions": ["error", "type"],
    "no-console": ["warn"],
    "antfu/no-top-level-await": ["off"],
    "node/prefer-global/process": ["off"],
    "node/no-process-env": ["error"],
    "perfectionist/sort-imports": ["error", {
      tsconfigRootDir: ".",
    }],
    "unicorn/filename-case": ["error", {
      case: "kebabCase",
      ignore: ["README.md"],
    }],
    }
}
));