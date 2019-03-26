import {EventEmitter, Injectable, OnInit} from "@angular/core";
import {Ingredients} from "../shared/ingredients.model";

@Injectable({
  providedIn: "root"
})
export class ShoppingListService {
  ingredientsHasChange = new EventEmitter<Ingredients[]>();
  private ingredients: Ingredients[] = [];



  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
    this.ingredientsHasChange.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredients[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsHasChange.emit(this.ingredients.slice());
  }

}
