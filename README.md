# My own Maltese Dictionary

## 1. Prototype

### prototype:

[https://drive.google.com/file/d/1lzt1vLo-Tpydc6Ukc_XQ2dWlwgqeoTVL/view](https://drive.google.com/file/d/1lzt1vLo-Tpydc6Ukc_XQ2dWlwgqeoTVL/view)

## 2. Database schema

1. Imagine the database as a big google drive, and we have two folders in it: Tokens and word.Tokens contains all the words that a user might search, including 450 forms of a verb, english meanings, etc. Every token would also contain a name for a document for a word.
Words contains documents for words, and one document would contain all the information for a word, including examples. Every document has a unique name.

2. Now when searching, the algorithm would search through the entire tokens folder to find (potentially) corresponding tokens. Then from these tokens, we can get the target words.

3. The algorithm for similarity is called [Levenshtein Distance](https://en.wikipedia.org/wiki/Levenshtein_distance), and results are **sorted** based on the distance, which, as an entire process, has a runtime of O(N). a.k.a. if the amount of tokens doubles, the time cost for searching doubles.

4. I used [Napi-rs](https://napi.rs/) to write the algorithms in rust, and this is the repo: <br />
https://github.com/BL-CZY/malti_search

## 3. How to add words to the database?

#### Clone this github repo: https://github.com/BL-CZY/malti_db, and there would specifications
