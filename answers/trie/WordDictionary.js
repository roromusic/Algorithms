var WordDictionary = function() {
    this.letters = new Map();
    this.isWord = false;
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let place = this;

    for(let i=0, len=word.length; i < len; i++) {
        if(!place.letters.has(word[i])) {
            const newLetter = new WordDictionary();
            place.letters.set(word[i], newLetter);
        }
        place = place.letters.get(word[i]);
    }
    
    place.isWord = true;
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    if(word.length === 0) return this.isWord;
    const letter = word[0];
    
    if(letter === ".") {
        const stack = [];
        this.letters.forEach(value => stack.push(value));
        
        while(stack.length) {
            const dictionary = stack.pop();
            const hasWord = dictionary.search(word.slice(1));
            
            if(hasWord) return true;
        }
    }
    
    const nextDic = this.letters.get(letter);
    
    return nextDic ? nextDic.search(word.slice(1)) : false;
};