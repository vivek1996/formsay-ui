module.exports = {
  bundle: {
    main: {
      scripts: ['./src/scripts/argon.min.js', './src/scripts/main.js'],
      styles: './dist/main.css',
    },
    vendor: {
      scripts: [
        './src/scripts/vendor/jquery/jquery.min.js',
        './src/scripts/vendor/bootstrap/bootstrap.bundle.js',
        './src/scripts/vendor/headroom/headroom.min.js',
      ],
    },
  },
  // copy: './assests/**/*.{png,svg}',
  copy: './src/index.html',
};
