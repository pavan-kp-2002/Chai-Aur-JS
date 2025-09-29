function countWords(text){
    console.log(text.toLowerCase().replace(/[^a-z\s]/g, "").split(" ").filter(word => word.length > 0).reduce((acc, word)=>{
        acc[word] = (acc[word] || 0) + 1;
        return acc;
    }, {}))
}

const text = "JavaScript is great and javascript is fun";
countWords(text)
