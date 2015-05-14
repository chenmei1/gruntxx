/**
 * 
 * @authors chenmei (you@example.org)
 * @date    2015-05-13 22:06:52
 * @version 1.0
 */
 //grunt uglify

/* module.exports = function(grunt){
 	 grunt.initConfig({
 		pkg.grunt.file.readJSON("package.json"),
 		uglify:{
 			option:{
 			banner:'/*!<% = pkg.name %><%= grunt.template.today("yyyy-mm-dd")%>*\/\n'
 			},
 			bulid:{
 				src:'src/<%= pkg.name %>.js',
 				dest:'bulid/<%= pkg.name %>.min.js'
 			}
 		}
 	});

 	grunt.loadNpmTasks("grunt-contrib-uglify");
 	grunt.registerTask("compress",['uglify:bulid']);
 };
*/
module.exports = function(grunt) {

  var sassStyle = 'expanded';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      output : {
        options: {
          style: sassStyle
        },
        files: {
          './style.css': './scss/style.scss'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('outputcss',['sass']);
  grunt.registerTask('default');

};

