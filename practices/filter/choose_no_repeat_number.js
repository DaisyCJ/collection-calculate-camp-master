'use strict';

function choose_no_repeat_number(collection) {
  return collection.filter(function (ele,index) {
    return collection.indexOf(ele)==index;
  })
}

module.exports = choose_no_repeat_number;
