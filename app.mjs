import express from 'express'
import { handler } from './svelte/build/handler.js'

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`app running on port ${port}`);
});

app.use(handler);