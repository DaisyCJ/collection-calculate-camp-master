function count_same_elements(collection) {
  return collection.map(function (ele) {
    if(ele.length==3) return {key:ele[0],count:Number(ele[2])};
    else return {key:ele[0],count:1};
  }).reduce(function (arr,newElem) {
    var a=arr.find((e) => e.key==newElem.key);
    if(a){
      a.count++;
    }
    else arr.push(newElem);
    return arr;
  },[])


}

module.exports = count_same_elements;
