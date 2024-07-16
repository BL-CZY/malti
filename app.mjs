"use strict";

import express from 'express'
import { handler } from './svelte/build/handler.js'
import { search } from '@jg-tpl/malti_search';

const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));

app.listen(port, () => {
    console.log(`app running on port ${port}`);
});

app.get('/api/search', (req, res) => {
    let keyword = req.query.keyword;
    let exact = Boolean(req.query.exact);
    let text = Boolean(req.query.text);
    let skip = req.query.skip;
    let limit = req.query.limit;

    if (!keyword) {
        res.status(404).write("invalid keyword");
        return;
    }

    try {
        skip = Math.max(parseInt(skip), 0)
    } catch (_) {
        console.log(e);
        skip = 0;
    }

    try {
        limit = Math.max(parseInt(limit), 0);
    } catch (_) {
        console.log(e);
        limit = 10;
    }

    let searched = search(keyword, exact, text, skip, limit);
    let result = {
        words: []
    };

    searched.forEach((str) => {
        if(str.startsWith("\"")) {
            str = str.substring(1);
        }

        if(str.endsWith("\"")) {
            str = str.substring(0, str.length - 1);
        }
        result.words.push(str);
    });

    res.write(JSON.stringify(result));

    res.end();
});

app.use(handler);
