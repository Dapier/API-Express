const express = require("express");
const path = require("path");
const serverless = require("serverless-http")

const complements = [
    "You like nice today",
    "That dress looks nice on you",
    "Have you been working out?",
    "You can do hard things",
    "You're amazing",
    "Thats a new shirt? because you looks nice",
    "I'm really proud of you",
    "You are pretty"
];

//Motivation
const motivations = [
    "As soon as you trust yourself, you will know how to live.",
    "You cannot be lonely if you like the person you're alone with.",
    "Act as if what you do makes a difference. It does.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "Never bend your head. Always hold it high. Look the world straight in the eye.",
    "Believe you can and you're halfway there.",
    "You can do it . I believe in you!"
]


//  make random component with Math.random
function getRandomComplement() {
    const randomIndex = Math.floor(Math.random() * complements.length);
    return complements[randomIndex];
}

function getRandomMotivation() {
    const randomIndex = Math.floor(Math.random() * motivations.length)
    return motivations[randomIndex]
}

const app = express();

const router = express.Router();
router.get("/", function(req, res){
    res .json({
        complement: getRandomComplement(),
        motivation: getRandomMotivation()
    })
    
    .end();
});

router.get("/complement", function (req, res) {
    res
        .json({
            complement: getRandomComplement()
        })
        .end();
});

router.get("/motivation", function (req2, res2) {
    res2
        .json({
            motivation: getRandomMotivation()
        })
        .end();
})


app.use('/.netlify/functions/api' ,router);


module.exports.handler = serverless(app)

// app.listen(3000);
// console.log("listening on http://localhost:3000");