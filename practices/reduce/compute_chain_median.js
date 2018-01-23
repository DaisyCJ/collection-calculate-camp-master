'use strict';

function compute_chain_median(collection) {
  var arr=collection.split('->');
  arr=arr.map(function (ele) {
    return parseInt(ele);
  });
  arr.sort(function (a,b) {
    return a>b?-1:1;
  });
  return arr.length%2==0?(arr[arr.length/2]+arr[arr.length/2-1])/2:arr[arr.length/2];
}

module.exports = compute_chain_median;
