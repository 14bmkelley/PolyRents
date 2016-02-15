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
    "entries": "./src/signup/polyrents-base.js",
    "transform": [ reactify ]
  })
  .bundle()
  .pipe(source("polyrents-custom.js"))
  .pipe(buffer())
  .pipe(gulp.dest("./src/signup/"));
});

gulp.task("pack-signin", function() {
  return browserify({
    "debug": devEnvironment,
    "entries": "./src/signin/polyrents-base.js",
    "transform": [ reactify ]
  })
  .bundle()
  .pipe(source("polyrents-custom.js"))
  .pipe(buffer())
  .pipe(gulp.dest("./src/signin/"));
});

gulp.task("pack-tenant-register", function() {
  return browserify({
    "debug": true,
    "entries": "./src/tenant/onboarding/polyrents-base.js",
    "transform": [ reactify ]
  })
  .bundle()
  .pipe(source("polyrents-custom.js"))
  .pipe(buffer())
  .pipe(gulp.dest("./src/tenant/onboarding/"));
});

gulp.task("pack-landlord-register", function() {
  return browserify({
    "debug": true,
    "entries": "./src/landlord/onboarding/polyrents-base.js",
    "transform": [ reactify ]
  })
  .bundle()
  .pipe(source("polyrents-custom.js"))
  .pipe(buffer())
  .pipe(gulp.dest("./src/landlord/onboarding"));
});

gulp.task("pack-guarantor-register", function() {
  return browserify({
    "debug": true,
    "entries": "./src/guarantor/onboarding/polyrents-base.js",
    "transform": [ reactify ]
  })
  .bundle()
  .pipe(source("polyrents-custom.js"))
  .pipe(buffer())
  .pipe(gulp.dest("./src/guarantor/onboarding/"));
});

gulp.task("watch", function(callback) {
  gulp.watch("./src/signup/components/**/*.*", [ "pack-signup" ]);
  gulp.watch("./src/signin/components/**/*.*", [ "pack-signin" ]);
  gulp.watch("./src/tenant/onboarding/components/**/*.*", [ "pack-tenant-register" ]);
  gulp.watch("./src/landlord/onboarding/components/**/*.*", [ "pack-landlord-register" ]);
  gulp.watch("./src/guarantor/onboarding/components/**/*.*", [ "pack-guarantor-register" ]);
});

gulp.task("browser-sync", function(callback) {
  browserSync.init({
    "files": [ "./src/**/*.*" ],
    "port": 3000,
    "logLevel": "info",
    "injectChanges": true,
    "logSnippet": false,
    "server": {
      "baseDir": "./src/"
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
