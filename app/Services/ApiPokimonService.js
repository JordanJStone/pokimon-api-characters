import { ProxyState } from "../Appstate.js";
import Poki from "../Models/Poki.js";
import { pokiApi } from "./AxiosService.js";

class ApiPokiService {
  async getAllPoki() {
    let res = await pokiApi.get('')
    ProxyState.apiPokimon = res.data.results
  }

  async getPoki(id) {
    let res = await pokiApi.get(id)
    ProxyState.activePokimon = new Poki(res.data)
  }
}

export const apiPokiService = new ApiPokiService();