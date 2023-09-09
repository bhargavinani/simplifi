// Define the data structure to represent the available tickets/routes
const routes = {
  Paris: ["Skopje"],
  Skopje: ["Paris"],
  Zurich: ["Amsterdam"],
  Amsterdam: ["Barcelona"],
  Prague: ["Zurich"],
  Barcelona: ["Berlin"],
  Kiev: ["Prague"],
  Berlin: ["Kiev", "Amsterdam"],
};

// Function to perform DFS (DEPTH FIRST SEARCH)  and find the route
function findRoute(currentCity, visited, path) {
  // Mark the current city as visited
  visited[currentCity] = true;

  // Add the current city to the path
  path.push(currentCity);

  // path=["keiv","prague","Zurich","Amsterdam","Barcelona","Berlin"]

  // Check if we've visited all cities; if so, we've found the route
  if (path.length === Object.keys(visited).length) {
    return path;
  }

  // Explore the next cities from the current city
  for (let nextCity of routes[currentCity]) {
    if (!visited[nextCity]) {
      const newPath = findRoute(nextCity, visited, [...path]);
      if (newPath) {
        return newPath;
      }
    }
  }

  // return the path if there are no available  places to visit
  return path;
}

// Initialize visited cities data structure
const visited = {
  Paris: false,
  Skopje: false,
  Zurich: false,
  //   'Zurich': true, 3rd  change
  Amsterdam: false,
  //   'Amsterdam': true, 4th change
  Prague: false,
  //   'Prague': true, 2nd change
  Barcelona: false,
  //   'Barcelona': true, 5th change
  Kiev: false,
  //   'Kiev': true,  1st change

  Berlin: false,
  //   'Berlin': true , 6th change
};

// Call the function to find the route starting from Kiev
const path = findRoute("Kiev", visited, []);
// console.log(path)
console.log("The route your son traveled is: ", path.join(" -> "));

// OUTPUT:

// The route your son traveled is:
// Kiev -> Prague -> Zurich -> Amsterdam -> Barcelona -> Berlin
