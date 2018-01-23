'use strict';

function choose_multiples_of_three(collection) {
  return collection.filter(function (ele) {
    return ele%3==0;
  })
}

module.exports = choose_multiples_of_three;
