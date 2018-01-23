'use strict';
var calculate_median = function(collection){
  var arr=collection.filter(function (ele) {
    return ele%2==0?true:false;
  });
  return arr.length%2==0?(arr[arr.length/2]+arr[arr.length/2-1])/2
    :arr[(arr.length-1)/2];
};
module.exports = calculate_median;
