const cityName  = document.getElementById("cityName")
const day = document.getElementById("day")
const today_date = document.getElementById("today_date")
const city_name = document.getElementById("city_name")
const temp = document.getElementById("temp")
const visibility = document.getElementById("data_hide")
const sub_button = document.getElementById("submit_button")
const temp_status = document.getElementById("temp_status") 



const getData = async (event)=>{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal === ''){
        city_name.innerText="Please enter a valid City Name"

        
    }else{
        try {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metrices&appid=2ccbcbb5762c6f197bb11da314b4459c`
        const responseAPI = await fetch (url)
        let data =await responseAPI.json()
        let data_array = [data]
        console.log(data_array[0].name);
        city_name.innerText = `${data_array[0].name}  ${data_array[0].sys.country}`
 
        temp.innerText = `${data_array[0].main.temp}`
        temp_status.innerText = `${data_array[0].weather[0].main}`

        

        } catch (error) {
            
        }
        
    }
   
}

sub_button.addEventListener( "click", getData)
