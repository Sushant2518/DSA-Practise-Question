let arr = [1,2,3,4,5];

let sum =0;

for(let i=0; i<=arr.length-1; i++){
  sum+=arr[i];
}

console.log(sum);

let reducedArray = arr.reduce(function(acc,item){
  return acc+item;
},0)

console.log(reducedArray);











let developers_array = [
  {
    first: "John",
    last: "Doe",
    dept: "FE",
    commits: 10
  },
  {
    first: "Jane",
    last: "Doe",
    dept: "BE",
    commits: 15
  },
  {
    first: "James",
    last: "bond",
    dept: "BE",
    commits: 8
  }
]; 

// output
// {
//   BE: ["Jane", "James"]
//   FE: ["John"]
// }

// let reduced_array = developers_array.reduce(function(acc,item){
//   if(item.dept=="BE"){
//     acc.BE.push(item.first);
//   }
//   else{
//     acc.FE.push(item.first);
//   }
//   return acc;
// },{BE : [], FE : []});

// console.log(reduced_array);



let reduced_array = developers_array.reduce((acc,item)=>{
  item.dept=="BE" ?
    acc.BE.push(item.first) :
    acc.FE.push(item.first);
  return acc;
},{BE : [], FE : []});

console.log(reduced_array);

let total_commit = developers_array.reduce((acc,item)=>{
  return acc + item.commits;
},0);

console.log(total_commit);













let developers_array = [
  {
    first: "John",
    last: "Doe",
    dept: "FE",
    commits: 10
  },
  {
    first: "Jane",
    last: "Doe",
    dept: "BE",
    commits: 15
  },
  {
    first: "James",
    last: "bond",
    dept: "BE",
    commits: 8
  }
]; 

// output { starDeveloper: 'Jane', commits: 15 }

let reducedArray = developers_array.reduce((max,item)=>{
    return (item.commits > max.commits) ? item : max;
});

console.log({ starDeveloper: reducedArray.first, commits: reducedArray.commits });














let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

let newArr = /* your code here */
  users.reduce(function(acc,item){
    acc[item.name]=item.id;
    return acc;
  },{})

console.log(newArr);
/*
Use proper array method such that the newArr becomes: 
 {John: 1, Pete: 2, Mary: 3}
 
Note: the order doesnot matter here. 

Problem Statement: you are expected to use of the array mehtods
to create a new object called newArr using the users Array.

the keys of the new object (newArr) would be the name of the user 
and the values would be the id of the user
*/

















let data = [
  { name: "John", subject: "Javascript" },
  { name: "John", subject: "HTML" },
  { name: "John", subject: "CSS" },
  { name: "Pete", subject: "Java" },
  { name: "Pete", subject: "English" },
  { name: "Pete", subject: "Maths" },
  { name: "Mary", subject: "Rust" },
  { name: "Mary", subject: "Elm" },
]

let subjectHash = data.reduce((acc, item) => {
  // iteration 1 - acc: {}
  // iteration 1 - item: { name: "John", subject: "Javascript" }
 if(acc[item.name]){
   acc[item.name].push(item.subject);
 }
  else{
    acc[item.name]=[item.subject]
  }
  
  // iteraction 1 - acc:
  return acc;
}, {})

console.log(subjectHash);
/*
Expected output:
{
  John: ["Javascript", "HTML", "CSS"],
  Pete: ["Java", "English", "Maths"],
  Mary: ["Rust", "Elm"]
}
*/

/*
 - Use proper array methods to create an object from the data arrray.
 - from the data, the name would become the key of the new object.
 - keys must be unique, one key per user.
 - the value would be an array of their subjects.
*/























let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map((users)=>{
  return {
    fullName : `${users.name} ${users.surname}`,
    id : users.id
  };
})  /* ... your code ... */

/* 
end result/sample output: 
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

console.log(usersMapped);    
console.log(usersMapped[0].id) // 1
console.log(usersMapped[0].fullName) // John Smith

/*
 form a new array using the users array
 the new array is expected to have objects with the following properties:
  - fullName: <name><space><surname> 
  - id: <id>
 check the end result / sample output in the comment above. 
*/




















function getGreeting(firstName, lastName) {
  return `Hi from ${firstName} ${lastName}.`
}


let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersGreetings = users.map((users)=>{
  return getGreeting(users.name,users.surname);
}) 

console.log(usersGreetings) // ["Hi from John Smith.","Hi from Pete Hunt.","Hi from Mary Key."]

/*
  Use of the array functons to manipulate the users array. We need a new array called usersGreetings.
  usersGreetings will be an array of strings: ["Hi from John Smith.","Hi from Pete Hunt.","Hi from Mary Key."]
  You are expected to use the getGreeting function inside the callback of the array method that you choose to use.
*/

























let subjectsHash = {
  1: 'Javascript',
  2: 'HTML',
  3: 'CSS',
  4: 'Java',
  5: 'Rust',
}

let students = [
  {id: 1, name: 'Prateek', subjectID: 5},
  {id: 2, name: 'Yogesh', subjectID: 2},
  {id: 3, name: 'Nrupul', subjectID: 4},
  {id: 4, name: 'Prateek', subjectID: 1},
]

let newObj = students.reduce((acc,item)=>{
  let name = item.name;
  let subject = subjectsHash[item.subjectID];
  if(acc[name]){
    acc[name].push(subject);
  }
  else{
    acc[name]=[subject];
  }
  return acc;
},{}) /* your code here */

console.log(newObj);

/* 
----------------------------------
create a new object called `newObj` using the `students` array &  
the `subjectsHash` object.
----------------------------------

Expected Output of `newObj`: 
{
  Prateek: ["Rust", "Javascript"],
  Yogesh: ["HTML"],
  Nrupul: ["Java"],
}
// 
*/





















let subjectsHash = {
  1: 'Javascript',
  2: 'HTML',
  3: 'CSS',
  4: 'Java',
  5: 'Rust',
}

let students = [
  {id: 1, name: 'Prateek', subjectID: 5},
  {id: 2, name: 'Yogesh', subjectID: 2},
  {id: 3, name: 'Nrupul', subjectID: 4},
  {id: 4, name: 'Prateek', subjectID: 1},
]

let newObj = students.reduce((acc,item)=>{
  let name = item.name;
  let subject = subjectsHash[item.subjectID];
  
  if(acc[name]){
    acc[name].push(subject);
  }
  else{
    acc[name]=[subject];
  }
  return acc;
})/* your code here */

console.log(newObj);

/* 
----------------------------------
create a new object called `newObj` using the `students` array &  
the `subjectsHash` object.
----------------------------------

Expected Output of `newObj`: 
{
  Prateek: ["Rust", "Javascript"],
  Yogesh: ["HTML"],
  Nrupul: ["Java"],
}
// 
*/





















