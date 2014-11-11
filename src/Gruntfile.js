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
        command: 'pull origin stackedit',
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
        files: ['index.jade', 'markdown/**/*.md', 'assets/**/*'],
        tasks: ['jade:compile', 'copy:assets'],
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
          {expand: true, src: ['bower_components/**'], dest: '../'},

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

  // Default task.
  grunt.registerTask('default', [
    'gta:pull',
    'bower:install',
    'jade:compile',
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