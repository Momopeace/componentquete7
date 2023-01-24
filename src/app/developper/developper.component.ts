import { Component } from '@angular/core';
import { Developer } from '../models/developer.model';


@Component({
  selector: 'app-developper',
  templateUrl: './developper.component.html',
  styleUrls: ['./developper.component.css']
})
export class DevelopperComponent {
  developer :Developer = {
    lastName:"momo",
    firstName:"toto",
    age:35,
    gender:"viril",
    bio:"lorem tototototot",
    skills:[
      {name:'js',logo:'nike',site:'http://nike.com'}
    ]
  }

 
}
