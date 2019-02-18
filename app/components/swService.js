import Vehicle from "../modules/vehicle.js";

let _vehicleApi = axios.create({
  baseURL: 'https://swapi.co/api/vehicles'
})

let _state = {
  vehicle: [],
  nextPrevVehicle: {
    nextUrl: '',
    previousUrl: ''
  }
}

let _subscribers = {
  vehicle: [],
  nextPrevVehicle: []
}

function setState(prop, value) {
  _state[prop] = value
  _subscribers[prop].forEach(fn => fn());
}


export default class swService {
  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }

  get Vehicle() {
    return _state.vehicle.map(v => new Vehicle(v))
  }

  get Next() {
    return _state.nextPrevVehicle.nextUrl
  }
  get Previous() {
    return _state.nextPrevVehicle.previousUrl
  }

  getAllVehicles(url = '') {
    _vehicleApi.get(url)
      .then(response => {
        let vehicle = response.data.results.map(d => new Vehicle(d))
        let urlData = {
          nextUrl: response.data.next,
          previousUrl: response.data.previous
        }
        setState('nextPrevVehicle', urlData)
        setState('vehicle', vehicle)
      })
      .catch(err => {
        console.error(err)
      })
  }
}