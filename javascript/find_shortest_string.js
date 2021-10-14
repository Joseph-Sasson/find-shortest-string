function findShortestString(arr) {
  let shortestString = arr[0]
  
  arr.forEach(string => {
    if (string.length < shortestString.length){
      shortestString = string
    }
  })
  return shortestString
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
  const startTime = Date.now();

  for (let i = 0; i < 1000; ++i) {
    findShortestString(['flower', 'juniper', 'lily', 'dadelion']);
  }

  const avgTime = (Date.now() - startTime) / 1000;
  console.log(avgTime);
}

module.exports = findShortestString;

// Please add your pseudocode to this file
  // Create new array to store first index of original array as shortest 
  // Loop through original array and add first index to new array if it is smaller than the next else add the next
  // Also loop through new array to see if the next index is smaller, if so replace that index
  // Return new array
// And a written explanation of your solution
