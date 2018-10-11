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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uYWNvLXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbW9uYWNvLWV4dGVuc2lvbi8iLCJzb3VyY2VzIjpbImxpYi9tb25hY28tdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQVF4RCxNQUFNOzs7O0lBcUJKLFlBQW9CLFVBQThCO1FBQTlCLGVBQVUsR0FBVixVQUFVLENBQW9CO1FBYmxELGtCQUFhLEdBQUc7WUFDZCxLQUFLLEVBQUUsU0FBUztZQUNoQixRQUFRLEVBQUUsTUFBTTtZQUNoQixVQUFVLEVBQUUsSUFBSTtZQUNoQixhQUFhLEVBQUUsSUFBSTtZQUNuQixZQUFZLEVBQUUsSUFBSTtTQUNuQixDQUFDO0lBT21ELENBQUM7Ozs7O0lBTHRELE1BQU0sQ0FBQyxNQUFNO1FBQ1gsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFJRCxVQUFVO1FBQ1IsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLDhCQUE4QixDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDOUQsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQ3hELFdBQVcsQ0FBQyxFQUFFO1lBQ1osSUFBSSxDQUFDLElBQUksR0FBRyxXQUFXLENBQUM7UUFDMUIsQ0FBQyxFQUNELEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FDeEIsQ0FBQztJQUNKLENBQUM7OztZQTFDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0Isc01BQTJDO2dCQUUzQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDdEM7OztZQVBRLGtCQUFrQjs7O2tCQVN4QixLQUFLO21CQUdMLEtBQUs7Ozs7SUFITixrQ0FDWTs7SUFFWixtQ0FDNkI7O0lBQzdCLHFDQUFZOztJQUNaLG1DQUFVOztJQUNWLDRDQU1FOztJQU9VLHlDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQGxpY2Vuc2VcbiAqIEFsZnJlc2NvIEV4YW1wbGUgQ29udGVudCBBcHBsaWNhdGlvblxuICpcbiAqIENvcHlyaWdodCAoQykgMjAwNSAtIDIwMTggQWxmcmVzY28gU29mdHdhcmUgTGltaXRlZFxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBBbGZyZXNjbyBFeGFtcGxlIENvbnRlbnQgQXBwbGljYXRpb24uXG4gKiBJZiB0aGUgc29mdHdhcmUgd2FzIHB1cmNoYXNlZCB1bmRlciBhIHBhaWQgQWxmcmVzY28gbGljZW5zZSwgdGhlIHRlcm1zIG9mXG4gKiB0aGUgcGFpZCBsaWNlbnNlIGFncmVlbWVudCB3aWxsIHByZXZhaWwuICBPdGhlcndpc2UsIHRoZSBzb2Z0d2FyZSBpc1xuICogcHJvdmlkZWQgdW5kZXIgdGhlIGZvbGxvd2luZyBvcGVuIHNvdXJjZSBsaWNlbnNlIHRlcm1zOlxuICpcbiAqIFRoZSBBbGZyZXNjbyBFeGFtcGxlIENvbnRlbnQgQXBwbGljYXRpb24gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBUaGUgQWxmcmVzY28gRXhhbXBsZSBDb250ZW50IEFwcGxpY2F0aW9uIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIEFsZnJlc2NvLiBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWluaW1hbE5vZGVFbnRyeUVudGl0eSB9IGZyb20gJ2FsZnJlc2NvLWpzLWFwaSc7XG5pbXBvcnQgeyBBbGZyZXNjb0FwaVNlcnZpY2UgfSBmcm9tICdAYWxmcmVzY28vYWRmLWNvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhY2EtbW9uYWNvLXZpZXcnLFxuICB0ZW1wbGF0ZVVybDogJy4vbW9uYWNvLXZpZXcuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tb25hY28tdmlldy5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIE1vbmFjb1ZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKVxuICB1cmw6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBub2RlOiBNaW5pbWFsTm9kZUVudHJ5RW50aXR5O1xuICBlZGl0b3I6IGFueTtcbiAgY29kZTogYW55O1xuICBlZGl0b3JPcHRpb25zID0ge1xuICAgIHRoZW1lOiAndnMtZGFyaycsXG4gICAgbGFuZ3VhZ2U6ICdqc29uJyxcbiAgICBhdXRvSW5kZW50OiB0cnVlLFxuICAgIGZvcm1hdE9uUGFzdGU6IHRydWUsXG4gICAgZm9ybWF0T25UeXBlOiB0cnVlXG4gIH07XG5cbiAgb25Jbml0KGVkaXRvcikge1xuICAgIHRoaXMuZWRpdG9yID0gZWRpdG9yO1xuICAgIHRoaXMuaW5kZW50Q29kZSgpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGlTZXJ2aWNlOiBBbGZyZXNjb0FwaVNlcnZpY2UpIHt9XG5cbiAgaW5kZW50Q29kZSgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuZWRpdG9yLmdldEFjdGlvbignZWRpdG9yLmFjdGlvbi5mb3JtYXREb2N1bWVudCcpLnJ1bigpO1xuICAgIH0sIDMwMCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFwaVNlcnZpY2Uubm9kZXNBcGkuZ2V0RmlsZUNvbnRlbnQodGhpcy5ub2RlLmlkKS50aGVuKFxuICAgICAgZmlsZUNvbnRlbnQgPT4ge1xuICAgICAgICB0aGlzLmNvZGUgPSBmaWxlQ29udGVudDtcbiAgICAgIH0sXG4gICAgICBlcnIgPT4gY29uc29sZS5sb2coZXJyKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==