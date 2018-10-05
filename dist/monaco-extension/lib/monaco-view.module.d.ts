import { ExtensionService } from '@alfresco/adf-extensions';
import { MonacoViewComponent } from './monaco-view.component';
export declare function components(): (typeof MonacoViewComponent)[];
export declare class MonacModule {
    constructor(extensions: ExtensionService);
}
