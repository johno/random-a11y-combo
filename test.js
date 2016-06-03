import test from 'ava'
import isPresent from 'is-present'
import randomA11yCombo from './'

test('random-a11y-combo does something awesome', t => {
  t.plan(1)

  t.true(isPresent(randomA11yCombo()))
})

test('random-a11y-combo returns a random a11y combo for a given hex', t => {
  t.plan(1)

  t.true(isPresent(randomA11yCombo('#fff')))
})
