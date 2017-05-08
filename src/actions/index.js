//axios es una libreria que se utiliza para llamar a una direccion url, un post.
import axios from 'axios';

const API_KEY = "7cfe85b2543376211f3b5568dfe15b9c";

//embbebo la api key en la url
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
    //example http://api.openweathermap.org/data/2.5/forecast?appid=7cfe85b2543376211f3b5568dfe15b9c&q=London,us

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){

    const url = `${ROOT_URL}&q=${city},uy`;
    const request = axios.get(url);
    
// console.log('Request:', request);

    return {
        type: 'FETCH_WEATHER',
        payload: request
    };
} 