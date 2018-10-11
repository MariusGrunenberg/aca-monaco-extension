import { MonacoViewService } from './monaco-view.service';
import { MonacoViewEffects } from './effects/monaco-view.effects';
import { NgModule } from '@angular/core';
import { CoreModule } from '@alfresco/adf-core';
import { ExtensionService } from '@alfresco/adf-extensions';
import { MonacoViewComponent } from './monaco-view.component';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { EffectsModule } from '@ngrx/effects';

export function components() {
  return [MonacoViewComponent];
}

@NgModule({
  imports: [
    CoreModule.forChild(),
    EffectsModule.forFeature([MonacoViewEffects]),
    MonacoEditorModule.forRoot()
  ],
  declarations: components(),
  exports: components(),
  entryComponents: components(),
  providers: [MonacoViewService]
})
export class AcaMonacoModule {
  constructor(extensions: ExtensionService) {
    extensions.setComponents({
      'monaco-extension.main.component': MonacoViewComponent
    });
  }
}
