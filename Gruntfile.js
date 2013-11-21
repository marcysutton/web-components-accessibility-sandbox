/*
 * web-components-accessibility
 *
 * Copyright (c) 2013 Marcy Sutton
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    config: {
      src: 'src',
      dist: './dist'
    },
    sass: {
      dist: {
        files: {
          '<%= config.dist %>/_ui/css/main.css' : '<%= config.src %>/styles/main.sass'
        }
      }
    },
    coffee: {
      options: {
        bare: false
      },
      compile: {
        expand: 'yes',
        cwd: '<%= config.src %>/scripts',
        src: ['**/*'],
        dest: '<%= config.dist %>/_ui/js',
        ext: '.js',
        filter: 'isFile'
      }
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= config.dist %>/*',
            '!<%= config.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp'
    },
    connect: {
      options: {
        port: 8888,
        livereload: 35729,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: false,
          base: [
            '<%= config.dist %>'
          ]
        }
      },
      test: {
        options: {
          base: [
            'test',
            '<%= config.dist %>'
          ]
        }
      },
      dist: {
        options: {
          open: true,
          base: '<%= config.dist %>'
        }
      }
    },
    jade: {
      html: {
        files: {
          '<%= config.dist %>':['<%= config.src %>/templates/*.jade', '<%= config.src %>/templates/!_*.jade']
        },
        options: {
          client: false,
          basePath: '<%= config.src %>/templates',
          pretty: true
        }
      }
    },
    watch: {
      coffee: {
        files: ['<%= config.src %>/scripts/{,*/}*.coffee'],
        tasks: ['coffee']
      },
      sass: {
        files: ['<%= config.src %>/styles/{,*/}/*.{scss,sass}'],
        tasks: ['sass']
      },
      jade: {
        files: [
          '<%= config.src %>/templates/*.jade',
          '<%= config.src %>/templates/**/*.jade'
        ],
        tasks: 'jade'
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= config.src %>/*.html',
          '<%= config.dist %>/_ui/css/{,*/}*.css',
          '<%= config.dist %>}/_ui/js/{,*/}*.js'
        ]
      }
    }
  });

  // // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-jade');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // By default, lint and run all tests.
  grunt.registerTask('server', ['default', 'connect:livereload', 'watch']);

  grunt.registerTask('default', ['clean','coffee', 'sass', 'jade']);
};
