module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        bower: {
            install: {
                options: {
                    cleanTargetDir : false,
                    cleanBowerDir : false,
                    copy : false
                }
            }
        },
        bowerInstall: {

            target: {
                src: './dist/index.html' // point to your HTML file.
                ,options: {
                    cwd: './',
                    dependencies: true,
                    devDependencies: true,
                    exclude: [
                        /jquery/,
                        "vendors/bootstrap/dist/js/bootstrap.js"
                    ],
                    fileTypes: {},
                    ignorePath: '',
                    overrides: {

                    }
                }
            }
        },

        copy: {
            main: {
                files: [
                    // includes files within path and its sub-directories
                    {
                        expand: true, cwd: 'src/', src: ['**/*'], dest: 'dist/'
                    }

                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-bower-install');
    grunt.loadNpmTasks('grunt-contrib-copy');
    // Default task(s).
    grunt.registerTask('default', "Default task.", ["copy", "bower", "bowerInstall"]);
    grunt.registerTask('custom', "Custom task.", function () {
        console.log(grunt);
    });

};