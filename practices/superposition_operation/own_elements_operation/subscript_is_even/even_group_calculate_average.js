'use strict';
var even_group_calculate_average = function(collection){
  var result=[];
  var arr=collection.filter(function (ele,index) {
    if((index%2!=0)&&(ele%2==0)){
      return true;
    }
    else return false;
  });
  if(arr.length==0){
    return [0];
  }
  else {
      var groups_by_num=arr.sort(function (a,b) {
        return a>b?1:-1;
      }).reduce(function (groups,ele) {
      var weishu=String(ele).length.toString();
      if(weishu in groups){
        groups[weishu].push(ele);
      }
      else
        groups[weishu]=[ele];
      return groups;
    },{});
  }
  for(var i in groups_by_num){
    var sums=groups_by_num[i].reduce(function (sum,newElem) {
      sum= sum+newElem;
      return sum;
    });
    result.push(sums/groups_by_num[i].length);
  //  result.push(sums);
  }
  return result;
};
module.exports = even_group_calculate_average;
