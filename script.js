// A
// const addTheWordCool = function (array) {
//     array.push("cool");
//     return array;
// };

// console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));

// B
// const amountOfElementsInArray = function (array) {
//     return array.length
// }
// console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen']));

//C
// const selectBelgiumFromBenelux = function (array) {
//     return array[0];
// }
// console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"]));

// // D
// const lastElementInArray = function (array) {
//     return array[3]
// }
// console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"]));
// resultaat: "Schildpad"

// E
// Slice is als je een deel van een array eruit knipt.
// Splice is als je een deel uit een array knipt en er iets voor terug plaatst.

// const presidents = ["Trump", "Obama", "Bush", "Clinton"]
// const impeachTrumpSlice = () => presidents.slice(1);
// console.log(impeachTrumpSlice());

// const impeachTrumpSplice = function (array) {
//     return presidents.splice(1);
// }
// console.log(impeachTrumpSplice());

// console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
// console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]

// F
// const stringsTogether = function (array) {
//     return array.join(" ");
// };
// console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}']))
//   //resultaat: "Winc Academy is leuk ;-}"

// G
const combineArrays = function (array1, array2) {
    return array1.concat(array2);
}

console.log(combineArrays([1, 2, 3], [4, 5, 6]))
  // resultaat: [1,2,3,4,5,6]