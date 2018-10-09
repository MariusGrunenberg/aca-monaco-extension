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
export class MonacoViewComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uYWNvLXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbW9uYWNvLWV4dGVuc2lvbi8iLCJzb3VyY2VzIjpbImxpYi9tb25hY28tdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQSxPQUFPLEVBQ0gsU0FBUyxFQUNULEtBQUssRUFFTCxpQkFBaUIsRUFDcEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFTdEQsTUFBTTs7OztJQXNCRixZQUFvQixVQUE4QjtRQUE5QixlQUFVLEdBQVYsVUFBVSxDQUFvQjtRQWJsRCxrQkFBYSxHQUFHO1lBQ1osS0FBSyxFQUFFLFNBQVM7WUFDaEIsUUFBUSxFQUFFLE1BQU07WUFDaEIsVUFBVSxFQUFFLElBQUk7WUFDaEIsYUFBYSxFQUFFLElBQUk7WUFDbkIsWUFBWSxFQUFFLElBQUk7U0FDckIsQ0FBQztJQVFGLENBQUM7Ozs7O0lBTkQsTUFBTSxDQUFDLE1BQU07UUFDVCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7OztJQUtELFVBQVU7UUFDTixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ1osSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsOEJBQThCLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNoRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDWixDQUFDOzs7O0lBRUQsUUFBUTtRQUNKLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDdEQsQ0FBQyxXQUFXLEVBQUUsRUFBRTtZQUNaLElBQUksQ0FBQyxJQUFJLEdBQUksV0FBVyxDQUFDO1FBQzdCLENBQUMsRUFDRCxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQzFCLENBQUM7SUFDTixDQUFDOzs7WUE3Q0osU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLDBRQUEyQztnQkFFM0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBQzs7YUFDckM7OztZQVJPLGtCQUFrQjs7O2tCQVdyQixLQUFLO21CQUdMLEtBQUs7Ozs7SUFITixrQ0FDWTs7SUFFWixtQ0FDNkI7O0lBQzdCLHFDQUFZOztJQUNaLG1DQUFVOztJQUNWLDRDQU1FOztJQU9VLHlDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQGxpY2Vuc2VcbiAqIEFsZnJlc2NvIEV4YW1wbGUgQ29udGVudCBBcHBsaWNhdGlvblxuICpcbiAqIENvcHlyaWdodCAoQykgMjAwNSAtIDIwMTggQWxmcmVzY28gU29mdHdhcmUgTGltaXRlZFxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBBbGZyZXNjbyBFeGFtcGxlIENvbnRlbnQgQXBwbGljYXRpb24uXG4gKiBJZiB0aGUgc29mdHdhcmUgd2FzIHB1cmNoYXNlZCB1bmRlciBhIHBhaWQgQWxmcmVzY28gbGljZW5zZSwgdGhlIHRlcm1zIG9mXG4gKiB0aGUgcGFpZCBsaWNlbnNlIGFncmVlbWVudCB3aWxsIHByZXZhaWwuICBPdGhlcndpc2UsIHRoZSBzb2Z0d2FyZSBpc1xuICogcHJvdmlkZWQgdW5kZXIgdGhlIGZvbGxvd2luZyBvcGVuIHNvdXJjZSBsaWNlbnNlIHRlcm1zOlxuICpcbiAqIFRoZSBBbGZyZXNjbyBFeGFtcGxlIENvbnRlbnQgQXBwbGljYXRpb24gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBUaGUgQWxmcmVzY28gRXhhbXBsZSBDb250ZW50IEFwcGxpY2F0aW9uIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIEFsZnJlc2NvLiBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cblxuaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgSW5wdXQsXG4gICAgT25Jbml0LFxuICAgIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNaW5pbWFsTm9kZUVudHJ5RW50aXR5fSBmcm9tICdhbGZyZXNjby1qcy1hcGknO1xuaW1wb3J0IHtBbGZyZXNjb0FwaVNlcnZpY2V9IGZyb20gJ0BhbGZyZXNjby9hZGYtY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYWNhLW1vbmFjby12aWV3JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbW9uYWNvLXZpZXcuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL21vbmFjby12aWV3LmNvbXBvbmVudC5zY3NzJ10sXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICBob3N0OiB7J2NsYXNzJzogJ2FjYS1tb25hY28tdmlldyd9XG59KVxuZXhwb3J0IGNsYXNzIE1vbmFjb1ZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQElucHV0KClcbiAgICB1cmw6IHN0cmluZztcblxuICAgIEBJbnB1dCgpXG4gICAgbm9kZTogTWluaW1hbE5vZGVFbnRyeUVudGl0eTtcbiAgICBlZGl0b3I6IGFueTtcbiAgICBjb2RlOiBhbnk7XG4gICAgZWRpdG9yT3B0aW9ucyA9IHtcbiAgICAgICAgdGhlbWU6ICd2cy1kYXJrJyxcbiAgICAgICAgbGFuZ3VhZ2U6ICdqc29uJyxcbiAgICAgICAgYXV0b0luZGVudDogdHJ1ZSxcbiAgICAgICAgZm9ybWF0T25QYXN0ZTogdHJ1ZSxcbiAgICAgICAgZm9ybWF0T25UeXBlOiB0cnVlXG4gICAgfTtcblxuICAgIG9uSW5pdChlZGl0b3IpIHtcbiAgICAgICAgdGhpcy5lZGl0b3IgPSBlZGl0b3I7XG4gICAgICAgIHRoaXMuaW5kZW50Q29kZSgpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpU2VydmljZTogQWxmcmVzY29BcGlTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgaW5kZW50Q29kZSgpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVkaXRvci5nZXRBY3Rpb24oJ2VkaXRvci5hY3Rpb24uZm9ybWF0RG9jdW1lbnQnKS5ydW4oKTtcbiAgICAgICAgfSwgMzAwKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5hcGlTZXJ2aWNlLm5vZGVzQXBpLmdldEZpbGVDb250ZW50KHRoaXMubm9kZS5pZCkudGhlbihcbiAgICAgICAgICAgIChmaWxlQ29udGVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY29kZSAgPSBmaWxlQ29udGVudDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnIgPT4gY29uc29sZS5sb2coZXJyKVxuICAgICAgICApO1xuICAgIH1cbn1cbiJdfQ==