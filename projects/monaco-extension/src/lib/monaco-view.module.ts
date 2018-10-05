import {NgModule} from '@angular/core';
import {CoreModule} from '@alfresco/adf-core';
import {ExtensionService} from '@alfresco/adf-extensions';
import {MonacoViewComponent} from './monaco-view.component';
import { MonacoEditorModule } from 'ngx-monaco-editor';

export function components() {
    return [
       MonacoViewComponent
    ];
}

@NgModule({
    imports: [
        CoreModule.forChild(),
        MonacoEditorModule.forRoot()
    ],
    declarations: components(),
    exports: components(),
    entryComponents: components()
})
export class MonacModule {
    constructor(extensions: ExtensionService) {
        extensions.setComponents({
            'monaco-extension.main.component': MonacoViewComponent,
        });
    }
}
