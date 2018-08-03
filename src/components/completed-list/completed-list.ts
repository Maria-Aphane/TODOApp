import { Component } from '@angular/core';
import {todo} from './../../services/todo.service';

/**
 * Generated class for the CompletedListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'completed-list',
  templateUrl: 'completed-list.html'
})
export class CompletedListComponent {

  text: string;
  completedItems=[];


  constructor(private toDo:todo) {

    this.completedItems=this.toDo.getAllCompletedItems();
    console.log(this.completedItems);
  }
    
  AddCompletedItems(index:number)
  {
  
      this.toDo.AddCompletedItems(index);
      
  
  }

}
