/// <reference path="../node_modules/angular2/ts/typings/node/node.d.ts"/>
/// <reference path="../node_modules/angular2/typings/browser.d.ts"/>

/*import {Component} from 'angular2/core';


@Component({
    selector:'task'
    //templateUrl: './app/main.html',
    //styleUrls: ['./app/main.css'],
})*/

export class Task{
    title:string;
    description:string;
    done:boolean = false;

    constructor(title:string, description:string, done:boolean){
        if(description) this.description=description;
        this.done = done;
        if(title) this.title = title;
    }
}