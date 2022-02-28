const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
constructor(direct) {
    this.direct = direct === undefined ? true : direct;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.vigenereSquare = [
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      'BCDEFGHIJKLMNOPQRSTUVWXYZA',
      'CDEFGHIJKLMNOPQRSTUVWXYZAB',
      'DEFGHIJKLMNOPQRSTUVWXYZABC',
      'EFGHIJKLMNOPQRSTUVWXYZABCD',
      'FGHIJKLMNOPQRSTUVWXYZABCDE',
      'GHIJKLMNOPQRSTUVWXYZABCDEF',
      'HIJKLMNOPQRSTUVWXYZABCDEFG',
      'IJKLMNOPQRSTUVWXYZABCDEFGH',
      'JKLMNOPQRSTUVWXYZABCDEFGHI',
      'KLMNOPQRSTUVWXYZABCDEFGHIJ',
      'LMNOPQRSTUVWXYZABCDEFGHIJK',
      'MNOPQRSTUVWXYZABCDEFGHIJKL',
      'NOPQRSTUVWXYZABCDEFGHIJKLM',
      'OPQRSTUVWXYZABCDEFGHIJKLMN',
      'PQRSTUVWXYZABCDEFGHIJKLMNO',
      'QRSTUVWXYZABCDEFGHIJKLMNOP',
      'RSTUVWXYZABCDEFGHIJKLMNOPQ',
      'STUVWXYZABCDEFGHIJKLMNOPQR',
      'TUVWXYZABCDEFGHIJKLMNOPQRS',
      'UVWXYZABCDEFGHIJKLMNOPQRST',
      'VWXYZABCDEFGHIJKLMNOPQRSTU',
      'WXYZABCDEFGHIJKLMNOPQRSTUV',
      'XYZABCDEFGHIJKLMNOPQRSTUVW',
      'YZABCDEFGHIJKLMNOPQRSTUVWX',
      'ZABCDEFGHIJKLMNOPQRSTUVWXY'
    ];
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    
    let length = message.replace(/[\W]/g, '').length;
    let keyIndex = 0;
    let fullKey;
    if (length === key.length) {
      fullKey = key.toUpperCase();
    } else {
      fullKey = key.toUpperCase().repeat(length / key.length) + key.toUpperCase().slice(0, length % key.length);
    }
    message = message.toUpperCase();
    
    let letters = message.toUpperCase().split(' ').map(w => w.split(''));
    
    for (let i = 0; i < letters.length; i++) {
      for (let j = 0; j < letters[i].length; j++) {
        if ( this.alphabet.includes(letters[i][j]) ) {
          let rowIndex = this.alphabet.indexOf(letters[i][j]);
          let colIndex = this.alphabet.indexOf(fullKey[keyIndex]);
          keyIndex++;
          letters[i][j] = this.vigenereSquare[rowIndex][colIndex];
        }
      }           
    }
    if (!this.direct) {
      return letters.reverse().map(w => w.reverse().join('')).join(' ')
    }
    return letters.map(w => w.join('')).join(' ');
  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }
        let length = encryptedMessage.replace(/[\W]/g, '').length;
    let keyIndex = 0;
    let fullKey;
    if (length === key.length) {
      fullKey = key.toUpperCase();
    } else {
      fullKey = key.toUpperCase().repeat(length / key.length) + key.toUpperCase().slice(0, length % key.length);
    }
    encryptedMessage = encryptedMessage.toUpperCase();
    
    let letters = encryptedMessage.toUpperCase().split(' ').map(w => w.split(''));
    
    for (let i = 0; i < letters.length; i++) {
      for (let j = 0; j < letters[i].length; j++) {
        if ( this.alphabet.includes(letters[i][j]) ) {
          let rowIndex = this.alphabet.indexOf(fullKey[keyIndex]);
          let colIndex = this.vigenereSquare[rowIndex].indexOf(letters[i][j]);
          keyIndex++;
          letters[i][j] = this.alphabet[colIndex];
        }
      }           
    }
    if (!this.direct) {
      return letters.reverse().map(w => w.reverse().join('')).join(' ')
    }
    return letters.map(w => w.join('')).join(' ');
    
  }
}

module.exports = {
  VigenereCipheringMachine
};
