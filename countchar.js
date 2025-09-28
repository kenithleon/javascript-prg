const countChar =(word, char) => {
word = word.toLowerCase();
char = char.toLowerCase();

totalCount = word.split("").reduce((acc, cur) => {
    if(cur === char){
        acc++;
    }
    return acc;
}, 0);
return totalCount;

}



console.log(countChar("fdfdsfsdFdsfsdfdsfFFsdfdsf", "f"));
