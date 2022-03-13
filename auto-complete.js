const search = document.getElementById('input');
const matchList = document.getElementById('match-list');
const acdiv = document.getElementById('autocompletion');




//fetch json file with city name and put it in cities var
const searchCity = async searchText => {
  if (search.value==''){
    acdiv.style.borderWidth='0px';
  }
  else{
    acdiv.style.borderWidth='1px';
  }
  const res = await fetch('../cities.json');
  const cities = await res.json();
  //get match to input
  let matches = cities.filter(cities=>{
    const regex = new RegExp(`^${searchText}`,'gi');
    return cities.name.match(regex);
  }); 
  clearDiv();
  for (let i=0; i<5;i++){
    let ville = document.createElement('p');
    ville.innerText=matches[i].name;
    acdiv.appendChild(ville);
    
  }
  console.log(matches);
  if (searchText.lenght === 0){
    matches = [];
  }
};


function clearDiv() {
  acdiv.innerHTML='';
}

search.addEventListener('input',()=> searchCity(search.value));
acdiv.addEventListener('click',(event)=>{
  let ville = event.target;
  search.value=ville.innerText;
  clearDiv();
  acdiv.style.borderWidth='0px';  
})