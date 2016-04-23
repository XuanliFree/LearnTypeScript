var gulp = require("gulp"),
    tsc = require("gulp-tsc"),
    shell = require("gulp-shell"),
    seq = require("run-sequence"),
    del = require("del");
var paths = {
    ts: {
        src: ["WorkflowUI/*.ts"],
        dest: "WorkflowUI/js"
    }
}

gulp.task("default", ["build"]);
gulp.task("clean", function(input) {
    del(paths.ts.dest + "*.js", input);
});
gulp.task("rebuild", function(input) {
    seq("clean", "build", input);
});
gulp.task("build", function(input) {
    return gulp
        .src(paths.ts.src)
        .pipe(tsc({
            module: "amd",
            sourcemap: true,
            emitError: true
        }))
        .pipe(gulp.dest(paths.ts.dest));
});
