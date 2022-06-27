const cors = require('cors');
const express = require('express');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var currentPiValue;
var defaultDigitWithDot = 3;
var currentDigitWithDot = defaultDigitWithDot;
var currentCircumferenceValue;

const DIAMETER = 1392530;


var nValue = 0;
var firstMultiplicandFractions = [];
var allThreeMultiplicands = [];
var kValue = -1;
var currentPiValue2;
var currentCircumferenceValue2;


app.get('/', function (req, res) {
    currentDigitWithDot = 3;
    nValue = 0;
    firstMultiplicandFractions = [];
    kValue = -1;
    allThreeMultiplicands = [];
})


app.post('/pi-value-v1', (req, res) => {

    let i = 1n;
    let x = 3n * (10n ** 1020n);
    let pi = x;
    while (x > 0) {
        x = x * i / ((i + 1n) * 4n);
        pi += x / (i + 2n);
        i += 2n;
    }

    var bigNumPiValue = (pi / (10n ** 20n)).toString();
    var realPiValue = bigNumPiValue.substring(0, 1) + '.' + bigNumPiValue.substring(1, bigNumPiValue.length)

    currentPiValue = realPiValue.slice(0, currentDigitWithDot)
    currentCircumferenceValue = currentPiValue * DIAMETER
    res.send({ piValue: currentPiValue, circumferenceValue: currentCircumferenceValue })
    currentDigitWithDot++;

})


app.post('/pi-value-v2', (req, res) => {
    if (nValue === 0) {
        firstMultiplicandFractions.push((2 + (nValue - 1)) / (2 + nValue))
    } else if (nValue === 1) {
        firstMultiplicandFractions.push((2 + nValue) / (2 + (nValue + 1)))
    } else {
        firstMultiplicandFractions.push((2 + nValue + kValue) / (2 + nValue + (kValue + 1)))
    }

    const calcMulti = (arr) => {
        let completeVal = 1;
        arr.forEach(num => {
            completeVal *= num;
        });
        return completeVal;
    }

    allThreeMultiplicands.push((3 * (calcMulti(firstMultiplicandFractions)) * (1 / (1 + ((nValue + 1) * 2))) * (1 / (4 ** (nValue + 1)))));

    const calcMulti2 = (arr) => {
        let completeVal2 = 0;
        arr.forEach(num => {
            completeVal2 += num;
        });
        return completeVal2;
    }

    currentPiValue2 = (3 + calcMulti2(allThreeMultiplicands))
    currentCircumferenceValue2 = currentPiValue2 * DIAMETER
    res.send({ piValue: currentPiValue2, circumferenceValue: currentCircumferenceValue2 })
    nValue++;
    kValue++;
})


app.listen(port, () => {
    console.log('Server is now running at', port);
})