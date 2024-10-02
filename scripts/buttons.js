export function loadToContainer(containerID, pathToContent)
{
    fetch(pathToContent) // Fetch the content
        .then(response => response.text()) // Get the response as text (HTML content)
        .then(data => {
            document.querySelector("#" + containerID).innerHTML = data; // Inject the content  
            console.log(pathToContent + " loadedSuccessfully");   // Log success      
        })
        .catch(error => console.error('Error loading external HTML:', error));
}

export function clearContents(containerID)
{

}

export function setupListeners() {
    document.getElementById("aboutMeButton").onclick = function() { loadToContainer("centerContentDisplay" ,"html/aboutMe.php"); };

    console.log("Buttons loaded successfully");
}