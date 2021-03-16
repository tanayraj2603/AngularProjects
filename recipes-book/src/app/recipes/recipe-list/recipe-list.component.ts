import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://get.pxhere.com/photo/egg-dish-food-cuisine-ingredient-produce-menemen-recipe-comfort-food-brunch-meal-frittata-Queso-flameado-breakfast-side-dish-poached-egg-turkish-food-indian-cuisine-1620832.jpg'),
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://get.pxhere.com/photo/egg-dish-food-cuisine-ingredient-produce-menemen-recipe-comfort-food-brunch-meal-frittata-Queso-flameado-breakfast-side-dish-poached-egg-turkish-food-indian-cuisine-1620832.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
