/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("tsickle/src/transformer_util", ["require", "exports", "tsickle/src/typescript"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ts = require("tsickle/src/typescript");
    /** @return true if node has the specified modifier flag set. */
    function hasModifierFlag(node, flag) {
        return (ts.getCombinedModifierFlags(node) & flag) !== 0;
    }
    exports.hasModifierFlag = hasModifierFlag;
    /** Returns true if fileName is a .d.ts file. */
    function isDtsFileName(fileName) {
        return fileName.endsWith('.d.ts');
    }
    exports.isDtsFileName = isDtsFileName;
    /** Returns the string contents of a ts.Identifier. */
    function getIdentifierText(identifier) {
        // NOTE: 'escapedText' on an Identifier may be escaped if it starts with '__'. The alternative,
        // getText(), cannot be used on synthesized nodes, so unescape the identifier below.
        return unescapeName(identifier.escapedText);
    }
    exports.getIdentifierText = getIdentifierText;
    /** Returns a dot-joined qualified name (foo.bar.Baz). */
    function getEntityNameText(name) {
        if (ts.isIdentifier(name)) {
            return getIdentifierText(name);
        }
        return getEntityNameText(name.left) + '.' + getIdentifierText(name.right);
    }
    exports.getEntityNameText = getEntityNameText;
    /**
     * Converts an escaped TypeScript name into the original source name.
     */
    function unescapeName(name) {
        // See the private function unescapeIdentifier in TypeScript's utilities.ts.
        var str = name;
        if (str.startsWith('___'))
            return str.substring(1);
        return str;
    }
    exports.unescapeName = unescapeName;
    /**
     * ts.createNotEmittedStatement will create a node, but the comments covered by its text range are
     * never emittedm except for very specific special cases (/// comments).
     *
     * createNotEmittedStatementWithComments creates a not emitted statement and adds comment ranges
     * from the original statement as synthetic comments to it, so that they get retained in the output.
     */
    function createNotEmittedStatementWithComments(sourceFile, original) {
        var replacement = ts.createNotEmittedStatement(original);
        // NB: synthetic nodes can have pos/end == -1. This is handled by the underlying implementation.
        var leading = ts.getLeadingCommentRanges(sourceFile.text, original.pos) || [];
        var trailing = ts.getTrailingCommentRanges(sourceFile.text, original.end) || [];
        replacement =
            ts.setSyntheticLeadingComments(replacement, synthesizeCommentRanges(sourceFile, leading));
        replacement =
            ts.setSyntheticTrailingComments(replacement, synthesizeCommentRanges(sourceFile, trailing));
        return replacement;
    }
    exports.createNotEmittedStatementWithComments = createNotEmittedStatementWithComments;
    /**
     * Converts `ts.CommentRange`s into `ts.SynthesizedComment`s.
     */
    function synthesizeCommentRanges(sourceFile, parsedComments) {
        var synthesizedComments = [];
        parsedComments.forEach(function (_a, commentIdx) {
            var kind = _a.kind, pos = _a.pos, end = _a.end, hasTrailingNewLine = _a.hasTrailingNewLine;
            var commentText = sourceFile.text.substring(pos, end).trim();
            if (kind === ts.SyntaxKind.MultiLineCommentTrivia) {
                commentText = commentText.replace(/(^\/\*)|(\*\/$)/g, '');
            }
            else if (kind === ts.SyntaxKind.SingleLineCommentTrivia) {
                if (commentText.startsWith('///')) {
                    // triple-slash comments are typescript specific, ignore them in the output.
                    return;
                }
                commentText = commentText.replace(/(^\/\/)/g, '');
            }
            synthesizedComments.push({ kind: kind, text: commentText, hasTrailingNewLine: hasTrailingNewLine, pos: -1, end: -1 });
        });
        return synthesizedComments;
    }
    exports.synthesizeCommentRanges = synthesizeCommentRanges;
    /**
     * Creates a non emitted statement that can be used to store synthesized comments.
     */
    function createNotEmittedStatement(sourceFile) {
        var stmt = ts.createNotEmittedStatement(sourceFile);
        ts.setOriginalNode(stmt, undefined);
        ts.setTextRange(stmt, { pos: 0, end: 0 });
        ts.setEmitFlags(stmt, ts.EmitFlags.CustomPrologue);
        return stmt;
    }
    exports.createNotEmittedStatement = createNotEmittedStatement;
    /**
     * This is a version of `ts.visitEachChild` that works that calls our version
     * of `updateSourceFileNode`, so that typescript doesn't lose type information
     * for property decorators.
     * See https://github.com/Microsoft/TypeScript/issues/17384
     *
     * @param sf
     * @param statements
     */
    function visitEachChild(node, visitor, context) {
        if (node.kind === ts.SyntaxKind.SourceFile) {
            var sf = node;
            return updateSourceFileNode(sf, ts.visitLexicalEnvironment(sf.statements, visitor, context));
        }
        return ts.visitEachChild(node, visitor, context);
    }
    exports.visitEachChild = visitEachChild;
    /**
     * This is a version of `ts.updateSourceFileNode` that works
     * well with property decorators.
     * See https://github.com/Microsoft/TypeScript/issues/17384
     * TODO(#634): This has been fixed in TS 2.5. Investigate removal.
     *
     * @param sf
     * @param statements
     */
    function updateSourceFileNode(sf, statements) {
        if (statements === sf.statements) {
            return sf;
        }
        // Note: Need to clone the original file (and not use `ts.updateSourceFileNode`)
        // as otherwise TS fails when resolving types for decorators.
        sf = ts.getMutableClone(sf);
        sf.statements = statements;
        return sf;
    }
    exports.updateSourceFileNode = updateSourceFileNode;
    // Copied from TypeScript
    function isTypeNodeKind(kind) {
        return (kind >= ts.SyntaxKind.FirstTypeNode && kind <= ts.SyntaxKind.LastTypeNode) ||
            kind === ts.SyntaxKind.AnyKeyword || kind === ts.SyntaxKind.NumberKeyword ||
            kind === ts.SyntaxKind.ObjectKeyword || kind === ts.SyntaxKind.BooleanKeyword ||
            kind === ts.SyntaxKind.StringKeyword || kind === ts.SyntaxKind.SymbolKeyword ||
            kind === ts.SyntaxKind.ThisKeyword || kind === ts.SyntaxKind.VoidKeyword ||
            kind === ts.SyntaxKind.UndefinedKeyword || kind === ts.SyntaxKind.NullKeyword ||
            kind === ts.SyntaxKind.NeverKeyword || kind === ts.SyntaxKind.ExpressionWithTypeArguments;
    }
    exports.isTypeNodeKind = isTypeNodeKind;
    /**
     * Creates a string literal that uses single quotes. Purely cosmetic, but increases fidelity to the
     * existing test suite.
     */
    function createSingleQuoteStringLiteral(text) {
        var stringLiteral = ts.createLiteral(text);
        // tslint:disable-next-line:no-any accessing TS internal API.
        stringLiteral.singleQuote = true;
        return stringLiteral;
    }
    exports.createSingleQuoteStringLiteral = createSingleQuoteStringLiteral;
    /** Creates a not emitted statement with the given text as a single line comment. */
    function createSingleLineComment(original, text) {
        var comment = {
            kind: ts.SyntaxKind.SingleLineCommentTrivia,
            text: ' ' + text,
            hasTrailingNewLine: true,
            pos: -1,
            end: -1,
        };
        return ts.setSyntheticTrailingComments(ts.createNotEmittedStatement(original), [comment]);
    }
    exports.createSingleLineComment = createSingleLineComment;
    /** Creates a not emitted statement with the given text as a single line comment. */
    function createMultiLineComment(original, text) {
        var comment = {
            kind: ts.SyntaxKind.MultiLineCommentTrivia,
            text: ' ' + text,
            hasTrailingNewLine: true,
            pos: -1,
            end: -1,
        };
        return ts.setSyntheticTrailingComments(ts.createNotEmittedStatement(original), [comment]);
    }
    exports.createMultiLineComment = createMultiLineComment;
    /**
     * debugWarn logs a debug warning.
     *
     * These should only be used for cases where tsickle is making a questionable judgement about what
     * to do. By default, tsickle does not report any warnings to the caller, and warnings are hidden
     * behind a debug flag, as warnings are only for tsickle to debug itself.
     */
    function reportDebugWarning(host, node, messageText) {
        if (!host.logWarning)
            return;
        host.logWarning(createDiagnostic(node, messageText, /* textRange */ undefined, ts.DiagnosticCategory.Warning));
    }
    exports.reportDebugWarning = reportDebugWarning;
    /**
     * Creates and reports a diagnostic by adding it to the given array.
     *
     * This is used for errors and warnings in tsickle's input. Emit errors (the default) if tsickle
     * cannot emit a correct result given the input. Emit warnings for questionable input if there's a
     * good chance that the output will work.
     *
     * For typical tsickle users, errors are always reported and break the compilation operation,
     * warnings will only be emitted for first party code (and break the compilation there), but wil be
     * ignored for third party code.
     *
     * @param textRange pass to overrride the text range from the node with a more specific range.
     */
    function reportDiagnostic(diagnostics, node, messageText, textRange, category) {
        if (category === void 0) { category = ts.DiagnosticCategory.Error; }
        diagnostics.push(createDiagnostic(node, messageText, textRange, category));
    }
    exports.reportDiagnostic = reportDiagnostic;
    function createDiagnostic(node, messageText, textRange, category) {
        var start, length;
        if (textRange) {
            start = textRange.pos;
            length = textRange.end - textRange.pos;
        }
        else {
            // Only use getStart if node has a valid pos, as it might be synthesized.
            start = node.pos >= 0 ? node.getStart() : 0;
            length = node.end - node.pos;
        }
        return {
            file: node.getSourceFile(),
            start: start,
            length: length,
            messageText: messageText,
            category: category,
            code: 0,
        };
    }
    /**
     * A replacement for ts.getLeadingCommentRanges that returns the union of synthetic and
     * non-synthetic comments on the given node, with their text included. The returned comments must
     * not be mutated, as their content might or might not be reflected back into the AST.
     */
    function getAllLeadingComments(node) {
        var allRanges = [];
        var nodeText = node.getFullText();
        var cr = ts.getLeadingCommentRanges(nodeText, 0);
        if (cr)
            allRanges.push.apply(allRanges, __spread(cr.map(function (c) { return (__assign({}, c, { text: nodeText.substring(c.pos, c.end) })); })));
        var synthetic = ts.getSyntheticLeadingComments(node);
        if (synthetic)
            allRanges.push.apply(allRanges, __spread(synthetic));
        return allRanges;
    }
    exports.getAllLeadingComments = getAllLeadingComments;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmb3JtZXJfdXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90cmFuc2Zvcm1lcl91dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVILDJDQUFtQztJQUVuQyxnRUFBZ0U7SUFDaEUseUJBQWdDLElBQWEsRUFBRSxJQUFzQjtRQUNuRSxPQUFPLENBQUMsRUFBRSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRkQsMENBRUM7SUFFRCxnREFBZ0Q7SUFDaEQsdUJBQThCLFFBQWdCO1FBQzVDLE9BQU8sUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRkQsc0NBRUM7SUFFRCxzREFBc0Q7SUFDdEQsMkJBQWtDLFVBQXlCO1FBQ3pELCtGQUErRjtRQUMvRixvRkFBb0Y7UUFDcEYsT0FBTyxZQUFZLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFKRCw4Q0FJQztJQUVELHlEQUF5RDtJQUN6RCwyQkFBa0MsSUFBbUI7UUFDbkQsSUFBSSxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3pCLE9BQU8saUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEM7UUFDRCxPQUFPLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFMRCw4Q0FLQztJQUVEOztPQUVHO0lBQ0gsc0JBQTZCLElBQWlCO1FBQzVDLDRFQUE0RTtRQUM1RSxJQUFNLEdBQUcsR0FBRyxJQUFjLENBQUM7UUFDM0IsSUFBSSxHQUFHLENBQUMsVUFBVSxD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LENBQUM7SUFURCxzREFTQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0ICogYXMgdHMgZnJvbSAnLi90eXBlc2NyaXB0JztcblxuLyoqIEByZXR1cm4gdHJ1ZSBpZiBub2RlIGhhcyB0aGUgc3BlY2lmaWVkIG1vZGlmaWVyIGZsYWcgc2V0LiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhc01vZGlmaWVyRmxhZyhub2RlOiB0cy5Ob2RlLCBmbGFnOiB0cy5Nb2RpZmllckZsYWdzKTogYm9vbGVhbiB7XG4gIHJldHVybiAodHMuZ2V0Q29tYmluZWRNb2RpZmllckZsYWdzKG5vZGUpICYgZmxhZykgIT09IDA7XG59XG5cbi8qKiBSZXR1cm5zIHRydWUgaWYgZmlsZU5hbWUgaXMgYSAuZC50cyBmaWxlLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRHRzRmlsZU5hbWUoZmlsZU5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gZmlsZU5hbWUuZW5kc1dpdGgoJy5kLnRzJyk7XG59XG5cbi8qKiBSZXR1cm5zIHRoZSBzdHJpbmcgY29udGVudHMgb2YgYSB0cy5JZGVudGlmaWVyLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldElkZW50aWZpZXJUZXh0KGlkZW50aWZpZXI6IHRzLklkZW50aWZpZXIpOiBzdHJpbmcge1xuICAvLyBOT1RFOiAnZXNjYXBlZFRleHQnIG9uIGFuIElkZW50aWZpZXIgbWF5IGJlIGVzY2FwZWQgaWYgaXQgc3RhcnRzIHdpdGggJ19fJy4gVGhlIGFsdGVybmF0aXZlLFxuICAvLyBnZXRUZXh0KCksIGNhbm5vdCBiZSB1c2VkIG9uIHN5bnRoZXNpemVkIG5vZGVzLCBzbyB1bmVzY2FwZSB0aGUgaWRlbnRpZmllciBiZWxvdy5cbiAgcmV0dXJuIHVuZXNjYXBlTmFtZShpZGVudGlmaWVyLmVzY2FwZWRUZXh0KTtcbn1cblxuLyoqIFJldHVybnMgYSBkb3Qtam9pbmVkIHF1YWxpZmllZCBuYW1lIChmb28uYmFyLkJheikuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RW50aXR5TmFtZVRleHQobmFtZTogdHMuRW50aXR5TmFtZSk6IHN0cmluZyB7XG4gIGlmICh0cy5pc0lkZW50aWZpZXIobmFtZSkpIHtcbiAgICByZXR1cm4gZ2V0SWRlbnRpZmllclRleHQobmFtZSk7XG4gIH1cbiAgcmV0dXJuIGdldEVudGl0eU5hbWVUZXh0KG5hbWUubGVmdCkgKyAnLicgKyBnZXRJZGVudGlmaWVyVGV4dChuYW1lLnJpZ2h0KTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhbiBlc2NhcGVkIFR5cGVTY3JpcHQgbmFtZSBpbnRvIHRoZSBvcmlnaW5hbCBzb3VyY2UgbmFtZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVuZXNjYXBlTmFtZShuYW1lOiB0cy5fX1N0cmluZyk6IHN0cmluZyB7XG4gIC8vIFNlZSB0aGUgcHJpdmF0ZSBmdW5jdGlvbiB1bmVzY2FwZUlkZW50aWZpZXIgaW4gVHlwZVNjcmlwdCdzIHV0aWxpdGllcy50cy5cbiAgY29uc3Qgc3RyID0gbmFtZSBhcyBzdHJpbmc7XG4gIGlmIChzdHIuc3RhcnRzV2l0aCgnX19fJykpIHJldHVybiBzdHIuc3Vic3RyaW5nKDEpO1xuICByZXR1cm4gc3RyO1xufVxuXG4vKipcbiAqIHRzLmNyZWF0ZU5vdEVtaXR0ZWRTdGF0ZW1lbnQgd2lsbCBjcmVhdGUgYSBub2RlLCBidXQgdGhlIGNvbW1lbnRzIGNvdmVyZWQgYnkgaXRzIHRleHQgcmFuZ2UgYXJlXG4gKiBuZXZlciBlbWl0dGVkbSBleGNlcHQgZm9yIHZlcnkgc3BlY2lmaWMgc3BlY2lhbCBjYXNlcyAoLy8vIGNvbW1lbnRzKS5cbiAqXG4gKiBjcmVhdGVOb3RFbWl0dGVkU3RhdGVtZW50V2l0aENvbW1lbnRzIGNyZWF0ZXMgYSBub3QgZW1pdHRlZCBzdGF0ZW1lbnQgYW5kIGFkZHMgY29tbWVudCByYW5nZXNcbiAqIGZyb20gdGhlIG9yaWdpbmFsIHN0YXRlbWVudCBhcyBzeW50aGV0aWMgY29tbWVudHMgdG8gaXQsIHNvIHRoYXQgdGhleSBnZXQgcmV0YWluZWQgaW4gdGhlIG91dHB1dC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5vdEVtaXR0ZWRTdGF0ZW1lbnRXaXRoQ29tbWVudHMoXG4gICAgc291cmNlRmlsZTogdHMuU291cmNlRmlsZSwgb3JpZ2luYWw6IHRzLk5vZGUpOiB0cy5TdGF0ZW1lbnQge1xuICBsZXQgcmVwbGFjZW1lbnQgPSB0cy5jcmVhdGVOb3RFbWl0dGVkU3RhdGVtZW50KG9yaWdpbmFsKTtcbiAgLy8gTkI6IHN5bnRoZXRpYyBub2RlcyBjYW4gaGF2ZSBwb3MvZW5kID09IC0xLiBUaGlzIGlzIGhhbmRsZWQgYnkgdGhlIHVuZGVybHlpbmcgaW1wbGVtZW50YXRpb24uXG4gIGNvbnN0IGxlYWRpbmcgPSB0cy5nZXRMZWFkaW5nQ29tbWVudFJhbmdlcyhzb3VyY2VGaWxlLnRleHQsIG9yaWdpbmFsLnBvcykgfHwgW107XG4gIGNvbnN0IHRyYWlsaW5nID0gdHMuZ2V0VHJhaWxpbmdDb21tZW50UmFuZ2VzKHNvdXJjZUZpbGUudGV4dCwgb3JpZ2luYWwuZW5kKSB8fCBbXTtcbiAgcmVwbGFjZW1lbnQgPVxuICAgICAgdHMuc2V0U3ludGhldGljTGVhZGluZ0NvbW1lbnRzKHJlcGxhY2VtZW50LCBzeW50aGVzaXplQ29tbWVudFJhbmdlcyhzb3VyY2VGaWxlLCBsZWFkaW5nKSk7XG4gIHJlcGxhY2VtZW50ID1cbiAgICAgIHRzLnNldFN5bnRoZXRpY1RyYWlsaW5nQ29tbWVudHMocmVwbGFjZW1lbnQsIHN5bnRoZXNpemVDb21tZW50UmFuZ2VzKHNvdXJjZUZpbGUsIHRyYWlsaW5nKSk7XG4gIHJldHVybiByZXBsYWNlbWVudDtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgdHMuQ29tbWVudFJhbmdlYHMgaW50byBgdHMuU3ludGhlc2l6ZWRDb21tZW50YHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzeW50aGVzaXplQ29tbWVudFJhbmdlcyhcbiAgICBzb3VyY2VGaWxlOiB0cy5Tb3VyY2VGaWxlLCBwYXJzZWRDb21tZW50czogdHMuQ29tbWVudFJhbmdlW10pOiB0cy5TeW50aGVzaXplZENvbW1lbnRbXSB7XG4gIGNvbnN0IHN5bnRoZXNpemVkQ29tbWVudHM6IHRzLlN5bnRoZXNpemVkQ29tbWVudFtdID0gW107XG4gIHBhcnNlZENvbW1lbnRzLmZvckVhY2goKHtraW5kLCBwb3MsIGVuZCwgaGFzVHJhaWxpbmdOZXdMaW5lfSwgY29tbWVudElkeCkgPT4ge1xuICAgIGxldCBjb21tZW50VGV4dCA9IHNvdXJjZUZpbGUudGV4dC5zdWJzdHJpbmcocG9zLCBlbmQpLnRyaW0oKTtcbiAgICBpZiAoa2luZCA9PT0gdHMuU3ludGF4S2luZC5NdWx0aUxpbmVDb21tZW50VHJpdmlhKSB7XG4gICAgICBjb21tZW50VGV4dCA9IGNvbW1lbnRUZXh0LnJlcGxhY2UoLyheXFwvXFwqKXwoXFwqXFwvJCkvZywgJycpO1xuICAgIH0gZWxzZSBpZiAoa2luZCA9PT0gdHMuU3ludGF4S2luZC5TaW5nbGVMaW5lQ29tbWVudFRyaXZpYSkge1xuICAgICAgaWYgKGNvbW1lbnRUZXh0LnN0YXJ0c1dpdGgoJy8vLycpKSB7XG4gICAgICAgIC8vIHRyaXBsZS1zbGFzaCBjb21tZW50cyBhcmUgdHlwZXNjcmlwdCBzcGVjaWZpYywgaWdub3JlIHRoZW0gaW4gdGhlIG91dHB1dC5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29tbWVudFRleHQgPSBjb21tZW50VGV4dC5yZXBsYWNlKC8oXlxcL1xcLykvZywgJycpO1xuICAgIH1cbiAgICBzeW50aGVzaXplZENvbW1lbnRzLnB1c2goe2tpbmQsIHRleHQ6IGNvbW1lbnRUZXh0LCBoYXNUcmFpbGluZ05ld0xpbmUsIHBvczogLTEsIGVuZDogLTF9KTtcbiAgfSk7XG4gIHJldHVybiBzeW50aGVzaXplZENvbW1lbnRzO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBub24gZW1pdHRlZCBzdGF0ZW1lbnQgdGhhdCBjYW4gYmUgdXNlZCB0byBzdG9yZSBzeW50aGVzaXplZCBjb21tZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5vdEVtaXR0ZWRTdGF0ZW1lbnQoc291cmNlRmlsZTogdHMuU291cmNlRmlsZSk6IHRzLk5vdEVtaXR0ZWRTdGF0ZW1lbnQge1xuICBjb25zdCBzdG10ID0gdHMuY3JlYXRlTm90RW1pdHRlZFN0YXRlbWVudChzb3VyY2VGaWxlKTtcbiAgdHMuc2V0T3JpZ2luYWxOb2RlKHN0bXQsIHVuZGVmaW5lZCk7XG4gIHRzLnNldFRleHRSYW5nZShzdG10LCB7cG9zOiAwLCBlbmQ6IDB9KTtcbiAgdHMuc2V0RW1pdEZsYWdzKHN0bXQsIHRzLkVtaXRGbGFncy5DdXN0b21Qcm9sb2d1ZSk7XG4gIHJldHVybiBzdG10O1xufVxuXG4vKipcbiAqIFRoaXMgaXMgYSB2ZXJzaW9uIG9mIGB0cy52aXNpdEVhY2hDaGlsZGAgdGhhdCB3b3JrcyB0aGF0IGNhbGxzIG91ciB2ZXJzaW9uXG4gKiBvZiBgdXBkYXRlU291cmNlRmlsZU5vZGVgLCBzbyB0aGF0IHR5cGVzY3JpcHQgZG9lc24ndCBsb3NlIHR5cGUgaW5mb3JtYXRpb25cbiAqIGZvciBwcm9wZXJ0eSBkZWNvcmF0b3JzLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMTczODRcbiAqXG4gKiBAcGFyYW0gc2ZcbiAqIEBwYXJhbSBzdGF0ZW1lbnRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB2aXNpdEVhY2hDaGlsZChcbiAgICBub2RlOiB0cy5Ob2RlLCB2aXNpdG9yOiB0cy5WaXNpdG9yLCBjb250ZXh0OiB0cy5UcmFuc2Zvcm1hdGlvbkNvbnRleHQpOiB0cy5Ob2RlIHtcbiAgaWYgKG5vZGUua2luZCA9PT0gdHMuU3ludGF4S2luZC5Tb3VyY2VGaWxlKSB7XG4gICAgY29uc3Qgc2YgPSBub2RlIGFzIHRzLlNvdXJjZUZpbGU7XG4gICAgcmV0dXJuIHVwZGF0ZVNvdXJjZUZpbGVOb2RlKHNmLCB0cy52aXNpdExleGljYWxFbnZpcm9ubWVudChzZi5zdGF0ZW1lbnRzLCB2aXNpdG9yLCBjb250ZXh0KSk7XG4gIH1cblxuICByZXR1cm4gdHMudmlzaXRFYWNoQ2hpbGQobm9kZSwgdmlzaXRvciwgY29udGV4dCk7XG59XG5cbi8qKlxuICogVGhpcyBpcyBhIHZlcnNpb24gb2YgYHRzLnVwZGF0ZVNvdXJjZUZpbGVOb2RlYCB0aGF0IHdvcmtzXG4gKiB3ZWxsIHdpdGggcHJvcGVydHkgZGVjb3JhdG9ycy5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzE3Mzg0XG4gKiBUT0RPKCM2MzQpOiBUaGlzIGhhcyBiZWVuIGZpeGVkIGluIFRTIDIuNS4gSW52ZXN0aWdhdGUgcmVtb3ZhbC5cbiAqXG4gKiBAcGFyYW0gc2ZcbiAqIEBwYXJhbSBzdGF0ZW1lbnRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVTb3VyY2VGaWxlTm9kZShcbiAgICBzZjogdHMuU291cmNlRmlsZSwgc3RhdGVtZW50czogdHMuTm9kZUFycmF5PHRzLlN0YXRlbWVudD4pOiB0cy5Tb3VyY2VGaWxlIHtcbiAgaWYgKHN0YXRlbWVudHMgPT09IHNmLnN0YXRlbWVudHMpIHtcbiAgICByZXR1cm4gc2Y7XG4gIH1cbiAgLy8gTm90ZTogTmVlZCB0byBjbG9uZSB0aGUgb3JpZ2luYWwgZmlsZSAoYW5kIG5vdCB1c2UgYHRzLnVwZGF0ZVNvdXJjZUZpbGVOb2RlYClcbiAgLy8gYXMgb3RoZXJ3aXNlIFRTIGZhaWxzIHdoZW4gcmVzb2x2aW5nIHR5cGVzIGZvciBkZWNvcmF0b3JzLlxuICBzZiA9IHRzLmdldE11dGFibGVDbG9uZShzZik7XG4gIHNmLnN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzO1xuICByZXR1cm4gc2Y7XG59XG5cbi8vIENvcGllZCBmcm9tIFR5cGVTY3JpcHRcbmV4cG9ydCBmdW5jdGlvbiBpc1R5cGVOb2RlS2luZChraW5kOiB0cy5TeW50YXhLaW5kKSB7XG4gIHJldHVybiAoa2luZCA+PSB0cy5TeW50YXhLaW5kLkZpcnN0VHlwZU5vZGUgJiYga2luZCA8PSB0cy5TeW50YXhLaW5kLkxhc3RUeXBlTm9kZSkgfHxcbiAgICAgIGtpbmQgPT09IHRzLlN5bnRheEtpbmQuQW55S2V5d29yZCB8fCBraW5kID09PSB0cy5TeW50YXhLaW5kLk51bWJlcktleXdvcmQgfHxcbiAgICAgIGtpbmQgPT09IHRzLlN5bnRheEtpbmQuT2JqZWN0S2V5d29yZCB8fCBraW5kID09PSB0cy5TeW50YXhLaW5kLkJvb2xlYW5LZXl3b3JkIHx8XG4gICAgICBraW5kID09PSB0cy5TeW50YXhLaW5kLlN0cmluZ0tleXdvcmQgfHwga2luZCA9PT0gdHMuU3ludGF4S2luZC5TeW1ib2xLZXl3b3JkIHx8XG4gICAgICBraW5kID09PSB0cy5TeW50YXhLaW5kLlRoaXNLZXl3b3JkIHx8IGtpbmQgPT09IHRzLlN5bnRheEtpbmQuVm9pZEtleXdvcmQgfHxcbiAgICAgIGtpbmQgPT09IHRzLlN5bnRheEtpbmQuVW5kZWZpbmVkS2V5d29yZCB8fCBraW5kID09PSB0cy5TeW50YXhLaW5kLk51bGxLZXl3b3JkIHx8XG4gICAgICBraW5kID09PSB0cy5TeW50YXhLaW5kLk5ldmVyS2V5d29yZCB8fCBraW5kID09PSB0cy5TeW50YXhLaW5kLkV4cHJlc3Npb25XaXRoVHlwZUFyZ3VtZW50cztcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgc3RyaW5nIGxpdGVyYWwgdGhhdCB1c2VzIHNpbmdsZSBxdW90ZXMuIFB1cmVseSBjb3NtZXRpYywgYnV0IGluY3JlYXNlcyBmaWRlbGl0eSB0byB0aGVcbiAqIGV4aXN0aW5nIHRlc3Qgc3VpdGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTaW5nbGVRdW90ZVN0cmluZ0xpdGVyYWwodGV4dDogc3RyaW5nKTogdHMuU3RyaW5nTGl0ZXJhbCB7XG4gIGNvbnN0IHN0cmluZ0xpdGVyYWwgPSB0cy5jcmVhdGVMaXRlcmFsKHRleHQpO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55IGFjY2Vzc2luZyBUUyBpbnRlcm5hbCBBUEkuXG4gIChzdHJpbmdMaXRlcmFsIGFzIGFueSkuc2luZ2xlUXVvdGUgPSB0cnVlO1xuICByZXR1cm4gc3RyaW5nTGl0ZXJhbDtcbn1cblxuLyoqIENyZWF0ZXMgYSBub3QgZW1pdHRlZCBzdGF0ZW1lbnQgd2l0aCB0aGUgZ2l2ZW4gdGV4dCBhcyBhIHNpbmdsZSBsaW5lIGNvbW1lbnQuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2luZ2xlTGluZUNvbW1lbnQob3JpZ2luYWw6IHRzLk5vZGUsIHRleHQ6IHN0cmluZykge1xuICBjb25zdCBjb21tZW50OiB0cy5TeW50aGVzaXplZENvbW1lbnQgPSB7XG4gICAga2luZDogdHMuU3ludGF4S2luZC5TaW5nbGVMaW5lQ29tbWVudFRyaXZpYSxcbiAgICB0ZXh0OiAnICcgKyB0ZXh0LFxuICAgIGhhc1RyYWlsaW5nTmV3TGluZTogdHJ1ZSxcbiAgICBwb3M6IC0xLFxuICAgIGVuZDogLTEsXG4gIH07XG4gIHJldHVybiB0cy5zZXRTeW50aGV0aWNUcmFpbGluZ0NvbW1lbnRzKHRzLmNyZWF0ZU5vdEVtaXR0ZWRTdGF0ZW1lbnQob3JpZ2luYWwpLCBbY29tbWVudF0pO1xufVxuXG4vKiogQ3JlYXRlcyBhIG5vdCBlbWl0dGVkIHN0YXRlbWVudCB3aXRoIHRoZSBnaXZlbiB0ZXh0IGFzIGEgc2luZ2xlIGxpbmUgY29tbWVudC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNdWx0aUxpbmVDb21tZW50KG9yaWdpbmFsOiB0cy5Ob2RlLCB0ZXh0OiBzdHJpbmcpIHtcbiAgY29uc3QgY29tbWVudDogdHMuU3ludGhlc2l6ZWRDb21tZW50ID0ge1xuICAgIGtpbmQ6IHRzLlN5bnRheEtpbmQuTXVsdGlMaW5lQ29tbWVudFRyaXZpYSxcbiAgICB0ZXh0OiAnICcgKyB0ZXh0LFxuICAgIGhhc1RyYWlsaW5nTmV3TGluZTogdHJ1ZSxcbiAgICBwb3M6IC0xLFxuICAgIGVuZDogLTEsXG4gIH07XG4gIHJldHVybiB0cy5zZXRTeW50aGV0aWNUcmFpbGluZ0NvbW1lbnRzKHRzLmNyZWF0ZU5vdEVtaXR0ZWRTdGF0ZW1lbnQob3JpZ2luYWwpLCBbY29tbWVudF0pO1xufVxuXG4vKipcbiAqIGRlYnVnV2FybiBsb2dzIGEgZGVidWcgd2FybmluZy5cbiAqXG4gKiBUaGVzZSBzaG91bGQgb25seSBiZSB1c2VkIGZvciBjYXNlcyB3aGVyZSB0c2lja2xlIGlzIG1ha2luZyBhIHF1ZXN0aW9uYWJsZSBqdWRnZW1lbnQgYWJvdXQgd2hhdFxuICogdG8gZG8uIEJ5IGRlZmF1bHQsIHRzaWNrbGUgZG9lcyBub3QgcmVwb3J0IGFueSB3YXJuaW5ncyB0byB0aGUgY2FsbGVyLCBhbmQgd2FybmluZ3MgYXJlIGhpZGRlblxuICogYmVoaW5kIGEgZGVidWcgZmxhZywgYXMgd2FybmluZ3MgYXJlIG9ubHkgZm9yIHRzaWNrbGUgdG8gZGVidWcgaXRzZWxmLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVwb3J0RGVidWdXYXJuaW5nKFxuICAgIGhvc3Q6IHtsb2dXYXJuaW5nID8gKGQ6IHRzLkRpYWdub3N0aWMpIDogdm9pZH0sIG5vZGU6IHRzLk5vZGUsIG1lc3NhZ2VUZXh0OiBzdHJpbmcpIHtcbiAgaWYgKCFob3N0LmxvZ1dhcm5pbmcpIHJldHVybjtcbiAgaG9zdC5sb2dXYXJuaW5nKGNyZWF0ZURpYWdub3N0aWMoXG4gICAgICBub2RlLCBtZXNzYWdlVGV4dCwgLyogdGV4dFJhbmdlICovIHVuZGVmaW5lZCwgdHMuRGlhZ25vc3RpY0NhdGVnb3J5Lldhcm5pbmcpKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuZCByZXBvcnRzIGEgZGlhZ25vc3RpYyBieSBhZGRpbmcgaXQgdG8gdGhlIGdpdmVuIGFycmF5LlxuICpcbiAqIFRoaXMgaXMgdXNlZCBmb3IgZXJyb3JzIGFuZCB3YXJuaW5ncyBpbiB0c2lja2xlJ3MgaW5wdXQuIEVtaXQgZXJyb3JzICh0aGUgZGVmYXVsdCkgaWYgdHNpY2tsZVxuICogY2Fubm90IGVtaXQgYSBjb3JyZWN0IHJlc3VsdCBnaXZlbiB0aGUgaW5wdXQuIEVtaXQgd2FybmluZ3MgZm9yIHF1ZXN0aW9uYWJsZSBpbnB1dCBpZiB0aGVyZSdzIGFcbiAqIGdvb2QgY2hhbmNlIHRoYXQgdGhlIG91dHB1dCB3aWxsIHdvcmsuXG4gKlxuICogRm9yIHR5cGljYWwgdHNpY2tsZSB1c2VycywgZXJyb3JzIGFyZSBhbHdheXMgcmVwb3J0ZWQgYW5kIGJyZWFrIHRoZSBjb21waWxhdGlvbiBvcGVyYXRpb24sXG4gKiB3YXJuaW5ncyB3aWxsIG9ubHkgYmUgZW1pdHRlZCBmb3IgZmlyc3QgcGFydHkgY29kZSAoYW5kIGJyZWFrIHRoZSBjb21waWxhdGlvbiB0aGVyZSksIGJ1dCB3aWwgYmVcbiAqIGlnbm9yZWQgZm9yIHRoaXJkIHBhcnR5IGNvZGUuXG4gKlxuICogQHBhcmFtIHRleHRSYW5nZSBwYXNzIHRvIG92ZXJycmlkZSB0aGUgdGV4dCByYW5nZSBmcm9tIHRoZSBub2RlIHdpdGggYSBtb3JlIHNwZWNpZmljIHJhbmdlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVwb3J0RGlhZ25vc3RpYyhcbiAgICBkaWFnbm9zdGljczogdHMuRGlhZ25vc3RpY1tdLCBub2RlOiB0cy5Ob2RlLCBtZXNzYWdlVGV4dDogc3RyaW5nLCB0ZXh0UmFuZ2U/OiB0cy5UZXh0UmFuZ2UsXG4gICAgY2F0ZWdvcnkgPSB0cy5EaWFnbm9zdGljQ2F0ZWdvcnkuRXJyb3IpIHtcbiAgZGlhZ25vc3RpY3MucHVzaChjcmVhdGVEaWFnbm9zdGljKG5vZGUsIG1lc3NhZ2VUZXh0LCB0ZXh0UmFuZ2UsIGNhdGVnb3J5KSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURpYWdub3N0aWMoXG4gICAgbm9kZTogdHMuTm9kZSwgbWVzc2FnZVRleHQ6IHN0cmluZywgdGV4dFJhbmdlOiB0cy5UZXh0UmFuZ2V8dW5kZWZpbmVkLFxuICAgIGNhdGVnb3J5OiB0cy5EaWFnbm9zdGljQ2F0ZWdvcnkpOiB0cy5EaWFnbm9zdGljIHtcbiAgbGV0IHN0YXJ0LCBsZW5ndGg6IG51bWJlcjtcbiAgaWYgKHRleHRSYW5nZSkge1xuICAgIHN0YXJ0ID0gdGV4dFJhbmdlLnBvcztcbiAgICBsZW5ndGggPSB0ZXh0UmFuZ2UuZW5kIC0gdGV4dFJhbmdlLnBvcztcbiAgfSBlbHNlIHtcbiAgICAvLyBPbmx5IHVzZSBnZXRTdGFydCBpZiBub2RlIGhhcyBhIHZhbGlkIHBvcywgYXMgaXQgbWlnaHQgYmUgc3ludGhlc2l6ZWQuXG4gICAgc3RhcnQgPSBub2RlLnBvcyA+PSAwID8gbm9kZS5nZXRTdGFydCgpIDogMDtcbiAgICBsZW5ndGggPSBub2RlLmVuZCAtIG5vZGUucG9zO1xuICB9XG4gIHJldHVybiB7XG4gICAgZmlsZTogbm9kZS5nZXRTb3VyY2VGaWxlKCksXG4gICAgc3RhcnQsXG4gICAgbGVuZ3RoLFxuICAgIG1lc3NhZ2VUZXh0LFxuICAgIGNhdGVnb3J5LFxuICAgIGNvZGU6IDAsXG4gIH07XG59XG5cbi8qKlxuICogQSByZXBsYWNlbWVudCBmb3IgdHMuZ2V0TGVhZGluZ0NvbW1lbnRSYW5nZXMgdGhhdCByZXR1cm5zIHRoZSB1bmlvbiBvZiBzeW50aGV0aWMgYW5kXG4gKiBub24tc3ludGhldGljIGNvbW1lbnRzIG9uIHRoZSBnaXZlbiBub2RlLCB3aXRoIHRoZWlyIHRleHQgaW5jbHVkZWQuIFRoZSByZXR1cm5lZCBjb21tZW50cyBtdXN0XG4gKiBub3QgYmUgbXV0YXRlZCwgYXMgdGhlaXIgY29udGVudCBtaWdodCBvciBtaWdodCBub3QgYmUgcmVmbGVjdGVkIGJhY2sgaW50byB0aGUgQVNULlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsTGVhZGluZ0NvbW1lbnRzKG5vZGU6IHRzLk5vZGUpOlxuICAgIFJlYWRvbmx5QXJyYXk8UmVhZG9ubHk8dHMuQ29tbWVudFJhbmdlJnt0ZXh0OiBzdHJpbmd9Pj4ge1xuICBjb25zdCBhbGxSYW5nZXM6IEFycmF5PFJlYWRvbmx5PHRzLkNvbW1lbnRSYW5nZSZ7dGV4dDogc3RyaW5nfT4+ID0gW107XG4gIGNvbnN0IG5vZGVUZXh0ID0gbm9kZS5nZXRGdWxsVGV4dCgpO1xuICBjb25zdCBjciA9IHRzLmdldExlYWRpbmdDb21tZW50UmFuZ2VzKG5vZGVUZXh0LCAwKTtcbiAgaWYgKGNyKSBhbGxSYW5nZXMucHVzaCguLi5jci5tYXAoYyA9PiAoey4uLmMsIHRleHQ6IG5vZGVUZXh0LnN1YnN0cmluZyhjLnBvcywgYy5lbmQpfSkpKTtcbiAgY29uc3Qgc3ludGhldGljID0gdHMuZ2V0U3ludGhldGljTGVhZGluZ0NvbW1lbnRzKG5vZGUpO1xuICBpZiAoc3ludGhldGljKSBhbGxSYW5nZXMucHVzaCguLi5zeW50aGV0aWMpO1xuICByZXR1cm4gYWxsUmFuZ2VzO1xufVxuIl19