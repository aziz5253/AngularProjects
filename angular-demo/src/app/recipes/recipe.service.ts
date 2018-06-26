import { Recipe } from './recipe.model';
export class RecipeService{
   private recipes: Recipe[]=[
        new Recipe('A Test Recipes','This is simple a test1','https://panlasangpinoy.com/wp-content/uploads/2009/05/Kare-Kare-Recipe-Panlasang-Pinoy.jpg'),
        new Recipe('A Test Recipe22','This is simple a test22','https://panlasangpinoy.com/wp-content/uploads/2009/05/Kare-Kare-Recipe-Panlasang-Pinoy.jpg')
      ];
      getRecipes()
      {
          return this.recipes.slice();
      }
}