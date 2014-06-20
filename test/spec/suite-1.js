var SimpleTest = require("./../lib/simple_test.js").SimpleTest,
    FileGroup = require("./../../filegroup.js");

SimpleTest("FileGroupJS test cases", function (suite) {
    suite.test("Tests empty directory", function (test) {
        FileGroup(__dirname + "/helper/empty", function (files) {
            test.assert(files && files.length == 0);
        });
    });

    suite.test("Tests one level of directory", function (test) {
        FileGroup(__dirname + "/helper/one_level", function (files) {
            test.assert(files && files.length == 2);
        });
    });

    suite.test("Tests one level of directory and one empty folder", function (test) {
        FileGroup(__dirname + "/helper/one_level_empty", function (files) {
            test.assert(files && files.length == 2);
        });
    });

    suite.test("Tests two levels of directories", function (test) {
        FileGroup(__dirname + "/helper/two_levels", function (files) {
            test.assert(files && files.length == 4);
        });
    });
});