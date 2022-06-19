import { Task } from '../../../core/interfaces/task.interface';

export namespace Board {
  export class CreateTask {
    static readonly type = '[Board] Create Task';

    constructor(public payload: Task) {
    }
  }

  export class DeleteTask {
    static readonly type = '[Board] Delete Task';

    constructor(public payload: string) {
    }
  }

  export class EditTask {
    static readonly type = '[Board] Edit Task';

    constructor(public payload: Task) {
    }
  }
}
