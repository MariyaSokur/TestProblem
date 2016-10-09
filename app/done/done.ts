import {Component, Output, EventEmitter, OnInit} from 'angular2/core';
import {Task} from '../data.service/task';
import {Todo} from '../todo/todo';
import {HTTP_PROVIDERS, Http, Response} from 'angular2/http';
import {tasks_done} from '../data.service/data';
import {TaskService} from '../data.service/service';


@Component({
    selector: 'done',
    templateUrl: './app/done/done.html',
    styleUrls: ['app/main.css'],
    providers:[TaskService]
})

export class Done implements OnInit{
    //@Output() deleted_todo = new EventEmitter();
    //result: Object;
    tasks_done: Task[];/* = [new Task('2', 'desc2', true),new Task('2', 'desc2', true)];*/
    
    
    constructor(private service:TaskService){
        this.tasks_done = [];
        /*var json = Utilities.JSONLoader.loadFromFile("../docs/location_map.json");
        var locations: Array<ILocationMap> = JSON.parse(json).location;*/
        //this.result = {tasks_done:[]};
        //http.get('./done.json').map((res: Response) => res.json()).subscribe(res => this.result = res);  
       
    }

    ngOnInit(){
        this.service.getDone().then(tasks_done => this.tasks_done = tasks_done);
    
    }

    add(title: string, description: string, checked: boolean) {
        this.service.addTask(new Task(title, description, checked), true);
        
    }

    delete(task: Task) {
        this.service.deleteTask(task,true);
    }

    toggle(task: Task) {
        let tmp = new Task(task.title, task.description, task.done);
       // console.log('Delete done task');
        tmp.done = !tmp.done;
        this.delete(task);
        //this.deleted_todo.emit(tmp);
    }


}