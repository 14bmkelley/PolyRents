var gulp = require("gulp");
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var buffer = require("vinyl-buffer");
var reactify = require("reactify");
var browserSync = require("browser-sync");

gulp.task("pack", function() {
  return browserify({
    "debug": true,
    "entries": "./assets/js/polyrents.js",
    "transform": [ reactify ]
  })
  .bundle()
  .pipe(source("polyrents.min.js"))
  .pipe(buffer())
  .pipe(gulp.dest("build/"));
});

gulp.task("watch", function(callback) {
  gulp.watch("./components/*", [ "pack" ]);
});

gulp.task("browser-sync", function(callback) {
  browserSync.init(null, {
    "files": [ "build/**/*.*" ],
    "port": 3000,
    "logLevel": "info",
    "injectChanges": true,
    "logSnippet": false,
    "server": {
      "baseDir": __dirname,
    }
  });
});

gulp.task("default", function() {
  gulp.start([
    "pack",
    "watch",
    "browser-sync"
  ]);
});
