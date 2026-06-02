const https = require('https');
const urls = [
  'https://investesy.in/latest-nav/',
  'https://investesy.in/current-nfo/',
  'https://investesy.in/fund-factsheets/',
  'https://investesy.in/scheme-performance/'
];

urls.forEach(url => {
  https.get(url, res => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      const match = data.match(/<iframe[^>]+src=["'](.*?)["']/i);
      console.log(url, '=>', match ? match[1] : 'Not found');
    });
  });
});
