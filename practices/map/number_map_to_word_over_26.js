'use strict';
var number_map_to_word_over_26 = function(collection){
  return collection.map(function (ele) {
    if(ele>26){
      return 'a'+String.fromCharCode(97+ele-26-1);
    }
    else return String.fromCharCode(ele+97-1);
  });
};

module.exports = number_map_to_word_over_26;
