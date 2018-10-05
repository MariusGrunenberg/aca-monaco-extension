import { Component, Input, ViewEncapsulation, NgModule } from '@angular/core';
import 'alfresco-js-api';
import { AlfrescoApiService, CoreModule } from '@alfresco/adf-core';
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
        this.apiService.nodesApi.getFileContent(this.node.id).then((fileContent) => {
            this.code = fileContent;
        }, err => console.log(err));
    }
}
MonacoViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'aca-monaco-view',
                template: "<ngx-monaco-editor id=\"adf-monaco-file-editor\"\n                   class=\"adf-file-editor\"\n                   [options]=\"editorOptions\"\n                   [(ngModel)]=\"code\"\n                   (onInit)=\"onInit($event)\">\n</ngx-monaco-editor>",
                encapsulation: ViewEncapsulation.None,
                host: { 'class': 'aca-monaco-view' },
                styles: [""]
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
/**
 * @return {?}
 */
function components() {
    return [
        MonacoViewComponent
    ];
}
class MonacModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { MonacoViewComponent, components, MonacModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uYWNvLWV4dGVuc2lvbi5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbW9uYWNvLWV4dGVuc2lvbi9saWIvbW9uYWNvLXZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9tb25hY28tZXh0ZW5zaW9uL2xpYi9tb25hY28tdmlldy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBAbGljZW5zZVxuICogQWxmcmVzY28gRXhhbXBsZSBDb250ZW50IEFwcGxpY2F0aW9uXG4gKlxuICogQ29weXJpZ2h0IChDKSAyMDA1IC0gMjAxOCBBbGZyZXNjbyBTb2Z0d2FyZSBMaW1pdGVkXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIEFsZnJlc2NvIEV4YW1wbGUgQ29udGVudCBBcHBsaWNhdGlvbi5cbiAqIElmIHRoZSBzb2Z0d2FyZSB3YXMgcHVyY2hhc2VkIHVuZGVyIGEgcGFpZCBBbGZyZXNjbyBsaWNlbnNlLCB0aGUgdGVybXMgb2ZcbiAqIHRoZSBwYWlkIGxpY2Vuc2UgYWdyZWVtZW50IHdpbGwgcHJldmFpbC4gIE90aGVyd2lzZSwgdGhlIHNvZnR3YXJlIGlzXG4gKiBwcm92aWRlZCB1bmRlciB0aGUgZm9sbG93aW5nIG9wZW4gc291cmNlIGxpY2Vuc2UgdGVybXM6XG4gKlxuICogVGhlIEFsZnJlc2NvIEV4YW1wbGUgQ29udGVudCBBcHBsaWNhdGlvbiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFRoZSBBbGZyZXNjbyBFeGFtcGxlIENvbnRlbnQgQXBwbGljYXRpb24gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggQWxmcmVzY28uIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuXG5pbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBJbnB1dCxcbiAgICBPbkluaXQsXG4gICAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01pbmltYWxOb2RlRW50cnlFbnRpdHl9IGZyb20gJ2FsZnJlc2NvLWpzLWFwaSc7XG5pbXBvcnQge0FsZnJlc2NvQXBpU2VydmljZX0gZnJvbSAnQGFsZnJlc2NvL2FkZi1jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhY2EtbW9uYWNvLXZpZXcnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9tb25hY28tdmlldy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbW9uYWNvLXZpZXcuY29tcG9uZW50LnNjc3MnXSxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIGhvc3Q6IHsnY2xhc3MnOiAnYWNhLW1vbmFjby12aWV3J31cbn0pXG5leHBvcnQgY2xhc3MgTW9uYWNvVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBASW5wdXQoKVxuICAgIHVybDogc3RyaW5nO1xuXG4gICAgQElucHV0KClcbiAgICBub2RlOiBNaW5pbWFsTm9kZUVudHJ5RW50aXR5O1xuICAgIGVkaXRvcjogYW55O1xuICAgIGNvZGU6IGFueTtcbiAgICBlZGl0b3JPcHRpb25zID0ge1xuICAgICAgICB0aGVtZTogJ3ZzLWRhcmsnLFxuICAgICAgICBsYW5ndWFnZTogJ2pzb24nLFxuICAgICAgICBhdXRvSW5kZW50OiB0cnVlLFxuICAgICAgICBmb3JtYXRPblBhc3RlOiB0cnVlLFxuICAgICAgICBmb3JtYXRPblR5cGU6IHRydWVcbiAgICB9O1xuXG4gICAgb25Jbml0KGVkaXRvcikge1xuICAgICAgICB0aGlzLmVkaXRvciA9IGVkaXRvcjtcbiAgICAgICAgdGhpcy5pbmRlbnRDb2RlKCk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGlTZXJ2aWNlOiBBbGZyZXNjb0FwaVNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBpbmRlbnRDb2RlKCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZWRpdG9yLmdldEFjdGlvbignZWRpdG9yLmFjdGlvbi5mb3JtYXREb2N1bWVudCcpLnJ1bigpO1xuICAgICAgICB9LCAzMDApO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmFwaVNlcnZpY2Uubm9kZXNBcGkuZ2V0RmlsZUNvbnRlbnQodGhpcy5ub2RlLmlkKS50aGVuKFxuICAgICAgICAgICAgKGZpbGVDb250ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2RlICA9IGZpbGVDb250ZW50O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVyciA9PiBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvcmVNb2R1bGV9IGZyb20gJ0BhbGZyZXNjby9hZGYtY29yZSc7XG5pbXBvcnQge0V4dGVuc2lvblNlcnZpY2V9IGZyb20gJ0BhbGZyZXNjby9hZGYtZXh0ZW5zaW9ucyc7XG5pbXBvcnQge01vbmFjb1ZpZXdDb21wb25lbnR9IGZyb20gJy4vbW9uYWNvLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IE1vbmFjb0VkaXRvck1vZHVsZSB9IGZyb20gJ25neC1tb25hY28tZWRpdG9yJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvbmVudHMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICBNb25hY29WaWV3Q29tcG9uZW50XG4gICAgXTtcbn1cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvcmVNb2R1bGUuZm9yQ2hpbGQoKSxcbiAgICAgICAgTW9uYWNvRWRpdG9yTW9kdWxlLmZvclJvb3QoKVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBjb21wb25lbnRzKCksXG4gICAgZXhwb3J0czogY29tcG9uZW50cygpLFxuICAgIGVudHJ5Q29tcG9uZW50czogY29tcG9uZW50cygpXG59KVxuZXhwb3J0IGNsYXNzIE1vbmFjTW9kdWxlIHtcbiAgICBjb25zdHJ1Y3RvcihleHRlbnNpb25zOiBFeHRlbnNpb25TZXJ2aWNlKSB7XG4gICAgICAgIGV4dGVuc2lvbnMuc2V0Q29tcG9uZW50cyh7XG4gICAgICAgICAgICAnbW9uYWNvLWV4dGVuc2lvbi5tYWluLmNvbXBvbmVudCc6IE1vbmFjb1ZpZXdDb21wb25lbnQsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQStESSxZQUFvQixVQUE4QjtRQUE5QixlQUFVLEdBQVYsVUFBVSxDQUFvQjtRQWJsRCxrQkFBYSxHQUFHO1lBQ1osS0FBSyxFQUFFLFNBQVM7WUFDaEIsUUFBUSxFQUFFLE1BQU07WUFDaEIsVUFBVSxFQUFFLElBQUk7WUFDaEIsYUFBYSxFQUFFLElBQUk7WUFDbkIsWUFBWSxFQUFFLElBQUk7U0FDckIsQ0FBQztLQVFEOzs7OztJQU5ELE1BQU0sQ0FBQyxNQUFNO1FBQ1QsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0tBQ3JCOzs7O0lBS0QsVUFBVTtRQUNOLFVBQVUsQ0FBQztZQUNQLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLDhCQUE4QixDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDL0QsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUNYOzs7O0lBRUQsUUFBUTtRQUNKLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDdEQsQ0FBQyxXQUFXO1lBQ1IsSUFBSSxDQUFDLElBQUksR0FBSSxXQUFXLENBQUM7U0FDNUIsRUFDRCxHQUFHLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FDMUIsQ0FBQztLQUNMOzs7WUE3Q0osU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLDBRQUEyQztnQkFFM0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBQzs7YUFDckM7OztZQVJPLGtCQUFrQjs7O2tCQVdyQixLQUFLO21CQUdMLEtBQUs7Ozs7Ozs7QUM5Q1Y7OztBQU1BO0lBQ0ksT0FBTztRQUNKLG1CQUFtQjtLQUNyQixDQUFDO0NBQ0w7QUFXRDs7OztJQUNJLFlBQVksVUFBNEI7UUFDcEMsVUFBVSxDQUFDLGFBQWEsQ0FBQztZQUNyQixpQ0FBaUMsRUFBRSxtQkFBbUI7U0FDekQsQ0FBQyxDQUFDO0tBQ047OztZQWRKLFFBQVEsU0FBQztnQkFDTixPQUFPLEVBQUU7b0JBQ0wsVUFBVSxDQUFDLFFBQVEsRUFBRTtvQkFDckIsa0JBQWtCLENBQUMsT0FBTyxFQUFFO2lCQUMvQjtnQkFDRCxZQUFZLEVBQUUsVUFBVSxFQUFFO2dCQUMxQixPQUFPLEVBQUUsVUFBVSxFQUFFO2dCQUNyQixlQUFlLEVBQUUsVUFBVSxFQUFFO2FBQ2hDOzs7WUFsQk8sZ0JBQWdCOzs7Ozs7Ozs7Ozs7Ozs7In0=