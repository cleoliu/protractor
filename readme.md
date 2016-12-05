# Server 建置環境


## First download and install the key from Google Linux Repository

   

    > wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | sudo apt-key add -

   

    > sudo sh -c 'echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list'



## Update apt

   

    > sudo apt-get update




## Install google chrome
    
    > sudo apt-get install -f
    
    > sudo apt-get install google-chrome-stable
    





## Install chrome driver


    > sudo apt-get install -y unzip
    
    > mkdir -p Downloads
    
    > wget -N http://chromedriver.storage.googleapis.com/2.10/chromedriver_linux64.zip -P ~/Downloads
    
    > unzip ~/Downloads/chromedriver_linux64.zip -d ~/Downloads
    
    > chmod +x ~/Downloads/chromedriver
    
    > sudo mv -f ~/Downloads/chromedriver /usr/local/share/chromedriver
    
    > sudo ln -s /usr/local/share/chromedriver /usr/local/bin/chromedriver
    
    > sudo ln -s /usr/local/share/chromedriver /usr/bin/chromedriver
    
    > sudo apt-get -y install libxpm4 libxrender1 libgtk2.0-0 libnss3 libgconf-2-4



    

## Install firefox

    > cd /opt 
    
    > sudo curl -LO https://ftp.mozilla.org/pub/firefox/releases/43.0.1/linux-x86_64/en-US/firefox-43.0.1.tar.bz2
    
    > sudo tar xjvf firefox-43.0.1.tar.bz2
    
    > sudo ln -snf /opt/firefox/firefox /usr/bin/firefox
    
    

    
## Install nodejs    

    > wget -c https://nodejs.org/dist/v5.0.0/node-v5.0.0-linux-x64.tar.gz
    
    > sudo tar -C /usr/local --strip-components 1 -xzf node-v5.0.0-linux-x64.tar.gz
    
    > sudo ln -s /usr/local/bin/node /usr/bin/node
    
    > sudo ln -s /usr/local/bin/npm /usr/bin/npm
    
    > export PATH=/home/u3d/spec/node_modules/.bin:$PATH
    
    > export LC_ALL=en_US.UTF-8

    > export LANGUAGE=en_US.UTF-8
    
    > echo 'export PATH=/home/u3d/spec/node_modules/.bin:$PATH' >> ~/.bashrc_profile

    > echo ' LC_ALL=en_US.UTF-8' >> ~/.bashrc_profile

    > echo 'LANGUAGE=en_US.UTF-8' >> ~/.bashrc_profile
    

## Install java sdk
    > wget -c https://s3-ap-northeast-1.amazonaws.com/picowork-build/install_files/jdk-7u71-linux-x64.tar.gz
    
    > sudo tar -C /opt -xzf jdk-7u71-linux-x64.tar.gz
    
    > sudo mv /opt/jdk1.7.0_71 /opt/jdk 
    
    > export JAVA_HOME=/opt/jdk
    
    > export PATH=/opt/jdk/bin:$PATH
    
    > echo "JAVA_HOME=/opt/jdk" >> ~/.bashrc_profile
    
    > echo 'export PATH=/opt/jdk/bin:$PATH' >> ~/.bashrc_profile
    
## Install xvfb
    
    > sudo apt-get -y install xfonts-cyrillic xfonts-100dpi xfonts-75dpi xfonts-base xfonts-scalable xvfb

	
## Install opencv
    
    > sudo apt-get install python-opencv 
	


## import cv2
    
    > python
	> import cv2
   
 
 
## Install grunt   
   
    > npm install -g grunt-cli
   
    > npm install grunt

## Install grunt-protractor-runner

- 將資料夾放上Sever 並在資料夾下給下面指令 
    
    grunt install


## Run party test 

###  grunt browser -ent=domain
    
   > grunt chrome -ent=www.picowork.com
   
   > grunt firefox -ent=www.picowork.com

