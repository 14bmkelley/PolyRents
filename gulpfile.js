var gulp = require("gulp");
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var buffer = require("vinyl-buffer");
var reactify = require("reactify");
var browserSync = require("browser-sync");
var devEnvironment = true;

gulp.task("pack-signup", function() {
  return browserify({
    "debug": devEnvironment,
    "entries": "./src/assets/js/polyrents-signup.js",
    "transform": [ reactify ]
  })
  .bundle()
  .pipe(source("polyrents-signup.min.js"))
  .pipe(buffer())
  .pipe(gulp.dest("./src/build/"));
});

gulp.task("pack-signin", function() {
  return browserify({
    "debug": devEnvironment,
    "entries": "./src/assets/js/polyrents-signin.js",
    "transform": [ reactify ]
  })
  .bundle()
  .pipe(source("polyrents-signin.min.js"))
  .pipe(buffer())
  .pipe(gulp.dest("./src/build/"));
});

gulp.task("pack-tenant-register", function() {
  return browserify({
    "debug": true,
    "entries": "./src/assets/js/polyrents-tenant-register.js",
    "transform": [ reactify ]
  })
  .bundle()
  .pipe(source("polyrents-tenant-register.min.js"))
  .pipe(buffer())
  .pipe(gulp.dest("./src/build/"));
});

gulp.task("pack-landlord-register", function() {
  return browserify({
    "debug": true,
    "entries": "./src/assets/js/polyrents-landlord-register.js",
    "transform": [ reactify ]
  })
  .bundle()
  .pipe(source("polyrents-landlord-register.min.js"))
  .pipe(buffer())
  .pipe(gulp.dest("./src/build/"));
});

gulp.task("pack-guarantor-register", function() {
  return browserify({
    "debug": true,
    "entries": "./src/assets/js/polyrents-guarantor-register.js",
    "transform": [ reactify ]
  })
  .bundle()
  .pipe(source("polyrents-guarantor-register.min.js"))
  .pipe(buffer())
  .pipe(gulp.dest("./src/build/"));
});

gulp.task("watch", function(callback) {
  gulp.watch("./src/components/signup/**/*.*", [ "pack-signup" ]);
  gulp.watch("./src/components/signin/**/*.*", [ "pack-signin" ]);
  gulp.watch("./src/components/tenant-register/**/*.*", [ "pack-tenant-register" ]);
  gulp.watch("./src/components/landlord-register/**/*.*", [ "pack-landlord-register" ]);
  gulp.watch("./src/components/guarantor-register/**/*.*", [ "pack-guarantor-register" ]);
  gulp.watch("./src/components/common/**/*.*", [ "pack-signup", "pack-signin", "pack-tenant-register", "pack-landlord-register", "pack-guarantor-register" ]);
});

gulp.task("browser-sync", function(callback) {
  browserSync.init({
    "files": [ "./src/**/*.*" ],
    "port": 3000,
    "logLevel": "info",
    "injectChanges": true,
    "logSnippet": false,
    "server": {
      "baseDir": __dirname
    }
  });
});

gulp.task("default", function() {
  gulp.start([
    "pack-signup",
    "pack-signin",
    "pack-tenant-register",
    "pack-landlord-register",
    "pack-guarantor-register",
    "watch",
    "browser-sync"
  ]);
});
