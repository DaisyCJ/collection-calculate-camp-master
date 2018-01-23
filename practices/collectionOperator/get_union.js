'use strict';

function get_union(collection_a, collection_b) {
  collection_b.forEach(function (ele) {
    if(collection_a.indexOf(ele)<0){
      collection_a.push(ele);
    }
  })
  return collection_a;
}

module.exports = get_union;

