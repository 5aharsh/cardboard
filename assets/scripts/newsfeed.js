let feed = `
    
`;

let Parser = require('rss-parser');
let parser = new Parser();

(async () => {

  let feed = await parser.parseURL('https://news.google.com/rss/search?q=goldman');
  console.log(feed.title);

  feed.items.forEach(item => {
    console.log(item)
  });

})();
