'use strict';

const domain = 'https://github.com/maslick';

exports.hello = async (event) => {
  let request = event.Records[0].cf.request;
  console.log(JSON.stringify(request, null, 2));

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