let url='https://restcountries.com/v2/all'
async function api(){
     a = fetch(url)
    out = await a
    prom = out.json()
    result = await prom
    console.log(result)
   

   let body = document.querySelector('body')

   for(let i of result){
    try{
   let container = document.createElement('div')
   lat=i.latlng[0]
   lng=i.latlng[1]
   container.setAttribute('lat',lat)
   container.setAttribute('lng',lng)
   container.classList.add('cont')
   container.style.display='inline-block'
   container.innerHTML=`
   <p class='name'>${i.name} </p>

   <img src='${i.flags.png}'>
   
   <p>Capital:${i.capital} </p>
   
   <p>Region:${i.region} </p>
   
   <p>Region:${i.alpha3Code} </p>

   <button onclick='clicking(this)'>Click for weather</button>`
   body.append(container);
   console.log(i.flag)
   console.log(i.capital)
   console.log(i.region)
   console.log(i.alpha3Code)
    }catch{
        'error'
    }
}

}
api();
var apikey='03eccd74048ac6c1267a50238d28d1c2'
async function clicking(e){
    console.log(e.parentElement)
    ele = e.parentElement
    lat=ele.getAttribute('lat')
    lon = ele.getAttribute('lng')
    url2=`https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&exclude={part}&appid={apikey}`
     let G=fetch(url2)
     out11=await G
     j=out11.json()
     result1=await j;
     console.log(result1)
}

clicking();

