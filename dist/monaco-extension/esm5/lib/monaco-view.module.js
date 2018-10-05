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
    return [
        MonacoViewComponent
    ];
}
var MonacModule = /** @class */ (function () {
    function MonacModule(extensions) {
        extensions.setComponents({
            'monaco-extension.main.component': MonacoViewComponent,
        });
    }
    MonacModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CoreModule.forChild(),
                        MonacoEditorModule.forRoot()
                    ],
                    declarations: components(),
                    exports: components(),
                    entryComponents: components()
                },] }
    ];
    MonacModule.ctorParameters = function () { return [
        { type: ExtensionService }
    ]; };
    return MonacModule;
}());
export { MonacModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uYWNvLXZpZXcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbW9uYWNvLWV4dGVuc2lvbi8iLCJzb3VyY2VzIjpbImxpYi9tb25hY28tdmlldy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQzlDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQzVELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7O0FBRXZELE1BQU07SUFDRixPQUFPO1FBQ0osbUJBQW1CO0tBQ3JCLENBQUM7QUFDTixDQUFDO0FBRUQ7SUFVSSxxQkFBWSxVQUE0QjtRQUNwQyxVQUFVLENBQUMsYUFBYSxDQUFDO1lBQ3JCLGlDQUFpQyxFQUFFLG1CQUFtQjtTQUN6RCxDQUFDLENBQUM7SUFDUCxDQUFDOztnQkFkSixRQUFRLFNBQUM7b0JBQ04sT0FBTyxFQUFFO3dCQUNMLFVBQVUsQ0FBQyxRQUFRLEVBQUU7d0JBQ3JCLGtCQUFrQixDQUFDLE9BQU8sRUFBRTtxQkFDL0I7b0JBQ0QsWUFBWSxFQUFFLFVBQVUsRUFBRTtvQkFDMUIsT0FBTyxFQUFFLFVBQVUsRUFBRTtvQkFDckIsZUFBZSxFQUFFLFVBQVUsRUFBRTtpQkFDaEM7OztnQkFsQk8sZ0JBQWdCOztJQXlCeEIsa0JBQUM7Q0FBQSxBQWZELElBZUM7U0FOWSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvcmVNb2R1bGV9IGZyb20gJ0BhbGZyZXNjby9hZGYtY29yZSc7XG5pbXBvcnQge0V4dGVuc2lvblNlcnZpY2V9IGZyb20gJ0BhbGZyZXNjby9hZGYtZXh0ZW5zaW9ucyc7XG5pbXBvcnQge01vbmFjb1ZpZXdDb21wb25lbnR9IGZyb20gJy4vbW9uYWNvLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IE1vbmFjb0VkaXRvck1vZHVsZSB9IGZyb20gJ25neC1tb25hY28tZWRpdG9yJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvbmVudHMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICBNb25hY29WaWV3Q29tcG9uZW50XG4gICAgXTtcbn1cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvcmVNb2R1bGUuZm9yQ2hpbGQoKSxcbiAgICAgICAgTW9uYWNvRWRpdG9yTW9kdWxlLmZvclJvb3QoKVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBjb21wb25lbnRzKCksXG4gICAgZXhwb3J0czogY29tcG9uZW50cygpLFxuICAgIGVudHJ5Q29tcG9uZW50czogY29tcG9uZW50cygpXG59KVxuZXhwb3J0IGNsYXNzIE1vbmFjTW9kdWxlIHtcbiAgICBjb25zdHJ1Y3RvcihleHRlbnNpb25zOiBFeHRlbnNpb25TZXJ2aWNlKSB7XG4gICAgICAgIGV4dGVuc2lvbnMuc2V0Q29tcG9uZW50cyh7XG4gICAgICAgICAgICAnbW9uYWNvLWV4dGVuc2lvbi5tYWluLmNvbXBvbmVudCc6IE1vbmFjb1ZpZXdDb21wb25lbnQsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==