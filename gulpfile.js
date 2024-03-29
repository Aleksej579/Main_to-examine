const gulp = require("gulp");
const pug = require("gulp-pug");
const sass = require("gulp-sass");
const concat = require("gulp-concat");

function pug2html(cb) {
    return gulp
        .src("index.pug")
        .pipe(
            pug({
                pretty: true
            })
        )
        .pipe(gulp.dest("index.html"));
}
function style() {
    return gulp
        .src("src/sass/*.sass")
        .pipe(sass())
        .on("error", sass.logError)
        .pipe(concat("styles.css"))
        .pipe(gulp.dest("./dest"));
}
function fonts() {
    return gulp
        .src("src/fonts/**/*.{eot,svg,ttf,woff,woff2}")
        .pipe(gulp.dest("./dest/fonts/"));
}
function images() {
    return gulp
        .src("src/images/**/*.{png, jpeg, svg}")
        .pipe(gulp.dest("./dest/images/"));
}
function js() {
    return gulp
        .src("javascript/*.js")
        .pipe(concat("main.js"))
        .pipe(gulp.dest("./dest"));
}
function watch() {
    gulp.watch("index.pug", pug2html);
    // gulp.watch("src/includes/*.pug", pug2html);
    // gulp.watch("src/sass/*.sass", style);
    // gulp.watch("src/js/*.js", js);
}

module.exports.start = gulp.series(pug2html, style, js, fonts, images, watch);
