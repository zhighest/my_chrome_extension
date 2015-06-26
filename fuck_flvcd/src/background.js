(function() {
	chrome.webNavigation.onBeforeNavigate.addListener(function(details) {
		var oldUrl=details.url;
		var flvcdurl='http://www.flvcd.com/parse.php';
		if(oldUrl.indexOf(flvcdurl)!=-1&&oldUrl.indexOf('&go=')==-1){
			var newUrl=oldUrl+'&go=1';
			chrome.tabs.update(details.tabId, { url: newUrl })
		}
	});

})();
