const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    ' ': ' ',
};

function decode(expr) {
    let chunkSize = expr.length/10
    let arr = []


    for(let i=0, o=0; i < chunkSize; i++, o += 10) {
        arr.push(expr.substr(o, 10)) 
    }
    
    return arr.map((item) => {
        let str = ''
        for(let i=0; i < item.length; i+= 2) {
            if(item.charAt(i) === '1') {
                str += item.charAt(i+1) === '1' ? '-' : '.'
            }
            if(item.charAt(i) === '*') {
                return ' '
            }
        }
        return str
    }).reduce((acc, curVal) => acc + MORSE_TABLE[curVal], '')
}

module.exports = {
    decode
}