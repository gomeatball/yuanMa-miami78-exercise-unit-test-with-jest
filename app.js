console.log("Hello World");

const sum = (a, b) => {
    return a + b
}
console.log(sum(7,3));





let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}


const fromEuroToDollar = (euro) => {
return euro * 1.07 ;
}
console.log(fromEuroToDollar(100));



const fromDollarToYen = (dollar) => {
    return dollar/ 1.07 * 156.5
}
console.log(fromDollarToYen(107));



const fromYenToPound = (yen) => {
    return yen / 156.5 * 0.87
}
console.log(fromYenToPound(1565));


module.exports = { sum ,
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
};
