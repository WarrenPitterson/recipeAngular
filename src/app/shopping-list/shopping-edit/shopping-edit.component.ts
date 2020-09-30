import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Ingredients } from "src/app/shared/ingredients.model";
import { ShoppingListService } from "../shopping-list.service";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.scss"],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("nameInput") nameInputRef: ElementRef;
  @ViewChild("amountInput") amountInputRef: ElementRef;

  constructor(private shoppingService: ShoppingListService) {}

  ngOnInit() {}

  onAddItem() {
    const ingredientName = this.nameInputRef.nativeElement.value;
    const ingredientAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredients(ingredientName, ingredientAmount);
    this.shoppingService.addIngredients(newIngredient);
  }
}
