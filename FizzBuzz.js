// Plays a game called Fizz Buzz. If a number is a multiple of 3 it will output "Fizz".
// If a number is a multiple of 5 it will output "Buzz". If a number is a multiple
// of both 3 and 5 it will output "FizzBuzz".

var foo = [];

for (var i = 1; i <= 100; i++) {
   foo.push(i);
}

for (var n = 0; n <= 99; n++) {
  var m = foo[n];
  if ((m % 3 == 0) && (m % 5 == 0)) {
    alert("FizzBuzz");
  }

  if (((m % 5) === 0) && ((m % 3) !== 0)) { 
    alert("Buzz");
  }

  if (((m % 3) === 0) && ((m % 5) !== 0)) {
    alert("Fizz");
  } 

  if (((m % 3) !== 0) && ((m % 5) !== 0)) { 
    alert(m);
 }
}