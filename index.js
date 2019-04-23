// Code your solution in this file.
function lowerCaseDrivers(arr) {
  const newArr = arr.map(function(eng) {
    return Object.assign({}, driver, { name: driver["name"].toLowerCase() });
});
}