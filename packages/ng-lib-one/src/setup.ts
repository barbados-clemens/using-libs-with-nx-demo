import {registerTsProject} from 'nx/src/utils/register'

const cleanup = registerTsProject('.', 'tsconfig.base.json')

import {setup} from '@using-libs-with-jest/testing-utils'

export default async function () {
  setup()
}
cleanup();
