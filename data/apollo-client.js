import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
const isServer = typeof window === "undefined";

const link = createHttpLink({
    uri: process.env.API_URL || "http://localhost:4000/graphql",
    fetchOptions: {
        mode: 'cors',
    },
});

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link,
});

export default client;