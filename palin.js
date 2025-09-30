const isPalindrome = (str) => {
    str = str.toLowerCase().replace(/\W/g, "");
    let rev = str.split("").reverse().join("");
    console.log(rev);
    return str === rev ? true : false;
}

console.log(isPalindrome("A man, a plan, a canal, Panama")); 
console.log(isPalindrome("hello"));
console.log(isPalindrome("racecar"));


