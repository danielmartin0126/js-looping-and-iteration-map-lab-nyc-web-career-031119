function lowerCaseDrivers(arr) {
	let newArr = []
  arr.map(function(driver) {
    newArr.push(driver.toLowerCase())
});
return newArr;
}


function nameToAttributes(arr) {
  const names = []
  return arr.map(function(driver) {
    names.push({firstName: driver.split(" ")[0]
, lastName:driver.split(" ")[1]})
});
return names
}

function nameToAttributes(drivers){
  return drivers.map(function(driver){
    return {firstName: driver.split(' ')[0], lastName: driver.split(' ')[1]};
  })
}