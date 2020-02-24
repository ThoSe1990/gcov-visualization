import * as vscode from 'vscode';

var fs = require('fs');
var path = require('path');

export function ChangeDirectoryToTestFiles()
{
	process.chdir(__dirname);
	process.chdir("..");
	process.chdir("..");
	process.chdir("..");
	process.chdir("src");
	process.chdir("test");
	process.chdir("suite");
	process.chdir("testfiles");
}

export function GetMainCppUri () 
{
    var file = path.join(process.cwd() + '\\src' + '\\main.cpp');
    file = path.normalize(file);
    var uri = vscode.Uri.parse(file);

    return uri;
}

export function GetNoGcovFileCppUri () 
{
    var file = path.join(process.cwd() + '\\src' + '\\noGcovFile.cpp');
    file = path.normalize(file);
    var uri = vscode.Uri.parse(file);

    return uri;
}