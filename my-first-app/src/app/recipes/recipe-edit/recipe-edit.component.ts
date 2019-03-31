import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
    editMode: boolean = false;
    id: number;
    modeText:string;

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = !isNaN(this.id) ? true : false;
    });
    this.mode(this.editMode)
  }

  mode(mode) {
    this.modeText = mode == true ? 'THIS IS EDIT MODE' : 'THIS IS NEW RECIPE MODE'
  }

}
