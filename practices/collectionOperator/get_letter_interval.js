'use strict';

function get_letter_interval(number_a, number_b) {
  var numArray=[];
  var begin_num,end_num;
  var need_turn=false;
  if(number_a<number_b){
    begin_num=number_a;
    end_num=number_b;
  }
  else {
    begin_num=number_b;
    end_num=number_a;
    need_turn=true;
  }
  for(var i=begin_num;i<=end_num;i++){
    var number='a';
    numArray.push(String.fromCharCode(number.charCodeAt()+i-1));
  }
  if(need_turn){
    numArray.reverse();
  }
  return numArray;
}

module.exports = get_letter_interval;
