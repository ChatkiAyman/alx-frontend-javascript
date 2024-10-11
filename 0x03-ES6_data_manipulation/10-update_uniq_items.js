function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  /*
      the code below is to update
      the value of the key Pasta and Rice to 100 */
  map.forEach((value, key) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });
}

export default updateUniqueItems;
