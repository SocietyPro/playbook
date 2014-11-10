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
    watch: {
      
      jade: {
        files: ['src/*.md', 'src/**/*.md'],
        tasks: ['jade:compile']
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
          "src/playbook.html": ["src/playbook.jade"]
        }        

      },
    },
  });
          /*
        src: "playbook.jade",
        dest: "./"

        files: {
          "src/playbook.html": "src/playbook.jade"
          "src/playbook.html": ["src/playbook.jade"]
        }
          */
        /*
        files: [
          {
            cwd: 'src',
            src: 'playbook.jade',
            dest: '.',
            expand: true,
            ext: '.html'
          },
        ],
        */


  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jade');
  //grunt.loadNpmTasks('grunt-jade');

  // Default task.
  /*
  grunt.registerTask('default', [
    'bower:install',
    'jade:compile',
    'watch:jade'
  ]);
  */

  // watch task.
  grunt.registerTask('watch-jade', [
    'jade:compile',
    'watch:jade',
  ]);

  // Compile task.
  grunt.registerTask('compile-jade', [
    'jade:compile',
  ]);
};