#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const rootDir = process.cwd();
const copies = [
    {
        from: path.join(rootDir, 'node_modules', '@jitsi', 'excalidraw', 'dist', 'excalidraw-assets-dev'),
        to: path.join(rootDir, 'libs', 'excalidraw-assets-dev')
    }
];

function copyDir(from, to) {
    if (!fs.existsSync(from)) {
        console.warn(`setup-dev-assets: source folder not found: ${from}`);
        return;
    }

    fs.rmSync(to, { recursive: true, force: true });
    fs.mkdirSync(path.dirname(to), { recursive: true });
    fs.cpSync(from, to, { recursive: true });
    console.log(`setup-dev-assets: copied ${from} -> ${to}`);
}

copies.forEach(({ from, to }) => copyDir(from, to));
