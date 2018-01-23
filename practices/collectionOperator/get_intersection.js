'use strict';

function get_intersection(collection_a, collection_b) {
  var result_arr=collection_b.filter(function (ele) {
    return collection_a.indexOf(ele)+1;
    }
  );
  return result_arr;
}

module.exports = get_intersection;
