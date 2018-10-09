/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*!
 * @license
 * Alfresco Example Content Application
 *
 * Copyright (C) 2005 - 2018 Alfresco Software Limited
 *
 * This file is part of the Alfresco Example Content Application.
 * If the software was purchased under a paid Alfresco license, the terms of
 * the paid license agreement will prevail.  Otherwise, the software is
 * provided under the following open source license terms:
 *
 * The Alfresco Example Content Application is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * The Alfresco Example Content Application is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with Alfresco. If not, see <http://www.gnu.org/licenses/>.
 */
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MinimalNodeEntryEntity } from 'alfresco-js-api';
import { AlfrescoApiService } from '@alfresco/adf-core';
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
        { type: Component, args: [{
                    selector: 'aca-monaco-view',
                    template: "<ngx-monaco-editor id=\"adf-monaco-file-editor\"\n                   class=\"adf-file-editor\"\n                   [options]=\"editorOptions\"\n                   [(ngModel)]=\"code\"\n                   (onInit)=\"onInit($event)\">\n</ngx-monaco-editor>",
                    encapsulation: ViewEncapsulation.None,
                    host: { 'class': 'aca-monaco-view' },
                    styles: [".adf-file-editor{height:100%}"]
                }] }
    ];
    MonacoViewComponent.ctorParameters = function () { return [
        { type: AlfrescoApiService }
    ]; };
    MonacoViewComponent.propDecorators = {
        url: [{ type: Input }],
        node: [{ type: Input }]
    };
    return MonacoViewComponent;
}());
export { MonacoViewComponent };
if (false) {
    /** @type {?} */
    MonacoViewComponent.prototype.url;
    /** @type {?} */
    MonacoViewComponent.prototype.node;
    /** @type {?} */
    MonacoViewComponent.prototype.editor;
    /** @type {?} */
    MonacoViewComponent.prototype.code;
    /** @type {?} */
    MonacoViewComponent.prototype.editorOptions;
    /** @type {?} */
    MonacoViewComponent.prototype.apiService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uYWNvLXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbW9uYWNvLWV4dGVuc2lvbi8iLCJzb3VyY2VzIjpbImxpYi9tb25hY28tdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQSxPQUFPLEVBQ0gsU0FBUyxFQUNULEtBQUssRUFFTCxpQkFBaUIsRUFDcEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFFdEQ7SUE2QkksNkJBQW9CLFVBQThCO1FBQTlCLGVBQVUsR0FBVixVQUFVLENBQW9CO1FBYmxELGtCQUFhLEdBQUc7WUFDWixLQUFLLEVBQUUsU0FBUztZQUNoQixRQUFRLEVBQUUsTUFBTTtZQUNoQixVQUFVLEVBQUUsSUFBSTtZQUNoQixhQUFhLEVBQUUsSUFBSTtZQUNuQixZQUFZLEVBQUUsSUFBSTtTQUNyQixDQUFDO0lBUUYsQ0FBQzs7Ozs7SUFORCxvQ0FBTTs7OztJQUFOLFVBQU8sTUFBTTtRQUNULElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7O0lBS0Qsd0NBQVU7OztJQUFWO1FBQUEsaUJBSUM7UUFIRyxVQUFVLENBQUM7WUFDUCxLQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2hFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNaLENBQUM7Ozs7SUFFRCxzQ0FBUTs7O0lBQVI7UUFBQSxpQkFPQztRQU5HLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDdEQsVUFBQyxXQUFXO1lBQ1IsS0FBSSxDQUFDLElBQUksR0FBSSxXQUFXLENBQUM7UUFDN0IsQ0FBQyxFQUNELFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBaEIsQ0FBZ0IsQ0FDMUIsQ0FBQztJQUNOLENBQUM7O2dCQTdDSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsMFFBQTJDO29CQUUzQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLGlCQUFpQixFQUFDOztpQkFDckM7OztnQkFSTyxrQkFBa0I7OztzQkFXckIsS0FBSzt1QkFHTCxLQUFLOztJQWtDViwwQkFBQztDQUFBLEFBOUNELElBOENDO1NBdkNZLG1CQUFtQjs7O0lBRTVCLGtDQUNZOztJQUVaLG1DQUM2Qjs7SUFDN0IscUNBQVk7O0lBQ1osbUNBQVU7O0lBQ1YsNENBTUU7O0lBT1UseUNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBAbGljZW5zZVxuICogQWxmcmVzY28gRXhhbXBsZSBDb250ZW50IEFwcGxpY2F0aW9uXG4gKlxuICogQ29weXJpZ2h0IChDKSAyMDA1IC0gMjAxOCBBbGZyZXNjbyBTb2Z0d2FyZSBMaW1pdGVkXG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIEFsZnJlc2NvIEV4YW1wbGUgQ29udGVudCBBcHBsaWNhdGlvbi5cbiAqIElmIHRoZSBzb2Z0d2FyZSB3YXMgcHVyY2hhc2VkIHVuZGVyIGEgcGFpZCBBbGZyZXNjbyBsaWNlbnNlLCB0aGUgdGVybXMgb2ZcbiAqIHRoZSBwYWlkIGxpY2Vuc2UgYWdyZWVtZW50IHdpbGwgcHJldmFpbC4gIE90aGVyd2lzZSwgdGhlIHNvZnR3YXJlIGlzXG4gKiBwcm92aWRlZCB1bmRlciB0aGUgZm9sbG93aW5nIG9wZW4gc291cmNlIGxpY2Vuc2UgdGVybXM6XG4gKlxuICogVGhlIEFsZnJlc2NvIEV4YW1wbGUgQ29udGVudCBBcHBsaWNhdGlvbiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFRoZSBBbGZyZXNjbyBFeGFtcGxlIENvbnRlbnQgQXBwbGljYXRpb24gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggQWxmcmVzY28uIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuXG5pbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBJbnB1dCxcbiAgICBPbkluaXQsXG4gICAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01pbmltYWxOb2RlRW50cnlFbnRpdHl9IGZyb20gJ2FsZnJlc2NvLWpzLWFwaSc7XG5pbXBvcnQge0FsZnJlc2NvQXBpU2VydmljZX0gZnJvbSAnQGFsZnJlc2NvL2FkZi1jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhY2EtbW9uYWNvLXZpZXcnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9tb25hY28tdmlldy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbW9uYWNvLXZpZXcuY29tcG9uZW50LnNjc3MnXSxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIGhvc3Q6IHsnY2xhc3MnOiAnYWNhLW1vbmFjby12aWV3J31cbn0pXG5leHBvcnQgY2xhc3MgTW9uYWNvVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBASW5wdXQoKVxuICAgIHVybDogc3RyaW5nO1xuXG4gICAgQElucHV0KClcbiAgICBub2RlOiBNaW5pbWFsTm9kZUVudHJ5RW50aXR5O1xuICAgIGVkaXRvcjogYW55O1xuICAgIGNvZGU6IGFueTtcbiAgICBlZGl0b3JPcHRpb25zID0ge1xuICAgICAgICB0aGVtZTogJ3ZzLWRhcmsnLFxuICAgICAgICBsYW5ndWFnZTogJ2pzb24nLFxuICAgICAgICBhdXRvSW5kZW50OiB0cnVlLFxuICAgICAgICBmb3JtYXRPblBhc3RlOiB0cnVlLFxuICAgICAgICBmb3JtYXRPblR5cGU6IHRydWVcbiAgICB9O1xuXG4gICAgb25Jbml0KGVkaXRvcikge1xuICAgICAgICB0aGlzLmVkaXRvciA9IGVkaXRvcjtcbiAgICAgICAgdGhpcy5pbmRlbnRDb2RlKCk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGlTZXJ2aWNlOiBBbGZyZXNjb0FwaVNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBpbmRlbnRDb2RlKCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZWRpdG9yLmdldEFjdGlvbignZWRpdG9yLmFjdGlvbi5mb3JtYXREb2N1bWVudCcpLnJ1bigpO1xuICAgICAgICB9LCAzMDApO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmFwaVNlcnZpY2Uubm9kZXNBcGkuZ2V0RmlsZUNvbnRlbnQodGhpcy5ub2RlLmlkKS50aGVuKFxuICAgICAgICAgICAgKGZpbGVDb250ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2RlICA9IGZpbGVDb250ZW50O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVyciA9PiBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICk7XG4gICAgfVxufVxuIl19