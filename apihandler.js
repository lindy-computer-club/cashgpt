"use strict"
let app = require('./app')
const OpenAI = require('openai');
const fs = require('fs');

let key;
try {
    key = fs.readFileSync('secret', 'utf8');
} catch (err) {
    console.error(err);
}

const openai = new OpenAI({
    apiKey: key
});

var airequest = require('./backend');

async function process_request(message) {
    return airequest(openai, message);
}

module.exports = process_request;