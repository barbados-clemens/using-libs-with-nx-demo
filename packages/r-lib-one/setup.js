const {registerTsProject} = require('nx/src/utils/register');
console.log(registerTsProject, 'registerTsProject');
const cleanup = registerTsProject('.', 'tsconfig.base.json')

const {setup} = require('@using-libs-with-jest/testing-utils');

module.exports = async function () {
  setup()
}
cleanup();
