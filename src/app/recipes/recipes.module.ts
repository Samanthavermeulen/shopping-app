import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';




@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    RecipeListComponent
  ],
  declarations: [
    RecipeListComponent,
    RecipeItemComponent
  ],

})
export class RecipesModule { }
