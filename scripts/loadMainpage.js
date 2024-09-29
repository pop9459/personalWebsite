export function loadMainPageContent() {
    return new Promise((resolve) => {
        fetch("html/landingPageContent.php")
        .then(response => response.text()) // Get the response as text (HTML content)
        .then(data => {
            document.getElementById("content").innerHTML = data; // Inject the content  
            console.log("Main page content loaded successfully");   // Log success      
            resolve();
        })
        .catch(error => console.error('Error loading external HTML:', error));
    });
}

export function animateWidgets() {
    return new Promise((resolve) => {
        var timeBetweenAnimations = 300; // Time between each widget animation

        // animate horizontal widgets
        const horizontalWidgets = document.querySelectorAll(".topBar > div");
        for (let i = 0; i < horizontalWidgets.length; i++)
        {
            horizontalWidgets[i].classList.add("hidden");
        }
        for (let i = 0; i < horizontalWidgets.length; i++) 
        {
            setTimeout(() => {
                horizontalWidgets[i].classList.remove("hidden");
                horizontalWidgets[i].classList.add("expandHorizontal");
            }, i * timeBetweenAnimations);
        }

        // animate vertical widgets
        const verticalWidgets = document.querySelectorAll(".column > div");
        for (let i = 0; i < verticalWidgets.length; i++)
        {
            verticalWidgets[i].classList.add("hidden");
        }
        for (let i = 0; i < verticalWidgets.length; i++) 
        {
            setTimeout(() => {
                verticalWidgets[i].classList.remove("hidden");
                verticalWidgets[i].classList.add("expandVertical");
            }, i * timeBetweenAnimations);
        }
        console.log("Widgets animated");  // Log success
        resolve();
    });
}