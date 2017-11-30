function BST(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
BST.prototype.insert = function (value) {
    var newBst = new BST(value);
    if (value <= this.value) {
        if (!this.left) this.left = newBst;
        else this.left.insert(value);
    }
    else {
        if (!this.right) this.right = newBst;
        else this.right.insert(value);
    }
}
BST.prototype.contains = function (value) {
    if(value === this.value)return true;
    else if(value<this.value){
        if(!this.left)return false;
        else return this.left.contains(value);
    }
    else if(value>this.value){
        if(!this.right)return false;
        else return this.right.contains(value);
    }
};
var bst = new BST(50);
bst.insert(45);
bst.insert(35);
bst.insert(25);
bst.insert(115);
bst.insert(50);
console.log(bst.contains(25));