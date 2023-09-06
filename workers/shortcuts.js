// Array of component filenames
const componentFiles = [
  "integration-center-shortcut.html",
  "client-setup-integrations.html",
  "candidate-inbox-shortcut.html",
  "workflows-shortcut.html",
  "roles-permissions-shortcut.html",
];

function fetchAndInject(path, target) {
  fetch(chrome.runtime.getURL(path))
    .then((response) => response.text())
    .then((data) => {
      target.insertAdjacentHTML("afterbegin", data);
    })
    .catch((error) => {
      console.error(`Error fetching the ${path} file:`, error);
    });
}

// Check if the desired element exists
setTimeout(() => {
  let shortcutContainer = document.querySelector("div#shortcut-container");

  if (!shortcutContainer) {
    shortcutContainer = document.createElement("div");
    shortcutContainer.id = "shortcut-container";

    let targetContainer =
      document.querySelector("header#app-header section.el-container") ||
      document.querySelector("body.cem-site.desktop.has-toolbar.has-header");

    targetContainer.insertAdjacentElement("afterbegin", shortcutContainer);

    // Inject all components
    for (const file of componentFiles) {
      fetchAndInject(`./html/components/${file}`, targetContainer);
    }
  }
}, 500);
