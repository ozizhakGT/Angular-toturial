import {EventEmitter, Injectable, OnInit} from "@angular/core";
import {Ingredients} from "../shared/ingredients.model";
import {Subject} from "rxjs/Subject";

@Injectable({
  providedIn: "root"
})
export class ShoppingListService {
  ingredientsHasChange = new Subject<Ingredients[]>();
  startEditingMode = new Subject<number>();
  private ingredients: Ingredients[] = [];


  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(id: number) {
    return this.ingredients[id];
  }

  addIngredient(ingredient: Ingredients, publishChanges: boolean = true) {
    const index = this.ingredients.findIndex(ing => ing.name === ingredient.name);
    if (index === -1) {
      this.ingredients.push(ingredient);
    } else {
      this.ingredients[index].amount +=  ingredient.amount;
    }
    if (publishChanges) {
      this.ingredientsHasChange.next(this.ingredients.slice());
    }
  }

  addIngredients(ingredients: Ingredients[]) {
    ingredients.forEach(ing => this.addIngredient(ing, false));
    this.ingredientsHasChange.next(this.ingredients.slice());
  }

  updateIngredient(id: number, newIngredient: Ingredients) {
    this.ingredients[id] = newIngredient;
    this.ingredientsHasChange.next(this.ingredients.slice());
  }

  deleteIngredient(id: number) {
    this.ingredients.splice(id, 1);
    this.ingredientsHasChange.next(this.ingredients.slice());
  }

}
