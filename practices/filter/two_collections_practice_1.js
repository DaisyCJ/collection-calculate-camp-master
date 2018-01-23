'use strict';

function choose_common_elements(collection_a, collection_b) {
  return collection_a.filter(function (ele) {
    return collection_b.indexOf(ele)<0?false:true;
  })
}

module.exports = choose_common_elements;
