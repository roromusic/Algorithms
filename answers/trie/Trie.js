var Trie = function() {
    this.isWord = false;
    this.letters = {};
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this;
    for(let i=0, len=word.length; i < len; i++){
        const char = word.charAt(i);
        
        if(!node.letters.hasOwnProperty(char)){
            node.letters[char] = new Trie;
        }

        node = node.letters[char];
    }
    
    node.isWord = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this;

    for(let i=0, len=word.length; i < len; i++){
        const char = word.charAt(i);

        if(!node.letters[char]) return false;
        node = node.letters[char];
    }

    return node.isWord;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node = this;

    for(let i=0, len=prefix.length; i < len; i++){
        const char = prefix.charAt(i);

        if(node.letters[char]){
            node = node.letters[char];
        }else {
            return false;
        }
    }

    return true;
};

module.exports = Trie;