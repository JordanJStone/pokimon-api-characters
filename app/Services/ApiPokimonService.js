import { ProxyState } from "../AppState.js";
import Poki from "../Models/Poki.js";
import { pokiApi } from "./AxiosService.js";

class ApiPokiService {
  async getAllPoki() {
    console.log("Getting all Poki's in the Service")
    let res = await pokiApi.get('')
    ProxyState.apiPokimon = res.data.results
    // ProxyState.apiPokimon = ProxyState.apiPokimon
  }

  async getPoki(id) {
    console.log("Getting an active Pokimon in Service")
    let res = await pokiApi.get(id)
    ProxyState.activePokimon = new Poki(res.data)
  }
}

export const apiPokiService = new ApiPokiService();