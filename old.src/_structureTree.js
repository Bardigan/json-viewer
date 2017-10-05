var getStructureTree = (lastValidParam, firstInvalidParam, depthMap, lastValidValue) => {
  let structure;
  
  if (firstInvalidParam === lastValidParam) {
    firstInvalidParam = null;
  }
  if (!isDefined(lastValidValue) || !isObject(lastValidValue)) {
    return '';
  }
  
  structure = [].concat(Object.keys(lastValidValue))
  .filter((key) => {
    if (firstInvalidParam) {
      return key.indexOf(firstInvalidParam) === 0;
    } else {
      return true;
    }
  })
  .map((key) => {
    return depthMap.concat([ key ]).join('.')
  });
  
  return structure.join(' ');
};
