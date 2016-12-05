var firefox = require('selenium-webdriver/firefox');
var firefoxProfile = new firefox.Profile();
firefoxProfile.setPreference('media.navigator.permission.disabled',true);
firefoxProfile.setPreference('media.navigator.streams.fake',true);
firefoxProfile.setPreference('geo.enabled',false); 


exports.config = {
   directConnect: true,
   capabilities : {
				 
 'firefox_profile': firefoxProfile				
				 

								
  			
	
} ,
     	

	
   
  framework: 'jasmine',
  specs: ['firefoxSpec.js'],
 
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