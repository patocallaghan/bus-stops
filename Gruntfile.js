/*global module:false*/
module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
	// Task configuration.
		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				unused: true,
				boss: true,
				eqnull: true,
				browser: true,
				globals: {
					jQuery: true,
                    google: true,
                    UI: true,
                    Data: true
				}
			},
			gruntfile: {
				src: 'Gruntfile.js'
			},
			scripts: {
				src: ['js/**/*.js', 'test/**/*.js', '!js/lib/**/*.js']
			}
		},
		qunit: {
			files: ['test/**/*.html']
		},
		connect: {
			server: {
				options: {
					port: 9001,
					base: 'www-root'
				}
			}
		},
        watch: {
            gruntfile: {
                files: 'Gruntfile.js',
                tasks: ['jshint:gruntfile'],
            },
            test: {
                files: '<%= jshint.scripts.src %>',
                tasks: ['jshint'],
            },
            options: {
                livereload: true
            }
		}
	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	// Default task.
	grunt.registerTask('default', ['jshint', 'watch', 'connect']);

};
