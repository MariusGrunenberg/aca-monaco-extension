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
                styles: [".adf-file-editor{height:100%}"]
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
                imports: [CoreModule.forChild(), MonacoEditorModule.forRoot()],
                declarations: components(),
                exports: components(),
                entryComponents: components()
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

export { MonacoViewComponent, components, AcaMonacoModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uYWNvLWV4dGVuc2lvbi5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbW9uYWNvLWV4dGVuc2lvbi9saWIvbW9uYWNvLXZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9tb25hY28tZXh0ZW5zaW9uL2xpYi9tb25hY28tdmlldy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBAbGljZW5zZVxuICogQWxmcmVzY28gRXhhbXBsZSBDb250ZW50IEFwcGxpY2F0aW9uXG4gKlxuICogQ29weXJpZ2h0IChDKSAyMDA1IC0gMjAxOCBBbGZyZXNjbyBTb2Z0d2FyZSBMaW1pdGVkXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIEFsZnJlc2NvIEV4YW1wbGUgQ29udGVudCBBcHBsaWNhdGlvbi5cbiAqIElmIHRoZSBzb2Z0d2FyZSB3YXMgcHVyY2hhc2VkIHVuZGVyIGEgcGFpZCBBbGZyZXNjbyBsaWNlbnNlLCB0aGUgdGVybXMgb2ZcbiAqIHRoZSBwYWlkIGxpY2Vuc2UgYWdyZWVtZW50IHdpbGwgcHJldmFpbC4gIE90aGVyd2lzZSwgdGhlIHNvZnR3YXJlIGlzXG4gKiBwcm92aWRlZCB1bmRlciB0aGUgZm9sbG93aW5nIG9wZW4gc291cmNlIGxpY2Vuc2UgdGVybXM6XG4gKlxuICogVGhlIEFsZnJlc2NvIEV4YW1wbGUgQ29udGVudCBBcHBsaWNhdGlvbiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFRoZSBBbGZyZXNjbyBFeGFtcGxlIENvbnRlbnQgQXBwbGljYXRpb24gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggQWxmcmVzY28uIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuXG5pbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBJbnB1dCxcbiAgICBPbkluaXQsXG4gICAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01pbmltYWxOb2RlRW50cnlFbnRpdHl9IGZyb20gJ2FsZnJlc2NvLWpzLWFwaSc7XG5pbXBvcnQge0FsZnJlc2NvQXBpU2VydmljZX0gZnJvbSAnQGFsZnJlc2NvL2FkZi1jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhY2EtbW9uYWNvLXZpZXcnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9tb25hY28tdmlldy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbW9uYWNvLXZpZXcuY29tcG9uZW50LnNjc3MnXSxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIGhvc3Q6IHsnY2xhc3MnOiAnYWNhLW1vbmFjby12aWV3J31cbn0pXG5leHBvcnQgY2xhc3MgTW9uYWNvVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBASW5wdXQoKVxuICAgIHVybDogc3RyaW5nO1xuXG4gICAgQElucHV0KClcbiAgICBub2RlOiBNaW5pbWFsTm9kZUVudHJ5RW50aXR5O1xuICAgIGVkaXRvcjogYW55O1xuICAgIGNvZGU6IGFueTtcbiAgICBlZGl0b3JPcHRpb25zID0ge1xuICAgICAgICB0aGVtZTogJ3ZzLWRhcmsnLFxuICAgICAgICBsYW5ndWFnZTogJ2pzb24nLFxuICAgICAgICBhdXRvSW5kZW50OiB0cnVlLFxuICAgICAgICBmb3JtYXRPblBhc3RlOiB0cnVlLFxuICAgICAgICBmb3JtYXRPblR5cGU6IHRydWVcbiAgICB9O1xuXG4gICAgb25Jbml0KGVkaXRvcikge1xuICAgICAgICB0aGlzLmVkaXRvciA9IGVkaXRvcjtcbiAgICAgICAgdGhpcy5pbmRlbnRDb2RlKCk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGlTZXJ2aWNlOiBBbGZyZXNjb0FwaVNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBpbmRlbnRDb2RlKCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZWRpdG9yLmdldEFjdGlvbignZWRpdG9yLmFjdGlvbi5mb3JtYXREb2N1bWVudCcpLnJ1bigpO1xuICAgICAgICB9LCAzMDApO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmFwaVNlcnZpY2Uubm9kZXNBcGkuZ2V0RmlsZUNvbnRlbnQodGhpcy5ub2RlLmlkKS50aGVuKFxuICAgICAgICAgICAgKGZpbGVDb250ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2RlICA9IGZpbGVDb250ZW50O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVyciA9PiBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tICdAYWxmcmVzY28vYWRmLWNvcmUnO1xuaW1wb3J0IHsgRXh0ZW5zaW9uU2VydmljZSB9IGZyb20gJ0BhbGZyZXNjby9hZGYtZXh0ZW5zaW9ucyc7XG5pbXBvcnQgeyBNb25hY29WaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9tb25hY28tdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9uYWNvRWRpdG9yTW9kdWxlIH0gZnJvbSAnbmd4LW1vbmFjby1lZGl0b3InO1xuXG5leHBvcnQgZnVuY3Rpb24gY29tcG9uZW50cygpIHtcbiAgcmV0dXJuIFtNb25hY29WaWV3Q29tcG9uZW50XTtcbn1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvcmVNb2R1bGUuZm9yQ2hpbGQoKSwgTW9uYWNvRWRpdG9yTW9kdWxlLmZvclJvb3QoKV0sXG4gIGRlY2xhcmF0aW9uczogY29tcG9uZW50cygpLFxuICBleHBvcnRzOiBjb21wb25lbnRzKCksXG4gIGVudHJ5Q29tcG9uZW50czogY29tcG9uZW50cygpXG59KVxuZXhwb3J0IGNsYXNzIEFjYU1vbmFjb01vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKGV4dGVuc2lvbnM6IEV4dGVuc2lvblNlcnZpY2UpIHtcbiAgICBleHRlbnNpb25zLnNldENvbXBvbmVudHMoe1xuICAgICAgJ21vbmFjby1leHRlbnNpb24ubWFpbi5jb21wb25lbnQnOiBNb25hY29WaWV3Q29tcG9uZW50XG4gICAgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQStESSxZQUFvQixVQUE4QjtRQUE5QixlQUFVLEdBQVYsVUFBVSxDQUFvQjtRQWJsRCxrQkFBYSxHQUFHO1lBQ1osS0FBSyxFQUFFLFNBQVM7WUFDaEIsUUFBUSxFQUFFLE1BQU07WUFDaEIsVUFBVSxFQUFFLElBQUk7WUFDaEIsYUFBYSxFQUFFLElBQUk7WUFDbkIsWUFBWSxFQUFFLElBQUk7U0FDckIsQ0FBQztLQVFEOzs7OztJQU5ELE1BQU0sQ0FBQyxNQUFNO1FBQ1QsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0tBQ3JCOzs7O0lBS0QsVUFBVTtRQUNOLFVBQVUsQ0FBQztZQUNQLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLDhCQUE4QixDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDL0QsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUNYOzs7O0lBRUQsUUFBUTtRQUNKLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDdEQsQ0FBQyxXQUFXO1lBQ1IsSUFBSSxDQUFDLElBQUksR0FBSSxXQUFXLENBQUM7U0FDNUIsRUFDRCxHQUFHLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FDMUIsQ0FBQztLQUNMOzs7WUE3Q0osU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLDBRQUEyQztnQkFFM0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBQzs7YUFDckM7OztZQVJPLGtCQUFrQjs7O2tCQVdyQixLQUFLO21CQUdMLEtBQUs7Ozs7Ozs7QUM5Q1Y7OztBQU1BO0lBQ0UsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7Q0FDOUI7QUFRRDs7OztJQUNFLFlBQVksVUFBNEI7UUFDdEMsVUFBVSxDQUFDLGFBQWEsQ0FBQztZQUN2QixpQ0FBaUMsRUFBRSxtQkFBbUI7U0FDdkQsQ0FBQyxDQUFDO0tBQ0o7OztZQVhGLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLEVBQUUsa0JBQWtCLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQzlELFlBQVksRUFBRSxVQUFVLEVBQUU7Z0JBQzFCLE9BQU8sRUFBRSxVQUFVLEVBQUU7Z0JBQ3JCLGVBQWUsRUFBRSxVQUFVLEVBQUU7YUFDOUI7OztZQWJRLGdCQUFnQjs7Ozs7Ozs7Ozs7Ozs7OyJ9