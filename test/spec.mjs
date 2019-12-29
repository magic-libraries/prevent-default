import { is } from '@magic/test'

import preventDef, { preventDefault } from '../src/index.mjs'

export default [
  {
    fn: () => preventDef,
    expect: is.deep.equal(preventDefault),
    info: 'expect default and named exports to be equal',
  },
  { fn: () => preventDef, expect: is.fn, info: 'preventDef is a function' },
]
