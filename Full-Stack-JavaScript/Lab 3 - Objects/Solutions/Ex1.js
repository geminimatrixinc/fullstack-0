
const findFacts = function(city) {
    // 	let {name, population ,continent}=city;
	return `${city.name} has a population of ${city.population} and located in ${city.continent}`;
}


findFacts({
    name: "Toronto",
    population: "6,197,000",
    continent: "North America"
  }) 
  
  //Output =>  "Toronto has a population of 6,197,000 and is located in North America"
  
  findFacts({
    name: "Venice",
    population: "261,905",
    continent: "Europe"
  }) //Output => "Venice has a population of 261,905 and is located in Europe"

  