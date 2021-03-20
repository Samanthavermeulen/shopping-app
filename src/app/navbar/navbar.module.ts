import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


import { NavbarComponent } from './navbar.component';
import { RecipeListComponent } from '../recipes/recipe-list/recipe-list.component';
import { HomeComponent } from '../home/home.component';





const routes: Routes = [
  { path: '', component: HomeComponent},
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
  declarations: [NavbarComponent, HomeComponent]
})
export class NavbarModule { }
