const data = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
  ];
  

// Sort the array by age  
data.sort((firstItem, secondItem) => firstItem.age - secondItem.age) ;
console.log(data);


//Filter the array to remove entries with an age greater than 50
const filteredPeople = data.filter(person => person.age <= 50);
console.log(filteredPeople);

//Map the array to change the “occupation” key to “job” and increment every age by 1

//Use the reduce method to calculate the sum of the ages.Then use the result to calculate the average age



