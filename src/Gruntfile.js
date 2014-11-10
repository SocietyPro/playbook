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
        files: ['markdown/**/*.md', 'assets/**/*.css'],
        tasks: ['jade:compile'],
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
          //"src/playbook.html": "src/playbook.jade"
          "../index.html": ["./index.jade"]
        }        

      },
    },
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-git-them-all');
  //grunt.loadNpmTasks('grunt-jade');

  // Default task.
  grunt.registerTask('default', [
    'gta:pull',
    'jade:compile',
    'watch:all'
  ]);

  grunt.registerTask('bower-install', [
    'bower:install',
  ]);
};