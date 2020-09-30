import { Injectable, EventEmitter } from "@angular/core";
import { Ingredients } from "../shared/ingredients.model";

@Injectable()
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredients[]>();

  private ingredients: Ingredients[] = [
    new Ingredients("Apples", 5),
    new Ingredients("Bananas", 2),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredients(ingredients: Ingredients) {
    this.ingredients.push(ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  AddRecipeIngredients(ingredientsGroup: Ingredients[]) {
    //   for ( let ingredient of ingredients) {
    //       this.addIngredients(ingredient);
    this.ingredients.push(...ingredientsGroup);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
