function collect_same_elements(collection_a, object_b) {
  var arr=[];
  collection_a.map(function (ele) {
    arr.push(ele.key);
  })
  return arr.filter(function (ele) {
    return object_b.value.indexOf(ele)<0?false:true;
  })
}

module.exports = collect_same_elements;
