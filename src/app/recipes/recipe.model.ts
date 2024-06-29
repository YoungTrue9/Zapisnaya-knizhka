import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  constructor(
    public name: string,
    public description: string,
    public imagePath: string,
    public cooking: string,
    public portion: string,
    public time: string,
    public ingredients: Ingredient[]
  ) {}
}
