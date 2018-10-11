import { Action } from '@ngrx/store';
import { MinimalNodeEntryEntity } from 'alfresco-js-api';

export const MONACO_VIEW_SAVE_ACTION = 'MONACO_VIEW_SAVE_ACTION';

export class MonacoViewSaveAction implements Action {
  readonly type = MONACO_VIEW_SAVE_ACTION;
  constructor() {}
}
