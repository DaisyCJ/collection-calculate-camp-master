'use strict';

function spilt_to_zero(number, interval) {
  var result=[];
  var i=number;
  result.push(i);
  do{
    i=Number((i-interval).toFixed(1));
    result.push(i);
  }while(i>0)
  return result;
}

module.exports = spilt_to_zero;
