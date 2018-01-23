'use strict';

function hybrid_operation_to_uneven(collection) {
  return collection.filter(function (ele) {
    return ele%2==0?false:true;
  }).map(function (e) {
    return e*3+2;
  });
}

module.exports = hybrid_operation_to_uneven;

