import { is } from '@magic/test'

import preventDefault from '../src/index.mjs'

class EventShim {
  constructor() {
    this.called = false
  }

  preventDefault() {
    this.called = true
  }
}

export default [
  {
    fn: () => preventDefault(new EventShim()),
    expect: e => e.called,
    info: 'shim.preventDefault gets called',
  },
]
