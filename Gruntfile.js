module.exports = function(grunt) {

    "use strict";
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        //tasks
        

    });

    grunt.registerTask('default',[]);
    grunt.registerTask('serve', []);
};