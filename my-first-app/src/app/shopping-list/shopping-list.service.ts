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

  addIngredient(ingredient: Ingredients, publishChanges: boolean = true) {
    const index = this.ingredients.findIndex(ing => ing.name === ingredient.name);
    if (index === -1) {
      this.ingredients.push(ingredient);
    } else {
      this.ingredients[index].amount += ingredient.amount;
    }
    if (publishChanges) {
      this.ingredientsHasChange.emit(this.ingredients.slice());
    }
  }

  addIngredients(ingredients: Ingredients[]) {
    ingredients.forEach(ing => this.addIngredient(ing, false));
    this.ingredientsHasChange.emit(this.ingredients.slice());
  }

  // addIngredient(ingredient: Ingredients) {
  //   this.ingredients.push(ingredient);
  //   this.ingredientsHasChange.emit(this.ingredients.slice());
  // }
  //
  // addIngredients(ingredients: Ingredients[]) {
  //   this.ingredients.push(...ingredients);
  //   this.ingredientsHasChange.emit(this.ingredients.slice());
  // }

}
