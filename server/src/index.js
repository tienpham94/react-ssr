import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './client/components/Home';
import renderer from './helpers/renderer';

const app = express();

app.use(express.static('public'));
app.get('/', (req, res) => {
  res.send(renderer());
});

app.listen(3000, () => {
  console.log('Listening on prot 3000');
});
