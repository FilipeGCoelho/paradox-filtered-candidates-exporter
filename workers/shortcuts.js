// Check if the desired element exists
setTimeout(() => {
  const targetContainer = document.querySelector(
    "header#app-header section.el-container"
  );
  const integrationCenterComponent = document.querySelector(
    "div#integration-center-shortcut"
  );
  const clientSetupIntegrationsComponent = document.querySelector(
    "div#client-setup-integrations-shortcut"
  );

  if (targetContainer) {
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
  }
}, 500);
