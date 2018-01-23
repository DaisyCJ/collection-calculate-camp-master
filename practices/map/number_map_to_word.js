'use strict';
var number_map_to_word = function(collection){
  var start='a';
  return collection.map(function (ele) {
    return String.fromCharCode(start.charCodeAt()+ele-1);
  });
};

module.exports = number_map_to_word;
