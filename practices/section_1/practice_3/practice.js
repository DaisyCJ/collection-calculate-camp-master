function collect_same_elements(collection_a, object_b) {
  return collection_a.filter(function (ele) {
    return object_b.value.indexOf(ele)<0?false:true;
  })
}

module.exports = collect_same_elements;
