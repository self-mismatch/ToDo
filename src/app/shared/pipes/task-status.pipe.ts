import { Pipe, PipeTransform } from '@angular/core';

import { TaskStatus } from '../../core/enums/task-status.enum';

const TaskStatusMap = {
  [TaskStatus.TO_DO]: 'To Do',
  [TaskStatus.DOING]: 'Doing',
  [TaskStatus.DONE]: 'Done',
};

@Pipe({name: 'taskStatus'})
export class TaskStatusPipe implements PipeTransform {
  transform(status: TaskStatus): string {
    return TaskStatusMap[status];
  }
}
