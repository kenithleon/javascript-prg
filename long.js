const longestWord = (str) => {
    if(str.trim().length === 0){
        return false;
    }
    words =str.split(" ");
    words = words.sort((a,b) => b.length - a.length);
    console.log(words);
    return words[0];
}





console.log(longestWord("are you playing football in the ground"));
