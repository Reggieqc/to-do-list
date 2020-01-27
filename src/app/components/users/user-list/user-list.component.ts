
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
})

export class UserListComponent {
    
    // userList: User[] = []
    // userInput:User = new User();

    // constructor( private userService: UserService) { }

    // ngOnInit() {
    //    this.userService.getUsers()
    //        .subscribe((users:any)  => {
    //            this.userList = users
    //    });
    // }
    // createUser( f:NgForm) {

    //     this.userService.crateUser(this.userInput)
    //         .subscribe( user => {
    //               this.userList.push(user)
    //             console.log(user)
    //             this.userService.getUsers()
    //         })
    // }
    newTodo: string;
    todos: any = [];
    todoObj: any;

    constructor() {   
    }

    addTodo(f) {
        this.todoObj = {
            newTodo: this.newTodo,
        }
        this.todos.push(this.todoObj);
        this.newTodo = '';
        console.log(f.valid)
        console.log(f.value)
    }

    deleteTodo(index) {
        this.todos.splice(index, 1);
    }
   
}