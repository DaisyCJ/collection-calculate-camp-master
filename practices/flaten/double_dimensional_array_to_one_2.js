'use strict';

function double_to_one(collection) {
  var result=[];
  for (var i=0;i<collection.length;i++){
    result=result.concat(collection[i]);
  }
  return result.filter(function (ele,index) {
    return result.indexOf(ele)==index?true:false;
  })
}

module.exports = double_to_one;
