function create_updated_collection(collection_a, object_b) {
  return collection_a.map(function (ele) {
    return object_b.value.indexOf(ele.key)<0?ele:{key:ele.key,count:--ele.count};
  })
}

module.exports = create_updated_collection;
