/// <reference path="../node_modules/angular2/ts/typings/node/node.d.ts"/>
/// <reference path="../node_modules/angular2/typings/browser.d.ts"/>

import {Component, ChangeDetectionStrategy} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {Task} from './data.service/task';
import {TaskListPipe} from './pipe';

@Component({
    selector: 'todo-app',
    templateUrl: './app/main.html',
    styleUrls: ['app/main.css'],
    pipes:[TaskListPipe],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent {
    public tasks: Task[] = [];
    pageType: boolean = false;

    constructor() {
        this.tasks.push(new Task('1', 'desc1', false));
        this.tasks.push(new Task('3rsfgfdffffff fffff fffffff fffffffffff ffffff ffffffff', 'fffffffffff fffffff fffffffffffff ffffffffff ffffff ffffffff ffffffffff', false));
        this.tasks.push(new Task('2', 'desc2', true));
        this.tasks.push(new Task('3', 'desc3', true));
    }

    add(title: string, description: string, checked: boolean) {
        let tmp = title.trim();
        if(tmp)
        this.tasks.push(new Task(title, description, checked));
        
    }

    changeTab1(){
        this.pageType = false;
    }

    changeTab2(){
        this.pageType = true;
    }

    delete(task: Task) {
        if (task) {
            let index = this.tasks.indexOf(task);
            if (index > -1) {
                this.tasks.splice(index, 1);
            }
        }
    }

    toggle(task: Task) {
         if (task) {
            task.done = !task.done;
        }
    }
}

bootstrap(AppComponent);