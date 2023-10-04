const TEN: number = 10;
const ONE_HUNDRED: number = 100;
const ONE_THOUSAND: number = 1000;
const ONE_MILLION: number = 1000000;
const ONE_BILLION: number = 1000000000;
const ONE_TRILLION: number = 1000000000000;
const ONE_QUADRILLION: number = 1000000000000000;
const MAX: number = 9007199254740992;

const LESS_THAN_TWENTY: string[] = [
    'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
];

const TENTHS_LESS_THAN_HUNDRED: string[] = [
    'zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
];

function toWords(number: number | string, asOrdinal?: boolean): string {
    let words: string;
    const num: number = parseInt(String(number), 10);

    if (!Number.isFinite(num)) {
        throw new TypeError(
            `Not a finite number: ${number} (${typeof number})`
        );
    }
    if (!Number.isSafeInteger(num)) {
        throw new RangeError(
            'Input is not a safe number, it’s either too large or too small.'
        );
    }
    words = generateWords(num);
    return words;
}

function generateWords(number: number, words?: string[]): string {
    let remainder: number = 0,
        word: string = '';

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

    words.push(word)
    return generateWords(remainder, words)
}

export default toWords;