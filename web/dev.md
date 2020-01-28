# LINUX
### active ports listening
sudo lsof -i -P -n | grep LISTEN

# DOCKER

### install script
install-docker.sh
```
#!/bin/bash
sudo apt-get update
# Prepare TLS encryption
sudo apt-get -y install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common

# Add and verify official Docker GPG key
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo apt-key fingerprint 0EBFCD88

# Add apt repo
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"

sudo apt-get update

# Install Docker CE

sudo apt-get -y install docker-ce docker-ce-cli containerd.io
```

add yourusername to docker group for sudo docker commands
```
sudo vi /etc/group
...
docker:x:999:yourusername
...
```

### commands
```
docker run -it --detach=true ubuntu bash
docker ps
```

```
docker network ls
```
network interfaces associated with docker host
bridge interface allows network communication into and out of container

create new network interface
```
docker network create newnet
docker inspect newnet
```

connect networks to same bridge
```
docker network connect newnet newname
```

### scripting docker environments
Dockerfile
```
FROM ubuntu:latest

RUN apt-get update
RUN apt-get install -y apache2
RUN echo "Welcome..." > /var/www/html/index.html
EXPOSE 80
```

builds docker image from Dockerfile
```
docker build -t "webserver" .
```

```
docker run -d -p 80:80 webserver /usr/sbin/apache2ctl -D FOREGROUND
```
-d run container detached
-p forward any traffic coming from ports
tagged name
single command to run on server
-D FOREGROUND ensures will remain running once launch is completed

pull image from dockerhub [hub.docker.com]
```
docker pull <imagename>
```

# AWS + Kubernetes 
### package dependencies
- aws-cli 
- eksctl 
- kubectl 
- aws-iam-authenticator

check installs
```
aws --version
// aws-cli/1.16.285 Python/3.6.0 Windows/10 botocore/1.13.21
eksctl version
// [ℹ]  version.Info{BuiltAt:"", GitCommit:"", GitTag:"0.10.1"}
kubectl version --short --client
// Client Version: v1.14.7-eks-1861c5
aws-iam-authenticator version
// {"Version":"0.4.0","Commit":"9999cd8047782c94c08e2d24b77dc9488947aa03"}
```

setup aws access key id and secret key []
```

```

view current clusters
```
eksctl get cluster
```

create new cluster
```
eksctl create cluster \
--name cluster-name \
--version 1.14 \    (version of kubectl)
--nodegroup-name standard-workers \
--node-type t3.medium \
--nodes 3 \         (aiming for 3 working nodes)
--nodes-min 1 \
--nodes-max 4 \
--node-ami auto     
```