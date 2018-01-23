'use strict';

function find_last_even(collection) {
  return collection.reverse().find(function (ele) {
    return ele%2==0;
  })
}

module.exports = find_last_even;
