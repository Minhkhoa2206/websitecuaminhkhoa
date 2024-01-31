// Create a function to be called when the button is clicked
function downloadTool() {
    // Navigate to the specified link
    window.location.href = "https://mega.nz/file/TyQnyLDS#4mV_xKofogNRIj821gzNIe24XcvzD7JpcQBapaFS3BE";
}

// Create the download button
function createDownloadButton() {
    // Create a button element
    var downloadButton = document.createElement("button");
    
    // Set the button text
    downloadButton.innerHTML = "Tải Tool Active Free";

    // Attach the download function to the button click event
    downloadButton.addEventListener("click", downloadTool);

    // Append the button to the specified container (in this case, a div with the id "downloadButtonContainer")
    document.getElementById("downloadButtonContainer").appendChild(downloadButton);
}

// Call the function to create the download button when the page is loaded
document.addEventListener("DOMContentLoaded", createDownloadButton);
