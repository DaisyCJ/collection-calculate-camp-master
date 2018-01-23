'use strict';
var calculate_average = function(collection){
  var sum=0;
  var arr=[];
  for (var i=1;i<collection.length;i=i+2){
    sum+=collection[i];
    arr.push(collection[i]);
  }
  return sum/arr.length;
};
module.exports = calculate_average;
