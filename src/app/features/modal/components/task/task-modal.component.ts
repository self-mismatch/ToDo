import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TuiDialogContext, TuiDialogService } from '@taiga-ui/core';
import { TUI_VALIDATION_ERRORS } from '@taiga-ui/kit';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';

import { DialogAction, DialogModel } from '../../models/dialog.model';
import { Task } from '../../../../core/interfaces/task.interface';
import { TaskStatus } from '../../../../core/enums/task-status.enum';

@Component({
  selector: 'app-task',
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.scss'],
  providers: [
    {
      provide: TUI_VALIDATION_ERRORS,
      useValue: {
        required: 'Please add task title',
      },
    },
  ],
})
export class TaskModalComponent {
  readonly form: FormGroup = new FormGroup({
    description: new FormControl(this.task?.description ?? null),
    status: new FormControl(this.task?.status ?? TaskStatus.TO_DO, Validators.required),
    title: new FormControl(this.task?.title ?? null, Validators.required)
  });

  readonly statusItems: TaskStatus[] = [
    TaskStatus.TO_DO,
    TaskStatus.DOING,
    TaskStatus.DONE,
  ];

  constructor(
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    @Inject(POLYMORPHEUS_CONTEXT)
    public readonly context: TuiDialogContext<DialogModel, DialogModel>,
  ) {}

  submit() {
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      return;
    }

    this.context.completeWith({
      action: DialogAction.UPDATE,
      task: {
        ...(this.task),
        ...this.form.getRawValue(),
      }
    });
  }

  deleteTask() {
    this.context.completeWith({
      action: DialogAction.DELETE,
    });
  }

  private get task(): Task | undefined {
    return this.context.data?.task;
  }
}
