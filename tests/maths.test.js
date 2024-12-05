import { strict as assert } from 'assert'
import { Maths } from '../exercises/maths.js'

describe('Maths', () => {
it('should have PI defined and equal to 3.14', () => {
    assert.equal(typeof Maths.PI, 'number')
    assert.equal(Maths.PI, 3.14)

})    

// Check Maths.max returns the largest of 2 numbers

it('should return the largest of two numbers using Maths.max', () => {
    assert.strictEqual(Maths.max(5, 10), 10) 
    assert.strictEqual(Maths.max(15, 10), 15) 
    assert.strictEqual(Maths.max(-5, 0), 0) 
    assert.strictEqual(Maths.max(-10, -15), -10) 
})

})