import { Task } from '../../../core/interfaces/task.interface';

export enum DialogAction {
  CREATE = 'CREATE',
  DELETE = 'DELETE',
  UPDATE = 'UPDATE',
}

export interface DialogModel {
  action: DialogAction;
  task?: Task;
}
