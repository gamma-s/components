module.exports = {
  transform: {
    '^.+\\.tsx?$': '@vitejs/jest-transform',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
