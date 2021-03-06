//Even Fibonacci numbers; Problem 2

//Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be: 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

//By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

var fibonacci=[1, 2]                      //initiate the fibonacci array
var even_sum=2                            //sum starts at 2 since 2 is even
for(var i=2; i<=32; i++){
  var next_term= fibonacci[fibonacci.length-1]+fibonacci[fibonacci.length-2];
  fibonacci.push(next_term);              //push each new term to array
  if(next_term%2===0){                    //if each new term is even, add it to sum
    even_sum=even_sum+next_term
  }
}
console.log(even_sum)