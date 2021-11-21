# =redirector=
Blazing fast 301/302 redirects 

## :rocket: Features
* 301/302 redirects @Edge
* Custom TLS certificate
* Serverless framework on AWS: CloudFront + Lambda@Edge 

## :clapper: Installation
```console
foo@bar:~$ npm install -g serverless
foo@bar:~$ sls deploy --verbose
```

## :cookie: Usage
```console
foo@bar:~$ curl -I https://maslick.tech
HTTP/1.1 301 Moved Permanently
Content-Length: 0
Connection: keep-alive
Server: CloudFront
Date: Sun, 21 Nov 2021 12:18:14 GMT
Location: https://github.com/maslick
Cache-Control: max-age=3600
X-Cache: LambdaGeneratedResponse from cloudfront
Via: 1.1 c4813da7dbee67e890e9271e5ca72739.cloudfront.net (CloudFront)
X-Amz-Cf-Pop: LHR50-C1
X-Amz-Cf-Id: t--UFPNHL8xLquKbqlTsGh9Pn07WXsVoMiMyrflryv-MJk_ADw8-KA==
```

* https://maslick.tech/qa
* https://maslick.tech/cv
* https://maslick.tech
