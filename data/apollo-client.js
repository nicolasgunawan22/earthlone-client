import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
const isServer = typeof window === "undefined";

const link = createHttpLink({
    // uri: 'https://confident-galileo-9dbd7e.netlify.app',
    // uri: 'https://earthlone-api.herokuapp.com/',
    uri: 'http://localhost:4000/graphql',
    fetchOptions: {
        mode: 'cors',
    },
});

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link,
});

export default client;