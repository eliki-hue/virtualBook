import { gql, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
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
  console.log(books);
  const { error, loading, data } = useQuery(LOAD_BOOKS);
  useEffect(() => {
    //checking whether data has been received
    if (data) {
      console.log(data);
      console.log(data.book.pages);
      setBooks(data.book.pages);
    }
  }, [data]);
 
  return books.map(book =>
    <div>
      <h3>{book.content}</h3>
      <ul>
        {/* {book.tokens.map(tokens => 
          <li>{tokens.value}</li>
        )} */}
      </ul>
    </div>
  )

  // return (
  //   <div>
  //     <h1>Available books</h1>
  //     {books.map((book) => {
  //       <div className="card" key={book.content}>
  //         <h2>waiting...</h2>
  //         <div>
  //           <p>{book.content}</p>
  //         </div>
  //       </div>;
  //     })}
  //   </div>
  // );
}

export default GetBooks;
