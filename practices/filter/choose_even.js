'use strict';

function choose_even(collection) {
  return collection.filter(function (ele) {
    return ele%2==0;
  })
}

module.exports = choose_even;
