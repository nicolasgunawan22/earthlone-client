import { gql } from '@apollo/client'

const getProductsQuery = gql`
    query{
        products {
            id
            name
            image
            description
            createdAt
        }
    },
`
const getProductQuery = gql`
    query($id: ID!){
        book(id: $id){
            id
            name
            image
            description
        }
    }
`

const addProductMutation = gql`
    mutation($name: String!, $description: String!, $image: String!) {
        addProduct(name: $name, description: $description, image: $image){
            id
        }
    }
`

export {getProductsQuery, getProductQuery, addProductMutation}