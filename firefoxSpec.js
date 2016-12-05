//var date = new Date();
//console.log(date);

var timer = 5000;
var fs = require('fs');
var path = require('path');
var nEnv = "https://"+ browser.params.ent;
function getDateTime() {

    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    return year + "-" + month + "-" + day + "  " + hour + ":" + min;


};

var nDomain = browser.params.ent +"--" + getDateTime() ;

console.log(browser.params.ent);




describe('Hello-Picowork', function() {
  it('should add a todo', function() {
    
	function writeScreenShot(data, filename) {
	var stream = fs.createWriteStream(filename);
		stream.write(new Buffer(data, 'base64'));
		stream.end();
    };
	
	
	//login

	browser.get(nEnv);
	browser.driver.manage().window().setSize(1800, 1000);
	//browser.driver.manage().window().maximize();
    element(by.name('user[email]')).sendKeys('arthurhung@yopmail.com');
    element(by.name('user[password]')).sendKeys('bobobo');
	browser.findElement(by.xpath('//div[3]/button')).sendKeys("\n");	
	

	
	browser.sleep(timer);
	browser.waitForAngular();
		
	
	
	//browser.findElement(by.xpath('//article/div/i')).click();
		


	//waiting for element
	//var EC = protractor.ExpectedConditions;
		//var el =  element(by.xpath('//li[4]/a/i'));
		//browser.wait(EC.presenceOf(el),10000);
		//expect(el.isPresent()).toBeTruthy();

	
	
	//FLOW
	//browser.controlFlow().execute(function() {
	//for(var i = 0; i<100; i++){
		//console.log(i);
	//}
	//});
	
	/////////////////////////////////////////////////////////////////////////
	
	//create cowork
	
	browser.findElement(by.xpath('//li[4]/a/i')).click();
	element(by.name('work[title]')).sendKeys(nDomain);
	browser.findElement(by.xpath('//div[3]/input[2]')).click();
	browser.sleep(timer);
	browser.waitForAngular();	
	
	
	browser.findElement(by.xpath('//div[2]/h2/ul/li/i')).click();
	browser.sleep(timer);
	browser.waitForAngular();
	
	browser.findElement(by.xpath('//div/ul/li/i')).click();
	browser.sleep(timer);
	browser.waitForAngular();
	
	
	browser.findElement(by.xpath('//div/ul/li[2]/i')).click();
	browser.sleep(timer);
	browser.waitForAngular();
	
	browser.findElement(by.xpath('//div/ul/li[3]/i')).click();
	browser.sleep(timer);
	browser.waitForAngular();
		
	
	browser.findElement(by.xpath('//footer/ul/li[2]/button')).click();
	browser.sleep(timer);
	browser.waitForAngular();
	
	browser.findElement(by.xpath('//footer/ul/li[2]/button')).click();
	browser.sleep(timer);
	browser.waitForAngular();
	
	//////////////////////////////////////////////////////////////////////////
	
	
	
	//Invite Apples
	var browser3 = browser.forkNewDriverInstance(true);
	var browser2 = browser.forkNewDriverInstance(true);
	var browser4 = browser.forkNewDriverInstance(true);

	
	
	browser2.driver.manage().window().setSize(1800, 1000);
	browser3.driver.manage().window().setSize(1800, 1000);
	browser4.driver.manage().window().setSize(1800, 1000);
	
	var element3 = browser3.element;
	
	
	element3(by.name('user[email]')).sendKeys('apple1@yopmail.com');
    element3(by.name('user[password]')).sendKeys('bobobo');
	element3(by.xpath('//div[3]/button')).sendKeys("\n");
	
	
	var element2 = browser2.element;
	element2(by.name('user[email]')).sendKeys('apple2@yopmail.com');
    element2(by.name('user[password]')).sendKeys('bobobo');
	element2(by.xpath('//div[3]/button')).sendKeys("\n");
	
	var element4 = browser4.element;
	element4(by.name('user[email]')).sendKeys('apple3@yopmail.com');
    element4(by.name('user[password]')).sendKeys('bobobo');
	element4(by.xpath('//div[3]/button')).sendKeys("\n");

	
	
	
	
	

	//Party invite
	browser.actions().mouseMove(element(by.xpath('//section/section/div[3]/div/div/div/div'))).perform();
	browser.findElement(by.xpath('//section/section/div[3]/div/div/div/div/button[3]')).click();
	
	//browser.findElement(by.css('.u3d-btn.broadcast-button.broadcast-button-party-p2p')).click();
	browser.sleep(timer);
	browser.waitForAngular();
	
	browser.takeScreenshot().then(function (png) {
        writeScreenShot(png, 'what.png');
    });

	browser.findElement(by.xpath('//label/input')).click();
	browser.sleep(timer);
	browser.waitForAngular();
	
	browser.findElement(by.xpath('//footer/ul/li[2]/button')).click();
	browser.sleep(timer);
	browser.waitForAngular();
	
	browser.findElement(by.xpath('//footer/ul/li[2]/button')).click();
	browser.sleep(10000);
	browser.waitForAngular();
	



	//Apples accept Calling
	
	element3(by.xpath('//footer/ul/li[3]/span')).click();
	//browser.sleep(timer);
	//browser.waitForAngular();
	element2(by.xpath('//footer/ul/li[3]/span')).click();
	//browser.sleep(timer);
	//browser.waitForAngular();
	element4(by.xpath('//footer/ul/li[3]/span')).click();
	//browser.sleep(timer);
	//browser.waitForAngular();
	
	browser.sleep(60000);
	
	browser.takeScreenshot().then(function (png) {
        writeScreenShot(png, 'firefox.png');
    });
	

// delete Cowork
	
	browser.findElement(by.xpath('//u3d-work-viewer/ul/li[3]/a/i')).click();
	browser.sleep(timer)	;
	browser.waitForAngular();
	
	browser.actions().mouseMove(element(by.xpath('//article'))).perform();
	browser.findElement(by.xpath('//article/input')).click();
	browser.sleep(timer)	;
	browser.waitForAngular();
	
	var findTrash = element(by.xpath('//ul[2]/li[3]/a/i'));
	
	findTrash.isPresent().then(function(result) {
	
	if (result) {
		findTrash.click();
	}

		

	else {
		browser.findElement(by.xpath('//ul[2]/li[2]/a/i')).click();
	}
	});
	


//opencv detect result
	
	browser.controlFlow().execute(function() {
	var process = require('child_process');
	process.exec('python opencv2.py',function (err,stdout,stderr) {
		if (err) {
			console.log("\n"+stderr);
			var pass = false;
			expect(pass).toBe(true,"opencv need to debug!!!");
		} 
		
		else {
			console.log(stdout);
			//console.log(typeof(stdout));
			stdout = stdout.toString().replace(/[\n\r]/g, "");
			
			if (stdout === 'Pass') {
				pass = true;
				//console.log(stdout);
				expect(pass).toBe(true);
			}
			else {
				var pass = false;
				
				expect(pass).toBe(true,"-----------------Party Testing Fail-----------------");
				//proccess.exit(1);
			}
			
		}
	});
	});	
	

	
	
	browser.sleep(10000);
  });
});
