'use strict';

function amount_even(collection) {
  return collection.filter(function (ele) {
    return ele%2==0?true:false;
  }).reduce(function (sum,newElem) {
    return sum+newElem;
  })
}

module.exports = amount_even;
