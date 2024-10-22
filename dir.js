var fs = require('fs');
var { randomInt } = require('crypto');
var quotes = ['Currently having trouble exiting vim :qwkjhklrkjewhrlkwh', 
              'Unblock pls @VMo917', 
              'MorrisBot 2020!',
              'Shoutout to my fav students! Matt, Dylan, Isaque, Jacques, Evan, Jack and Alistair!',
              'Follow for follow? @VMo917',
              'Over 2000 Tweets and counting! @VMo917',
              'The Verndog',
              'Hello 👋 @VMo917',
              'Zach Wheeler is killing me!',
              'Help Make Gambling Legal In NY! I hate driving to New Jersey',
              "I'm Still waiting for that follow back @VMo917"]
var images = fs.readdirSync('./images');
console.log(images);
function doStuff() {
    var i = randomInt(images.length);
    console.log(images[i]);
}
setInterval(doStuff, 1000)

