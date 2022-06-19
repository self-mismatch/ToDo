import { NgModule } from '@angular/core';
import { TuiIslandModule } from '@taiga-ui/kit';

import { BoardComponent } from './board.component';
import { SharedModule } from '../../shared/shared.module';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [
    BoardComponent,
    TaskComponent
  ],
  imports: [
    SharedModule,
    TuiIslandModule
  ],
  exports: [
    BoardComponent
  ]
})
export class BoardModule {
}
