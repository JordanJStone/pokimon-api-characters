import { ProxyState } from "../AppState.js";
import { apiPokiService } from "../Services/ApiPokimonService.js";

function _drawPokimon() {
  let template = ''
  ProxyState.apiPokimon.forEach(s => {
    template += `<li class="action"
    onclick="app.apiPokimonController.getPoki('${s.id}')">${s.name}</li>`
  })
  document.getElementById("api-pokemon").innerHTML = template
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
    ProxyState.on('apiPokemon', _drawPokimon)
    ProxyState.on('activePokemon', _drawActivePoki)
    this.getAllPoki()
  }

  getAllPoki() {
    try {
      apiPokiService.getAllPoki()
    } catch (error) {
      console.error(error)
    }
  }

  getPoki(id) {
    try {
      apiPokiService.getPoki(id)
    } catch (error) {
      console.log(error)
    }
  }
}