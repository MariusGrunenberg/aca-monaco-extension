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
export class MonacModule {
    /**
     * @param {?} extensions
     */
    constructor(extensions) {
        extensions.setComponents({
            'monaco-extension.main.component': MonacoViewComponent,
        });
    }
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
MonacModule.ctorParameters = () => [
    { type: ExtensionService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uYWNvLXZpZXcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbW9uYWNvLWV4dGVuc2lvbi8iLCJzb3VyY2VzIjpbImxpYi9tb25hY28tdmlldy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQzlDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQzVELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7O0FBRXZELE1BQU07SUFDRixPQUFPO1FBQ0osbUJBQW1CO0tBQ3JCLENBQUM7QUFDTixDQUFDO0FBV0QsTUFBTTs7OztJQUNGLFlBQVksVUFBNEI7UUFDcEMsVUFBVSxDQUFDLGFBQWEsQ0FBQztZQUNyQixpQ0FBaUMsRUFBRSxtQkFBbUI7U0FDekQsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7O1lBZEosUUFBUSxTQUFDO2dCQUNOLE9BQU8sRUFBRTtvQkFDTCxVQUFVLENBQUMsUUFBUSxFQUFFO29CQUNyQixrQkFBa0IsQ0FBQyxPQUFPLEVBQUU7aUJBQy9CO2dCQUNELFlBQVksRUFBRSxVQUFVLEVBQUU7Z0JBQzFCLE9BQU8sRUFBRSxVQUFVLEVBQUU7Z0JBQ3JCLGVBQWUsRUFBRSxVQUFVLEVBQUU7YUFDaEM7OztZQWxCTyxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29yZU1vZHVsZX0gZnJvbSAnQGFsZnJlc2NvL2FkZi1jb3JlJztcbmltcG9ydCB7RXh0ZW5zaW9uU2VydmljZX0gZnJvbSAnQGFsZnJlc2NvL2FkZi1leHRlbnNpb25zJztcbmltcG9ydCB7TW9uYWNvVmlld0NvbXBvbmVudH0gZnJvbSAnLi9tb25hY28tdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9uYWNvRWRpdG9yTW9kdWxlIH0gZnJvbSAnbmd4LW1vbmFjby1lZGl0b3InO1xuXG5leHBvcnQgZnVuY3Rpb24gY29tcG9uZW50cygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgIE1vbmFjb1ZpZXdDb21wb25lbnRcbiAgICBdO1xufVxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29yZU1vZHVsZS5mb3JDaGlsZCgpLFxuICAgICAgICBNb25hY29FZGl0b3JNb2R1bGUuZm9yUm9vdCgpXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IGNvbXBvbmVudHMoKSxcbiAgICBleHBvcnRzOiBjb21wb25lbnRzKCksXG4gICAgZW50cnlDb21wb25lbnRzOiBjb21wb25lbnRzKClcbn0pXG5leHBvcnQgY2xhc3MgTW9uYWNNb2R1bGUge1xuICAgIGNvbnN0cnVjdG9yKGV4dGVuc2lvbnM6IEV4dGVuc2lvblNlcnZpY2UpIHtcbiAgICAgICAgZXh0ZW5zaW9ucy5zZXRDb21wb25lbnRzKHtcbiAgICAgICAgICAgICdtb25hY28tZXh0ZW5zaW9uLm1haW4uY29tcG9uZW50JzogTW9uYWNvVmlld0NvbXBvbmVudCxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19