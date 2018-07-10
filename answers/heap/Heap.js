var Heap = function(comparator = (a, b) => a - b){
    this.data = [];
    this.comparator = comparator;
    this.size = 0;
}

Heap.prototype.bubbleUp = function(child){
    const parent = Math.floor((child - 1) / 2);
    if(this.comparator(this.data[parent], this.data[child]) > 0){
        [this.data[parent], this.data[child]] = [this.data[child], this.data[parent]];

        if(parent > 0) this.bubbleUp(parent);
    }
}

Heap.prototype.bubbleDown = function(parent){
    const leftNode = (2 * parent) + 1;
    const rightNode = (2 * parent) + 2;

    let swapPosition;
    if(this.data[rightNode] === undefined){
        swapPosition = leftNode;
    }else {
        swapPosition = this.comparator(this.data[leftNode], this.data[rightNode]) > 0 ? rightNode : leftNode;
    }

    if(this.comparator(this.data[parent], this.data[swapPosition]) > 0){
        [this.data[parent], this.data[swapPosition]] = [this.data[swapPosition], this.data[parent]];

        if((2 * swapPosition) + 1 < this.data.length) this.bubbleDown(swapPosition);
    }
}

Heap.prototype.add = function(val){
    this.data.push(val);
    if(this.data.length > 1) this.bubbleUp(this.data.length - 1);

    return ++this.size;
}

Heap.prototype.poll = function(){
    if(this.size > 0) this.size--;
    if(this.data.length <= 1) return this.data.pop();

    let returnValue;
    [this.data[0], this.data[this.data.length -1]] = [this.data[this.data.length - 1], this.data[0]];
    returnValue = this.data.pop();
    if(this.data.length > 1) this.bubbleDown(0);

    return returnValue;
}

module.exports = Heap;