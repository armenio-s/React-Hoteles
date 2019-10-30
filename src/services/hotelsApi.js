import Moment from 'moment';

class hotelsService {
    static getHotels() {
        return fetch('https://wt-8a099f3e7c73b2d17f4e018b6cfd6131-0.sandbox.auth0-extend.com/acamica')
        .then(response => {
            console.log(response);
            return response.json();
        })
    }

    static filterHotels (hotels, payload) {
        let {dateFrom, dateTo, country, price, rooms} = payload
        return hotels.filter(hotels => {
          return Moment(hotels.availabilityFrom).format('YYYY-MM-DD') >= dateFrom
          && Moment(hotels.availabilityTo).format('YYYY-MM-DD') <= dateTo
          && hotels.rooms === (rooms !== 'select' ? rooms : hotels.rooms)
          && hotels.price === (price !== 'select' ? parseInt(price) : hotels.price)
          && hotels.country.trim().toLowerCase() === (country !== 'select' ? country.trim().toLowerCase() : hotels.country.trim().toLowerCase())
        })
    }
}

export default hotelsService;