'use strict';

function compute_median(collection) {
  collection.sort(function (a,b) {
    return a>b?-1:1;
  });
  return collection.length%2==0?(collection[collection.length/2]+collection[collection.length/2-1])/2
    :collection[(collection.length-1)/2];
}

module.exports = compute_median;


