'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  return collection_a.filter(function (ele) {
    return collection_b.indexOf(ele)<0?true:false;
  })
}

module.exports = choose_no_common_elements;
