const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  
  getLength() {
   return this.chain.length;
  },
  addLink(value) {
    this.chain.push( `( ${value} )` );
    return this;
  },
  removeLink(position) {
    if (position > this.chain.length || position < 1 
        || typeof position !== 'number' || position % 1 !== 0) {
      this.deleteChain();
      throw new Error('You can\'t remove incorrect link!');
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let finishedChain = this.chain.join('~~');
    this.deleteChain();
    return finishedChain;
  },
  deleteChain() {
    this.chain.length = 0;
  }
};

module.exports = {
  chainMaker
};
