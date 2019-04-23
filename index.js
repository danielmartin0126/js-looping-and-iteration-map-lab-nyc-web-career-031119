function lowerCaseDrivers(arr) {
	let newArr = []
  arr.map(function(driver) {
    newArr.push(driver.toLowerCase())
});
return newArr;
}

function nameToAttributes(arr) {
  const names = []
  arr.map(function(driver) {
    driver.split(" ")
    names << Object.assign({}, driver, { firstName:`${driver.split(" ")[0]}`
, lastName: `${driver.split(" ")[1]}`});
});
  return names
}