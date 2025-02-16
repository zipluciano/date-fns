/* eslint-env mocha */

import assert from 'assert'
import { describe, it, beforeEach, afterEach } from 'vitest'
import sinon from 'sinon'
import isThisMonth from './index'

describe('isThisMonth', () => {
  let clock: sinon.SinonFakeTimers
  beforeEach(() => {
    clock = sinon.useFakeTimers(new Date(2014, 8 /* Sep */, 25).getTime())
  })

  afterEach(() => {
    clock.restore()
  })

  it('returns true if the given date and the current date have the same month (and year)', () => {
    const date = new Date(2014, 8 /* Sep */, 15)
    assert(isThisMonth(date) === true)
  })

  it('returns false if the given date and the current date have different months', () => {
    const date = new Date(2013, 7 /* Aug */, 31)
    assert(isThisMonth(date) === false)
  })

  it('accepts a timestamp', () => {
    const date = new Date(2014, 8 /* Sep */, 30).getTime()
    assert(isThisMonth(date) === true)
  })
})
