let funnyWords = require('funny-words');
let randomWords = require('random-words');
let oneLinerJoke = require('one-liner-joke');

let getRandomJoke = oneLinerJoke.getRandomJoke();

const getFunnyWords = (fGetJoke) => {
    return funnyWords(fGetJoke);
}

const fGetJoke = (getRandomJoke) => {
    return getRandomJoke.body
}

const drunkardTellsJoke = () => {
    let rWords = randomWords(5);
    let w = rWords.join(' hic! ');
    return `${getFunnyWords(fGetJoke(getRandomJoke))} and I have to say ${w} !!`;
}

console.log(drunkardTellsJoke());


