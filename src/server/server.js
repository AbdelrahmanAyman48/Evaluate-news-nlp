const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
// const aylien = require('aylien_textapi');
const axios = require('axios');
// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('dist'));

// // Instantiate the Aylien API client
// const textapi = new aylien({
//     // application_id: process.env.API_ID, // Uncomment if you have an API_ID
//     application_key: process.env.API_KEY,
// });

// Home route
console.log('Serving index.html from:', path.resolve('dist/index.html'));

app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'));
});

// POST route for NLP
// app.post('/analyze', (req, res) => {
//     const { text } = req.body;

//     if (!text) {
//         return res.status(400).send({ error: "Text is required for analysis" });
//     }

//     // Use Aylien's sentiment analysis API
//     textapi.sentiment({ text }, (error, response) => {
//         if (error) {
//             console.error("Aylien API Error:", error);
//             return res.status(500).send({ error: "Failed to analyze text" });
//         }

//         res.send(response);
//     });
// });
// POST route for NLP
app.post('/analyze', (req, res) => {
    const { text } = req.body;

    if (!text) {
        return res.status(400).send({ error: "Text is required for analysis" });
    }

    // MeaningCloud Sentiment Analysis API request
    const apiUrl = 'https://api.meaningcloud.com/sentiment-2.1';
    const params = {
        key: process.env.API_KEY,
        // key: '6c6d882d33f7d4a6d037b31223115876',
        txt: text,
        lang: 'en' // You can change the language as needed
    };

    // Make the request to the MeaningCloud API
    axios.post(apiUrl, null, { params })
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            console.error("MeaningCloud API Error:", error);
            res.status(500).send({ error: "Failed to analyze text" });
        });
});
// Start the server
const PORT = 8000;
app.listen(PORT, function () {
    console.log(`Server running on http://localhost:${PORT}`);
});
