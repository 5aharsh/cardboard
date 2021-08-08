let Parser = require("rss-parser");
let parser = new Parser();

(async () => {
    let feed = await parser.parseURL(
        "https://news.google.com/rss/search?q=india"
    );
    let feeds = "";
    feed.items.forEach((item) => {
        let feed = `<section class="feed-news"><div class="feed-date">${item.pubDate.slice(5,11)}</div><div class="feed-headline"><a href="${item.link}" target="_blank" >${item.title}</a></div></section>`
        feeds+=feed
    });
    const feedSection = document.getElementById("feeds")
    feedSection.innerHTML=feeds;
})();
