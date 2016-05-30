import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import * as merge from 'merge-stream';
import * as autoprefixer from 'autoprefixer';
import * as cssnano from 'cssnano';
import {join} from 'path';
import {APP_SRC, TMP_DIR, CSS_PROD_BUNDLE, CSS_DEST, APP_DEST, BROWSER_LIST, ENV, DEPENDENCIES, SASS_OPTIONS} from '../../config';
const plugins = <any>gulpLoadPlugins();

const processors = [
  autoprefixer({
    browsers: BROWSER_LIST
  })
];

const isProd = ENV === 'prod';

if (isProd) {
  processors.push(
    cssnano({
      discardComments: {removeAll: true}
    })
  );
}

function prepareTemplates() {
  return gulp.src(join(APP_SRC, '**', '*.html'))
    .pipe(gulp.dest(TMP_DIR));
}

function processComponentScss() {
  return gulp.src([
      join(APP_SRC, '**', '*.scss'),
      '!' + join(APP_SRC, 'assets', '**', '*.scss')
    ])
    .pipe(plugins.sass(SASS_OPTIONS))
    .pipe(isProd ? plugins.cached('process-component-css') : plugins.util.noop())
    .pipe(plugins.postcss(processors))
    .pipe(gulp.dest(isProd ? TMP_DIR: APP_DEST));
}

function processExternalScss() {
  return gulp.src([
      join(APP_SRC, 'assets', '**', 'main.scss')
    ])
    .pipe(plugins.sass(SASS_OPTIONS))
    .pipe(isProd ? plugins.cached('process-external-css') : plugins.util.noop())
    .pipe(plugins.postcss(processors))
    .pipe(isProd ? plugins.concat(CSS_PROD_BUNDLE) : plugins.util.noop())
    .pipe(gulp.dest(CSS_DEST));
}
function getExternalScss() {
  return DEPENDENCIES.filter(d => /\.scss$/.test(d.src));
}


export = () => merge(processComponentScss(), prepareTemplates(), processExternalScss());