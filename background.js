let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});

var isExtensionOn = true;

chrome.extension.onMessage.addListener(
function (request, sender, sendResponse) {
	if (request.cmd == "setOnOffState") {
		isExtensionOn = request.data.value;
	}
	
	if (request.cmd == "getOnOffState") {
		sendResponse(isExtensionOn);
	}
});