import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Ingredients} from "../../shared/ingredients.model";
import {ShoppingListService} from "../shopping-list.service";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
  subscription: Subscription;
  editMode: boolean = false;
  itemId: number;
  editedItem: Ingredients;
  @ViewChild('f') slForm: NgForm;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
   this.subscription = this.shoppingListService.startEditingMode.subscribe(
     (id:number) => {
       this.editMode = true;
       this.itemId = id;
       this.editedItem = this.shoppingListService.getIngredient(id);
       this.slForm.setValue({
         ingredient: this.editedItem.name,
         amount: this.editedItem.amount
       })
     }
   )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
  onDelete() {
    this.shoppingListService.deleteIngredient(this.itemId);
    this.onClearForm()
    
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredients(value.ingredient,value.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.itemId, newIngredient)
      this.editMode = false;
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    form.reset()
  }

  onClearForm() {
    this.slForm.reset();
    this.editMode = false;
  }
}
