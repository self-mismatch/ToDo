import { Pipe, PipeTransform } from '@angular/core';

import { Task } from '../../core/interfaces/task.interface';
import { TaskStatus } from '../../core/enums/task-status.enum';

@Pipe({name: 'taskFilter'})
export class TaskFilterPipe implements PipeTransform {
  transform(tasks: Task[], status: TaskStatus): Task[] | null {
    const filteredTasks = tasks.filter((task: Task) => task.status === status);
    return filteredTasks.length > 0 ? filteredTasks : null;
  }
}
