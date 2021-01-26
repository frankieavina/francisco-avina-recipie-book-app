import { Component, OnInit } from '@angular/core';

import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a Test Recipe','https://static01.nyt.com/images/2021/01/24/multimedia/17ah-carrotsoup1/17ah-carrotsoup1-jumbo.jpg?quality=90&auto=webp')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
