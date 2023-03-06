// write a factory function iPhone1 to create iPhone objects in bulk quantiy
// iPhone1 takes in ASIN, color, display, camera
// the object it creates has the following 
// properties: ASIN, color, display, camera
// methods: 
// dial - console logs "tring.. tring..."
// sendMessage - console logs "Sending message..."
// cameraClick - "Camera clicked"

function iPhone1(ASIN, color, display, camera) {
    let obj = {};
    
    // attaching properties to obj
    obj.ASIN = ASIN;
    obj.color = color;
    obj.display = display;
    obj.camera = camera;
  
    // attaching methods to the obj
    obj.dial = function() {
      console.log('tring.. tring...');
    }
  
    obj.sendMessage = function() {
      console.log('Sending message...');
    }
  
    obj.cameraClick = function() {
      console.log('Camera clicked');
    }
  
    return obj;
  }
  
  
  
  let i1 = iPhone1('B09X67JBQV','Gray','90mm','2.0 MP')
  console.log(i1);
  i1.dial(); // "tring.. tring..."
  i1.sendMessage(); // "Sending message..."
  i1.cameraClick(); // "Camera clicked"
  
  
  let i2 = iPhone1('B09X67JBQM','Black','90mm','2.0 MP')
  console.log(i2)
  
  
  let i3 = iPhone1('B09X67JBQZ','Black','90mm','2.0 MP')
  console.log(i3)



















  // Animal
//     ├── noOfLegs <number>
//     ├── vegetarian <boolean>
//     └── eat() <function that logs `eating...` >

// Write a factory function that can be used to create animal objects in bulk quantity. 

// every animal oject must have 2 properties: noOfLegs, vegetarian
// every animal must have 2 methods
// eat() // console.log(`eating...`)
// greet() // console.log(`Hi, I have <noOfLegs> legs.`)

function Animal(noOfLegs, vegetarian) {
    let obj ={}
    
    obj.noOfLegs = noOfLegs;
    obj.vegetarian = vegetarian 
    
    obj.eat = function(){
      console.log("eating...")
    }
    obj.greet = function(){
      console.log(`Hi, I have ${noOfLegs} legs.`);
    }
    return obj
  }
  
  // Example usage:
  let lion = Animal(4, false);
  lion.eat(); // "eating..."
  lion.greet(); // "Hi, I have 4 legs."
  
  let cow = Animal(4, true);
  cow.eat(); // "eating..."
  cow.greet(); // "Hi, I have 4 legs."

  
















  // convert the following factory function to a constructor function

function animal(noOfLegs, vegetarian) {
    // let obj = {};
  
    this.noOfLegs = noOfLegs;
     this.vegetarian = vegetarian;
  
     this.eat = function() {
      console.log('eating...')
    }
  
     this.greet = function() {
      console.log(`Hi, I have ${ this.noOfLegs} legs.`)
    }
  
    // return obj;
  }
  
  // example invocation
  let a1 = new animal(4,true);
  console.log(a1)
  a1.eat() // eating...
  a1.greet() // Hi, I have 4 legs.
















  // convert the following factory function to an ES6 class
class Animal{
    constructor(noOfLegs, vegetarian){
        this.noOfLegs = noOfLegs;
        this.vegetarian = vegetarian;
  
        this.eat = function() {
          console.log('eating...')
        }
  
        this.greet = function() {
          console.log(`Hi, I have ${this.noOfLegs} legs.`)
        }
    }
  }
  
  // example invocation
  let a1 = new Animal(4,true);
  console.log(a1)
  a1.eat() // eating...
  a1.greet() // Hi, I have 4 legs.




















  // grouping related variables
let account = {
    name: 'Sushant',
    type: 'Simple Saving',
    balance: 100000,
    active: true,
  }
  
  console.log(account)
  
  account.loanAmount = 50000;
  account["loanType"]="Education";
  // account.reference = 'Some one';
  // account['new_property'] = 'Yet some value';
  console.log(account);
  
  delete account.loanType;
  // delete account.reference;
  console.log(account);


















  let account = {
    name: 'Sushant',
    type: 'Simple Saving',
    balance: 100000,
    active: true,
  }
  
  // can be passes to a function as an argument
  function printAccountDetails(obj) {
    console.log('Name: ', obj.name, 'Type: ' ,obj.type, 'Active: ' , obj.active, 'Bal: ' , obj.balance);
  }
  
  printAccountDetails(account);




















  let account = {
    name: 'Sushant',
    type: 'Simple Saving',
    balance: 100000,
    active: true,
  }
  
  function getAccountData(obj){
    console.log(`Name${obj.name} type${obj.type} balance${obj.balance} active: ${obj.active}`)
  }
  
  getAccountData(account);

















  let account = {
    name: 'Sushant',
    type: 'Simple Saving',
    balance: 100000,
    active: true,
    print : function(){
       console.log(`Name: ${this.name}, type: ${this.type}, balance: ${this.balance}, active: ${this.active}`);
    }
  }
  
  account.print();
  

  














  // let account = {
//   name: 'Sushant',
//   type: 'Simple Saving',
//   balance: 100000,
//   active: true,
//   print : function(){
//      console.log(`Name: ${this.name}, type: ${this.type}, balance: ${this.balance}, active: ${this.active}`);
//   }
// }

function createAccount(AccountHolderName,AccountType,AccountBalance,AccountStatus){
    let account = {
      name : AccountHolderName,
      type : AccountType,
      balance : AccountBalance,
      active : AccountStatus,
      print : function(){
       console.log(`Name: ${this.name}, type: ${this.type}, balance: ${this.balance}, active: ${this.active}`);
    }
   }
    return account;
  }
  
  let account1 = createAccount("Sushant","Saving",1000000,true);
  account1.print();
  
  let account2 = createAccount("Niraj","Saving",1000000,true);
  account2.print();
  
  let account3 = createAccount("Aditya","Saving",1000000,true);
  account3.print();
  
  let account4 = createAccount("Roshan","Saving",1000000,true);
  account4.print();

















function createAccount(AccountHolderName,AccountType,AccountBalance,AccountStatus){
    this.name = AccountHolderName;
    this.type = AccountType;
    this.balance = AccountBalance;
    this.active = AccountStatus;
    this.print = function(){
     console.log(`Name: ${this.name}, type: ${this.type}, balance: ${this.balance}, active: ${this.active}`);
  }
}

let account1 = new createAccount("Sushant","Saving",1000000,true);
account1.print();

let account2 = new createAccount("Niraj","Saving",1000000,true);
account2.print();

let account3 = new createAccount("Aditya","Saving",1000000,true);
account3.print();

let account4 = new createAccount("Roshan","Saving",1000000,true);
account4.print();






















// function createAccount(AccountHolderName,AccountType,AccountBalance,AccountStatus){
//     this.name = AccountHolderName;
//     this.type = AccountType;
//     this.balance = AccountBalance;
//     this.active = AccountStatus;
//     this.print = function(){
//      console.log(`Name: ${this.name}, type: ${this.type}, balance: ${this.balance}, active: ${this.active}`);
//   }
// }

// let account1 = new createAccount("Sushant","Saving",1000000,true);
// account1.print();

// let account2 = new createAccount("Niraj","Saving",1000000,true);
// account2.print();

// let account3 = new createAccount("Aditya","Saving",1000000,true);
// account3.print();

// let account4 = new createAccount("Roshan","Saving",1000000,true);
// account4.print();




class createAccount{
    constructor(AccountHolderName,AccountType,AccountBalance,AccountStatus){
        this.name = AccountHolderName;
        this.type = AccountType;
        this.balance = AccountBalance;
        this.active = AccountStatus;
        this.print = function(){
        console.log(`Name: ${this.name}, type: ${this.type}, balance: ${this.balance}, active: ${this.active}`);
    }
   }
  }
  
  let account1 = new createAccount("Sushant","Saving",1000000,true);
  account1.print();
  
  let account2 = new createAccount("Niraj","Saving",1000000,true);
  account2.print();
  
  let account3 = new createAccount("Aditya","Saving",1000000,true);
  account3.print();
  
  let account4 = new createAccount("Roshan","Saving",1000000,true);
  account4.print();