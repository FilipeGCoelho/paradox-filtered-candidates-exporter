chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  let proceed_candidate_exporter =
    "complete" === changeInfo.status &&
    (/^https:\/\/stg.paradox.ai\/candidates\//.test(tab.url) ||
      /^https:\/\/olivia.paradox.ai\/candidates\//.test(tab.url) ||
      /^https:\/\/ltsstg.paradox.ai\/candidates\//.test(tab.url));

  console.log(`changeInfo.status= ${changeInfo.status}`);
  console.log(`tab.url= ${tab.url}`);
  console.log(`proceed= ${proceed_candidate_exporter}`);

  if (proceed_candidate_exporter) {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ["workers/filtered-candidates-export.js"],
    });
  }

  let proceed_shortcuts =
    "complete" === changeInfo.status &&
    (/^https:\/\/stg.paradox.ai/.test(tab.url) ||
      /^https:\/\/olivia.paradox.ai/.test(tab.url) ||
      /^https:\/\/ltsstg.paradox.ai/.test(tab.url));

  console.log(`changeInfo.status= ${changeInfo.status}`);
  console.log(`tab.url= ${tab.url}`);
  console.log(`proceed= ${proceed_shortcuts}`);

  if (proceed_shortcuts) {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ["workers/shortcuts.js"],
    });
  }
});
