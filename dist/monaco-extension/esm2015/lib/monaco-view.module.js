/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { MonacoViewService } from './monaco-view.service';
import { MonacoViewEffects } from './effects/monaco-view.effects';
import { NgModule } from '@angular/core';
import { CoreModule } from '@alfresco/adf-core';
import { ExtensionService } from '@alfresco/adf-extensions';
import { MonacoViewComponent } from './monaco-view.component';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { EffectsModule } from '@ngrx/effects';
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
                imports: [
                    CoreModule.forChild(),
                    EffectsModule.forFeature([MonacoViewEffects]),
                    MonacoEditorModule.forRoot()
                ],
                declarations: components(),
                exports: components(),
                entryComponents: components(),
                providers: [MonacoViewService]
            },] }
];
AcaMonacoModule.ctorParameters = () => [
    { type: ExtensionService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uYWNvLXZpZXcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbW9uYWNvLWV4dGVuc2lvbi8iLCJzb3VyY2VzIjpbImxpYi9tb25hY28tdmlldy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFFOUMsTUFBTTtJQUNKLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQy9CLENBQUM7QUFhRCxNQUFNOzs7O0lBQ0osWUFBWSxVQUE0QjtRQUN0QyxVQUFVLENBQUMsYUFBYSxDQUFDO1lBQ3ZCLGlDQUFpQyxFQUFFLG1CQUFtQjtTQUN2RCxDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFoQkYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxVQUFVLENBQUMsUUFBUSxFQUFFO29CQUNyQixhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQztvQkFDN0Msa0JBQWtCLENBQUMsT0FBTyxFQUFFO2lCQUM3QjtnQkFDRCxZQUFZLEVBQUUsVUFBVSxFQUFFO2dCQUMxQixPQUFPLEVBQUUsVUFBVSxFQUFFO2dCQUNyQixlQUFlLEVBQUUsVUFBVSxFQUFFO2dCQUM3QixTQUFTLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQzthQUMvQjs7O1lBbkJRLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmFjb1ZpZXdTZXJ2aWNlIH0gZnJvbSAnLi9tb25hY28tdmlldy5zZXJ2aWNlJztcbmltcG9ydCB7IE1vbmFjb1ZpZXdFZmZlY3RzIH0gZnJvbSAnLi9lZmZlY3RzL21vbmFjby12aWV3LmVmZmVjdHMnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tICdAYWxmcmVzY28vYWRmLWNvcmUnO1xuaW1wb3J0IHsgRXh0ZW5zaW9uU2VydmljZSB9IGZyb20gJ0BhbGZyZXNjby9hZGYtZXh0ZW5zaW9ucyc7XG5pbXBvcnQgeyBNb25hY29WaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9tb25hY28tdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9uYWNvRWRpdG9yTW9kdWxlIH0gZnJvbSAnbmd4LW1vbmFjby1lZGl0b3InO1xuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29tcG9uZW50cygpIHtcbiAgcmV0dXJuIFtNb25hY29WaWV3Q29tcG9uZW50XTtcbn1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvcmVNb2R1bGUuZm9yQ2hpbGQoKSxcbiAgICBFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoW01vbmFjb1ZpZXdFZmZlY3RzXSksXG4gICAgTW9uYWNvRWRpdG9yTW9kdWxlLmZvclJvb3QoKVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IGNvbXBvbmVudHMoKSxcbiAgZXhwb3J0czogY29tcG9uZW50cygpLFxuICBlbnRyeUNvbXBvbmVudHM6IGNvbXBvbmVudHMoKSxcbiAgcHJvdmlkZXJzOiBbTW9uYWNvVmlld1NlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIEFjYU1vbmFjb01vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKGV4dGVuc2lvbnM6IEV4dGVuc2lvblNlcnZpY2UpIHtcbiAgICBleHRlbnNpb25zLnNldENvbXBvbmVudHMoe1xuICAgICAgJ21vbmFjby1leHRlbnNpb24ubWFpbi5jb21wb25lbnQnOiBNb25hY29WaWV3Q29tcG9uZW50XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==