import {NgModule} from '@angular/core';
import {CoreModule} from '@alfresco/adf-core';
import {ContentModule} from '@alfresco/adf-content-services';
import {ExtensionService} from '@alfresco/adf-extensions';
import {MonacoViewComponent} from './viewer/monaco-view/monaco-view.component';
import { MonacoEditorModule } from 'ngx-monaco-editor';

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
export class AcaDevToolsModule {
    constructor(extensions: ExtensionService) {
        extensions.setComponents({
            'dev.monaco.component': MonacoViewComponent,
        });
    }
}
