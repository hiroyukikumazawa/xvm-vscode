import * as vscode from 'vscode';
import { XelHoverProvider } from './providers/hoverProvider';

export function activate(context: vscode.ExtensionContext) {
    // Register the hover provider for XEL files
    const hoverProvider = vscode.languages.registerHoverProvider(
        'xvm',
        new XelHoverProvider()
    );

    context.subscriptions.push(hoverProvider);
}

export function deactivate() {}