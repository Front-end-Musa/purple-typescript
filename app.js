"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TEN = 10;
const ONE_HUNDRED = 100;
const ONE_THOUSAND = 1000;
const ONE_MILLION = 1000000;
const ONE_BILLION = 1000000000;
const ONE_TRILLION = 1000000000000;
const ONE_QUADRILLION = 1000000000000000;
const MAX = 9007199254740992;
const LESS_THAN_TWENTY = [
    'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
];
const TENTHS_LESS_THAN_HUNDRED = [
    'zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
];
function toWords(number, asOrdinal) {
    let words;
    const num = parseInt(String(number), 10);
    if (!Number.isFinite(num)) {
        throw new TypeError(`Not a finite number: ${number} (${typeof number})`);
    }
    if (!Number.isSafeInteger(num)) {
        throw new RangeError('Input is not a safe number, it’s either too large or too small.');
    }
    words = generateWords(num);
    return words;
}
function generateWords(number, words) {
    let remainder = 0, word = '';
    if (number === 0) {
        return !words ? 'zero' : words.join(' ').replace(/,$/, '');
    }
    if (!words) {
        words = [];
    }
    if (number < 0) {
        words.push('minus');
        number = Math.abs(number);
    }
    // ... [rest of the function remains unchanged]
    words.push(word);
    return generateWords(remainder, words);
}
exports.default = toWords;
