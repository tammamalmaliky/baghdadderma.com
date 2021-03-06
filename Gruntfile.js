module.exports = function(grunt) {
    require('jit-grunt')(grunt);

    grunt.initConfig({
        cssmin: {
            dist: {
                files: {
                    'app/public/css/main.css' : 'app/css/main.css'
                }
            }
        },
        less: {
            development: {
                options: {
                    // compress: true,  I will add this to prod folder
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    'app/css/main.css': 'app/less/main.less' // destination file : source file if more ['less1' , 'less2' ]
                }
            }
        },
        watch: {
            styles: {
                files: ['app/less/main.less'], // which files to watch
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            }
        },
        browserSync: {
            default_options: {
                bsFiles: {
                    src: [
                        "app/css/*.css",
                        "app/*.html"
                    ]
                },
                options: {
                    watchTask: true,
                    server: './app'

                }
            }
        },
        webpack: {
            options: {
                // configuration for all builds
            },
            build: {
                entry: "./app/js/App.js",
                output: {
                    path: "./app/public/js",
                    filename: "App.js"
                }
            },
            module: {
                loaders: [
                    {
                        loader: 'babel',
                        query: {
                            presets: ['es2015']
                        },
                        test: /\.js$/,
                        exclude: /node_modules/
                    }
                ]
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'app/public/js/App.js': ['app/js/App.js']
                }
            }
        },
        imagemin: {                          // Task
            
            dynamic: {                         // Another target
                files: [{
                    expand: true,                  // Enable dynamic expansion
                    cwd: 'app/',                   // Src matches are relative to this path
                    src: ['assets/images/*.{png,jpg,gif,svg}'],   // Actual patterns to match
                    dest: 'app/public/'                  // Destination path prefix
                }]
            }
        },
        copy: {
            main: {
                expand: true,
                cwd: 'app',
                src: '*.html',
                dest: 'app/public/',
            },
            form: {
                expand: true,
                cwd: 'app/forms',
                src: '**',
                dest: 'app/public/forms',
            },
        },
        

    });
    grunt.loadNpmTasks('grunt-contrib-cssmin', 'grunt-contrib-less', 'grunt-contrib-watch', 'grunt-contrib-uglify', 'grunt-browser-sync', 'grunt-contrib-imagemin', 'grunt-contrib-copy');

    grunt.registerTask('default', ['browserSync', 'watch']);
    grunt.registerTask('build', ['imagemin', 'cssmin', 'uglify', 'copy']);
    grunt.registerTask('buildWebPack', ['webpack']);
};
