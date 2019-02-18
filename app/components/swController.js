import swService from "./swService.js";

let _swService = new swService()

function drawVehicle() {
  let vehicle = _swService.Vehicle
  let template = ''
  vehicle.forEach(v => {
    template += v.Template
  })
  document.querySelector('#vehicles').innerHTML = template
  document.querySelector('.buttons').innerHTML =
    `
   <button ${_swService.Previous ? '' : 'disabled'} onclick="app.controllers.swController.getVehicle('${_swService.Previous}')">Previous</button>
   <button ${_swService.Next ? '' : 'disabled'} onclick="app.controllers.swController.getVehicle('${_swService.Next}')">Next</button>
  `
}





export default class swController {
  constructor() {
    _swService.addSubscriber('vehicle', drawVehicle)
    _swService.getAllVehicles()
  }

  getVehicle(url) {
    _swService.getAllVehicles(url)
  }
}