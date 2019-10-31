import Moment from 'moment';

class hotelsService {
    static getHotels() {
        return fetch('https://wt-8a099f3e7c73b2d17f4e018b6cfd6131-0.sandbox.auth0-extend.com/acamica')
        .then(response => {
            return response.json();
        })
    }

    static filterHotels (hotels, payload) {
        let {dateFrom, dateTo, country, price, rooms} = payload
        
        return hotels.filter(hotels => {
            return Moment(hotels.availabilityFrom).format('LL') >= Moment(dateFrom).format('LL')
            && Moment(hotels.availabilityTo).format('LL') <= Moment(dateTo).format('LL')
            && hotels.rooms <= (rooms !== undefined && rooms !== '' ? rooms : hotels.rooms)
            && hotels.price === (price !== undefined && price !== '' ? parseInt(price) : hotels.price)
            && hotels.country === (country !== undefined && country !== '' ? country : hotels.country)
        })
    }
}

export default hotelsService;