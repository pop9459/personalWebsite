import { loadToContainer } from "./loaders.js";

export function clearContents(containerID)
{
    //TODO: Add a fade out animation
}

export function setupListeners() {
    document.getElementById("aboutMeButton").onclick = function() { loadToContainer("centerContentDisplay" ,"html/aboutMe.php"); };

    console.log("Buttons loaded successfully");
}