'use strict';

function even_to_letter(collection) {
  return collection.filter((e)=>e%2==0?true:false)
  .map(function (ele) {
    return String.fromCharCode(ele+97-1);
  });
}

module.exports = even_to_letter;
