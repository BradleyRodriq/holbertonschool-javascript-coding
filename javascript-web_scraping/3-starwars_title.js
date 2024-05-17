#!/usr/bin/node
const request = require('request');

const filmId = process.argv[2];
if (!filmId) {
  console.error('Error: No film ID provided.');
  process.exit(1);
}

const url = 'https://swapi.dev/api/films/' + filmId + '/';

request(url, function (error, response, body) {
  if (error) {
    console.error('Error:', error);
    process.exit(1);
  }
  try {
    const data = JSON.parse(body);
    console.log(data.title);
  } catch (e) {
    console.error('Error parsing JSON:', e);
  }
});
