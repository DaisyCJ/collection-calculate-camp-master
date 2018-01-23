'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  return collection_a.filter(function (ele) {
    var  isExist=false;
    collection_b.forEach(function (element) {
      if(ele%element==0){
        isExist=true;
      }
    });
    return isExist;
  })
}

module.exports = choose_divisible_integer;
