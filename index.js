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
	console.log({firstName: driver.split(" ")[0]
, lastName:driver.split(" ")[1]})
    names.push({firstName: driver.split(" ")[0]
, lastName:driver.split(" ")[1]})
console.log(names)
});
return names
}