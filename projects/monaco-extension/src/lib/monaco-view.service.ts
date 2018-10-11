import { Injectable } from '@angular/core';

@Injectable()
export class MonacoViewService {
  constructor() {}

  saveDocument() {
    console.log('Document Saved!');
  }
}
