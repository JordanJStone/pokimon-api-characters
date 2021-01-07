export default class Poki {
  constructor({ id, name, img, description, weight, height, stats
  }) {
    this.id = id
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
}