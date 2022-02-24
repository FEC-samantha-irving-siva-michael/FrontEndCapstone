/* eslint-disable no-undef */
const express = require('express');
const morgan = require('morgan');
const path = require('path');
//const questions = require('./apiHelpers/qandaAPI.js');
const app = express();
const port = process.env.PORT || 3003;
const cors = require('cors');
const s3 = require('./s3');
const fetch = require('node-fetch');
const GITAPIKEY = process.env.GITAPIKEY;
const API_URL = process.env.API_URL;
const axios = require('axios');

app.use(morgan('dev'));
app.use(cors());
app.use(express.static(path.join(__dirname, '../client/dist')));



app.use('/api/*', async (req, res) => {

  try{
    const payload = await axios({
      method: req.method.toLowerCase(),
      url: API_URL + req.originalUrl.slice(4),
      headers: { Authorization: GITAPIKEY },
      data: req.body
    });
    res.send(payload.data);

  } catch(err) {
    res.send(err);
  }


});

app.get('/s3Url', (req, res) => {
  s3().then(url => {
    res.status(200).send(url)
  });
});
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
