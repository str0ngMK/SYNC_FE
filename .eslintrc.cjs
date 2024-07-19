module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'airbnb-base',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'import/no-unresolved': [
      'error',
      {
        // import resolver를 사용하여 alias를 설정합니다.
        ignore: ['^@'], // '@' alias를 사용할 때 오류가 발생하지 않도록 설정합니다.
      },
    ],
    // `no-restricted-imports` 규칙을 사용하여 alias를 사용하지 않는 import에 대해 오류를 발생시킵니다.
    'no-restricted-imports': [
      'error',
      {
        patterns: ['../*', '../../*', '../../../*'], // 상대 경로 사용 시 오류 발생
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {}, // 이 부분을 추가
    },
    react: { version: 'detect' },
  },
};
