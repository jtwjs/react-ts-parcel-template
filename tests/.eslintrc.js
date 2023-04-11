module.exports = {
  env: {
    jest: false, // jest를 사용하지 않고 playwright에서 제공하는 api를 사용하므로 false
  },
  extends: ['plugin:playwright/playwright-test'],
  rules: {
    'import/no-extraneous-dependencies': 'off',
  },
};
