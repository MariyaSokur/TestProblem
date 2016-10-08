/// <reference path="../node_modules/angular2/ts/typings/node/node.d.ts"/>
/// <reference path="../node_modules/angular2/typings/browser.d.ts"/>

import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {Task} from './task';

@Component({
    selector: 'todo-app',
    templateUrl: './app/main.html',
    styleUrls: ['app/main.css']
})

class AppCompoment {
    tasks_done: Task[] = [];
    tasks_not_done: Task[] = [];

    constructor() {
        this.tasks_not_done.push(new Task('1', 'desc1', false));
        this.tasks_not_done.push(new Task('3rsfgfdffffff fffff fffffff fffffffffff ffffff ffffffff', 'fffffffffff fffffff fffffffffffff ffffffffff ffffff ffffffff ffffffffff', false));
        this.tasks_done.push(new Task('2', 'desc2', true));
        this.tasks_done.push(new Task('3', 'desc3', true));
    }

    add(title: string, description: string, checked: boolean) {
        if (checked) {
            this.tasks_done.push(new Task(title, description, checked));
        }
        else {
            this.tasks_not_done.push(new Task(title, description, checked));
        }
    }

    delete(task: Task) {
        if (task) {
            if (task.done) {
                let index = this.tasks_done.indexOf(task);
                if (index > -1) {
                    this.tasks_done.splice(index, 1);
                }
            }
            else {
                let index = this.tasks_not_done.indexOf(task);
                if (index > -1) {
                    this.tasks_not_done.splice(index, 1);
                }
            }
        }
    }

    toggle(task: Task) {
        let tmp =new  Task(task.title,task.description,task.done);
        
        tmp.done = !tmp.done;
        this.delete (task);
        if (tmp.done) {
            this.tasks_done.push(tmp);
        }
        else {
            this.tasks_not_done.push(tmp);
        }
    }
}

bootstrap(AppCompoment);