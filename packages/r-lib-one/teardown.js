const {registerTsProject} = require( 'nx/src/utils/register');

const cleanup = registerTsProject('.', 'tsconfig.base.json')

const {teardown} = require( '@using-libs-with-jest/testing-utils');

module.exports = async function () {
  teardown()
}
cleanup();
