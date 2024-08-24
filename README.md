# My own Maltese Dictionary

## 1. What?

### prototype:

[https://drive.google.com/file/d/1lzt1vLo-Tpydc6Ukc_XQ2dWlwgqeoTVL/view](https://drive.google.com/file/d/1lzt1vLo-Tpydc6Ukc_XQ2dWlwgqeoTVL/view)

## 2. Why?
Well there are some maltese dictionaries around, but they are not very useful/reliable

1. Google Translate:
    1. No extensive information/context about forms of a word, usage, etc. There are 450(ish) forms for a verb, and to get all of them, one must search them one by one.
    2. One may not get their desierable words as Google Translate always gives same words for same inputs over time.
<br />
<br />

2. Ġabra
    1. The algorithm is not super reliable. Instead of sorting the search results by similarity, it sorts the result solely based on how early they found it, which would be bad. For example, if I want to search paper, the actual word karta would appear somewhere below, as it's not in the first several words that appeared.
<br />
<br />

3. Glosbe
    1. This dictionary cannot search a word from other forms of a verb. For example, ngħid, naħseb, taħseb, etc, wouldn't work.
<br />
<br />

4. Linguee
    1. I tried it, and it can't find karta.
<br />
<br />

5. Wiktionary
    1. pretty much as same as Linguee
<br />
<br />

Basically, they don't work very well ~~, so I've had enough and decided to build one myself~~.

## 3. How?

0. ~~Built with nodejs, express, sveltekit, and rust on Arch Linux (btw)~~

1. Imagine the database as a big google drive, and we have two folders in it: Tokens and word.Tokens contains all the words that a user might search, including 450 forms of a verb, english meanings, etc. Every token would also contain a name for a document for a word.
Words contains documents for words, and one document would contain all the information for a word, including examples. Every document has a unique name.

2. Now when searching, the algorithm would search through the entire tokens folder to find (potentially) corresponding tokens. Then from these tokens, we can get the target words.

3. The algorithm for similarity is called [Levenshtein Distance](https://en.wikipedia.org/wiki/Levenshtein_distance), and results are **sorted** based on the distance, which, as an entire process, has a runtime of O(N). a.k.a. if the amount of tokens doubles, the time cost for searching doubles.

## 4. How to add words to the database?

#### Clone this github repo: https://github.com/BL-CZY/malti_db, and there would specifications

## 5. WIPs
1. Adapt minor UI changes to different browsers
2. Speed up the algorithm by storing the results, so that it doesn't have to search again.
