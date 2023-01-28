/* Global Variables */
// The base URL and the Api key
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = ',&appid=23c1533c9c23ad010fcb5748bec8d11c&units=metric';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();


// Event listener to generate button
document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
    const zipCode = document.getElementById('zip').value;
    const feeling = document.getElementById('feelings').value;
    
    getWeather(baseURL,zipCode,apiKey)
    
    .then((data) => {
        console.log(data)
        postData('/add', {
            temp:data.main.temp, 
            content: feeling,
            date: d,
        }).then(updateUI());
    }) 
};

// GET api data
const getWeather = async (baseURL, zipCode, apiKey) => {
    const res = await fetch(baseURL+zipCode+apiKey)
    console.log(res);
    try{
        const data = await res.json();
        return data;
    }catch{
        console.log('error', error);
    }
}

// Post route

const postData = async (url='', data= {}) =>{
    console.log(data);
    const res = await fetch (url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {'content-Type': 'application/json',},
        body: JSON.stringify(data),
     });
     
     try {
        const newData = await res.json();
        console.log(newData);
        return newData;

     }catch(error){
        console.log('error', error);
     }
};


// GET Data and display it on the UI

const updateUI = async() => {
    const req = await fetch ('/all');
    
    try{
        const allData = await req.json();
        console.log(allData )
        document.getElementById('temp').innerHTML = allData.temp
        document.getElementById('content').innerHTML = allData.content
        document.getElementById('date').innerHTML = allData.date
// Handling error        
    }catch(error){
        console.log('error', error);
    }

}
