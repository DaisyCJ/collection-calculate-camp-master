'use strict';

function find_first_even(collection) {
  return collection.find(function (ele) {
    return ele%2==0;
  })
}

module.exports = find_first_even;

