// react-scanner.config.js
module.exports = {
    crawlFrom: './src',
    includePaths: ['**/*.tsx'],
    excludePaths: ['**/*.test.tsx', '**/*.stories.tsx'],
    output: './scanner-output.json',
    importedFrom: '@visa/nova-react',
    outputFormat: 'json',
  };