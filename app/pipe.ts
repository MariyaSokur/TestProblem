import { Pipe, PipeTransform } from 'angular2/core';

import { Task } from './data.service/task';

@Pipe({ name: 'taskList',pure:false })
export class TaskListPipe implements PipeTransform {
  transform( value: Task[], param) {
      if(param[0]) return value.filter(task => !task.done);
      else return value.filter(task => task.done);
  }
}