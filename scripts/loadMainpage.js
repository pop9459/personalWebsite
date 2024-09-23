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
        const widgets = document.getElementsByClassName("widget");
        for (let i = 0; i < widgets.length; i++) 
        {
            widgets[i].classList.add("hidden");
        }
        for (let i = 0; i < widgets.length; i++) 
        {
            setTimeout(() => {
                widgets[i].classList.remove("hidden");
                widgets[i].classList.add("expandFromRight");
            }, (i * 250) + 500);
        }
        console.log("Widgets animated");  // Log success
        resolve();
    });
}