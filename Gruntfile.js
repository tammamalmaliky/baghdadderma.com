module.exports = function(grunt) {
    require('jit-grunt')(grunt);

    grunt.initConfig({
        cssmin: {
            dist: {
                files: {
                    'app/css/main.min.css' : 'app/css/main.css'
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
        }

    });
    grunt.loadNpmTasks('grunt-contrib-cssmin', 'grunt-contrib-less', 'grunt-contrib-watch', 'grunt-contrib-uglify', 'grunt-browser-sync', 'grunt-webpack');

    grunt.registerTask('default', ['browserSync', 'watch']);
    grunt.registerTask('buildUgly', ['uglify']);
    grunt.registerTask('buildWebPack', ['webpack']);
};
