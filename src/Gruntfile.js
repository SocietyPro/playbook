/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    bower: {
      install: {
        options:{
          targetDir: 'bower_components_2',
          layout: 'byComponent',
          copy: false,
          cleanTargetDir: false,
          cleanBowerDir: false,
          verbose: true,
        }
      },
    },
    gta: {
      pull: {
        command: 'pull origin gh-pages',
        options: {
          cwd: '..',
          stdout: true,
          stderr: true
        },
      },
    },
    watch: {
      jade: {
        files: ['markdown/**/*.md'],
        tasks: ['jade:compile'],
        options: {
          livereload: true,
          spawn: true
        },
      },
      all:{
        files: ['./**/*.jade', 'markdown/**/*.md', 'assets/**/*'],
        tasks: ['jade:compile', 'maketoc', 'copy:assets'],
        options: {
          livereload: true,
          spawn: true
        },
      },
    },
    jade: {
      compile: {
        options: {
          cwd: "src/",
          client: false, 
          pretty: true,
          runtime: false,
        },
        files: {
          "../index.html": ["./index.jade"]
        }        
      },
    },
    copy: {
      bower: {
        files: [
          // includes files within path and its sub-directories
          {
            expand: true, 
            src: [
              'bower_components/angular/angular.min.js',
              'bower_components/angular-material/angular-material.min.js',
              'bower_components/angular-material/angular-material.min.css',
              'bower_components/angular-animate/angular-animate.min.js',
              'bower_components/angular-aria/angular-aria.min.js',
              'bower_components/angular-material/themes/**/*',
              'bower_components/hammerjs/hammer.min.js',
              'bower_components/roboto/**/*',
              'bower_components/jquery/dist/jquery.min.js',
            ], 
            dest: '../'
          },

          // flattens results to a single level
          // {expand: true, flatten: true, src: ['path/**'], dest: 'dest/', filter: 'isFile'},
        ],        
      },
      assets: {
        files: [
          {expand: true, src: ['assets/**'], dest: '../'},
        ],
      },
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-git-them-all');
  //grunt.loadNpmTasks('grunt-jade');

  grunt.task.registerTask('maketoc', 'Build the TOC', function() {
    // var done = this.async(); // if we need to asynchronously tell grunt success/fail
    var toc = require('toc');
    var fs = require('fs');
    var generatedIndex = fs.readFileSync('../index.html', 'utf8');
    var indexWithTOC = toc.process(generatedIndex); // looks for /<!--\s*toc\s*-->/gi
    grunt.log.writeln('generated toc');
    fs.writeFileSync('../index.html', indexWithTOC, {encoding:'utf8'});
    return true;
  });

  // Default task.
  grunt.registerTask('default', [
    'gta:pull',
    'bower:install',
    'jade:compile',
    'maketoc',
    'copy:bower',
    'copy:assets',
    'watch:all'
  ]);
/*
  grunt.registerTask('bower-install', [
    'bower:install',
  ]);
*/
};

