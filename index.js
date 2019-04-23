// Code your solution in this file.
function lowerCaseDrivers(arr) {
  const newArr = arr.map(function(driver) {
    return Object.assign({}, driver, { name: driver.toLowerCase() });
});
return newArr
}