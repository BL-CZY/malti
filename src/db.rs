use mongodb::{
    bson::{doc, Document},
    sync::{Client, Collection},
};

const URI: &str = "mongodb://localhost:27017";
