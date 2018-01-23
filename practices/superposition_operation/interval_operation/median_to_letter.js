'use strict';

function median_to_letter(collection) {
  var num=collection.length%2==0?
    parseInt((collection[collection.length/2]+collection[collection.length/2-1])/2)
    :collection[collection.length/2];
  return String.fromCharCode(num/26+97-1)+String.fromCharCode(num%26+97);
}

module.exports = median_to_letter;
