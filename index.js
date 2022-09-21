// let a = "iamastring";
// let s = a.split("");
// console.log(s);
// let b = [];
// let count;
// for (let i = 0; i < a.length; i++) {
//   count = 0;
//   for (let j = 0; j < a.length; j++) {
//     if (a[i] === a[j]) {
//       b.push(a[j]);
//       count++;
//       if (a[j] in b) {
//         break;
//       } else {
//         b.push(a[j]);
//         count++;
//       }
//     }
//   }
// }
// console.log(b);

// console.log(count);



 let arr = ["aaaa", "baaasd", "cc"];
// // for (let i = 0; i < arr.length; i++) {
// //   if (arr[i] === "" || arr[i] === " ") {
// //     arr.splice(i, 1);
// //   }
// // }
// // console.log(arr);




// let res=arr.filter(ele=>{
//     //if(ele!=='' || ele!==" " )
//     return ele!=='' && ele!==' '
// })
// console.log(arr)
// console.log(res)




// let minLen=arr[0];
// for (let i = 1; i < arr.length; i++){
//     if (minLen.length>arr[i].length){
//         minLen=arr[i]
        
//     }
// }
// console.log(minLen)



// let a = [1, 2, 5, 2, 3, 5, 3, 3, 5, 4, 5, 6, 5];
// let maxcount = 0;
// let count = 0,
//   maxele;

// for (let i = 0; i < a.length; i++) {
//   count = 0;
//   for (let j = 0; j < a.length; j++) {
//     if (a[i] === a[j]) {
//       count++;
//     }
//   }
//   if (count > maxcount) {
//     maxcount = count;
//     maxele = a[i];
//   }
// }

// console.log(`freq is ${maxcount} of element ${maxele}`);




// let a = 'arrays'
// let s=a.split('')
// console.log(s)
// let b=[]
// for (let i = 0; i < s.length; i++) {
//   let count=0
//   for(let j = 0; j < s.length; j++){
//     if(i!==j && s[i]=== s[j]){
//       count++
//     }

//   }
//    if(count===0){
//       b.push(s[i])
//     }
// }

// console.log(b)





// let a = [1, 2, 3, 4, 4, 5, 6,3,3];
// let count;
// let b=[]

// for (let i = 0; i < a.length; i++) {
//   count = 0;
//   for (let j = 0; j < a.length; j++) {
//             if(a[i]===a[j]){
//                 count++
//             }

//   }
//   if(count==1){
//     b.push(a[i])
//   }
// }

// console.log(b)




// ARRAYS 6TH QUE

// let a = [1, 2, 3, 4],
//   b = [3, 4, 5, 6],
//   c = [];

// for (let i = 0; i < a.length; i++) {
//   let j;
//   for (j = 0; j < b.length; j++) {
//     if (a[i] === b[j]) {
//       break;
//     }
//   }
//   if (i == a.length) {
//     console.log(b[j]);
//   }
// }
//console.log(c);
