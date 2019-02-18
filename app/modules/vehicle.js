export default class Vehicle {
  constructor(data) {
    this.name = data.name
    this.vehicle_class = data.vehicle_class
    this.cost_in_credits = data.cost_in_credits
    this.max_atmosphering_speed = data.max_atmosphering_speed
    this.crew = data.crew
    this.passengers = data.passengers
  }

  get Template() {
    return `
<h5>${this.name}:</h5>
<p>Vehicle Class: ${this.vehicle_class}, Max Speed: ${this.max_atmosphering_speed}</p>
<p>Crew: ${this.crew}, Passengers: ${this.passengers}, Cost: $ ${this.cost_in_credits}</p>
<br>
    `
  }
}