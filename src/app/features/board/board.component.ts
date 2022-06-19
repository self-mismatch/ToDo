import { Component, Inject, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';

import { Board } from './state/board.actions';
import { BoardModel } from './state/board.model';
import { BoardState } from './state/board.state';
import { DialogModel } from '../modal/models/dialog.model';
import { TaskModalComponent } from '../modal/components/task/task-modal.component';
import { TaskStatus } from '../../core/enums/task-status.enum';

interface Section {
  taskStatus: TaskStatus;
  title: string;
}

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  @Select(BoardState) boardState$!: Observable<BoardModel>;

  private dialog!: Observable<any>;

  readonly TaskStatus = TaskStatus;
  readonly sections: Section[] = [
    {
      taskStatus: TaskStatus.TO_DO,
      title: 'To Do',
    },
    {
      taskStatus: TaskStatus.DOING,
      title: 'Doing',
    },
    {
      taskStatus: TaskStatus.DONE,
      title: 'Done',
    },
  ];

  constructor(
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector,
    private readonly store: Store,
  ) {
  }

  createTask() {
    this.dialog = this.dialogService.open<any>(
      new PolymorpheusComponent(TaskModalComponent, this.injector),
      {
        data: {
          action: 'CREATE',
        }
      }
    );

    this.dialog.subscribe({
      next: (dialogResponse: DialogModel) => {
        if (!dialogResponse || !dialogResponse.task) {
          return;
        }

        this.store.dispatch(new Board.CreateTask(dialogResponse.task));
      },
    });
  }
}
