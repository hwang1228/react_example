"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var john = new Set(["사과", "포도", "배"]);
var susan = new Set(["파인애플", "키위", "배"]);
//합집합
var union = new Set([].concat(_toConsumableArray(john.values()), _toConsumableArray(susan.values())));
console.log(union);
//교집합
var intersection = new Set([].concat(_toConsumableArray(john.values())).filter(function (e) {
  return susan.has(e);
}));
console.log(intersection);
//차집합
var diff = new Set([].concat(_toConsumableArray(john.values())).filter(function (e) {
  return !susan.has(e);
}));
console.log(diff);