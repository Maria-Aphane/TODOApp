import { Component } from '@angular/core';
import {todo} from './../../services/todo.service';

/**
 * Generated class for the DoListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'do-list',
  templateUrl: 'do-list.html'
})
export class DoListComponent {

  text: string;
  progresItems=[];
  completedItems=[];


  constructor(private toDo:todo) {
    this.progresItems=this.toDo.getAllProgressItems();
    console.log(this.progresItems);

  }

  AddCompletedItems(index:number)
  {
  
      this.toDo.AddCompletedItems(index);
      
  
  }
    

}
