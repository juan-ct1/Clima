let result = document.getElementById("result");
let searthbtn = document.getElementById("search-btn");
let cityRef = document.getElementById("city");


//function de la Api Fetch
let getWeather =  () => {
    let cityValue = cityRef.value;
    //si se coloca el input vacio
    if(cityValue.length == 0){
        result.innerHTML = `<h3> Please Entre Namy  city<h3>`;
    }
    //si no esta vacio
    else {
        //key = "804b5b18b2f980e44cb88d8aa7726efa"
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;    
        cityRef.value = ""; 
        fetch(url)
        .then((response) => response.json())
        //nombre valido de la ciudad
        .then((data) =>{
            
            console.log(data)
            console.log(data.weather[0].icon);
            console.log(data.weather[0].main);
            console.log(data.weather[0].description);
            console.log(data.name);
            console.log(data.main);
            console.log(data.main.temp_min);
            console.log(data.main.temp_max);
            result.innerHTML =`<h2>${data.name}<h2>
            <h4 class="weather">${data.weather[0].main}<h4>
            <h4 class="desc">${data.weather[0].description}<h4>
            <img src = "https://openweathermap.org/img/w/${data.weather[0].icon}.png">
            <h1>${data.main.temp}&#176;<h1>
            <div class="temp-container">
              <div>
               <h4 class="title">min<h4>
               <h4 class="temp">${data.main.temp_min}<h4>
              </div>
              <div>
               <h4 class="title">max<h4>
               <h4 class="temp">${data.main.temp_max}<h4>
              </div>
            </div>
            `;
        })
        //si el nombre de la ciudad no es valido
        .catch(()=>{
            result.innerHTML = `<h3>City no Found<h3>`
        });
    }
};
searthbtn.addEventListener("click", getWeather);
window.addEventListener("load" , getWeather);