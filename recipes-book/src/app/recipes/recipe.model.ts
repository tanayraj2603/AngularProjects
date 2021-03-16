// import { NgModule } from '@angular/core';
// import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
// import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
// import { RecipeListComponent } from "./recipe-list/recipe-list.component";
// import { RecipesComponent } from './recipes.component';

// @NgModule{
//   declaration: [
//     RecipesComponent,
//     RecipeListComponent,
//     RecipeDetailComponent,
//     RecipeItemComponent,
//   ],
//   import: [
//     RouterModule
//   ]
// }
export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, desc: string, imagePath: string){
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }
}