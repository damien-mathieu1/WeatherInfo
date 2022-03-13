const search = document.getElementById('input');
const matchList = document.getElementById('match-list');

//fetch json file with city name and put it in cities var
const searchCity = async searchText => {
  const res = await fetch('../cities.json');
  const cities = await res.json();
  //get match to input
  let matches = cities.filter(cities=>{
    const regex = new RegExp(`^${searchText}`,'gi');
    return cities.name.match(regex);
  });
  console.log(matches);
  if (searchText.lenght === 0){
    matches = [];
  }
};


search.addEventListener('input',()=> searchCity(search.value));