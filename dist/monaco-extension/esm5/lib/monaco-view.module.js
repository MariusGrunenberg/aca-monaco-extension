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
var AcaMonacoModule = /** @class */ (function () {
    function AcaMonacoModule(extensions) {
        extensions.setComponents({
            'monaco-extension.main.component': MonacoViewComponent
        });
    }
    AcaMonacoModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CoreModule.forChild(), MonacoEditorModule.forRoot()],
                    declarations: components(),
                    exports: components(),
                    entryComponents: components()
                },] }
    ];
    AcaMonacoModule.ctorParameters = function () { return [
        { type: ExtensionService }
    ]; };
    return AcaMonacoModule;
}());
export { AcaMonacoModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uYWNvLXZpZXcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbW9uYWNvLWV4dGVuc2lvbi8iLCJzb3VyY2VzIjpbImxpYi9tb25hY28tdmlldy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7O0FBRXZELE1BQU07SUFDSixPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUMvQixDQUFDO0FBRUQ7SUFPRSx5QkFBWSxVQUE0QjtRQUN0QyxVQUFVLENBQUMsYUFBYSxDQUFDO1lBQ3ZCLGlDQUFpQyxFQUFFLG1CQUFtQjtTQUN2RCxDQUFDLENBQUM7SUFDTCxDQUFDOztnQkFYRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxFQUFFLGtCQUFrQixDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUM5RCxZQUFZLEVBQUUsVUFBVSxFQUFFO29CQUMxQixPQUFPLEVBQUUsVUFBVSxFQUFFO29CQUNyQixlQUFlLEVBQUUsVUFBVSxFQUFFO2lCQUM5Qjs7O2dCQWJRLGdCQUFnQjs7SUFvQnpCLHNCQUFDO0NBQUEsQUFaRCxJQVlDO1NBTlksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnQGFsZnJlc2NvL2FkZi1jb3JlJztcbmltcG9ydCB7IEV4dGVuc2lvblNlcnZpY2UgfSBmcm9tICdAYWxmcmVzY28vYWRmLWV4dGVuc2lvbnMnO1xuaW1wb3J0IHsgTW9uYWNvVmlld0NvbXBvbmVudCB9IGZyb20gJy4vbW9uYWNvLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IE1vbmFjb0VkaXRvck1vZHVsZSB9IGZyb20gJ25neC1tb25hY28tZWRpdG9yJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvbmVudHMoKSB7XG4gIHJldHVybiBbTW9uYWNvVmlld0NvbXBvbmVudF07XG59XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb3JlTW9kdWxlLmZvckNoaWxkKCksIE1vbmFjb0VkaXRvck1vZHVsZS5mb3JSb290KCldLFxuICBkZWNsYXJhdGlvbnM6IGNvbXBvbmVudHMoKSxcbiAgZXhwb3J0czogY29tcG9uZW50cygpLFxuICBlbnRyeUNvbXBvbmVudHM6IGNvbXBvbmVudHMoKVxufSlcbmV4cG9ydCBjbGFzcyBBY2FNb25hY29Nb2R1bGUge1xuICBjb25zdHJ1Y3RvcihleHRlbnNpb25zOiBFeHRlbnNpb25TZXJ2aWNlKSB7XG4gICAgZXh0ZW5zaW9ucy5zZXRDb21wb25lbnRzKHtcbiAgICAgICdtb25hY28tZXh0ZW5zaW9uLm1haW4uY29tcG9uZW50JzogTW9uYWNvVmlld0NvbXBvbmVudFxuICAgIH0pO1xuICB9XG59XG4iXX0=