require("dotenv").config({ path: __dirname + "/.env" });
const CronJob = require("cron").CronJob;
const { twitterClient } = require("./twitterClient.js")
let number = 0

const tweet = async () => {
    number += 1
  try {
    await twitterClient.v2.tweet(`Hello world! ${number}`);
  } catch (e) {
    console.log(e)
  }
}

const cronTweet = new CronJob("30 * * * * *", async () => {
    tweet();
  });
  
  cronTweet.start();
