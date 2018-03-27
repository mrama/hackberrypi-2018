/*
 * This node.js script picks the appropriate file to stream based on which
 * has most recently been modified.
 *
 */

var fs = require('fs');
var path = require('path')
//var file_path = "/home/pi/hackberrypi-2018/hackathon/pictures"
var file_path = "/Users/syu/hackberrypi-2018/lib/webapp"
var return_value = ""
var new_path = "";
var new_mtime = -1;
var fromPath;

// Loop through all the files in the temp directory
function getRecent(path) {
    fs.readdir(file_path, c);
    console.log("getRecent: return value should be");
    console.log(return_value);
    return return_value;
}

function c(err, files) {
        if (err) {
            console.error("Could not list the directory.", err);
            process.exit(1);
        }

        files.forEach(b);
        console.log("c: return value should be");
        console.log(return_value);
}

function b(file, index) {
    fromPath = path.join(file_path, file);
    fs.stat(fromPath, a);
    console.log("b: return value should be");
    console.log(return_value);
}

function a(error, stat) {
    if(error) {
        console.error("Error checking last modified time.", error);
        return;
    }

    if (stat.isFile()) {
        if (stat.mtime > new_mtime) {
            new_mtime = stat.mtime;
            new_path = fromPath;
            return_value = new_path;
            console.log("Changed: file path is now ");
            console.log(return_value);
        }
    }

    console.log("a: return value should be");
    console.log(return_value);

}

console.log("------getrecent-------\n");
getRecent(file_path);

console.log("------let's see what it prints...------\n");
console.log(getRecent(file_path));
