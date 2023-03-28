let apiKey = `5cef449324d17dcbde1ac3c108b1e8ce`;

let loadApi = (city) => {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric `;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showApi(data));
};

let showApi = (show) => {
//   console.log(show)

  let get1 = document.getElementById("temp");
  let total = (get1.innerText = show.main.temp);

document.getElementById("btn").addEventListener("click",function(){

    let get2=document.getElementById("input").value
    loadApi(get2)

    let get22=document.getElementById("name")
    get22.innerText=get2


})

};

loadApi("tokyo");
