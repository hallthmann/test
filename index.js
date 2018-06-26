'use strict';

var uuid = require('node-uuid');

var obj = {};
var arr = [];
var Struct = function (name, age) {
    this.name = name;
    this.age  = age;
}

for (var x = 0; x < 2; x++) {
    var id = uuid.v4();
    console.log('uuid= ', id);
    arr.push(id);
    obj[id] = new Struct('nane_' + id, x);
}

console.log('arr= ');
console.log(arr);
console.log('1 obj= ');
console.log(obj);

delete obj[arr[0]];

console.log('2 obj= ');
console.log(obj);
