function fetchAndInject(path, target) {
	fetch(chrome.runtime.getURL(path))
		.then((response) => response.text())
		.then((data) => {
			// Inject the fetched content as the first child of the target container
			target.insertAdjacentHTML("afterbegin", data);
		})
		.catch((error) => {
			console.error(`Error fetching the ${path} file:`, error);
		});
}

// Check if the desired element exists
setTimeout(() => {
	var shortcutContainer = document.querySelector("div#shortcut-container");
	if (shortcutContainer == null) {
		shortcutContainer = document.createElement("div");
		shortcutContainer.id = "shortcut-container";

		var targetContainer = document.querySelector(
			"header#app-header section.el-container"
		);
		if (targetContainer == null) {
			targetContainer = document.querySelector(
				"body.cem-site.desktop.has-toolbar.has-header"
			);
		}
		targetContainer = targetContainer.insertAdjacentElement(
			"afterbegin",
			shortcutContainer
		);

		//integration-center-shortcut
		fetchAndInject(
			(path = "./components/integration-center-shortcut.html"),
			(target = targetContainer)
		);
		fetchAndInject(
			(path = "components/client-setup-integrations.html"),
			(target = targetContainer)
		);
		fetchAndInject(
			(path = "components/candidate-inbox-shortcut.html"),
			(target = targetContainer)
		);
		fetchAndInject(
			(path = "components/workflows-shortcut.html"),
			(target = targetContainer)
		);
	}
}, 500);
