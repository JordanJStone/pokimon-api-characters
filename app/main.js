import ApiPokimonController from "./Controllers/ApiPokimonController.js"

class App {
  apiPokimonController = new ApiPokimonController();
}

window["app"] = new App();
