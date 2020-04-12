const {
    describe,
    it,
    expect,
    matchers 
  } = require('./testingFramework')

add = (a,b) => a+b;

subtract = (a,b) => a-b;

multiply = (a,b) => a*b;

divide = (a,b) => a/b;

//test case for addition  
describe('addition', () => {
    it('adds two numbers', () => {
        const result = add(1, 2)
        expect(result).toBe(3)
    })
})

describe('subtraction', () => {
    it('subtracts two numbers', () => {
        const result = subtract(1, 2)
        expect(result).toBe(-1)
    })
})

describe('multiplication', () => {
    it('multiplies two numbers', () => {
        const result = multiply(4, 2)
        expect(result).toBe(8)
    })
})

describe('division', () => {
    it('divides two numbers', () => {
        const result = divide(5, 2)
        expect(result).toBe(2.5)
    })
})