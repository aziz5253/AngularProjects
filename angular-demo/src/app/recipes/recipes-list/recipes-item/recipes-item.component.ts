import { Component, OnInit ,EventEmitter,Input,Output} from '@angular/core';
import { Recipe } from '../../recipe.model';


@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {

  constructor() { }
  @Input()recipe:Recipe;
@Output()selectedRecipes=new EventEmitter<void>();
  ngOnInit() {
  }
  onSelectedValues()
{
this.selectedRecipes.emit();
}
}
