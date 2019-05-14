module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-merge-json');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    "merge-json": {
      "i18n": {
        files: {
          "./src/assets/i18n/en.json": [ "src/app/**/*-en.json", "node_modules/@ngx-evry/evry-common/json/en.json" ],
          "./src/assets/i18n/no.json": [ "src/app/**/*-no.json", "node_modules/@ngx-evry/evry-common/json/no.json" ]
        }
      }
    },
    watch: {
      files: ["src/app/**/*.json", "node_modules/@ngx-evry/evry-common/json/*.json"],
      tasks: ["merge-json"]
    }
  });

};
