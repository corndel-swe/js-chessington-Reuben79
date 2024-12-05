import { strict as assert } from 'assert'
import { Rectangle } from '../exercises/rectangles.js'

describe('Rectangle', () => { 
    it('should return the correct area', () => { 

        // Arrange/ 2 * 4 = 8

        const rect = new Rectangle(2, 4) 

        // Act 

        const area = rect.area()

        // Assert

        assert.strictEqual(area, 8) 
    }); 
    it('should return the correct perimeter', () => { 

        // Arrange/ 2 * (2 + 4) = 12

        const rect = new Rectangle(2, 4) 

        // Act 

        const perimeter = rect.perimeter()

        // Assert 
        
        assert.strictEqual(perimeter, 12) 
    })
})
























