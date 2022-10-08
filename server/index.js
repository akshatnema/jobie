const express = require("express");
const needle = require('needle');
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const Tweet = require("./models/schema");
const User = require("./models/userSchema");

dotenv.config();

const app = express();
let port = process.env.PORT || 8000;
const BEARER_TOKEN = process.env.TWITTER_BEARER_TOKEN;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const streamURL =
  'https://api.twitter.com/2/tweets/search/stream?tweet.fields=created_at&expansions=author_id&user.fields=created_at'
  ;

const streamTweets = async () => {

  const stream = needle.get(streamURL, {
    headers: {
      "User-Agent": "v2FilterStreamJS",
      "Authorization": `Bearer ${BEARER_TOKEN}`
    },
    timeout: 20000
  });

  stream.on('data', data => {
    try {
      const json = JSON.parse(data);
      console.log(json);
      if (json.includes.users.length === 1) {
        const dataFormatted = json.data.text;
        const dateCreated = json.data.created_at;
        const tweetID = json.data.id;
        const tweetedBy = json.includes.users[0].username;

        const toAdd = {
          text: dataFormatted,
          creatorUsername: tweetedBy,
          tweetId: tweetID,
          date: dateCreated,
          mail: false,
        };
        const newTweet = new Tweet(toAdd);
        newTweet
          .save()
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }
      // A successful connection resets retry count.
      retryAttempt = 0;
    } catch (e) {
      if (data.detail === "This stream is currently at the maximum allowed connection limit.") {
        console.log(data.detail)
        process.exit(1)
      } else {
        // Keep alive signal received. Do nothing.
      }
    }
  }).on('err', error => {
    if (error.code !== 'ECONNRESET') {
      console.log(error.code);
      process.exit(1);
    } else {
      setTimeout(() => {
        console.warn("A connection error occurred. Reconnecting...")
        streamConnect(++retryAttempt);
      }, 2 ** retryAttempt)
    }
  });

  return stream;

};


app.get("/", async function (req, res) {
  const arrayOfEntries = await Tweet.find({});
  let response = {
    body: arrayOfEntries,
  };
  res.send(response);
});

app.post("/mail", async function (req, res) {
  const { name, email } = req.body;
  const userAdded = await User.findOne({ email: email });
  if (userAdded) {
    //check existing user
    res.status(400).send({ message: "User already exists" });
  } else {
    const toAdd = {
      name: name,
      email: email,
    };
    const newUser = new User(toAdd);
    await newUser
      .save()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    res.status(200).send({ message: "User added" });
  }
});

app.listen(port, async () => {
  console.log("Listening in port " + port);
  await mongoose
    .connect(process.env.ATLAS_URI)
    .then((res) => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log(err);
    });
  try {
    await streamTweets();

  } catch (e) {
    console.log(e);
  }
});
