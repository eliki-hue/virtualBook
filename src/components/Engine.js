import React from "react";
import { fetchedBooks } from "./APIFetch";

let book = fetchedBooks
console.log("imported ")

console.log(fetchedBooks)
console.log("end")

if (fetchedBooks){

    let tokens=[]

fetchedBooks.forEach(record => {
    
    // console.log(record.content)
    let sentence = record.content
    // console.log("sentence  55666")
    // console.log(sentence)
    tokens = record.tokens
    // console.log("this are tokens")
    // console.log(tokens)
    
    let counter = 0
    tokens.forEach(tokens => {
        let tokenValue = tokens.value
        // console.log("even this tokens value")
        console.log(tokenValue)
        let start = tokens.position[0]
        let end = tokens.position[1]+1
        let word= sentence.slice(start,end)
        console.log(counter)
        counter ++
        console.log("count: " + counter, "value :"+tokenValue)
       

    })
    
});}else(console.log("not yet"))


function Engine(){
    
    // const sentence="One Saturday, when I was young, my father and I left the house early in the morning, when it was still blue-black outside. The grass left wet marks on our shoes. In the backyard, under stones, we dug up crawly worms and laid them in a can with lumps of damp dirt."
    
    // let newSentence =[]
    // let counter = 0
    // tokens.forEach(item => {
       
    //     let value=(item.value)
        // let start = item.position[0]
        // let end = item.position[1]+1
        // let word= sentence.slice(start,end)
        // console.log(word)
        // counter ++
        // console.log("count: " + counter, "value :"+value)
        // let wordList ={word:word, tokenvalue:value}
        // console.log(wordList)
        // newSentence.push(wordList)
        // console.log(newSentence)
    
    // })
    return (
        <div><p id='new-sentence'></p>
        </div>
    )
}
export default Engine;
