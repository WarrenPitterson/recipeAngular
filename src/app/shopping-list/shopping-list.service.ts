import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredients } from "../shared/ingredients.model";

@Injectable()
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredients[]>();

  private ingredients: Ingredients[] = [
    new Ingredients("Apples", 5),
    new Ingredients("Bananas", 2),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredients(ingredients: Ingredients) {
    this.ingredients.push(ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  AddRecipeIngredients(ingredientsGroup: Ingredients[]) {
    //   for ( let ingredient of ingredients) {
    //       this.addIngredients(ingredient);
    this.ingredients.push(...ingredientsGroup);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
