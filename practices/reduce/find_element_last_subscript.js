'use strict';

function calculate_elements_sum(collection, element) {
  return collection.length-collection.reverse().indexOf(element)-1;
}

module.exports = calculate_elements_sum;
