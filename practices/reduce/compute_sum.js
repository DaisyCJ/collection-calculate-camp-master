'use strict';

function calculate_elements_sum(collection) {
  return collection.reduce(function (sum,ele) {
    sum+=ele;
    return sum;
  })
}

module.exports = calculate_elements_sum;

