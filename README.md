# alandr (awesome-lander)

## Quickstart

## Build Instructions

### Manual Build

Build the frontend app.
```
$ cd alandr/www
$ yarn build
```

Setup the `bottle` server.
```
$ cd alandr/server
$ pip install -r requirements.txt
```

### Docker Build

Build and run the docker image.
```
$ sudo docker build -t alandr .
$ sudo docker run -it --rm -v /data:/data -p 80:80 --name alandr alandr
```
