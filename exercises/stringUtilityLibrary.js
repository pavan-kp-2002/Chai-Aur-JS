function normalizeInput(str){
    let normalizedString = (str.substring(0,1).toUpperCase() + str.substring(1,str.length).toLowerCase()).trim()
    return normalizedString
}
console.log(normalizeInput("HEllO WorLD"))

function countWords(str){
    return str.split(" ").length
}
console.log(countWords("This is Javascript"))

function isPalindrome(str){
   let normalizedString =  str.toLowerCase().replace(/[^a-z0-9]/g,'')
   let reversedString = normalizedString.split('').reverse().join('')
   return normalizedString === reversedString;
}

console.log(isPalindrome("RaceCar"))
console.log(isPalindrome("Hello"))

function replaceWord(str, oldWord, newWord){
    return str.replace(oldWord, newWord);
}

console.log(replaceWord("I like cats, Cats are cute", "cats", "Dogs"))

function getInitials(name){
    let wordsInName = name.split(" ")
    let initials = ""
    for(i = 0; i < wordsInName.length; i++){
        initials += wordsInName[i].charAt(0).toUpperCase()
    }
    return initials;
}

console.log(getInitials("Pavan K P"))

function wordReverser(str){
    let wordArray = str.split(" ")
    let reversedWord = ""
    for(i = 0; i < wordArray.length; i++){
        reversedWord += wordArray[i].split('').reverse().join('') + " "
    }

    return reversedWord
}

console.log(wordReverser("Hello World! I am David J Malan"))

function censor(str, badWord){
    return str.replace(badWord, "*".repeat(badWord.length))
}

console.log( censor("This is stupid", "stupid"))

function highlightWord(str, word){
    return str.includes(word)
}

console.log(highlightWord("I Love coding", "coding"))