const { sum } = require('./app.js');
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {   
    const { fromEuroToDollar } = require('./app.js');
    expect(fromEuroToDollar(3.5)).toBe(3.745); 
})
test("One dollar should be 146.26 yens", function() {
    const { fromDollarToYen } = require("./app.js");
    expect(fromDollarToYen(2.5)).toBe(365.6542056074766)
})
test("One yen should be 0.014 pounds", function() {
    const { fromYenToPound } = require("./app.js");
    expect(fromYenToPound(1000)).toBe(5.559105431309905)
})