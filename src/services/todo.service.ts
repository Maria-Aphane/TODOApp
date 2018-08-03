import { Injectable } from "../../node_modules/@angular/core";


@Injectable()
export class todo{

    todoItems=[];
    progresItems=[];
    completedItems=[];

    AddNewTodo(newItem:string)
    {
 
      this.todoItems.push(newItem);
   }

   getAllTodoItems():any{

    return this.todoItems;

   }
   /////////
   removeTodoTask(index:number)
   {
     this.todoItems.splice(index,1);
   } 
  
 
   AddProgress(index:number)
   {
    this.progresItems.push(this.todoItems[index]);
    this.removeTodoTask(index);
   }

   
   getAllProgressItems()
   {
       return this.progresItems;
   }
//////
   removeProgressTask(index:number)
   {
     this.progresItems.splice(index,1);
   } 

   AddCompletedItems(index:number){

    this.completedItems.push(this.progresItems[index]);
    this.removeProgressTask(index);

   }
   
   getAllCompletedItems()
   {
       return this.completedItems;
   }

 
}
