'use strict';

function average_uneven(collection) {
  var arr=collection.filter(function (ele) {
    return ele%2==0?false:true;
  });
  return parseInt(arr.reduce(function (sum,elem) {
    return sum+elem;
  })/arr.length);
}

module.exports = average_uneven;
