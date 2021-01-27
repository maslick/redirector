'use strict';

exports.hello = async (event) => {
  let domain = 'https://github.com/maslick';
  switch (event.Records[0].cf.request['uri']) {
    case "/cv":
      domain = "https://www.linkedin.com/in/maslick/"
      break;
    case "/qa":
      domain = "https://stackoverflow.com/users/2996867/maslick"
      break;
    case "/ig":
      domain = "https://www.instagram.com/maslick/";
      break;
  }

  return {
    status: '301',
    statusDescription: 'Moved Permanently',
    headers: {
      'location': [{
        key: 'Location',
        value: domain,
      }],
      'cache-control': [{
        key: 'Cache-Control',
        value: "max-age=3600"
      }]
    }
  };
};