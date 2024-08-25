"use strict";

import express from "express";
import { handler } from "./svelte/build/handler.js";
import { getWord, search } from "@jg-tpl/malti_search";
import cors from 'cors';

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.listen(port, () => {
    console.log(`app running on port ${port}`);
});

app.get("/api/search", (req, res) => {
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

    res.write(search(keyword, skip, limit, maxDis, mode));

    res.end();
});

app.get("/api/fetch", (req, res) => {
    let key = req.query.key;
    if (!key) {
        res.status(404).write("invalid keyword");
        res.end();
        return;
    }

    res.write(getWord(key));
    
    res.end();
})

app.use(handler);
