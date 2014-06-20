var fs = require("fs");

function FileGroup(path, callback) {
    var results = [],
        counter = 0;

    function findPath(path, callback) {
        fs.readdir(path, function (err, results) {
            counter--;
            callback(err? null : results, path);
        });
    }

    function process(arr, path) {
        if (arr) {
            counter += arr.length;

            if (!counter) {
                callback(results);
                return;
            }

            arr.forEach(function (file) {
                file = path + '/' + file;
                fs.stat(file, function (err, stat) {
                    if (stat.isDirectory()) {
                        findPath(file, process);
                    } else {
                        results.push(file);
                        counter--;
                        if (counter == 0) {
                            callback(results);
                        }
                    }
                });
            });
        }
    }

    counter++;
    findPath(path, process);
}

module.exports = FileGroup;