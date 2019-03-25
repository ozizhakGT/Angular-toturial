import {Ingredients} from "../shared/ingredients.model";

export class Recipe {
  public name: string;
  public description: string;
  public instruction: string;
  public imagePath: string;
  public ingredients: Ingredients[];

  constructor(name: string, desc: string,instruction: string, imagePath:string, ingreduents: Ingredients[]) {
    this.name = name;
    this.description = desc;
    this.instruction = instruction;
    this.imagePath = imagePath;
    this.ingredients = ingreduents;
  }
}
