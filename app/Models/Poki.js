export default class Poki {
  constructor({ name, img, description, weight, height, stats
  }) {
    this.name = name
    this.img = img
    this.description = description || stats.join('\n')
    this.weight = weight
    this.height = height
  }

  get Template() {
    return `
    <h2>${this.name}</h2>
    <p>$${this.img}</p>
    <p>Height: ${this.height} | Weight: ${this.weight}</p>
    <p>${this.description}</p>
    `
  }
  // NOTE add ${this.Button back into end of Template at some point}

//   get Button() {
//     if (this.index) {
//       return `<button class="btn btn-outline-success" onclick="app.mySpellController.addSpell()">Add Spell</button>`
//     }
//     return `<button class="btn btn-outline-danger" onclick="app.mySpellController.removeSpell()">Remove Spell</button>`
//   }
// }