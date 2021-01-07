// @ts-ignore
export const pokiApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon?limit=1"
})

// @ts-ignore
export const sandboxApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/Jordan/pokemon"
})