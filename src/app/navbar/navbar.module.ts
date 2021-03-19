import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


import { NavbarComponent } from './navbar.component';
import { RecipeListComponent } from '../recipes/recipe-list/recipe-list.component';





const routes: Routes = [
  { path: 'app-recipe-list', component: RecipeListComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    RouterModule
  ],
  exports:[
    NavbarComponent
  ],
  declarations: [NavbarComponent]
})
export class NavbarModule { }
