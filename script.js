const wrapper = document.querySelector(".wrapper"),
inputPart = wrapper.querySelector(".input-part"),
infoTxt = inputPart.querySelector(".info-txt"),
inputField = inputPart.querySelector("input");

inputField.addEventListener("keyup", e=>{
    if(e.key == "Enter" && inputField.value != ""){
        requestApi(inputField.value);
    }
});

function requestApi(city){
    let api = 'https://api.openweathermap.org/data/2.5/weather?q={city},India&appid=19a4bb6a569590e5a027476638637a1f';
    fetch(api).then(response => console.log(response.json()));
}
