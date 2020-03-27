const sort = require('./app').sortArrayByParity;


describe ("Sort Array By Parity", ()=>{
    test('they should be sorted by parity', ()=>{
        const input = [ 3, 1, 2, 3, 6, 7, 4, 8, 4]

        const output = [ 2, 6, 4, 8, 4, 3, 1, 3, 7 ]
        expect(sort(input)).toEqual(output)
    })

    test('not enough numbers', ()=>{
        const input = [2]
        expect(()=>{
            sort(input).toThrowError('array needs more numbers for sorting')
        })
    })

    test('no numbers', ()=>{
        const input = []
        expect(()=>{
            sort(input).toThrowError('array needs more numbers for sorting')
        })
    })

    test('not an array', ()=>{
        const input = 'twenty seven'
        expect(()=>{
            sort(input).toThrowError('not an array')
        })
    })

    test('not a number', ()=>{
        const input =[2, 3,'twenty seven']
        expect(()=>{
            sort(input).toThrowError('not a number')
        })
    })

    
})