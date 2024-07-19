import React from "react";
import * as ReactDOMClient from "react-dom/client";
import {createDirectus, rest, readItem} from '@directus/sdk';

const directusURL = "https://directus.directus.app";
const client = createDirectus(directusURL).with(rest());

const app = ReactDOMClient.createRoot(document.getElementById('app'))
// app.render(<h1>Hello</h1>)


const image = client.request(readItem('Pictures', 1, {fields: ['id']}))
app.render(<p>{image}</p>)