import axios from "axios";

export default async function handler(req, res) {
  
    const options = {
        method: 'GET',
        url: 'https://hotels4.p.rapidapi.com/locations/v2/search',
        params: {query: req.query.searchInput, locale: 'en_US', currency: 'USD'},
        headers: {
          'x-rapidapi-host': 'hotels4.p.rapidapi.com',
          'x-rapidapi-key': process.env.RAPIDAPI_KEY
        }
      };
      
      axios.request(options).then((response) => {
        res.status(200).json(response.data)
          console.log(response.data);
      }).catch((error) => {
          console.error(error);
      });
}
