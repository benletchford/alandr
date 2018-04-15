# alandr (awesome-lander)

## Quickstart

## Build Instructions

Build the frontend app.
```
$ cd alandr/www
$ yarn build
```

Setping up the server (not required for building the docker image).
```
$ cd alandr/server
$ pip install -r requirements.txt
```

Build the docker image.
```
$ sudo docker build -t alandr .
```

Then you should be able to run it.
```
sudo docker run -it --rm -v /data:/data -p 80:80 --name alandr alandr
```
