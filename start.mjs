import { TwitterApi } from 'twitter-api-v2';
import * as fs from 'fs'
import { randomInt } from 'crypto';
//Instantiate quote and image variables
const quotes = ['Currently having trouble exiting vim :qwkjhklrkjewhrlkwh', 
    'Unblock pls @VMo917', 
    'MorrisBot 2024!',
    'Shoutout to my fav students! Antonio, Michael, Luke, Chris, Liam, Cash and Patrick!',
    'Follow for follow? @VMo917',
    'Over 1 Tweet and counting! @VMo917',
    'The Verndog',
    'Hello 👋 @VMo917',
    'Eliam Hernandez is killing me!',
    'Help Make Gambling Legal In NY! I hate driving to New Jersey',
    "I'm Still waiting for that follow back @VMo917",
    "Stop using Internet Explorer, Jayden",
    "Guys, please stop talking. You need to know this stuff.",
];
const images = fs.readdirSync('./images');
// Instantiate with desired auth type (here's Bearer v2 auth)
const twitterClient = new TwitterApi({ 
    appKey: '<YOUR APP KEY>', 
    appSecret: '<YOUR APP SECRET>', 
    accessToken: '<YOUR ACCESS TOKEN>',  
    accessSecret: '<YOUR ACCESS SECRET>'
});
const rwClient = twitterClient.readWrite;
async function doStuff() {
    const randomImage = images[randomInt(images.length)];
    const randomQuote = quotes[randomInt(quotes.length)];
    console.log("image and quote: " + randomImage + " and " + randomQuote)
    const mediaId = await rwClient.v1.uploadMedia("./images/" + randomImage);
    await rwClient.v2.tweet({
        text: randomQuote,
        media: { media_ids: [mediaId] }
    });
}
doStuff()
setInterval(doStuff, 3600000)//Tweet every hour
