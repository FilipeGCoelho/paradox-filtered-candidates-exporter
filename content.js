// Check if the desired element exists
setTimeout(() => {
	if (!document.getElementById("customExportButton")) {
		const btn = document.createElement("button");
		btn.textContent = "Export";
		btn.id = "customExportButton"; // Assign a unique ID to the button
		btn.style.marginLeft = "10px";
		btn.classList.add("el-button", "el-tooltip", "el-button--default");

		// Select the div.cdebea element
		const div_cdebea = document.querySelector("div.cdebea");
		if (div_cdebea) {
			// Update the min-height property
			div_cdebea.style.minHeight = "110px";
		}

		var targetButtonContainer = document.querySelector(
			"div.cdebea span.el-tooltip"
		);

		console.log("targetElement= ");
		console.log(targetButtonContainer);

		if (targetButtonContainer) {
			btn.addEventListener("click", function () {
				const links = document.querySelectorAll(
					"div.list-scroll.el-scrollbar a[href]"
				);
				const hrefValues = Array.from(links).map((link) =>
					link.getAttribute("href")
				);

				// Extract the final portion of numeric characters from each href
				const extractedNumbers = hrefValues.map((href) => {
					const match = href.match(/(\d+)(?!.*\d)/);
					return match ? match[1] : null;
				});

				// Export the extracted numbers as CSV
				const csvContent = extractedNumbers.join("\n");
				const blob = new Blob([csvContent], { type: "text/csv" });
				const url = URL.createObjectURL(blob);

				const a = document.createElement("a");
				a.href = url;
				a.download = "export.csv";
				document.body.appendChild(a);
				a.click();
				document.body.removeChild(a);
			});

			targetButtonContainer.appendChild(btn);
		}
	}
}, 2500);
