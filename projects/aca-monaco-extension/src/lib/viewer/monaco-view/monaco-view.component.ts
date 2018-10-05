import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {MinimalNodeEntryEntity} from 'alfresco-js-api';
import {AlfrescoApiService} from '@alfresco/adf-core';

@Component({
  selector: 'aca-monaco-view',
  encapsulation: ViewEncapsulation.None,
  template: `
    <ngx-monaco-editor id="adf-monaco-file-editor"
                       class="adf-file-editor"
                       [options]="editorOptions"
                       [(ngModel)]="code"
                       (onInit)="onInit($event)">
    </ngx-monaco-editor>
  `,
  styles: [],
  host: {'class': 'aca-monaco-view'}
})
export class MonacoViewComponent implements OnInit {
  @Input()
  url: string;

  @Input()
  node: MinimalNodeEntryEntity;

  editor: any;
  code: any;
  editorOptions = {
    theme: 'vs-dark',
    language: 'json',
    autoIndent: true,
    formatOnPaste: true,
    formatOnType: true
  };

  onInit(editor) {
    this.editor = editor;
    this.indentCode();
  }

  constructor(private apiService: AlfrescoApiService) {
  }

  indentCode() {
    setTimeout(() => {
      this.editor.getAction('editor.action.formatDocument').run();
    }, 300);
  }

  ngOnInit() {
    this.apiService.nodesApi.getFileContent(this.node.id).then(
      (fileContent) => {
        this.code  = fileContent;
      },
      err => console.log(err)
    );
  }
}


