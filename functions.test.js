const {shuffleArray, shuffleArray2, arrayLength} = require('./utils')

describe('shuffleArray should', () => {

    test("shuffleArray returns an array", () =>{
        //const array = [];
        let shuffleArray2 = shuffleArray(testData.array)
        //expect(typeof shuffleArray).toBe([])
        expect(shuffleArray2.isArray([])).toBe(true); //something may need to go inside the array? value. or may not need the array inside?
    })
    
    test("shuffleArray returns an array of the same length as the argument sent in", () => {
        let arrayLength = shuffleArray(testData.length)
        expect(arrayLength).toHaveLength()
    })

})