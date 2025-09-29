const checkTriangle = (a, b, c) => {
if(a === b && b === c) return "Equilateral";
if(a===b || b===c || a===c) return "Isosceles";
return "Scalene";
}

console.log(checkTriangle(2, 2, 2)); 
console.log(checkTriangle(3, 4, 5));
console.log(checkTriangle(2, 2, 3));


