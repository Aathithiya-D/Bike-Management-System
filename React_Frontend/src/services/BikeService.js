import axios from 'axios';
//old
const BIKE_API_BASE_URL= "http://localhost:8080/api/bikes/CRUD";
 

class BikeService {
  
    

    getBikes(){
        return axios.get(BIKE_API_BASE_URL + '/getAll');
    }

    createBike(bike){
        return axios.post(BIKE_API_BASE_URL + '/post', bike);
    }

    getBikeById(bikeId){
        return axios.get(BIKE_API_BASE_URL + '/get/' + bikeId);
    }

    updateBike(bike, bikeId){
        return axios.put(BIKE_API_BASE_URL + '/put/' + bikeId, bike);
    }

    deleteBike(bikeId){
        return axios.delete(BIKE_API_BASE_URL + '/delete/' + bikeId);
    }
}

export default new BikeService()

