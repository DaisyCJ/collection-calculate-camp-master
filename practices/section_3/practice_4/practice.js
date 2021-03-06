function create_updated_collection(collection_a, object_b) {
  var result= collection_a.map(function (ele) {
    if(ele.length==1){
      return {key:ele,count:1};
    }
    else return{key:ele[0],count:ele[2]};
  }).reduce(function (obj,newElem) {
    var a=obj.find((e)=>e.key==newElem.key);
    if(a){
      a.count++;
    }
    else obj.push(newElem);
    return obj;
  },[]);
  result.forEach(function (elem) {
    elem.count= elem.count-parseInt(elem.count/3);
  });
  return result;
}

module.exports = create_updated_collection;
