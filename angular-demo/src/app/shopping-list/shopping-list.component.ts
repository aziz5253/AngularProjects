import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService} from './shopping-list.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[]=[];
  constructor(private shoppingListService:ShoppingListService,private router:Router) { }
 
  ngOnInit() {
    this.ingredients=this.shoppingListService.getIngredient();
    this.shoppingListService.ingredientsChanges.subscribe(

      (ingredients:Ingredient[])=>{
  this.ingredients=ingredients;
  
}

    
    
    
    );

  }
 

}
