// import { MongoClient } from "mongodb";

const express = require('express');
// const mongoose = require('mongoose');
const cors = require('cors');
const articleRoutes = require('./routes/travelGuideRoutes');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/nomadic-pen', articleRoutes);

app.listen(3001, () => {
    console.log('Server is running on http://localhost:3001');
});
