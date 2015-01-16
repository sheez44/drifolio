
module.exports = function(grunt) {
	pkg: grunt.file.readJSON('package.json'),
	grunt.initConfig({
		concat: {
			options: {
				separator: ';',
			},
			dist: {
				src: ['src/js/modules/*.js'],
				dest: 'src/js/main.js'
			}
		},

		jshint: {
			options: {
				globals: {
					jQuery: true
				}
			},
			beforeconcat: ['src/js/modules/*.js'],
			afterconcat: 'src/js/main.js'
		},
		uglify: {
			dist: {
				files: {
					'build/js/main.min.js': ['src/js/main.js']
				}
			}
		},
		compass: {
			dist: {
				options: {
					config: 'config.rb'
				}
			}
		},
		htmlhint: {
			html: {
				src: ['index.html']
			},
		},
		watch: {
			js: {
				files: ['src/js/modules/*.js'],
				tasks: ['concat', 'uglify'],

			},
			html: {
				files: ['index.html'],
				tasks: ['htmlhint:html']
			},		
			css: {
				files: ['**/*.scss'],
				tasks: ['compass']
			}
		},	
	});


	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-htmlhint');


	grunt.registerTask('default', ['concat', 'watch', 'jshint', 'uglify', 'compass', 'htmlhint']);
};