const express = require('express');
const app = express();

const port = 3000;

const args = process.argv.slice(2);

const intervalFlagIdx = args.indexOf('-i');
const timeoutFlagIdx = args.indexOf('-t');

let intervalVal = args[intervalFlagIdx + 1];
let timeoutVal = args[timeoutFlagIdx + 1];

function parseDate(date) {
    return (
        date.getUTCDate() +
        "." +
        (date.getUTCMonth() + 1) +
        "." +
        date.getUTCFullYear() +
        ", " +
        date.getUTCHours() +
        ":" +
        date.getUTCMinutes() +
        ":" +
        date.getUTCSeconds()
    );
}

app.get('/', (req, res) => {
    const timer = setInterval(() => {
        console.log(parseDate(new Date()));
    }, intervalVal);

    setTimeout(() => {
        clearInterval(timer);
        return res.send(parseDate(new Date()));
    }, timeoutVal)
})

app.listen(port, () => {
    if (intervalFlagIdx === -1 || isNaN(intervalVal)) {
        intervalVal = 500;
    }
    if (timeoutFlagIdx === -1 || isNaN(timeoutVal)) {
        timeoutVal = 5000;
    }
    console.log(`Server is listening on ${port}`);
})

