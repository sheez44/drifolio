
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
		htmlhint: {
			html: {
				src: ['index.html']
			},
		},
		sass: {
		    dist: {
		    	options: {
		    		lineNumbers: true,
		    	},
		      files: {
		        'src/css/app.css' : 'src/sass/app.scss'
		        }
		    }
		  },
		  autoprefixer: {
		      options: {
		        browsers: ['last 2 versions'],
		        map: true
		      },
		      single_file: {
		        src: 'src/css/app.css',
		        dest: 'src/css/app.css'
		        }		    
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
				tasks: ['sass', 'autoprefixer']
			}
		},	
	});


	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-htmlhint');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.registerTask('default', ['concat', 'watch', 'sass', 'jshint', 'uglify', 'autoprefixer', 'htmlhint']);
};