(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alfresco/adf-core'), require('@alfresco/adf-extensions'), require('ngx-monaco-editor')) :
    typeof define === 'function' && define.amd ? define('monaco-extension', ['exports', '@angular/core', '@alfresco/adf-core', '@alfresco/adf-extensions', 'ngx-monaco-editor'], factory) :
    (factory((global['monaco-extension'] = {}),global.ng.core,global['@alfresco/adf-core'],global['@alfresco/adf-extensions'],global['ngx-monaco-editor']));
}(this, (function (exports,core,adfCore,adfExtensions,ngxMonacoEditor) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var MonacoViewComponent = /** @class */ (function () {
        function MonacoViewComponent(apiService) {
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
        MonacoViewComponent.prototype.onInit = /**
         * @param {?} editor
         * @return {?}
         */
            function (editor) {
                this.editor = editor;
                this.indentCode();
            };
        /**
         * @return {?}
         */
        MonacoViewComponent.prototype.indentCode = /**
         * @return {?}
         */
            function () {
                var _this = this;
                setTimeout(function () {
                    _this.editor.getAction('editor.action.formatDocument').run();
                }, 300);
            };
        /**
         * @return {?}
         */
        MonacoViewComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.apiService.nodesApi.getFileContent(this.node.id).then(function (fileContent) {
                    _this.code = fileContent;
                }, function (err) { return console.log(err); });
            };
        MonacoViewComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aca-monaco-view',
                        template: "<ngx-monaco-editor id=\"adf-monaco-file-editor\"\n                   class=\"adf-file-editor\"\n                   [options]=\"editorOptions\"\n                   [(ngModel)]=\"code\"\n                   (onInit)=\"onInit($event)\">\n</ngx-monaco-editor>",
                        encapsulation: core.ViewEncapsulation.None,
                        host: { 'class': 'aca-monaco-view' },
                        styles: [""]
                    }] }
        ];
        MonacoViewComponent.ctorParameters = function () {
            return [
                { type: adfCore.AlfrescoApiService }
            ];
        };
        MonacoViewComponent.propDecorators = {
            url: [{ type: core.Input }],
            node: [{ type: core.Input }]
        };
        return MonacoViewComponent;
    }());

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
    var MonacModule = /** @class */ (function () {
        function MonacModule(extensions) {
            extensions.setComponents({
                'monaco-extension.main.component': MonacoViewComponent,
            });
        }
        MonacModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            adfCore.CoreModule.forChild(),
                            ngxMonacoEditor.MonacoEditorModule.forRoot()
                        ],
                        declarations: components(),
                        exports: components(),
                        entryComponents: components()
                    },] }
        ];
        MonacModule.ctorParameters = function () {
            return [
                { type: adfExtensions.ExtensionService }
            ];
        };
        return MonacModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.MonacoViewComponent = MonacoViewComponent;
    exports.components = components;
    exports.MonacModule = MonacModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uYWNvLWV4dGVuc2lvbi51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL21vbmFjby1leHRlbnNpb24vbGliL21vbmFjby12aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vbW9uYWNvLWV4dGVuc2lvbi9saWIvbW9uYWNvLXZpZXcubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQGxpY2Vuc2VcbiAqIEFsZnJlc2NvIEV4YW1wbGUgQ29udGVudCBBcHBsaWNhdGlvblxuICpcbiAqIENvcHlyaWdodCAoQykgMjAwNSAtIDIwMTggQWxmcmVzY28gU29mdHdhcmUgTGltaXRlZFxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBBbGZyZXNjbyBFeGFtcGxlIENvbnRlbnQgQXBwbGljYXRpb24uXG4gKiBJZiB0aGUgc29mdHdhcmUgd2FzIHB1cmNoYXNlZCB1bmRlciBhIHBhaWQgQWxmcmVzY28gbGljZW5zZSwgdGhlIHRlcm1zIG9mXG4gKiB0aGUgcGFpZCBsaWNlbnNlIGFncmVlbWVudCB3aWxsIHByZXZhaWwuICBPdGhlcndpc2UsIHRoZSBzb2Z0d2FyZSBpc1xuICogcHJvdmlkZWQgdW5kZXIgdGhlIGZvbGxvd2luZyBvcGVuIHNvdXJjZSBsaWNlbnNlIHRlcm1zOlxuICpcbiAqIFRoZSBBbGZyZXNjbyBFeGFtcGxlIENvbnRlbnQgQXBwbGljYXRpb24gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBUaGUgQWxmcmVzY28gRXhhbXBsZSBDb250ZW50IEFwcGxpY2F0aW9uIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIEFsZnJlc2NvLiBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cblxuaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgSW5wdXQsXG4gICAgT25Jbml0LFxuICAgIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNaW5pbWFsTm9kZUVudHJ5RW50aXR5fSBmcm9tICdhbGZyZXNjby1qcy1hcGknO1xuaW1wb3J0IHtBbGZyZXNjb0FwaVNlcnZpY2V9IGZyb20gJ0BhbGZyZXNjby9hZGYtY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYWNhLW1vbmFjby12aWV3JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbW9uYWNvLXZpZXcuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL21vbmFjby12aWV3LmNvbXBvbmVudC5zY3NzJ10sXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICBob3N0OiB7J2NsYXNzJzogJ2FjYS1tb25hY28tdmlldyd9XG59KVxuZXhwb3J0IGNsYXNzIE1vbmFjb1ZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQElucHV0KClcbiAgICB1cmw6IHN0cmluZztcblxuICAgIEBJbnB1dCgpXG4gICAgbm9kZTogTWluaW1hbE5vZGVFbnRyeUVudGl0eTtcbiAgICBlZGl0b3I6IGFueTtcbiAgICBjb2RlOiBhbnk7XG4gICAgZWRpdG9yT3B0aW9ucyA9IHtcbiAgICAgICAgdGhlbWU6ICd2cy1kYXJrJyxcbiAgICAgICAgbGFuZ3VhZ2U6ICdqc29uJyxcbiAgICAgICAgYXV0b0luZGVudDogdHJ1ZSxcbiAgICAgICAgZm9ybWF0T25QYXN0ZTogdHJ1ZSxcbiAgICAgICAgZm9ybWF0T25UeXBlOiB0cnVlXG4gICAgfTtcblxuICAgIG9uSW5pdChlZGl0b3IpIHtcbiAgICAgICAgdGhpcy5lZGl0b3IgPSBlZGl0b3I7XG4gICAgICAgIHRoaXMuaW5kZW50Q29kZSgpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpU2VydmljZTogQWxmcmVzY29BcGlTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgaW5kZW50Q29kZSgpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVkaXRvci5nZXRBY3Rpb24oJ2VkaXRvci5hY3Rpb24uZm9ybWF0RG9jdW1lbnQnKS5ydW4oKTtcbiAgICAgICAgfSwgMzAwKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5hcGlTZXJ2aWNlLm5vZGVzQXBpLmdldEZpbGVDb250ZW50KHRoaXMubm9kZS5pZCkudGhlbihcbiAgICAgICAgICAgIChmaWxlQ29udGVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY29kZSAgPSBmaWxlQ29udGVudDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnIgPT4gY29uc29sZS5sb2coZXJyKVxuICAgICAgICApO1xuICAgIH1cbn1cbiIsImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb3JlTW9kdWxlfSBmcm9tICdAYWxmcmVzY28vYWRmLWNvcmUnO1xuaW1wb3J0IHtFeHRlbnNpb25TZXJ2aWNlfSBmcm9tICdAYWxmcmVzY28vYWRmLWV4dGVuc2lvbnMnO1xuaW1wb3J0IHtNb25hY29WaWV3Q29tcG9uZW50fSBmcm9tICcuL21vbmFjby12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb25hY29FZGl0b3JNb2R1bGUgfSBmcm9tICduZ3gtbW9uYWNvLWVkaXRvcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wb25lbnRzKCkge1xuICAgIHJldHVybiBbXG4gICAgICAgTW9uYWNvVmlld0NvbXBvbmVudFxuICAgIF07XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb3JlTW9kdWxlLmZvckNoaWxkKCksXG4gICAgICAgIE1vbmFjb0VkaXRvck1vZHVsZS5mb3JSb290KClcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogY29tcG9uZW50cygpLFxuICAgIGV4cG9ydHM6IGNvbXBvbmVudHMoKSxcbiAgICBlbnRyeUNvbXBvbmVudHM6IGNvbXBvbmVudHMoKVxufSlcbmV4cG9ydCBjbGFzcyBNb25hY01vZHVsZSB7XG4gICAgY29uc3RydWN0b3IoZXh0ZW5zaW9uczogRXh0ZW5zaW9uU2VydmljZSkge1xuICAgICAgICBleHRlbnNpb25zLnNldENvbXBvbmVudHMoe1xuICAgICAgICAgICAgJ21vbmFjby1leHRlbnNpb24ubWFpbi5jb21wb25lbnQnOiBNb25hY29WaWV3Q29tcG9uZW50LFxuICAgICAgICB9KTtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiVmlld0VuY2Fwc3VsYXRpb24iLCJBbGZyZXNjb0FwaVNlcnZpY2UiLCJJbnB1dCIsIk5nTW9kdWxlIiwiQ29yZU1vZHVsZSIsIk1vbmFjb0VkaXRvck1vZHVsZSIsIkV4dGVuc2lvblNlcnZpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O1FBK0RJLDZCQUFvQixVQUE4QjtZQUE5QixlQUFVLEdBQVYsVUFBVSxDQUFvQjtZQWJsRCxrQkFBYSxHQUFHO2dCQUNaLEtBQUssRUFBRSxTQUFTO2dCQUNoQixRQUFRLEVBQUUsTUFBTTtnQkFDaEIsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLGFBQWEsRUFBRSxJQUFJO2dCQUNuQixZQUFZLEVBQUUsSUFBSTthQUNyQixDQUFDO1NBUUQ7Ozs7O1FBTkQsb0NBQU07Ozs7WUFBTixVQUFPLE1BQU07Z0JBQ1QsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzthQUNyQjs7OztRQUtELHdDQUFVOzs7WUFBVjtnQkFBQSxpQkFJQztnQkFIRyxVQUFVLENBQUM7b0JBQ1AsS0FBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsOEJBQThCLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztpQkFDL0QsRUFBRSxHQUFHLENBQUMsQ0FBQzthQUNYOzs7O1FBRUQsc0NBQVE7OztZQUFSO2dCQUFBLGlCQU9DO2dCQU5HLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDdEQsVUFBQyxXQUFXO29CQUNSLEtBQUksQ0FBQyxJQUFJLEdBQUksV0FBVyxDQUFDO2lCQUM1QixFQUNELFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBQSxDQUMxQixDQUFDO2FBQ0w7O29CQTdDSkEsY0FBUyxTQUFDO3dCQUNQLFFBQVEsRUFBRSxpQkFBaUI7d0JBQzNCLDBRQUEyQzt3QkFFM0MsYUFBYSxFQUFFQyxzQkFBaUIsQ0FBQyxJQUFJO3dCQUNyQyxJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUM7O3FCQUNyQzs7Ozt3QkFST0MsMEJBQWtCOzs7OzBCQVdyQkMsVUFBSzsyQkFHTEEsVUFBSzs7UUFrQ1YsMEJBQUM7S0E5Q0Q7Ozs7OztBQ2xDQTs7O0FBTUE7UUFDSSxPQUFPO1lBQ0osbUJBQW1CO1NBQ3JCLENBQUM7SUFDTixDQUFDO0FBRUQ7UUFVSSxxQkFBWSxVQUE0QjtZQUNwQyxVQUFVLENBQUMsYUFBYSxDQUFDO2dCQUNyQixpQ0FBaUMsRUFBRSxtQkFBbUI7YUFDekQsQ0FBQyxDQUFDO1NBQ047O29CQWRKQyxhQUFRLFNBQUM7d0JBQ04sT0FBTyxFQUFFOzRCQUNMQyxrQkFBVSxDQUFDLFFBQVEsRUFBRTs0QkFDckJDLGtDQUFrQixDQUFDLE9BQU8sRUFBRTt5QkFDL0I7d0JBQ0QsWUFBWSxFQUFFLFVBQVUsRUFBRTt3QkFDMUIsT0FBTyxFQUFFLFVBQVUsRUFBRTt3QkFDckIsZUFBZSxFQUFFLFVBQVUsRUFBRTtxQkFDaEM7Ozs7d0JBbEJPQyw4QkFBZ0I7OztRQXlCeEIsa0JBQUM7S0FmRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9