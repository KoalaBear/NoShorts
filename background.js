chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'loading') {
        if (tab.url.indexOf("youtube.com/shorts/") != -1) {
            var new_url = tab.url.replace('/shorts/', '/watch?v=')
            chrome.tabs.query({
                currentWindow: true,
                active: true
            }, function (tab) {
                chrome.tabs.update(tab.id, {
                    url: new_url
                });
            });
        }
    }
})