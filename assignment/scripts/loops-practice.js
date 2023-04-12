console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<4; i++) {  
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5 
//   - Which part of the example loop do you need to change to do this?
console.log('--- 1.a ---');
console.log('count from 0 to 5');
for (let i=0; i<6; i++) {
    console.log(i);
}
// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('--- 1.b ---');
console.log('count from 3 to 5');
for (let i=3; i<6; i++) {
    console.log(i);
}
// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
console.log('--- 1.c ---');
console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');
for (let i=0; i<6; i++) {
    n = i * 2;
    console.log(n);
}
// 1.d. (STRETCH) TODO: Write a for loop to do a countdown from 5 to 0
console.log('--- 1.d ---');
console.log('STRETCH: countdown from 5 to 0');
for (let i=5; i>=0; i--) {
    console.log(i);
}

// 2. For of loops  
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
console.log('---- 2.a----');
console.log('Some stars:');
for (let i=0; i<5; i++) {
    console.log(stars[i]);
}

// 3. While loops  
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
console.log('---- 3.a ----');
console.log('Some stars using while:');
let x=0 

while (x < 5) {
    console.log(stars[x]);
    x++;
}

// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log('---- 3.b ----');
console.log('count from 0 to 5');
let b = 0

while (b < 5) {
    console.log(b);
    b++;
}

// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log('---- 3.c ----');
console.log('count backwards from 10 to 5');
let c = 10

while (c > 4) {
    console.log(c);
    c--;
}





