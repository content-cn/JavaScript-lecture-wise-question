function main() {
    function customMap(array, mappingFn) {
      const mappedArray = [];
  
      for (let i = 0; i < array.length; i++) {
        const mappedValue = mappingFn(array[i]);
        mappedArray.push(mappedValue);
      }
  
      return mappedArray;
    }
    return customMap;
  }
  