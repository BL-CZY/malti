"use strict";

import express from "express";
import { handler } from "./svelte/build/handler.js";
import { getWord, search, init } from "@jg-tpl/malti_search";
import cors from 'cors';

const app = express();
const port = 3000;

await init();
console.log("Init succeeded")

app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.listen(port, () => {
    console.log(`app running on port ${port}`);
});

app.get("/api/search", async (req, res) => {
    let keyword = req.query.keyword;
    let mode = req.query.mode;
    let skip = parseInt(req.query.skip);
    let limit = parseInt(req.query.limit);
    let maxDis = parseInt(req.query.maxDis);

    if (!keyword) {
        res.status(404).write("invalid keyword");
        return;
    }

    if (!mode) {
        mode = "b";
    }

    if (isNaN(skip)) {
        skip = 0;
    }

    if (isNaN(limit)) {
        limit = 10;
    }

    if (isNaN(maxDis)) {
        maxDis = 3;
    } 
    
    let result = await search(keyword, skip, limit, maxDis, mode);
    res.write(result);

    res.end();
});

app.get("/api/fetch", async (req, res) => {
    let key = req.query.key;
    if (!key) {
        res.status(404).write("invalid keyword");
        res.end();
        return;
    }

    let result = await getWord(key);

    res.write(result);
    
    res.end();
})

app.use(handler);
