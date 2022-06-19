import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiButtonModule, TuiDataListModule, TuiErrorModule } from '@taiga-ui/core';
import { TuiDataListWrapperModule, TuiFieldErrorPipeModule, TuiInputModule, TuiSelectModule } from '@taiga-ui/kit';

import { SharedModule } from '../../shared/shared.module';
import { TaskModalComponent } from './components/task/task-modal.component';

@NgModule({
  declarations: [
    TaskModalComponent
  ],
  exports: [
    TaskModalComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiErrorModule,
    TuiFieldErrorPipeModule,
    TuiButtonModule,
    TuiSelectModule,
    TuiDataListModule,
    TuiDataListWrapperModule,
  ],
})
export class DialogModule {
}
