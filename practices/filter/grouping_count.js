'use strict';

function grouping_count(collection) {
  var element;
  return collection.reduce(function (obj,ele) {
    element=String(ele);
    element in obj?obj[element]++:obj[element]=1;
    return obj;
  },{});
}

module.exports = grouping_count;
