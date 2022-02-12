// test.js
import assert from 'assert'
import { add } from './myLib.js'

try {
  console.log('add() should add two numbers ')
  assert.strictEqual(add(2, 5), 7)
  console.log('  ✅ passed')
} catch (e) {
  console.log('  🚫 fail')
  console.error(e)
}