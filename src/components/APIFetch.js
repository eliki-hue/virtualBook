import {gql, useQuery} from '@apollo/client'
import React,{useEffect} from 'react'
export const LOAD_BOOKS =gql`
query {
    book{
        pages{
            content
            tokens{
                position
                value
            }
        }
    }
}
`
function GetBooks(){
    const {error, loading, data} =useQuery(LOAD_BOOKS);
    useEffect(() =>{
    console.log(data)
    },[data]);

    return <div>data</div>
}

export default GetBooks;