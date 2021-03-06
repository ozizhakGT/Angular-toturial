import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredients} from "../shared/ingredients.model";
import {ShoppingListService} from "./shopping-list.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredients[] = [];
  private subscription: Subscription;
  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription = this.shoppingListService.ingredientsHasChange.subscribe((ingredients: Ingredients[]) => {
      this.ingredients = ingredients;
    })
  };

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  onEditItem(id: number) {
    this.shoppingListService.startEditingMode.next(id);
  }
}
