/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    bower: {
      install: {
        options:{
          targetDir: '../component/bower_components',
          layout: 'byComponent',
          copy: true,
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
          stdout: true,
          stderr: true
        },
      },
    },
    watch: {
      
      jade: {
        options: {
          livereload: true,
          spawn: true
        },
        files: ['src/*.md', 'src/**/*.md'],
        tasks: ['jade:compile']
      },
      all:{
        files: ['src/*.md', 'src/**/*.md', 'src/assets/*.css'],
        tasks: ['jade:compile'],
        options: {
          livereload: true,
          spawn: true
        },
      }

      
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
          "src/playbook.html": ["src/playbook.jade"]
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