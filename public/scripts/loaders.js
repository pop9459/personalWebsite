export function loadToContainer(containerID, pathToContent)
{
    return new Promise((resolve, reject) => {

        fetch(pathToContent) // Fetch the content
        .then(response => response.text()) // Get the response as text (HTML content)
        .then(data => {
            document.querySelector("#" + containerID).innerHTML = data; // Inject the content  
            console.log(pathToContent + " loadedSuccessfully");   // Log success 
            resolve("Content loaded successfully"); // Resolve the promise     
        })
        .catch(error => {
            console.error('Error loading external HTML:', error); // Log the error
            reject("Error loading content"); // Reject the promise
        });
    });
}