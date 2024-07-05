#![deny(clippy::all)]

use std::cmp::min;
pub mod db;
pub mod structs;

#[macro_use]
extern crate napi_derive;

#[napi]
pub fn sum(a: i32, b: i32) -> i32 {
    a + b
}

macro_rules! tail {
    ($str: ident) => {
        $str.chars().skip(1).collect::<String>().as_str()
    };
}

pub fn edit_distance(a: &str, b: &str) -> u32 {
    // Levenshtein distance
    if a.is_empty() {
        return b.len() as u32;
    } else if b.is_empty() {
        return a.len() as u32;
    } else if a.chars().nth(0).unwrap() == b.chars().nth(0).unwrap() {
        edit_distance(
            a.chars().skip(1).collect::<String>().as_str(),
            b.chars().skip(1).collect::<String>().as_str(),
        )
    } else {
        return 1 + min(
            edit_distance(tail!(a), b),
            min(
                edit_distance(a, tail!(b)),
                edit_distance(tail!(a), tail!(b)),
            ),
        );
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn levdistance() {
        assert_eq!(edit_distance("book", "back"), 2);
        assert_eq!(edit_distance("back", "book"), 2);
        assert_eq!(edit_distance("book", "backend"), 5);
        assert_eq!(edit_distance("backend", "book"), 5);
        assert_eq!(edit_distance("għandna", "gand"), 3);
        assert_eq!(edit_distance("a", "b"), 1);
    }
}
