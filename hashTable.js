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
    return key.split('').reduce(function(a,b){return a + b.charCodeAt(0);},0)%this.numBuckets;
};

var myHT = new HashTable(30);
console.log(myHT.hash('Becca'));
//console.log(myHT);