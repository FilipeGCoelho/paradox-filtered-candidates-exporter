// Check if the desired element exists
setTimeout(() => {
  var targetContainer = document.querySelector(
    "header#app-header section.el-container"
  );
  if (targetContainer == null)
    targetContainer = document.querySelector(
      "body.cem-site.desktop.has-toolbar.has-header"
    );

  let integrationCenterComponent = document.querySelector(
    "div#integration-center-shortcut"
  );
  let clientSetupIntegrationsComponent = document.querySelector(
    "div#client-setup-integrations-shortcut"
  );
  let candidateInboxComponent = document.querySelector(
    "div#candidate-inbox-shortcut"
  );
  let workflowShortcutComponent = document.querySelector(
    "div#candidate-inbox-shortcut"
  );

  if (integrationCenterComponent == null) {
    // Fetch the content of the txt file
    fetch(
      chrome.runtime.getURL("./components/integration-center-shortcut.html")
    )
      .then((response) => response.text())
      .then((data) => {
        // Inject the fetched content as the first child of the target container
        targetContainer.insertAdjacentHTML("afterbegin", data);
      })
      .catch((error) => {
        console.error(
          "Error fetching the integration-center component file:",
          error
        );
      });
  }
  if (clientSetupIntegrationsComponent == null) {
    // Fetch the content of the txt file
    fetch(chrome.runtime.getURL("components/client-setup-integrations.html"))
      .then((response) => response.text())
      .then((data) => {
        // Inject the fetched content as the first child of the target container
        targetContainer.insertAdjacentHTML("afterbegin", data);
      })
      .catch((error) => {
        console.error(
          "Error fetching the client-setup-integrations component file:",
          error
        );
      });
  }
  if (candidateInboxComponent == null) {
    // Fetch the content of the txt file
    fetch(chrome.runtime.getURL("components/candidate-inbox-shortcut.html"))
      .then((response) => response.text())
      .then((data) => {
        // Inject the fetched content as the first child of the target container
        targetContainer.insertAdjacentHTML("afterbegin", data);
      })
      .catch((error) => {
        console.error(
          "Error fetching the client-setup-integrations component file:",
          error
        );
      });
  }
  if (workflowShortcutComponent == null) {
    // Fetch the content of the txt file
    fetch(chrome.runtime.getURL("components/workflows-shortcut.html"))
      .then((response) => response.text())
      .then((data) => {
        // Inject the fetched content as the first child of the target container
        targetContainer.insertAdjacentHTML("afterbegin", data);
      })
      .catch((error) => {
        console.error(
          "Error fetching the client-setup-integrations component file:",
          error
        );
      });
  }
}, 500);
