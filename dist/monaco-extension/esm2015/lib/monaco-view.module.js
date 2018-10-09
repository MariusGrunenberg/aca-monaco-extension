/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CoreModule } from '@alfresco/adf-core';
import { ExtensionService } from '@alfresco/adf-extensions';
import { MonacoViewComponent } from './monaco-view.component';
import { MonacoEditorModule } from 'ngx-monaco-editor';
/**
 * @return {?}
 */
export function components() {
    return [MonacoViewComponent];
}
export class AcaMonacoModule {
    /**
     * @param {?} extensions
     */
    constructor(extensions) {
        extensions.setComponents({
            'monaco-extension.main.component': MonacoViewComponent
        });
    }
}
AcaMonacoModule.decorators = [
    { type: NgModule, args: [{
                imports: [CoreModule.forChild(), MonacoEditorModule.forRoot()],
                declarations: components(),
                exports: components(),
                entryComponents: components()
            },] }
];
AcaMonacoModule.ctorParameters = () => [
    { type: ExtensionService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uYWNvLXZpZXcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbW9uYWNvLWV4dGVuc2lvbi8iLCJzb3VyY2VzIjpbImxpYi9tb25hY28tdmlldy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7O0FBRXZELE1BQU07SUFDSixPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUMvQixDQUFDO0FBUUQsTUFBTTs7OztJQUNKLFlBQVksVUFBNEI7UUFDdEMsVUFBVSxDQUFDLGFBQWEsQ0FBQztZQUN2QixpQ0FBaUMsRUFBRSxtQkFBbUI7U0FDdkQsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBWEYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDOUQsWUFBWSxFQUFFLFVBQVUsRUFBRTtnQkFDMUIsT0FBTyxFQUFFLFVBQVUsRUFBRTtnQkFDckIsZUFBZSxFQUFFLFVBQVUsRUFBRTthQUM5Qjs7O1lBYlEsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tICdAYWxmcmVzY28vYWRmLWNvcmUnO1xuaW1wb3J0IHsgRXh0ZW5zaW9uU2VydmljZSB9IGZyb20gJ0BhbGZyZXNjby9hZGYtZXh0ZW5zaW9ucyc7XG5pbXBvcnQgeyBNb25hY29WaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9tb25hY28tdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9uYWNvRWRpdG9yTW9kdWxlIH0gZnJvbSAnbmd4LW1vbmFjby1lZGl0b3InO1xuXG5leHBvcnQgZnVuY3Rpb24gY29tcG9uZW50cygpIHtcbiAgcmV0dXJuIFtNb25hY29WaWV3Q29tcG9uZW50XTtcbn1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvcmVNb2R1bGUuZm9yQ2hpbGQoKSwgTW9uYWNvRWRpdG9yTW9kdWxlLmZvclJvb3QoKV0sXG4gIGRlY2xhcmF0aW9uczogY29tcG9uZW50cygpLFxuICBleHBvcnRzOiBjb21wb25lbnRzKCksXG4gIGVudHJ5Q29tcG9uZW50czogY29tcG9uZW50cygpXG59KVxuZXhwb3J0IGNsYXNzIEFjYU1vbmFjb01vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKGV4dGVuc2lvbnM6IEV4dGVuc2lvblNlcnZpY2UpIHtcbiAgICBleHRlbnNpb25zLnNldENvbXBvbmVudHMoe1xuICAgICAgJ21vbmFjby1leHRlbnNpb24ubWFpbi5jb21wb25lbnQnOiBNb25hY29WaWV3Q29tcG9uZW50XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==