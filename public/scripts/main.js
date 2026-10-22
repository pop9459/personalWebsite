import { textSplash, backgroundIntroduce, animateWidgets, animateContainerWidgets} from  "./animations.js";
import { loadToContainer} from "./loaders.js";
import { setupListeners, showSection } from "./buttons.js";
import { DEFAULT_SECTION, sectionFromPath } from "./sections.js";
import { startClock } from "./clock.js";

window.onload = function() {
    let doLoadAnimations = true; 
    let doTextSplash = doLoadAnimations && true;   

    Promise.all([
        //show intro text splash
        doTextSplash ? textSplash() : Promise.resolve("No text splash"),
    ])
    .then(() => Promise.all([
        //introduce the background
        backgroundIntroduce(),
    ]))
    .then(() => Promise.all([
        //load the landing page content
        loadToContainer("content", "phpContent/landingPageContent.php"),
    ]))
    .then(() => Promise.all([
        //animate and set up all elements
        doLoadAnimations ? animateWidgets() : Promise.resolve("No animations"),
        setupListeners(),
        startClock(),
    ]))
    .then(() => new Promise(resolve => setTimeout(resolve, 1500))) // delay 1.5 second
    .then(() => Promise.all([
        //load default page
        //(the section named by the URL, else About me; "/" stays "/")
        location.pathname.replace(/\/+$/, "") === ""
            ? showSection(DEFAULT_SECTION, "none")
            : showSection(sectionFromPath(location.pathname) || DEFAULT_SECTION, "replace"),
    ]))

    .catch(error => console.error("Error occurred: ", error));
}