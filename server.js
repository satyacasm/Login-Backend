const express=require('express');
const mongoose=require('mongoose');
const path=require('path');
const bodyParser=require('body-parser');
const fs=require('fs');
const app=express();
const cors=require('cors');
app.use(express.json());
app.use(cors());

require('dotenv').config()
app.use(bodyParser.urlencoded({ extended: true }));


const dbURI = process.env.DB_URI;
const port = process.env.PORT || 3001;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then((res)=>console.log("Connected to MongoDB database"))
.catch((err)=>console.log("Error in connection to MongoDB"))


const adminAuthRoutes = require('./routes/adminAuth');
const clientAuthRoutes = require('./routes/clientAuth');

app.use('/admin',adminAuthRoutes);
app.use('/client',clientAuthRoutes);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    }
);
