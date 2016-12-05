module.exports = function(grunt) {

var ent = grunt.option('ent'); 
  //var bsr = grunt.option('bsr');
  //var dis = grunt.option("dis");
    //var dis = 99; 
    //var ser = grunt.option("ser");

var jsonString = '{' ;
            jsonString = jsonString + '"ent": "' + ent + '"';
            jsonString = jsonString + '}';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['Gruntfile.js', 'specs/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: { 
          jQuery: true,
          console: true,
          module: true, 
          document: true
        }
      }
},
 data:JSON.parse(jsonString),

	protractor: {
	    options: {
		keepAlive: false,
		
		},
	    
		run: {},
		
		run_chrome :{
			options:{
			configFile: "./chromeConf.js",
			
				args:{
				
				params:'<%=data%>',
				capabilities : { 
				'browserName': 'chrome',
				
				


				}
				 

				
				
			         	}		
			}
		},
		run_firefox :{
			options:{
			
			configFile: "./firefoxConf.js",
				args:{
				
				params:'<%=data%>',
				capabilities : {
				 
				 'browserName': 'firefox'
				
	
  			
	
				} 
				
				
				}		
			}
		}
		
		
	},

	shell: {
	    xvfb: {
		command: 'Xvfb :16 -ac -screen 0 1600x1200x24',
		options: {
		    async: true
		}
	    },
	    protractor_install:{
		command:'node ./node_modules/protractor/bin/webdriver-manager update'
	    },	
	    npm_install:{
		command:'npm install'
	    }
	},
	env: {
	    xvfb: {
		DISPLAY: ':16'
	    }
	}	

  });

    grunt.registerTask('chrome', [
        'shell:xvfb',
        'env:xvfb',
        'protractor:run_chrome',
        'shell:xvfb:kill'
    ]);
        grunt.registerTask('firefox', [
        'shell:xvfb',
        'env:xvfb',
        'protractor:run_firefox',
        'shell:xvfb:kill'
    ]);
	
    grunt.registerTask('install',[
	'shell:npm_install',
	'shell:protractor_install'
    ]);

  grunt.loadNpmTasks('grunt-protractor-runner');
  grunt.loadNpmTasks('grunt-shell-spawn');
  grunt.loadNpmTasks('grunt-env');
  console.log(grunt.option("ent"));

  grunt.loadNpmTasks('grunt-contrib-jshint');

  //grunt.registerTask('default', ['jshint','protractor-chrome']);

};
