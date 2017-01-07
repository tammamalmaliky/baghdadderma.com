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
        }
    });
    grunt.loadNpmTasks('grunt-contrib-cssmin', 'grunt-contrib-less', 'grunt-contrib-watch');

    grunt.registerTask('default', ['less']);
};
