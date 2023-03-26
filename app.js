// let arr =[
//   "a",
//   "e",
//   "i",
//   "o",
//   "u",  
// ]
// function arr1(str) {
//     let vowels = ["a", "e", "i", "o", "u",];
//     let result = 0
//     let letter = str.split("");

//     letter.forEach(item => {
//         if (vowels.includes(item)) {
//             result++;
//         }
//     });
//     console.log(result);
// }



// arr1("what")

let agesvalue = prompt("yoshingizni kiriting");

let ages = [18, 12, 15, 20, 39];

let orta= ages.reduce((a,b)=> a+b)/ages.length
console.log(orta);
if (agesvalue > orta ) {
    console.log();
}




