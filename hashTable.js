function HashTable(size) {
    this.buckets = Array(size);
    this.numBuckets = this.buckets.length;
}

function HashNode(key, value, next) {
    this.key = key;
    this.value = value;
    this.next = next || null;
}

HashTable.prototype.hash = function (key) {
    return key.split('').reduce(function (a, b) { return a + b.charCodeAt(0); }, 0) % this.numBuckets;
};

HashTable.prototype.insert = function (key, value) {
    var index = this.hash(key);
    if (!this.buckets[index]) this.buckets[index] = new HashNode(key, value);
    else {
        var currentNode = this.buckets[index];
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = new HashNode(key, value);
    }
};

var myHT = new HashTable(30);
myHT.insert('Dean','dean@gmail.com');
myHT.insert('Megan','megan@gmail.com');
myHT.insert('Dane','dane@yahoo.com');
console.log(myHT.buckets);