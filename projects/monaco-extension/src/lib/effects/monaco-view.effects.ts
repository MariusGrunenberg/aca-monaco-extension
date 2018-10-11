import { MonacoViewService } from './../monaco-view.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import {
  MONACO_VIEW_SAVE_ACTION,
  MonacoViewSaveAction
} from '../actions/monaco-view.actions';

@Injectable()
export class MonacoViewEffects {
  constructor(
    private actions$: Actions,
    private monacoViewService: MonacoViewService
  ) {}

  @Effect({ dispatch: false })
  saveDocument$ = this.actions$.pipe(
    ofType<MonacoViewSaveAction>(MONACO_VIEW_SAVE_ACTION),
    map(action => {
      this.monacoViewService.saveDocument();
    })
  );
}
