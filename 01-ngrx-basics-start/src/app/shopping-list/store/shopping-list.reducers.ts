import * as ShoppingListAction from "./shopping-list.actions"
import { Ingredient } from "../../shared/ingredient.model";

export interface AppState {
  shoppingList: State
}

export interface State {
  ingredients: Ingredient[];
  editedIngredient: Ingredient;
  editedIngredientIndex: number;
}

const initialState = {
  ingredients: [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoes', 10)
  ],
  editedIngredient: null,
  editedIngredientIndex: -1
};

export function shoppingListReducer(state = initialState, action: ShoppingListAction.ShoppingListActions) {
  switch (action.type) {
    case ShoppingListAction.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      };
    case ShoppingListAction.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, ...action.payload]
      };
    case ShoppingListAction.UPDATE_INGREDIENTS:
      const ingredient = state.ingredients[state.editedIngredient];
      const updatedIngredient = {
        ...ingredient,
        ...action.payload.ingredient
      };
      const ingredients = [...state.ingredients];
      ingredients[state.editedIngredientIndex] = updatedIngredient;
      return {
        ...state,
        ingredients: ingredients
      };
    case ShoppingListAction.DELETE_INGREDIENTS:
      const oldIngredients = [...state.ingredients];
      oldIngredients.splice(state.editedIngredientIndex, 1);
      return {
        ...state,
        ingredients: oldIngredients
      };
    case ShoppingListAction.START_EDIT:
      const editedIngredient = {...state.ingredients[action.payload]};
      // console.log(editedIngredient, action.payload)
        return {
       ...state,
          editedIngredient: editedIngredient,
          editedIngredientIndex: action.payload
      }
    default:
      return state
  }
}
