function lowerCaseDrivers(arr) {
	let newArr = []
  arr.map(function(driver) {
    newArr.push(driver.toLowerCase())
});
return newArr;
}

function nameToAttributes() {
  const equippedEngineers = newEngineers.map(function(eng) {
    return Object.assign({}, eng, { equipment: 'Laptop' });
});
  
}