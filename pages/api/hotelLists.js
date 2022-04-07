import axios from "axios";



export default async function handler(req, res) {
  
    const options = {
        method: 'GET',
        url: 'https://hotels4.p.rapidapi.com/properties/list',
        params: {
          destinationId: req.query.locationId,
          pageSize: '10',
          checkIn: req.query.formattedStartDate,
          checkOut: req.query.formattedEndDate,
          adults1: req.query.numOfGuests,
          pageNumber: req.query.pageNumber,
          sortOrder: 'STAR_RATING_HIGHEST_FIRST',
          currency: 'USD'
        },
        headers: {
          'x-rapidapi-host': 'hotels4.p.rapidapi.com',
          'x-rapidapi-key': process.env.RAPIDAPI_KEY
        }
      };
      
      axios.request(options).then((response)=> {
        res.status(200).json(response.data)
          console.log(response.data);
      }).catch( (error) =>{
          console.error(error);
      });
}

