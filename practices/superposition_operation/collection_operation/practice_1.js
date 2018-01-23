'use strict';

function hybrid_operation(collection) {
  return collection.map(function (ele) {
    return ele*3+2;
  }).reduce(function (sum,newElem) {
    return sum+newElem;
  })
}

module.exports = hybrid_operation;

