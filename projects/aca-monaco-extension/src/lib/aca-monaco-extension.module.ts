import {NgModule} from '@angular/core';
import {CoreModule} from '@alfresco/adf-core';
import {ContentModule} from '@alfresco/adf-content-services';
import {ExtensionService} from '@alfresco/adf-extensions';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import {MonacoViewComponent} from './viewer/monaco-view/monaco-view.component';

export function components() {
  return [
    MonacoViewComponent
  ];
}

@NgModule({
  imports: [
    CoreModule.forChild(),
    ContentModule.forChild(),
    MonacoEditorModule.forRoot()
  ],
  declarations: components(),
  exports: components(),
  entryComponents: components()
})
export class AcaMonacoExtensionModule {
  constructor(extensions: ExtensionService) {
    extensions.setComponents({
      'dev.monaco.component': MonacoViewComponent,
    });
  }
}
