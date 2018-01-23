'use strict';

function compare_collections(collection_a, collection_b) {
  return collection_a.toString()==collection_b.toString()?true:false;
}

module.exports = compare_collections;


