import {registerTsProject} from 'nx/src/utils/register'

const cleanup = registerTsProject('.', 'tsconfig.base.json')

import {teardown} from '@using-libs-with-jest/testing-utils'

export default async function () {
  teardown()
}

cleanup();
