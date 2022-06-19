import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiButtonModule } from '@taiga-ui/core';

import { TaskFilterPipe } from './pipes/task-filter.pipe';
import { TaskStatusPipe } from './pipes/task-status.pipe';

@NgModule({
  declarations: [
    TaskFilterPipe,
    TaskStatusPipe,
  ],
  imports: [
    CommonModule,
    TuiButtonModule,
  ],
  exports: [
    CommonModule,
    TuiButtonModule,
    TaskFilterPipe,
    TaskStatusPipe,
  ],
})
export class SharedModule {
}
