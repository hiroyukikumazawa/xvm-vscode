import * as vscode from 'vscode';
import { keywordDescriptions } from '../constants/keywords';

export class XelHoverProvider implements vscode.HoverProvider {
    public provideHover(
        document: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken
    ): vscode.ProviderResult<vscode.Hover> {
        const wordRange = document.getWordRangeAtPosition(position);
        if (!wordRange) {
            return null;
        }

        const word = document.getText(wordRange);
        const description = keywordDescriptions[word];

        if (description) {
            return new vscode.Hover(description);
        }

        return null;
    }
}