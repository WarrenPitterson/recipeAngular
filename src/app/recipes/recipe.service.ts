import { Injectable, EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredients } from "../shared/ingredients.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "Warm Apple Pie Recipe",
      "Warrens Best Pie",
      "../../../assets/1.jpg",
      [
        new Ingredients("Apples", 3),
        new Ingredients("Sugar", 5),
        new Ingredients("Flour", 20),
        new Ingredients("Milk", 100),
      ]
    ),
    new Recipe(
      "Cherry Pie Recipe",
      "Warrens 2nd Best Pie",
      "../../../assets/1.jpg",
      [
        new Ingredients("Cherry", 40),
        new Ingredients("Sugar", 10),
        new Ingredients("Flour", 5),
        new Ingredients("Milk", 10),
      ]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id:number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredients[]) {
    this.shoppingListService.AddRecipeIngredients(ingredients);
  }
}
