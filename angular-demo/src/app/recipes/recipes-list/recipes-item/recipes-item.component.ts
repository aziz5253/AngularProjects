import { Component, OnInit ,Input} from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';


@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {

  constructor(private recipeService:RecipeService) { }
  @Input()recipe:Recipe;
//@Output()selectedRecipes=new EventEmitter<void>();

  ngOnInit() {
  }
  onSelectedValues()
{
this.recipeService.recipeSelected.emit(this.recipe);
}
}
