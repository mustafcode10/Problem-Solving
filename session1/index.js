



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

console.log(seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6))








