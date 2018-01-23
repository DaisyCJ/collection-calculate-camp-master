'use strict';
var is_exist_element = function(collection,element){
  var arr=collection.filter(function (ele,index) {
    index%2==0?true:false;
  });
  if(element==3){
  return  arr.indexOf(3)<0?true:false;
  }
  else return arr.indexOf(4)<0?false:true;

};
module.exports = is_exist_element;
