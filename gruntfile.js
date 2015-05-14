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
    //grunt -- sass  change sass to css
    sass: {
      output : {
        options: {
          style: sassStyle
        },
        files: {
          './style.css': './scss/style.scss'
        }
      }
    },
    //grunt  ---concat many file to one file  
    concat:{
      options:{
        separator:':',
      },
      dist:{
        src:['./src/plungin.js','./src/plungin2.js'],
        dest:'./global.js',
      },
    },
    //grunt -- uglify make file  smallly
    uglify:{
      compress:{
        files:{
          './global.min.js':['./global.js']
        }
      }
    },
    //grunt --jshint  check js 
    jshint:{
      all:['./global.js']
    },
    //grunt --watch js and css change 
    watch:{
      script:{
        files:['./src/plungin.js','./src/plungin2.js'],
        tasks:['concat','jshint','uglify']
      },
      sass:{
        files:['./scss/style.scss'],
        tasks:['sass']
      },
      livereload:{
        option:{
          livereload:'<% = connect.options.livereload %>'
        },
        files:[
          'index.html',
          'style.css',
          'js/global.min.js'
        ]
      }
    },
    connect:{
      options:{
        port:9000,
        open:true,
        livereload:356729,
        //change this to '0.0.0.0' to access the server from outside
        hostname:'localhost'
      },
      sever:{
        options:{
          port:9001,
          base:'./'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('outputcss',['sass']);
  grunt.registerTask('concatjs',['concat']);
  //注册一个compress任务的目的就是依次执行合并、检查、压缩的任务。
  grunt.registerTask('compress',['concat','jshint','uglify']);
  grunt.registerTask('watchit',['sass','concat','jshint','connect','watch']);

  grunt.registerTask('default');

};

