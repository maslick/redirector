# =redirector=
Simple service that performs 301/302 redirects using AWS Cloudfront + Lambda@Edge

```
https://maslick.tech/helloworld?id=123&campaign=456

{
  "clientIp": "46.123.254.35",
  "headers": {
    "host": [
      {
        "key": "Host",
        "value": "maslick.tech"
      }
    ],
    "user-agent": [
      {
        "key": "User-Agent",
        "value": "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_1_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36"
      }
    ],
    "accept": [
      {
        "key": "Accept",
        "value": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"
      }
    ],
    "accept-encoding": [
      {
        "key": "Accept-Encoding",
        "value": "gzip, deflate, br"
      }
    ],
    "accept-language": [
      {
        "key": "Accept-Language",
        "value": "en-GB,en-US;q=0.9,en;q=0.8,ru;q=0.7"
      }
    ]
  },
  "method": "GET",
  "querystring": "id=123&campaign=456",
  "uri": "/helloworld"
}
```