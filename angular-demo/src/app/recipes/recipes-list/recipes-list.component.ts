import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
recipes: Recipe[]=[
  new Recipe('A Test Recipes','This is simple a test1','https://panlasangpinoy.com/wp-content/uploads/2009/05/Kare-Kare-Recipe-Panlasang-Pinoy.jpg'),
  new Recipe('A Test Recipe22','This is simple a test22','https://panlasangpinoy.com/wp-content/uploads/2009/05/Kare-Kare-Recipe-Panlasang-Pinoy.jpg')
];
@Output() recipeWasSelected=new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }
  onSelectedRecipes(recipe:Recipe)
  {
    this.recipeWasSelected.emit(recipe);

  }

}
