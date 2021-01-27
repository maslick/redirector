# =redirector=
Blazing fast 301/302 redirects 

## :rocket: Features
* 301/302 redirects @Edge
* Custom TLS certificate
* Serverless framework on AWS: CloudFront + Lambda@Edge 

## :clapper: Installation
```
$ sls deploy --verbose
```

## :cookie: Usage
```
$ curl -vs https://maslick.tech 1> /dev/null
...
> GET / HTTP/1.1
> Host: maslick.tech
> User-Agent: curl/7.64.1
> Accept: */*
>
< HTTP/1.1 301 Moved Permanently
< Content-Length: 0
< Connection: keep-alive
< Server: CloudFront
< Date: Wed, 27 Jan 2021 07:17:06 GMT
< Location: https://github.com/maslick
< Cache-Control: max-age=3600
...
```
