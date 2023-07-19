import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    url: BASE_URL,
    params: {
        maxResults: '50'
    },
    headers: {
    //   'X-RapidAPI-Key': '094df29ddamsh45a59521aa788ccp1ce56fjsn4b7719fc580e' ,
      'X-RapidAPI-Key': '7c5d11ada4msh43f2fb9888687fdp19bd47jsndc752af82af6' ,
    
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  
  export const fetchFromApi = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}` , options);
    console.log(`${BASE_URL}/${url}`);
    return data;
  } 