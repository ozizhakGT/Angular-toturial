import {Injectable, EventEmitter} from "@angular/core";
import {Recipe} from "./recipe.model";
import {Ingredients} from "../shared/ingredients.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable({
  providedIn: "root"
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Spaghetti Italyano',
      'spaghetti with Tommato and Love',
      'Heat the oil in a pan, and fry the onion, garlic, celery and carrot with a pinch of salt for 10 minutes, until softened.\n' +
      '\n' +
      'Add the chopped tomatoes, soup, lentils and bay leaf, bring to a boil, then gently simmer, uncovered, for one hour, stirring occasionally, until the sauce has thickened. Season to taste.\n' +
      '\n' +
      'Bring a pan of salted water to a boil, and cook the spaghetti according to the pack instructions. Spoon a ladleful of the pasta water into the sauce to loosen it, then drain the spaghetti.\n' +
      '\n' +
      'Toss the spaghetti through the sauce and serve with grated parmesan, if you like.',
      'https://images.media-allrecipes.com/images/56589.png',
      [
        new Ingredients('spaghetti', 100),
        new Ingredients('Tommato', 6),
        new Ingredients('Onion', 2),
        new Ingredients('Garlic', 1),
      ]),
    new Recipe(
      'Beef Steak',
      'Beef Steak like should be!',
      'I use both my grill and my oven. More control. Although a hot grill will give you great grill marks, grilling rib eye also causes a lot of flare-ups.\n' +
      'Get your grill smoking hot! Once it is, turn down the flame and throw your steak on.  Give it a half turn in about 2 minutes.\n' +
      'Then flip, in a different spot that you started so that the grill grates are still hot.\n' +
      'After 2 minutes give it a half turn again and then off the fire.\n' +
      'I place mine in an oven-safe pan, and cast iron works best. Oven should be at 425 degrees Fahrenheit.\n' +
      'Keep it in there based on how you take your steak. I pull mine out at an internal temperature of 125 degrees Fahrenheit, that’s a rare/medium rare.\n' +
      'As the pan’s coming out of the oven make sure you’ve got 2 tabs of butter, a couple sprigs of thyme, and 3 cloves of garlic with the skin on ready to go.\n' +
      'Toss it all in the hot pan and start to spoon the butter vigorously over the steak.  That’s it!\n' +
      'Let it rest for 5 minutes then slice and serve.  Pour some of that brown butter over the top, garnish with your toasted thyme and sprinkle a bit of flaky sea salt on top, sit back and enjoy!',
      'http://www.recipesaresimple.com/wp-content/uploads/2015/02/wester-chicken-chops-with-mushroom-sauce-recipe-300x300.jpg',
      [
        new Ingredients('Beef Steak', 1),
        new Ingredients('Salt', 1),
        new Ingredients('Black Papper', 1),
        new Ingredients('Love', 1000),
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {

  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredients[]) {

    this.shoppingListService.addIngredients(ingredients)
  }
}
