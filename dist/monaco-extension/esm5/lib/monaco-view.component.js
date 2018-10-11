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
                    template: "<ngx-monaco-editor id=\"adf-monaco-file-editor\" class=\"adf-monaco-file-editor\" [options]=\"editorOptions\" [(ngModel)]=\"code\"\n    (onInit)=\"onInit($event)\">\n</ngx-monaco-editor>",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".adf-monaco-file-editor{height:100%!important}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uYWNvLXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbW9uYWNvLWV4dGVuc2lvbi8iLCJzb3VyY2VzIjpbImxpYi9tb25hY28tdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV4RDtJQTJCRSw2QkFBb0IsVUFBOEI7UUFBOUIsZUFBVSxHQUFWLFVBQVUsQ0FBb0I7UUFibEQsa0JBQWEsR0FBRztZQUNkLEtBQUssRUFBRSxTQUFTO1lBQ2hCLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLGFBQWEsRUFBRSxJQUFJO1lBQ25CLFlBQVksRUFBRSxJQUFJO1NBQ25CLENBQUM7SUFPbUQsQ0FBQzs7Ozs7SUFMdEQsb0NBQU07Ozs7SUFBTixVQUFPLE1BQU07UUFDWCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7OztJQUlELHdDQUFVOzs7SUFBVjtRQUFBLGlCQUlDO1FBSEMsVUFBVSxDQUFDO1lBQ1QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsOEJBQThCLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUM5RCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDVixDQUFDOzs7O0lBRUQsc0NBQVE7OztJQUFSO1FBQUEsaUJBT0M7UUFOQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQ3hELFVBQUEsV0FBVztZQUNULEtBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDO1FBQzFCLENBQUMsRUFDRCxVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQWhCLENBQWdCLENBQ3hCLENBQUM7SUFDSixDQUFDOztnQkExQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLHNNQUEyQztvQkFFM0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2lCQUN0Qzs7O2dCQVBRLGtCQUFrQjs7O3NCQVN4QixLQUFLO3VCQUdMLEtBQUs7O0lBaUNSLDBCQUFDO0NBQUEsQUEzQ0QsSUEyQ0M7U0FyQ1ksbUJBQW1COzs7SUFDOUIsa0NBQ1k7O0lBRVosbUNBQzZCOztJQUM3QixxQ0FBWTs7SUFDWixtQ0FBVTs7SUFDViw0Q0FNRTs7SUFPVSx5Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEBsaWNlbnNlXG4gKiBBbGZyZXNjbyBFeGFtcGxlIENvbnRlbnQgQXBwbGljYXRpb25cbiAqXG4gKiBDb3B5cmlnaHQgKEMpIDIwMDUgLSAyMDE4IEFsZnJlc2NvIFNvZnR3YXJlIExpbWl0ZWRcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgQWxmcmVzY28gRXhhbXBsZSBDb250ZW50IEFwcGxpY2F0aW9uLlxuICogSWYgdGhlIHNvZnR3YXJlIHdhcyBwdXJjaGFzZWQgdW5kZXIgYSBwYWlkIEFsZnJlc2NvIGxpY2Vuc2UsIHRoZSB0ZXJtcyBvZlxuICogdGhlIHBhaWQgbGljZW5zZSBhZ3JlZW1lbnQgd2lsbCBwcmV2YWlsLiAgT3RoZXJ3aXNlLCB0aGUgc29mdHdhcmUgaXNcbiAqIHByb3ZpZGVkIHVuZGVyIHRoZSBmb2xsb3dpbmcgb3BlbiBzb3VyY2UgbGljZW5zZSB0ZXJtczpcbiAqXG4gKiBUaGUgQWxmcmVzY28gRXhhbXBsZSBDb250ZW50IEFwcGxpY2F0aW9uIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogVGhlIEFsZnJlc2NvIEV4YW1wbGUgQ29udGVudCBBcHBsaWNhdGlvbiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBBbGZyZXNjby4gSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1pbmltYWxOb2RlRW50cnlFbnRpdHkgfSBmcm9tICdhbGZyZXNjby1qcy1hcGknO1xuaW1wb3J0IHsgQWxmcmVzY29BcGlTZXJ2aWNlIH0gZnJvbSAnQGFsZnJlc2NvL2FkZi1jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYWNhLW1vbmFjby12aWV3JyxcbiAgdGVtcGxhdGVVcmw6ICcuL21vbmFjby12aWV3LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbW9uYWNvLXZpZXcuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBNb25hY29WaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgdXJsOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgbm9kZTogTWluaW1hbE5vZGVFbnRyeUVudGl0eTtcbiAgZWRpdG9yOiBhbnk7XG4gIGNvZGU6IGFueTtcbiAgZWRpdG9yT3B0aW9ucyA9IHtcbiAgICB0aGVtZTogJ3ZzLWRhcmsnLFxuICAgIGxhbmd1YWdlOiAnanNvbicsXG4gICAgYXV0b0luZGVudDogdHJ1ZSxcbiAgICBmb3JtYXRPblBhc3RlOiB0cnVlLFxuICAgIGZvcm1hdE9uVHlwZTogdHJ1ZVxuICB9O1xuXG4gIG9uSW5pdChlZGl0b3IpIHtcbiAgICB0aGlzLmVkaXRvciA9IGVkaXRvcjtcbiAgICB0aGlzLmluZGVudENvZGUoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpU2VydmljZTogQWxmcmVzY29BcGlTZXJ2aWNlKSB7fVxuXG4gIGluZGVudENvZGUoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmVkaXRvci5nZXRBY3Rpb24oJ2VkaXRvci5hY3Rpb24uZm9ybWF0RG9jdW1lbnQnKS5ydW4oKTtcbiAgICB9LCAzMDApO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hcGlTZXJ2aWNlLm5vZGVzQXBpLmdldEZpbGVDb250ZW50KHRoaXMubm9kZS5pZCkudGhlbihcbiAgICAgIGZpbGVDb250ZW50ID0+IHtcbiAgICAgICAgdGhpcy5jb2RlID0gZmlsZUNvbnRlbnQ7XG4gICAgICB9LFxuICAgICAgZXJyID0+IGNvbnNvbGUubG9nKGVycilcbiAgICApO1xuICB9XG59XG4iXX0=