module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

       less: {
            development: {
                options: {
                    // compress: true,  I will add this to prod folder
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    'app/main.css': 'app/less/main.less' // destination file : source file if more ['less1' , 'less2' ]
                }
            }
       },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-less', 'grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['less']);
    grunt.registerTask('less', ['less']);

};