class Game {
  id: number
  title: string
  classification: string[] | undefined
  system: string
  description: string
  infos: string[]
  image: string
  star: string

  constructor(
    id: number,
    title: string,
    classification: string[],
    system: string,
    description: string,
    infos: string[],
    image: string,
    star: string
  ) {
    this.id = id
    this.title = title
    this.classification = classification
    this.system = system
    this.description = description
    this.infos = infos
    this.image = image
    this.star = star
  }
}
export default Game //      components/ProductsList noa prop tipada Props
