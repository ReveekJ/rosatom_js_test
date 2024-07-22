import React from "react";
import * as ReactDOMClient from "react-dom/client";
// import {createDirectus, rest, readItem, authentication, graphql, withOptions, refresh} from '@directus/sdk';
//
// const directusURL = "https://localhost:8055";
// const client = createDirectus(directusURL)
//   .with(authentication('cookie', { credentials: 'include' }))
//   .with(rest({ credentials: 'include' }));

const app = ReactDOMClient.createRoot(document.getElementById('app'))
app.render(<h1>Hello</h1>)

//
// const result = await client.request(
//   withOptions(readItem('Picture', 1), { credentials: 'include' })
// );
// )
