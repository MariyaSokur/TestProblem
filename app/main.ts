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
    tasks: Task[] = [];

    constructor() {
        this.tasks.push(new Task('1', 'desc1', false));
        this.tasks.push(new Task('3rsfgfdffffff fffff fffffff fffffffffff ffffff ffffffff', 'fffffffffff fffffff fffffffffffff ffffffffff ffffff ffffffff ffffffffff', false));
        this.tasks.push(new Task('2', 'desc2', true));
        this.tasks.push(new Task('3', 'desc3', false));
    }

    add(title: string, description: string, checked: boolean) {
        this.tasks.push(new Task(title, description, checked));
    }

    delete(task: Task) {
        if(task){
            let index = this.tasks.indexOf(task);
            if(index>-1) {
                this.tasks.splice(index,1);
            }
        }
    }
}

bootstrap(AppCompoment);