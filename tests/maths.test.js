import { strict as assert } from 'assert'
import { Maths } from '../exercises/maths.js'

describe('Maths', () => {
it('should have PI defined and equal to 3.14', () => {
    assert.equal(typeof Maths.PI, 'number')
    assert.equal(Maths.PI, 3.14)

})    

// Check Maths.max returns the largest of 2 numbers. *Equals doesnt work

it('should return the largest of two numbers using Maths.max', () => {
    assert.strictEqual(Maths.max(5, 10), 10) 
    assert.strictEqual(Maths.max(15, 10), 15) 
    assert.strictEqual(Maths.max(-5, 0), 0) 
    assert.strictEqual(Maths.max(-10, -15), -10) 
  })

})

//Ex3 TDD Round 1


describe('Maths.round', () => { 
    it('should return the same number when given a whole number', () => {

        // Arrange 

        const number = 5 

        // Act 

        const result = Maths.round(number)

        // Assert 

        assert.strictEqual(result, number) 
    })

    it('should round down when given a number with a decimal part less than 0.5', () => { 
        // Arrange 
        const number = 4.3 
        // Act 
        const result = Maths.round(number) 
        // Assert 
        assert.strictEqual(result, 4) 
    });
 });








   

    //export class Maths { 
    //static PI = 3.14 

    //static max(a, b) { 
        //return a > b ? a : b 
    //} 
    
    //static round(number) { 
        //return Math.round(number)
        //}

    //}



















