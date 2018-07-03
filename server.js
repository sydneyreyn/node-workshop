const express = require("express");
const path = require("path");

const compliments = [
    "You have amazing skin!",
    "I love your outfit today!",
    "Have you been working out?",
    "You work hard at everything you do and that's amazing!",
    "You're really cute!",
    "You're programming! How cool is that?",
    "I'm really proud of you!",
    "You made this!",
    "You've learned a lot of things, and that's pretty hard to do!"
];

function getRandomCompliment() {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    return compliments[randomIndex];
}
const insults = [
    "You look like you just rolled out of bed.",
    "That shirt is not your color.",
    "You should probably hit the gym...",
    "You're lazy.",
    "You've gotten nowhere in this course.",
    "Why are you programming? It's dumb.",
    "I'm really ashamed of you",
    "You will never amount to anything!",
    "You've learned nothing, and that's sad!"
];

function getRandomInsult() {
    const randomIndex = Math.floor(Math.random() * insults.length);
    return insults[randomIndex];
}

const app = express();


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});


app.get("/compliment", function(req, res) {
    res
        .json({
            compliment: getRandomCompliment()
        })
        .end();
});

app.get("/insult", function(req, res) {
    res
        .json({
            insult: getRandomInsult()
        })
        .end();
});

app.use("/public", express.static("./public"));

app.listen(3000);
console.log("listening on http://localhost:3000");