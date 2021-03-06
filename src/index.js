import React from 'react';
import {render} from 'react-dom';
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const client = new ApolloClient({
    uri: "https://71z1g.sse.codesandbox.io/",
    cache: new InMemoryCache()
});



render(
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>,
    document.getElementById('root'),
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

