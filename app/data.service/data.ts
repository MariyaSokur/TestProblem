import { ITask, Task } from './task';

export let tasks_done: ITask[] = [
   
    { title: '1', description: 'desc1', done: true },
    { title: '2', description: 'desc2', done: true },
     { title: '2', description: 'desc2', done: true }
];

export let tasks_not_done: ITask[] = [
    { title: '3', description: 'desc3', done: false },
    { title: '4', description: 'desc4', done: false }
];