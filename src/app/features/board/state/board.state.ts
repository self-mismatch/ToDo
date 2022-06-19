import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { insertItem, patch, removeItem, updateItem } from '@ngxs/store/operators';

import { v4 as uuidv4 } from 'uuid';

import { Board } from './board.actions';
import { BoardModel } from './board.model';
import { Task } from '../../../core/interfaces/task.interface';

@State<BoardModel>({
  name: 'board',
  defaults: {
    tasks: []
  }
})
@Injectable()
export class BoardState {
  @Action(Board.CreateTask)
  CreatedTask(ctx: StateContext<BoardModel>, action: { payload: Task }) {
    const newTask = action.payload;
    newTask.id = uuidv4();
    ctx.setState(
      patch({
        tasks: insertItem<Task>(newTask),
      }),
    )
  }

  @Action(Board.DeleteTask)
  DeleteTask(ctx: StateContext<BoardModel>, action: { payload: string }) {
    ctx.setState(
      patch({
        tasks: removeItem<Task>((task: any) => task.id === action.payload),
      }),
    )
  }

  @Action(Board.EditTask)
  EditTask(ctx: StateContext<BoardModel>, action: { payload: Task }) {
    const newTask = action.payload;
    ctx.setState(
      patch({
        tasks: updateItem<Task>((task: any) => task.id === newTask.id, newTask),
      }),
    )
  }
}
