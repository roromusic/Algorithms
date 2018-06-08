const Trie = require('./Trie');

const trie = new Trie();

test('search for non-valid substring and non-existing word', () => {
    expect(trie.search('apple')).toEqual(false);
});

test('search for non-existing substring', () => {
    expect(trie.startsWith('a')).toEqual(false);
});

test('search for existing word', () => {
    trie.insert('apple');
    expect(trie.search('apple')).toEqual(true);
});

test('search for valid substring but non-existing word', () => {
    expect(trie.search('app')).toEqual(false);
});

test('search for existing substring', () => {
    expect(trie.startsWith('app')).toEqual(true);
});

test('search for existing word that is also a substring', () => {
    trie.insert('app');
    expect(trie.search('app')).toEqual(true);
});