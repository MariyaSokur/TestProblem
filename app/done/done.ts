import {Component, Output, EventEmitter} from 'angular2/core';
import {Task} from '../task';
import {Todo} from '../todo/todo';


@Component({
    selector: 'done',
    templateUrl: './app/done/done.html',
    styleUrls: ['app/main.css'],
    providers: [Todo]
})

export class Done {
    //@Output() deleted_todo = new EventEmitter();
    tasks_done: Task[] = [new Task('2', 'desc2', true),new Task('2', 'desc2', true)];
    

    constructor() {
        
    }

    add(title: string, description: string, checked: boolean) {
        this.tasks_done.push(new Task(title, description, checked));
    }

    addTask(task: Task) {
        console.log('emitted done!');
        this.tasks_done.push(task);
    }

    delete(task: Task) {
        if (task) {
            let index = this.tasks_done.indexOf(task);
            if (index > -1) {
                this.tasks_done.splice(index, 1);
            }
        }
    }

    toggle(task: Task) {
        let tmp = new Task(task.title, task.description, task.done);
        console.log('Delete done task');
        tmp.done = !tmp.done;
        this.delete(task);
        //this.deleted_todo.emit(tmp);
    }


}
