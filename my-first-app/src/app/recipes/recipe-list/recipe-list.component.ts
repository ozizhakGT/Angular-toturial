import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Spagetti Italyano', 'This is simply Test', 'https://images.media-allrecipes.com/images/56589.png'),
    new Recipe('Deleacuos Steak', 'This is simply Test This is simply Test This is simply Test', 'http://www.recipesaresimple.com/wp-content/uploads/2015/02/wester-chicken-chops-with-mushroom-sauce-recipe-300x300.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe) {
    this.recipeWasSelected.emit(recipe)
  }
}
