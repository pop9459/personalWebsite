import {textSplash, backgroundIntroduce} from  "./loadAnimations.js";
import {loadMainPageContent, animateWidgets} from "./loadMainpage.js";
window.onload = function() {
    let doLoadAnimations = true; 
    let doTextSplash = false;   

    if(doLoadAnimations) 
    {
        if(doTextSplash)
        {
            textSplash()
                .then(result => backgroundIntroduce())
                .then(result => loadMainPageContent())
                .then(result => animateWidgets());
        }
        else{
            backgroundIntroduce()
                .then(result => loadMainPageContent())
                .then(result => animateWidgets());
        }
    }
    else
    {
        // Load the main page content without animations
        backgroundIntroduce();
        loadMainPageContent();  
    }
};