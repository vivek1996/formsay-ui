module.exports = {
  bundle: {
    main: {
      scripts: [
        './src/scripts/vendor/jquery/jquery.min.js',
        './src/scripts/vendor/bootstrap/bootstrap.bundle.js',
        './src/scripts/argon.min.js',
        './src/scripts/main.js',
      ],
      styles: './dist/main.css',
    },
    // vendor: {
    //   scripts: './bower_components/angular/angular.js',
    // },
  },
  // copy: './assests/**/*.{png,svg}',
};
