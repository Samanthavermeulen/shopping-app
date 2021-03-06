import { Component, OnInit } from '@angular/core';
import { Key } from 'selenium-webdriver';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  objectKeys = Object.keys;
  
  recipe: object = {
    "1": [{
        "title": "Simple Macaroni and Cheese",
        "image": "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F5445825.jpg&w=272&h=272&c=sc&poi=face&q=85",
        "description": "A very quick and easy fix to a tasty side-dish"
        
    }],
    "2": [{
        "title": "World's Best Lasagna",
        "image": "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F07%2F11%2Fworlds-best-lasagna.jpeg&w=272&h=272&c=sc&poi=face&q=85",
        "description": "It takes a little work, but it is worth it."
    }],
    "3":[{
        "title": "Buffalo Chicken Stuffed Shells",
        "image": "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F3326978.jpg&w=272&h=272&c=sc&poi=face&q=85",
        "description": "This is a hit for football Sundays. "
    }]
};


  


  constructor() { }

  ngOnInit(): void {
  }

}
