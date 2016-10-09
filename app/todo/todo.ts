import { Component, EventEmitter, Output, OnInit } from 'angular2/core';
import { Task } from '../data.service/task';
import { Done } from '../done/done';
import {TaskService} from '../data.service/service';


@Component({
    selector: 'todo',
    templateUrl: './app/todo/todo.html',
    styleUrls: ['app/main.css']
})

export class Todo implements OnInit{
    tasks_not_done: Task[];

    constructor(private service:TaskService){
        this.tasks_not_done = [];
    }

    ngOnInit(){
        this.tasks_not_done = this.service.getNotDone();
    }

    add(title: string, description: string, checked: boolean) {
        this.service.addTask(new Task(title, description, checked), false);
        //TaskList.tasks_not_done.push(new Task(title, description, checked));
    }

    readThis(inputValue: any): void {
        /*var file: File = new File("");
        var myReader: FileReader = new FileReader();

        myReader.onloadend = function (e) {
            // you can perform an action with readed data here
            console.log(myReader.result);
        }

        myReader.readAsText(file);*/
    }

    delete(task: Task) {
        this.service.deleteTask(task,false);
    }

    toggle(task: Task) {
        let tmp = new Task(task.title, task.description, task.done);
        //console.log("Delete todo task and emit add");
        tmp.done = !tmp.done;
        this.delete(task);
        //  this.deleted_done.emit(tmp);
    }

}