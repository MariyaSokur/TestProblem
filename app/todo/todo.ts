import {Component, EventEmitter, Output} from 'angular2/core';
import {Task} from '../task';
import {Done} from '../done/done';


@Component({
    selector: 'todo',
    templateUrl: './app/todo/todo.html',
    styleUrls: ['app/main.css'],
    //providers: [Done]
})

export class Todo {
    //@Output() deleted_done = new EventEmitter();
    tasks_not_done: Task[] = [new Task('1', 'desc1', false),new Task('3rsfgfdffffff fffff fffffff fffffffffff ffffff ffffffff', 'fffffffffff fffffff fffffffffffff ffffffffff ffffff ffffffff ffffffffff', false)];

    constructor() {

    }

    add(title: string, description: string, checked: boolean) {
        
        this.tasks_not_done.push(new Task(title, description, checked));
    }

    addTask(task: Task) {
        console.log('emitted todo!');
        this.tasks_not_done.push(task);
    }

    delete(task: Task) {
        if (task) {
            let index = this.tasks_not_done.indexOf(task);
            if (index > -1) {
                this.tasks_not_done.splice(index, 1);
            }
        }
    }

    toggle(task: Task) {
        let tmp = new Task(task.title, task.description, task.done);
        console.log("Delete todo task and emit add");
        tmp.done = !tmp.done;
        this.delete(task);
      //  this.deleted_done.emit(tmp);
    }

}