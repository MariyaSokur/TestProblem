import {Injectable} from 'angular2/core';
import {ITask, Task} from './task';
import 'rxjs/add/operator/toPromise';
import {Http} from 'angular2/http';
import {tasks_done, tasks_not_done} from './data';


@Injectable()
export class TaskService {

    constructor(private http: Http){

    }
    getDone(): Promise<ITask[]> {
        let d = "dfvdfvdf";
        return this.http.get('app/data.service/tasks_done.json').toPromise().then(res=>res.json());
        
    }
    getNotDone(): ITask[] {
        return tasks_not_done;
    }
    addTask(task: Task, done: boolean) {
        if (done) tasks_done.push(task);
        else tasks_not_done.push(task);
    }

    deleteTask(task: Task, done: boolean) {
        if (task) {
            if (done) {
                let index = tasks_done.indexOf(task);
                if (index > -1) {
                    tasks_done.splice(index, 1);
                }
            }
            else {
                let index = tasks_not_done.indexOf(task);
                if (index > -1) {
                    tasks_not_done.splice(index, 1);
                }
            }
        }
    }
}