function collect_same_elements(collection_a, collection_b) {
  return collection_a.filter(function (ele) {
    return collection_b[0].indexOf(ele)<0?false:true;
  })
}

module.exports = collect_same_elements;
