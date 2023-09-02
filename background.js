chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
	let proceed =
		"complete" === changeInfo.status &&
		/^https:\/\/stg.paradox.ai\/candidates\//.test(tab.url);

	console.log(`changeInfo.status= ${changeInfo.status}`);
	console.log(`tab.url= ${tab.url}`);
	console.log(`proceed= ${proceed}`);

	if (proceed) {
		chrome.scripting.executeScript({
			target: { tabId: tabId },
			files: ["content.js"],
		});
	}
});
