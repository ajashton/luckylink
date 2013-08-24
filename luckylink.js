function luckyLink(info) {
    // TODO:
    // - run any selected text through a Google Feeling Lucky search
    // - format the result as a markdown link
    // - pass the markdown to the content script (?)
}

var luckyLinkMenu = chrome.contextMenus.create({
    "title": "Lucky Linkify",
    "contexts": ["editable"],
    "onclick": luckyLink
});

// TODO: <https://developer.chrome.com/extensions/messaging.html>
chrome.tabs.getSelected(null, function(tab) {
  chrome.tabs.sendMessage(tab.id, {greeting: "hello"}, function(response) {
    console.log(response.farewell);
  });
});
