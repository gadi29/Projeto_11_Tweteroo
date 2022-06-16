import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());

const users = [
  {
    username: 'bobesponja', 
    avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info" 
  }
];

const tweets = [
  {
    username: "bobesponja",
    tweet: "eu amo o hub",
  }
];

const getTweets = [
  {
    username: "bobesponja",
		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
	  tweet: "eu amo o hub"
  }
]

app.post('/sign-up', (req, res) => {
  users.push(req.body);
  res.send("OK");
});

app.post('/tweets', (req, res) => {
  tweets.push(req.body);

  const user = users.find(user => user.username === req.body.username);
  getTweets.push({...user, tweet: req.body.tweet});

  res.send("OK");
});

app.get('/tweets', (req, res) => {
  if (tweets.length > 10) res.send((getTweets.slice(-10)).reverse());
  else res.send(getTweets.reverse());
});

app.listen(5000);