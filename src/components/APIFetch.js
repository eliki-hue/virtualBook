import { gql, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
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
function GetBooks() {
  const [books, setBooks] = React.useState([]);
  // console.log(books);
  const { error, loading, data } = useQuery(LOAD_BOOKS);
  useEffect(() => {
    //checking whether data has been received
    if (data) {
      console.log('whole')
      console.log(data);
      console.log("pages")
      console.log(data.book.pages);
      console.log("index")
      console.log(data.book.key);
      setBooks(data.book.pages);
    }
  }, [data]);
 
  // return books.map(book =>
  //   <div>
  //     <div className="slide-container">
  //       <Slide>
         
              
  //         <div>{book.content}</div>
              
          
          
  //       </Slide>
  //       </div>
  //     <ul>
  //       {/* {book.tokens.map(tokens => 
  //         <li>{tokens.value}</li>
  //       )} */}
  //     </ul>
  //   </div>
  // )

  const style = {
    textAlign: 'center',
    background: 'teal',
    padding: '200px 0px',
    fontSize: '30px'
  };

  const properties = {
    duration: 3000,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    indicators: true,
  };
    return (
      <div className="slide-hhhcontainer">
        <Slide {...properties}>
         {books.map((book, index)=> (
            <div className="each-slide" key={index}>
              
              <div>{book.content}</div>
              {book.tokens.map(tokens => 
          <li>{tokens.value}</li>
        )} 
              
            </div>
          ))} 
        </Slide>
      </div>
    )


}

export default GetBooks;
