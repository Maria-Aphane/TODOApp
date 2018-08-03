import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {  todo } from '../../services/todo.service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
  
})
export class HomePage {

  newItem:string;
  todoItems=[];
  progresItems=[];
  completedItems=[];



  constructor(public navCtrl: NavController,private toDo:todo) {}

   AddNewTodo()
   {
    if(this.newItem !=='')
   {
    // this.todoItems.push(this.newItem);
    this.toDo.AddNewTodo(this.newItem);
    this.newItem = '';
    this.getAllTodoItems();
  
    }

  }


  getAllTodoItems()
  {
     this.todoItems = this.toDo.getAllTodoItems();

  }
//-----------------------------------------------
  
  AddProgress(index:number)
  {
  
      this.toDo.AddProgress(index);
  
  }
  getAllProgressItems()
  {
     this.progresItems  = this.toDo.getAllProgressItems();

  }

  
}

