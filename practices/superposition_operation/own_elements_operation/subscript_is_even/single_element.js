'use strict';
var single_element = function(collection){
  var arr=collection.filter(function (ele,index) {
    return index%2==0?false:true;
  });
  var result=[];
  arr.forEach(function (ele,index) {
    var isExist=false;
    for(var i=0;i<arr.length;i++){
      if(arr[i]==ele&&i!=index) isExist=true;
    }
    if(!isExist) result.push(ele);
  });
  return result;
};
module.exports = single_element;
