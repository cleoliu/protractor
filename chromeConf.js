
exports.config = {
   directConnect: true,
   capabilities : {
				 
				
				 
 'chromeOptions' : {
'args':[
 'allow-file-access-from-files',
'use-fake-device-for-media-stream',
'use-fake-ui-for-media-stream',
'use-file-for-fake-video-capture=/home/u3d/party/spec/y4m.y4m',				  
 'disable-accelerated-video-decode'
						  
	 ]
}
								
  			
	
} ,
     	

	
   
  framework: 'jasmine',
  specs: ['chromeSpec.js'],
 
    jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
	defaultTimeoutInterval: 3000000,
	isVerbose: true
  }
  
};


 // Capabilities to be passed to the webdriver instance.
 // multiCapabilities: [
 //  {'browserName': 'chrome',
 // specs: ['ver1_spec.js']},

 //   {'browserName': 'chrome',
