import { gql, useQuery } from "@apollo/client";
import React, { useEffect, useState, useRef } from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

export const LOAD_BOOKS = gql`
  query {
    book {
      pages {
        content
        tokens {
          position
          value
        }
      }
    }
  }
`;

export var fetchedBooks;

function GetBooks() {
  const [books, setBooks] = React.useState([]);
  const [word, setWord] = React.useState([])
  // console.log(books);
  const { error, loading, data } = useQuery(LOAD_BOOKS);
  useEffect(() => {
    //checking whether data has been received
    if (data) {
      console.log(data.book.pages);
      console.log("this is")
      fetchedBooks = data.book.pages
      
      console.log(fetchedBooks)
      console.log("inner end")
      setBooks(data.book.pages);
      setWord(data.book.pages.tokens)
      
    }
    else (console.log("loading ........"))
  }, [data]);
  
  
  const slideRef = useRef();

  const back = () => {
    slideRef.current.goBack();
  }

  const next = () => {
    slideRef.current.goNext();
  }

  const goto = ({ target }) => {
    slideRef.current.goTo(parseInt(target.value, 10));
  }


  const style = {
    textAlign: 'center',
    background: 'teal',
    padding: '130px 0px',
    fontSize: '30px',
    
  };
  const buttonStyle ={
    padding:'20px',
    fontSize: '30px',
    content: 'center',

  }
  const contentStyle ={
    margin:'20px'

  }

  const properties = {
    duration: 3000,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    // arrows: false,
    indicators: true,
  };
  // function Decomposer(){
  // const sentence= books.content
  // console.log(sentence)
  // const tokens =books.tokens
  // let newSentence =[]
  // let counter = 0
   
  // tokens.forEach(item => {
     
  //     let value=(item.value)
  //     console.log("this is value "+ value)
  //     let start = item.position[0]
  //     let end = item.position[1]+1
  //     let word= sentence.slice(start,end)
  //     console.log(word)

  //     counter ++
  //     console.log("count: " + counter, "value :"+value)
  //     let wordList ={word:word, tokenvalue:value}
  //     console.log(wordList)
  //     newSentence.push(wordList)
  //     console.log(newSentence)
  
  // })
  // }
  // Decomposer()

    return (
      <div className="slide-container" >
        <Slide {...properties} ref={slideRef} style={style}>
         {books.map((book, index)=> (

          
            <div className="each-slide" key={index}>
              
              <div style={contentStyle}>{book.content}</div>
             
              
            
          
              {/* {book.tokens.map(tokens => 
              <span> <li>{tokens.value}</li></span>
          
        )}  */}
              
            </div>
          
          ))} 
          
          
        </Slide>
        <div className="autoplay-buttons">
        <button type="button" style={buttonStyle} onClick={back}>Back</button>
        <button type="button" style={buttonStyle} onClick={next}>Next</button>
        </div>
      </div>
    )


}

export default GetBooks;
