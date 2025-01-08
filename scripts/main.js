import { textSplash, backgroundIntroduce, animateWidgets, animateContainerWidgets} from  "./animations.js";
import { loadToContainer} from "./loaders.js";
import { setupListeners } from "./buttons.js";
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
        loadToContainer("content", "html/landingPageContent.php"),
    ]))
    .then(() => Promise.all([
        //animate and set up all elements
        doLoadAnimations ? animateWidgets() : Promise.resolve("No animations"),
        setupListeners(),
        startClock(),
    ]))
    .then(() => new Promise(resolve => setTimeout(resolve, 1500))) // delay 1.5 second
    .then(() => Promise.all([
        //load defalut page
        loadToContainer("centerContentDisplay" ,"html/aboutMe.php")
        .then(() => animateContainerWidgets("centerContentDisplay")),
    ]))

    .catch(error => console.error("Error occurred: ", error));
}