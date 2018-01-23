'use strict';
var even_asc_odd_desc = function(collection){
  var jiArr=collection.filter(function (ele) {
    return ele%2==0?false:true;
  }).sort(function (a,b) {
    return a>b?-1:1;
  });
  var  ouArr=collection.filter(function (ele) {
    return ele%2==0?true:false;
  }).sort(function (a,b) {
    return a>b?1:-1;
  });
  return ouArr.concat(jiArr);
};
module.exports = even_asc_odd_desc;
