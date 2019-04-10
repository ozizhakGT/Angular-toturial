import { Action } from "@ngrx/store";
import {Ingredient} from "../../shared/ingredient.model";

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';
export const UPDATE_INGREDIENTS = 'UPDATE_INGREDIENTS';
export const DELETE_INGREDIENTS = 'DELETE_INGREDIENTS';
export const START_EDIT = 'START_EDIT';

export class AddIngredint implements Action {
  readonly type = ADD_INGREDIENT;

  constructor(public payload: Ingredient) {}
}
export class AddIngredints implements Action {
  readonly type = ADD_INGREDIENTS;

  constructor(public payload: Ingredient[]) {}
}
export class updateIngredints implements Action {
  readonly type = UPDATE_INGREDIENTS;

  constructor(public payload: {ingredient: Ingredient}) {}
}
export class deleteIngredints implements Action {
  readonly type = DELETE_INGREDIENTS;
}
export class editMode implements Action {
  readonly type = START_EDIT;

  constructor(public payload: number) {}
}
export type ShoppingListActions = AddIngredint | AddIngredints | updateIngredints | deleteIngredints | editMode
