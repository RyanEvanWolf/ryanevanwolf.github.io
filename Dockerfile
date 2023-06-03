FROM ubuntu:latest
RUN apt-get update

##Required for newer node js
# curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash - &&\
# sudo apt-get install -y nodejs
RUN apt-get install  curl xz-utils -y
RUN apt-get install 


