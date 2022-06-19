import { Component, Inject, Injector, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';

import { Board } from '../state/board.actions';
import { DialogAction, DialogModel } from '../../modal/models/dialog.model';
import { Task } from '../../../core/interfaces/task.interface';
import { TaskModalComponent } from '../../modal/components/task/task-modal.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() task!: Task;

  private dialog!: Observable<any>;

  constructor(
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector,
    private readonly store: Store,
  ) {
  }

  edit() {
    this.dialog = this.dialogService.open<any>(
      new PolymorpheusComponent(TaskModalComponent, this.injector),
      {
        data: {
          task: this.task,
        }
      },
    );

    this.dialog.subscribe({
      next: (dialogResponse: DialogModel) => {
        if (!dialogResponse) {
          return;
        }

        const { action, task } = dialogResponse;

        if (action === DialogAction.DELETE) {
          this.store.dispatch(new Board.DeleteTask(this.task.id));
        } else if (action === DialogAction.UPDATE && task) {
          this.store.dispatch(new Board.EditTask(task));
        }
      },
    });
  }
}
