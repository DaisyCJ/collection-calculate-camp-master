'use strict';

function compute_average(collection) {
  return collection.reduce(function (sum,ele) {
    sum+=ele;
    return sum;
  })/collection.length;
}

module.exports = compute_average;

