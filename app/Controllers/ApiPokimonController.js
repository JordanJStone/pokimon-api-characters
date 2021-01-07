import { ProxyState } from "../AppState.js";
import { apiPokiService } from "../Services/ApiPokimonService.js";

function _drawPokimon() {
  console.log("The Pokimon Draw function")
  debugger
  let template = ''
  ProxyState.apiPokimon.forEach(s => {
    template += `<li class="action"
    onclick="app.apiPokimonController.getPoki('${s.id}')">${s.name}</li>`
  })
  document.getElementById("api-pokimon").innerHTML = template
}

function _drawActivePoki() {
  let template = ''
  if (ProxyState.activePokimon) {
    template = ProxyState.activePokimon.Template
  }
  document.getElementById("active-pokimon").innerHTML = template
}

export default class ApiPokimonController {
  constructor() {
    console.log("Reaching out to ProxyState to draw Pokimons")
    ProxyState.on('apiPokimon', _drawPokimon)
    // console.log("This should be giving all the Pokimons")
    ProxyState.on('activePokimon', _drawActivePoki)
    // console.log("Do you have an active Pokimon?")

    this.getAllPoki()
  }

  getAllPoki() {
    try {
      console.log("In the Controller passing Poki's to Service")
      apiPokiService.getAllPoki()
    } catch (error) {
      console.error(error)
    }
  }

  getPoki(id) {
    console.log("In the Controller passing only active poki to Service")
    try {
      apiPokiService.getPoki(id)
    } catch (error) {
      console.log(error)
    }
  }
}