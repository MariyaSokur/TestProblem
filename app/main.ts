/// <reference path="../node_modules/angular2/ts/typings/node/node.d.ts"/>
/// <reference path="../node_modules/angular2/typings/browser.d.ts"/>

import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {Task} from './data.service/task';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {Done} from './done/done';
import {Todo} from './todo/todo';


@Component({
    selector: 'todo-app',
    templateUrl: './app/main.html',
    styleUrls: ['app/main.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
    ]
})

@RouteConfig([
    {
        path: '/done',
        name: 'Done',
        component: Done
    },
    {
        path: '/todo',
        name: 'Todo',
        component: Todo
    } ,
    {
        path: '*',
        name: 'Todo',
        component: Todo
    }
])

class AppCompoment {
}

bootstrap(AppCompoment);