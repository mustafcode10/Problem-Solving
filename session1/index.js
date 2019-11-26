

// function addAll(){
//  var args = Array.prototype.slice.call(arguments);
//  var total = 0;
//  for(i=0; i<args.length; i++){
//     total += args[i]
//     console.log('args[i]',args[i] , 'index', i);
//  }
//  return console.log('total', total);
// }

// console.log(addAll(40, 30, 20, 10 ))
// console.log('the total index is ' , i );

// Solution addAll  ...rest and reduce and forEach 
// ...rest its  gives all of the rest and you can change the name rest call what ever you want.
// function addAll(...numbers){
//     var total = 0;
//     numbers.forEach(num =>{
//         total += num
//     })
//     return total;

// }

// function addAll(...numbers){
//     return numbers.reduce((acc, curr)=>
//       acc + curr
//     )
// }

// same but easy to understand.
// function addAll(...numbers){
//     return numbers.reduce((total, num)=> total + num)
// }


// console.log(addAll(40,30,20,10))

// sum all  Prime numbers

// function sumAllPrimes(num){
//     let total = 0;
//     function checkprimeNum(i){
//         for(let j = 2; j < i ; i++ ){
//             if(i % j === 0){
//                 return false;
//             }
//         }
//         return true;
//     }
// for(let i = 2; i <= num.length; i++){
//     if(checkprimeNum(i)){
//         return total += i;
//     }
// }
//     return total;
// }

// console.log(sumAllPrimes(1,3,5));

// function sumAllPrimes(num) {
//     let total = 0;
  
//     function checkForPrime(i) {
//       for (let j = 2; j < i; j++) {
//         if (i % j === 0) {
//           return false;
//         }
//       }
//       return true;
//     }
  
//     for (let i = 2; i <= num; i++) {
//       if (checkForPrime(i)) {
//         total += i;
//       }
//     }
//     return total;
//   }

//   console.log(sumAllPrimes(10))


// function sumAllPrime(num){
//     let total = 0;
//     function checkforPrime(i){
//         for(let j = 2; j < i; j++){
//             if(i % j === 0){
//                 return false;
//             }
//         }
//         return true;
//     }
//     for(let i = 2; i <= num; i++){
//         if(checkforPrime(i)){
//             total += i
//         }

//     }

//     return total;

// }

// console.log(sumAllPrime(10))


// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover values in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

// Solution 1: arguments, indexOf, filter
// function seekAndDestroy(arr) {
//     const args = Array.from(arguments);
  
//     function filterArr(arr) {
//       // Return true if NOT in array
//       return args.indexOf(arr) === -1;
//     }
  
//     return arr.filter(filterArr);
//   }
  
  // Solution 2: ...rest, filter & includes
//   function seekAndDestroy(arr, ...rest) {
//     return arr.filter(val => !rest.includes(val));
//   }

// console.log(seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6))

// CHALLENGE 4: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

// function sortByHeight(a) {
//     const arr1 = [];
//     const arr2 = [];

//     // Es5 
//     // a.forEach((val1, position1 ) => {
//     //     if(val1 === -1){
//     //         arr1.push(position1)

//     //     }else {
//     //         arr2.push(val1)
//     //     }  
//     // });

//     //  Es6 its easy and less coding
//     a.forEach((val, i) => val === -1 ? arr1.push(i) : arr2.push(val) );
//      console.log('arr1: for position:', arr1,'arr2 for value:', arr2)

//     // // then sorted array from lowest to highest
//     const sortArr = arr2.sort((a, b) => a -b)
//     console.log('then sorted arr2 for the value from lowest to highest:', sortArr)
//     // then splice the  index  of arr1 position.
//     arr1.forEach((val, i) => sortArr.splice(arr1[i], 0, -1))
//     return sortArr;

    
// }


// same steps but clear without comment.
// function sortByHeight(a) {
//     const arr1 = [];
//     const arr2 = [];
  
//     a.forEach((val, i) => (val === -1 ? arr1.push(i) : arr2.push(val)));
  
//     const sortArr = arr2.sort((a, b) => a - b);
  
//     arr1.forEach((val, i) => sortArr.splice(arr1[i], 0, -1));
  
//     return sortArr;
//   }


function sortByHeight (a){
    const arr1 = [];
    const arr2 = [];
    
    a.forEach((val, i) => val === -1 ? arr1.push(i) : arr2.push(val) );
    console.log(arr1, arr2)
    // then create const sortArr to be sorted by arr2  value from lowest to highest
    const sortArr  = arr2.sort((a, b) => a - b)
    console.log('sortAr', sortArr)
    // splice arr1 to the position.
    arr1.forEach((val, i) => sortArr.splice(arr1[i], 0, -1))
    return sortArr;

}

const a = [-1, 150, 190, 170, -1, -1, 160, 180]
console.log(sortByHeight(a));









