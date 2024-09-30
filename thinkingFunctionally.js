//Take an array of numbers and return the sum

const array = [1, 2, 3, 4, 5];
function sumOfArray(numbers) {
    let sum = 0; 
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i]; 
    }
    return sum;
}
let sum = sumOfArray(array);
console.log(sum);



//Take an array of numbers and return the average

let average = sum / array.length
console.log(average);


//Take an array of strings and return the longest string


//Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
//For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"]


//Take a number, n, and print every number between 1 and n without using loops. Use recursion
function numbers(n){
   if (n > 0);
       console.log(n)
       recursive(n - 1)
}
numbers(10)