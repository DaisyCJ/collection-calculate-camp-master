'use strict';

function average_to_letter(collection) {
  var eleSum=collection.reduce(function (sum,ele) {
    sum+=ele;
    return sum;
    });
  var  avg=parseInt(eleSum/collection.length);
  return String.fromCharCode(avg+97);
}

module.exports = average_to_letter;

