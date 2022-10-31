require('dotenv').config();
const express = require('express');
const moment = require('moment-timezone');
const session = require('express-session');
const cors = require('cors');

const { join } = require('path');
const fs = require('fs').promises;

const app = express();

app.set('view engine', 'ejs');

const corsOptions = {
    credentials: true,
    origin: function (origin, callback) {
        console.log({ origin });
        callback(null, true);
    }
}


app.use(cors(corsOptions));


// use是全域使用，會自動判定型別   extended: false  'String'或'Array'形式，
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.get('/',(req,res)=>{
    res.send('837');
})


const port =process.env.SERVER_PORT;
app.listen(port, () => {
    console.log(`server is running in port ${port}`);
  })