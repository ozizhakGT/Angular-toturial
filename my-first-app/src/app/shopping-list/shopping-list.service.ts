import {EventEmitter, Injectable} from "@angular/core";
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

  addIngredients(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
    this.ingredientsHasChange.emit(this.ingredients.slice());
  }
}
