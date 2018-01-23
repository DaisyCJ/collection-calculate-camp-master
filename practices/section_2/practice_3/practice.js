function count_same_elements(collection) {
  return collection.map(function (arr) {
    if(arr.length ===1){
      return {name: arr, summary: 1};
    }
    var RegExGroup = [/(\w)\[(\d+)\]/,/(\w)-(\d)/, /(\w):(\d)+/];
    var whichRegEx = RegExGroup.find((e) => arr.match(e));
    var elem = arr.match(whichRegEx);
    return {name: elem[1], summary: parseInt(elem[2])};
  }).reduce(function (arr,newElem) {
    var a=arr.find((e) => e.name==newElem.name);
    if(a){
      a.summary+=newElem.summary;
    }
    else arr.push(newElem);
    return arr;
  },[])


}

module.exports = count_same_elements;
