import { Component, Input, ViewEncapsulation, Injectable, NgModule } from '@angular/core';
import 'alfresco-js-api';
import { AlfrescoApiService, CoreModule } from '@alfresco/adf-core';
import { __decorate, __metadata } from 'tslib';
import { Actions, Effect, ofType, EffectsModule } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { ExtensionService } from '@alfresco/adf-extensions';
import { MonacoEditorModule } from 'ngx-monaco-editor';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class MonacoViewComponent {
    /**
     * @param {?} apiService
     */
    constructor(apiService) {
        this.apiService = apiService;
        this.editorOptions = {
            theme: 'vs-dark',
            language: 'json',
            autoIndent: true,
            formatOnPaste: true,
            formatOnType: true
        };
    }
    /**
     * @param {?} editor
     * @return {?}
     */
    onInit(editor) {
        this.editor = editor;
        this.indentCode();
    }
    /**
     * @return {?}
     */
    indentCode() {
        setTimeout(() => {
            this.editor.getAction('editor.action.formatDocument').run();
        }, 300);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.apiService.nodesApi.getFileContent(this.node.id).then(fileContent => {
            this.code = fileContent;
        }, err => console.log(err));
    }
}
MonacoViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'aca-monaco-view',
                template: "<ngx-monaco-editor id=\"adf-monaco-file-editor\" class=\"adf-monaco-file-editor\" [options]=\"editorOptions\" [(ngModel)]=\"code\"\n    (onInit)=\"onInit($event)\">\n</ngx-monaco-editor>",
                encapsulation: ViewEncapsulation.None,
                styles: [".adf-monaco-file-editor{height:100%!important}"]
            }] }
];
MonacoViewComponent.ctorParameters = () => [
    { type: AlfrescoApiService }
];
MonacoViewComponent.propDecorators = {
    url: [{ type: Input }],
    node: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class MonacoViewService {
    constructor() { }
    /**
     * @return {?}
     */
    saveDocument() {
        console.log('Document Saved!');
    }
}
MonacoViewService.decorators = [
    { type: Injectable }
];
MonacoViewService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const MONACO_VIEW_SAVE_ACTION = 'MONACO_VIEW_SAVE_ACTION';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class MonacoViewEffects {
    /**
     * @param {?} actions$
     * @param {?} monacoViewService
     */
    constructor(actions$, monacoViewService) {
        this.actions$ = actions$;
        this.monacoViewService = monacoViewService;
        this.saveDocument$ = this.actions$.pipe(ofType(MONACO_VIEW_SAVE_ACTION), map(action => {
            this.monacoViewService.saveDocument();
        }));
    }
}
MonacoViewEffects.decorators = [
    { type: Injectable }
];
MonacoViewEffects.ctorParameters = () => [
    { type: Actions },
    { type: MonacoViewService }
];
__decorate([
    Effect({ dispatch: false }),
    __metadata("design:type", Object)
], MonacoViewEffects.prototype, "saveDocument$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function components() {
    return [MonacoViewComponent];
}
class AcaMonacoModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { MonacoViewComponent, components, AcaMonacoModule, MonacoViewEffects as ɵa, MonacoViewService as ɵb };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uYWNvLWV4dGVuc2lvbi5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbW9uYWNvLWV4dGVuc2lvbi9saWIvbW9uYWNvLXZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9tb25hY28tZXh0ZW5zaW9uL2xpYi9tb25hY28tdmlldy5zZXJ2aWNlLnRzIiwibmc6Ly9tb25hY28tZXh0ZW5zaW9uL2xpYi9hY3Rpb25zL21vbmFjby12aWV3LmFjdGlvbnMudHMiLCJuZzovL21vbmFjby1leHRlbnNpb24vbGliL2VmZmVjdHMvbW9uYWNvLXZpZXcuZWZmZWN0cy50cyIsIm5nOi8vbW9uYWNvLWV4dGVuc2lvbi9saWIvbW9uYWNvLXZpZXcubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQGxpY2Vuc2VcbiAqIEFsZnJlc2NvIEV4YW1wbGUgQ29udGVudCBBcHBsaWNhdGlvblxuICpcbiAqIENvcHlyaWdodCAoQykgMjAwNSAtIDIwMTggQWxmcmVzY28gU29mdHdhcmUgTGltaXRlZFxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBBbGZyZXNjbyBFeGFtcGxlIENvbnRlbnQgQXBwbGljYXRpb24uXG4gKiBJZiB0aGUgc29mdHdhcmUgd2FzIHB1cmNoYXNlZCB1bmRlciBhIHBhaWQgQWxmcmVzY28gbGljZW5zZSwgdGhlIHRlcm1zIG9mXG4gKiB0aGUgcGFpZCBsaWNlbnNlIGFncmVlbWVudCB3aWxsIHByZXZhaWwuICBPdGhlcndpc2UsIHRoZSBzb2Z0d2FyZSBpc1xuICogcHJvdmlkZWQgdW5kZXIgdGhlIGZvbGxvd2luZyBvcGVuIHNvdXJjZSBsaWNlbnNlIHRlcm1zOlxuICpcbiAqIFRoZSBBbGZyZXNjbyBFeGFtcGxlIENvbnRlbnQgQXBwbGljYXRpb24gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBUaGUgQWxmcmVzY28gRXhhbXBsZSBDb250ZW50IEFwcGxpY2F0aW9uIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIEFsZnJlc2NvLiBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWluaW1hbE5vZGVFbnRyeUVudGl0eSB9IGZyb20gJ2FsZnJlc2NvLWpzLWFwaSc7XG5pbXBvcnQgeyBBbGZyZXNjb0FwaVNlcnZpY2UgfSBmcm9tICdAYWxmcmVzY28vYWRmLWNvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhY2EtbW9uYWNvLXZpZXcnLFxuICB0ZW1wbGF0ZVVybDogJy4vbW9uYWNvLXZpZXcuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tb25hY28tdmlldy5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIE1vbmFjb1ZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKVxuICB1cmw6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBub2RlOiBNaW5pbWFsTm9kZUVudHJ5RW50aXR5O1xuICBlZGl0b3I6IGFueTtcbiAgY29kZTogYW55O1xuICBlZGl0b3JPcHRpb25zID0ge1xuICAgIHRoZW1lOiAndnMtZGFyaycsXG4gICAgbGFuZ3VhZ2U6ICdqc29uJyxcbiAgICBhdXRvSW5kZW50OiB0cnVlLFxuICAgIGZvcm1hdE9uUGFzdGU6IHRydWUsXG4gICAgZm9ybWF0T25UeXBlOiB0cnVlXG4gIH07XG5cbiAgb25Jbml0KGVkaXRvcikge1xuICAgIHRoaXMuZWRpdG9yID0gZWRpdG9yO1xuICAgIHRoaXMuaW5kZW50Q29kZSgpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGlTZXJ2aWNlOiBBbGZyZXNjb0FwaVNlcnZpY2UpIHt9XG5cbiAgaW5kZW50Q29kZSgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuZWRpdG9yLmdldEFjdGlvbignZWRpdG9yLmFjdGlvbi5mb3JtYXREb2N1bWVudCcpLnJ1bigpO1xuICAgIH0sIDMwMCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFwaVNlcnZpY2Uubm9kZXNBcGkuZ2V0RmlsZUNvbnRlbnQodGhpcy5ub2RlLmlkKS50aGVuKFxuICAgICAgZmlsZUNvbnRlbnQgPT4ge1xuICAgICAgICB0aGlzLmNvZGUgPSBmaWxlQ29udGVudDtcbiAgICAgIH0sXG4gICAgICBlcnIgPT4gY29uc29sZS5sb2coZXJyKVxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1vbmFjb1ZpZXdTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHNhdmVEb2N1bWVudCgpIHtcbiAgICBjb25zb2xlLmxvZygnRG9jdW1lbnQgU2F2ZWQhJyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE1pbmltYWxOb2RlRW50cnlFbnRpdHkgfSBmcm9tICdhbGZyZXNjby1qcy1hcGknO1xuXG5leHBvcnQgY29uc3QgTU9OQUNPX1ZJRVdfU0FWRV9BQ1RJT04gPSAnTU9OQUNPX1ZJRVdfU0FWRV9BQ1RJT04nO1xuXG5leHBvcnQgY2xhc3MgTW9uYWNvVmlld1NhdmVBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTU9OQUNPX1ZJRVdfU0FWRV9BQ1RJT047XG4gIGNvbnN0cnVjdG9yKCkge31cbn1cbiIsImltcG9ydCB7IE1vbmFjb1ZpZXdTZXJ2aWNlIH0gZnJvbSAnLi8uLi9tb25hY28tdmlldy5zZXJ2aWNlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1xuICBNT05BQ09fVklFV19TQVZFX0FDVElPTixcbiAgTW9uYWNvVmlld1NhdmVBY3Rpb25cbn0gZnJvbSAnLi4vYWN0aW9ucy9tb25hY28tdmlldy5hY3Rpb25zJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1vbmFjb1ZpZXdFZmZlY3RzIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIG1vbmFjb1ZpZXdTZXJ2aWNlOiBNb25hY29WaWV3U2VydmljZVxuICApIHt9XG5cbiAgQEVmZmVjdCh7IGRpc3BhdGNoOiBmYWxzZSB9KVxuICBzYXZlRG9jdW1lbnQkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZTxNb25hY29WaWV3U2F2ZUFjdGlvbj4oTU9OQUNPX1ZJRVdfU0FWRV9BQ1RJT04pLFxuICAgIG1hcChhY3Rpb24gPT4ge1xuICAgICAgdGhpcy5tb25hY29WaWV3U2VydmljZS5zYXZlRG9jdW1lbnQoKTtcbiAgICB9KVxuICApO1xufVxuIiwiaW1wb3J0IHsgTW9uYWNvVmlld1NlcnZpY2UgfSBmcm9tICcuL21vbmFjby12aWV3LnNlcnZpY2UnO1xuaW1wb3J0IHsgTW9uYWNvVmlld0VmZmVjdHMgfSBmcm9tICcuL2VmZmVjdHMvbW9uYWNvLXZpZXcuZWZmZWN0cyc7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gJ0BhbGZyZXNjby9hZGYtY29yZSc7XG5pbXBvcnQgeyBFeHRlbnNpb25TZXJ2aWNlIH0gZnJvbSAnQGFsZnJlc2NvL2FkZi1leHRlbnNpb25zJztcbmltcG9ydCB7IE1vbmFjb1ZpZXdDb21wb25lbnQgfSBmcm9tICcuL21vbmFjby12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb25hY29FZGl0b3JNb2R1bGUgfSBmcm9tICduZ3gtbW9uYWNvLWVkaXRvcic7XG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wb25lbnRzKCkge1xuICByZXR1cm4gW01vbmFjb1ZpZXdDb21wb25lbnRdO1xufVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29yZU1vZHVsZS5mb3JDaGlsZCgpLFxuICAgIEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShbTW9uYWNvVmlld0VmZmVjdHNdKSxcbiAgICBNb25hY29FZGl0b3JNb2R1bGUuZm9yUm9vdCgpXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogY29tcG9uZW50cygpLFxuICBleHBvcnRzOiBjb21wb25lbnRzKCksXG4gIGVudHJ5Q29tcG9uZW50czogY29tcG9uZW50cygpLFxuICBwcm92aWRlcnM6IFtNb25hY29WaWV3U2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgQWNhTW9uYWNvTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoZXh0ZW5zaW9uczogRXh0ZW5zaW9uU2VydmljZSkge1xuICAgIGV4dGVuc2lvbnMuc2V0Q29tcG9uZW50cyh7XG4gICAgICAnbW9uYWNvLWV4dGVuc2lvbi5tYWluLmNvbXBvbmVudCc6IE1vbmFjb1ZpZXdDb21wb25lbnRcbiAgICB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbInRzbGliXzEuX19kZWNvcmF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF3REUsWUFBb0IsVUFBOEI7UUFBOUIsZUFBVSxHQUFWLFVBQVUsQ0FBb0I7UUFibEQsa0JBQWEsR0FBRztZQUNkLEtBQUssRUFBRSxTQUFTO1lBQ2hCLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLGFBQWEsRUFBRSxJQUFJO1lBQ25CLFlBQVksRUFBRSxJQUFJO1NBQ25CLENBQUM7S0FPb0Q7Ozs7O0lBTHRELE1BQU0sQ0FBQyxNQUFNO1FBQ1gsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0tBQ25COzs7O0lBSUQsVUFBVTtRQUNSLFVBQVUsQ0FBQztZQUNULElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLDhCQUE4QixDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDN0QsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUNUOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDeEQsV0FBVztZQUNULElBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDO1NBQ3pCLEVBQ0QsR0FBRyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQ3hCLENBQUM7S0FDSDs7O1lBMUNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixzTUFBMkM7Z0JBRTNDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN0Qzs7O1lBUFEsa0JBQWtCOzs7a0JBU3hCLEtBQUs7bUJBR0wsS0FBSzs7Ozs7OztBQ3ZDUjtJQUlFLGlCQUFnQjs7OztJQUVoQixZQUFZO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0tBQ2hDOzs7WUFORixVQUFVOzs7Ozs7Ozs7QUNDWCxNQUFhLHVCQUF1QixHQUFHLHlCQUF5Qjs7Ozs7Ozs7Ozs7SUNROUQsWUFDVSxRQUFpQixFQUNqQixpQkFBb0M7UUFEcEMsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBSTlDLGtCQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ2hDLE1BQU0sQ0FBdUIsdUJBQXVCLENBQUMsRUFDckQsR0FBRyxDQUFDLE1BQU07WUFDUixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDdkMsQ0FBQyxDQUNILENBQUM7S0FSRTs7O1lBTEwsVUFBVTs7O1lBUEYsT0FBTztZQUZQLGlCQUFpQjs7QUFpQnhCQTtJQURDLE1BQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQzs7d0RBTTFCOzs7Ozs7QUN0Qko7OztBQVNBO0lBQ0UsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7Q0FDOUI7QUFhRDs7OztJQUNFLFlBQVksVUFBNEI7UUFDdEMsVUFBVSxDQUFDLGFBQWEsQ0FBQztZQUN2QixpQ0FBaUMsRUFBRSxtQkFBbUI7U0FDdkQsQ0FBQyxDQUFDO0tBQ0o7OztZQWhCRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFVBQVUsQ0FBQyxRQUFRLEVBQUU7b0JBQ3JCLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO29CQUM3QyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUU7aUJBQzdCO2dCQUNELFlBQVksRUFBRSxVQUFVLEVBQUU7Z0JBQzFCLE9BQU8sRUFBRSxVQUFVLEVBQUU7Z0JBQ3JCLGVBQWUsRUFBRSxVQUFVLEVBQUU7Z0JBQzdCLFNBQVMsRUFBRSxDQUFDLGlCQUFpQixDQUFDO2FBQy9COzs7WUFuQlEsZ0JBQWdCOzs7Ozs7Ozs7Ozs7Ozs7In0=