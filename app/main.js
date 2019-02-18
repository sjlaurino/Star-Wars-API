import swController from "./components/swController.js";





class App {
  constructor() {
    this.controllers = {
      swController: new swController()
    }
  }
}

window['app'] = new App()




