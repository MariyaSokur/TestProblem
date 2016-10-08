/// <reference path="../node_modules/angular2/ts/typings/node/node.d.ts"/>
/// <reference path="../node_modules/angular2/typings/browser.d.ts"/>

import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {Task} from './task';

@Component({
    selector:'todo-app',
    templateUrl: './app/main.html',
    styleUrls: ['./app/main.css']
})

class AppCompoment{
        tasks: Task[]=[];

        constructor(){
            this.tasks.push(new Task('1','desc1',false));
            this.tasks.push(new Task('2' ,'desc2',true));
            this.tasks.push(new Task('3','desc3',false));
        }
}

bootstrap(AppCompoment);