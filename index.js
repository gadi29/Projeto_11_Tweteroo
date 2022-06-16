import express from "express";

const app = express();

const users = [];
const tweets = [];

app.post('/sign-up', (req, res) => {
  users.push(req.body);
  res.send("OK");
});

app.post('/tweets', (req, res) => {
  tweets.push(req.body);
  res.send("OK");
});

app.get('/tweets', (req, res) => {
  if (tweets.length > 10) res.send(tweets.slice(-10));
  else res.send(tweets);
});

app.listen(5000);