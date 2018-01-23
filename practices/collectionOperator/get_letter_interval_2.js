'use strict';

function get_letter_interval_2(number_a, number_b) {
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
    if(i>26){
      numArray.push(changeToString((i-1)/26-1)+changeToString((i-1)%26));
    }
    else{
      numArray.push(changeToString(i-1));
    }
  }
  if(need_turn){
    numArray.reverse();
  }
  return numArray;
}
function changeToString(asciiNum) {
  return String.fromCharCode(asciiNum+97);
}

module.exports = get_letter_interval_2;

