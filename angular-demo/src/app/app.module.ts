import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipesItemComponent } from './recipes/recipes-list/recipes-item/recipes-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive'
import { ShoppingListService} from './shopping-list/shopping-list.service'
import { Routes, RouterModule } from '@angular/router';
const appRoutes:Routes=[

  { path:'shoppingList',component:ShoppingListComponent}
];

@NgModule({
  declarations: [
    AppComponent,HeaderComponent, RecipesComponent, 
    RecipesListComponent, RecipesDetailComponent, 
    RecipesItemComponent, ShoppingListComponent, ShoppingEditComponent
    ,DropdownDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
