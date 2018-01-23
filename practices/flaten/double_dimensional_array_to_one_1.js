'use strict';

function double_to_one(collection) {
  var result=[];
  for(var i =0;i<collection.length;i++){
    result=result.concat(collection[i]);
  }
  return result;
}

module.exports = double_to_one;
