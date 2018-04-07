//Q1: Create a function that takes 3 arguments and returns the sum of the three arguments

function sum (a,b,c) {
    var x = a+b+c;
    return x;
}

var test = sum(2,3,4);
console.log('Q1: ' + test);


/* Q2: Create a function named colorCar that receives a color, and prints out, "a red car" for example. (Hint: put it in your file and run it like before.)*/

function colorCar (color) {
   
    console.log('Q2: '+ 'a'+ color + 'car');
    
}
colorCar(' red ');



/* Q3: Create an object and a function that takes the object as a parameter and prints out all of its names and values. */

var person = {
    firstName: 'Anowar',
    lastName: 'Uddin',
};

function myFunc (person) {
    console.log('Q3: My First Name is: ' + person.firstName + ' and Last Name is: ' + person.lastName);
}
myFunc(person);


/* Q4: Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints "a blue motorbike" for example when called as vehicleType("blue", 2) */

function vehicleType (color, code){
   let text = 'a ' + color + '';
   if (code === 1) {
       text = text + ' car';
   } else if (code === 2) {
       text = text + ' motorbike';
   }
   return text;
}

console.log('Q4: '+ vehicleType('blue',2));

/* Q5: Can you write the following without the if statement, but with just as a single line with console.log(...);? 
if (3 == 3) {
    console.log("true")
} else {
    console.log("false")
}*/

3 == 3 ? console.log('Q5: ' + 'true') : console.log('Q5: ' + 'false');

/* Q6: Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints "a blue used car" */

function vehicle (color, code, age) {
    let text = 'a ' + color + '';
    
    if (age === 1) {
        text = text + " new";
    } else if (age > 1) {
        text = text + " used";
    }
    if (code === 1) {
        text = text + " car";
    } else if (code === 2) {
        text = text + " motorbike";
    }
    return text;
}

console.log('Q6: ' + vehicle('blue', 1, 5));

// Q7: Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more. 

let vehicleList = ['car', ' motorbike', ' bike', ' caravan'];
console.log('Q7: ' + vehicleList);


// Q8: How do you get the third element from that list?

console.log('Q8: '+ vehicleList[2]);

// Q9: Change the function vehicle to use the list of question 4. So that vehicle("green", 3, 1) prints "a green new caravan".

function vehicle2 (color, code, age) {
    let text = 'a ' + color;

    if (age === 1) {
        text = text + ' new ';
    } else if (age > 1) {
        text = text + ' used ';
    }

    text = text + vehicleList [code];
    return text;
}

console.log('Q9: ' + vehicle2('green', 3, 1));

// Q10: Use the list of vehicles to write an advertisement. So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)

function advertisement () {
    let message = 'Amazing Joe\'s  Garage, we service ';

    for (var i = 0; i < vehicleList.length; i ++) {
        if (i === vehicleList.length - 1) {
            message = message + 'and ' + vehicleList[i] + 's. ';
        } else {
            message = message + vehicleList[i] + 's, ' ;
        }
    }
    return message;
}

console.log('Q10: ' + advertisement());

// Q11: What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 7

vehicleList.push('truck');
console.log('Q11: ' + advertisement());

// Q12: Create an empty object

var objectA = {};
var objectB = new Object ();
console.log('Q12: an empty object' + objectA);
console.log('Q12: an empty object' + objectB);

// Q13: Create a function that takes two objects as parameters and compares them. You will actually need to write two functions — one that compares with == and one that compares with ===. Remember that objects can have objects inside of them so you'll need to find a way to compare every element of every object (types and values). For example:

function compare () {
var obj1 = {
    a: 1,
    b: "this is the letter b",
    c: {
      foo: "what is a foo anyway",
      bar: [1, 2, 3, 4]
    }
  };
  
  var obj2 = {
    a: "1",
    b: "this is the letter b",
    c: {
      foo: "what is a foo anyway",
      bar: [1, 2, 3, 4]
    }
  };

  if (obj1 == obj2){
      console.log('Q13: ' + 'this is true');
  } else if (obj1 === obj2) {
      console.log('Q13: ' + 'this true'); 
  } else {
      console.log('Q13: ' + 'this is false');
      
  }
}
compare();


// Q14: We saw that we can pass functions as arguments to other functions. Your task is to write a function that takes another function as an argument and runs it.

function foo(func) {
    func();   
}

function bar(foo) {
    console.log('Q14: ' + 'Hello, I am bar!');
}

foo(bar);


// Q15: Write some code to test two arrays for equality using == and ===. Test the following:

var x = [1, 2, 3];
var y = [1, 2, 3];
var z = y;

function testEquality(arr1, arr2) {
    if(arr1.length !== arr2.length)
        return false;
    for(var i = arr1.length; i--;) {
        if(arr1[i] !== arr2[i])
            return false;
    }

    return true;
}

console.log('Q15: ' + testEquality(x, y));

/* Q15: Take a look at the following code:
     var o1 = { foo: 'bar' };
     var o2 = { foo: 'bar' };
     var o3 = o2;
Show that changing `o2` changes `o3` (or not) and changing ~~`o2` changes `o3`~~ `o1` changes `o3`(or not). 

Does the order that you assign (`o3 = o2` or `o2 = o3`) matter? {Jim Cramer: ???}
*/







// Q17: What does the following code return? (And why?)

let bar1 = 42;
console.log('Q17: ' + typeof bar1);

var x = "6"; 
console.log('Q17: '+ typeof x);













//http://unlockcampus.org/code/tutoring/javascript-week-2-homework






