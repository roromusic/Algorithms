const cloneGraph = require('./CloneGraph');

function UndirectedGraphNode(label) {
    this.label = label;
    this.neighbors = [];   // Array of UndirectedGraphNode
}

const a = new UndirectedGraphNode('a');
const b = new UndirectedGraphNode('b');
const c = new UndirectedGraphNode('c');

a.neighbors = [b, c];
b.neighbors = [a, c];
c.neighbors = [a, b, c];

test('clone graph1', () => {
    expect(cloneGraph(a)).toEqual(a);
});