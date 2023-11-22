import { useQuery } from "react-query";
import { getAllBooks } from "../api";


import { Container } from "../shared/Container";
import { Flex } from "rebass/styled-components";
import Loader from "react-loader-spinner";
import { BookItem } from "./BookItem";

export const BooksList = () => {
    
    const { data, error, isLoading, isError} = useQuery("books", getAllBooks)

    if (isLoading) {
        return (
            <Container>
                <Flex py="5" justifyContent="center">
                    <Loader type="ThreeDots" color="#cca" height={30} />
                </Flex>
            </Container>
        )
    }

    if(isError) {
        return <span>Error: {error.message}</span>
    }


    return(
        <Container>
            <Flex flexDirection="column" alignItems="center">
                { data.map(({author, title, id}) => (
                    <BookItem key={id} author={author} title={title}  id={id}/>
                ))}
            </Flex>

        </Container>
    )
} 
