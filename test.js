const { sum, fromEuroToDollar, fromYenToPound, fromDollarToYen} = require('./app.js');

test ("add 14 + 9 equal 23", () => {
expect(sum(14,9)).toBe(23);
})

// test("One euro should be 1.07 dollars", function() {
//     // Import the function from app.js
//     const { fromEuroToDollar } = require('./app.js');

//     // Use the function like its supposed to be used
//     const dollars = fromEuroToDollar(3.5);

//     // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
//     const expected = 3.5 * 1.07; 
    
//     // This is the comparison for the unit test
//      expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
// })
test('1070 dollar should be 156500 yen', () => {
expect(fromDollarToYen(1070)).toBe(156500)
})

test('1565 yen should be 8.7', () => {
    expect(fromYenToPound(1565)).toBe(8.7)
    })