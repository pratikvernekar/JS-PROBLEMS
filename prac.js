// var highestFrequency = (array) => {
//     var occurenceStored = new Map();
//     let occurrence = 0;
//     for (var i = 0; i < array.length; i++){
//         occurrence=0;
//         for (var j = 0; j < array.length; j++){

//       if (array[i] === array[j] ){
//         occurrence += 1;
//         occurenceStored.set(array[i], occurrence)
//       }
//     }

//    // console.log(occurenceStored);
//   }
//  console.log(occurenceStored);
// }

//   highestFrequency([101, 104, 108, 108, 111, 119,101,101,101,101, 119, 119,101])

let arr = [3, 3, 1, 1, 1, 8, 3, 6, 8, 7, 8];

let obj1 = {
  a: 1,
  b: [
    {
      c: 3,
      d: 5,
    },
  ],
  e: 7,
  8: "w",
};

let obj2 = JSON.parse(JSON.stringify(obj1));

console.log(obj1);
