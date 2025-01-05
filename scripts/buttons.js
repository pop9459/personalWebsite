import { animateContainerWidgets } from "./animations.js";
import { loadToContainer } from "./loaders.js";

export function clearContents(containerID)
{
    //TODO: Add a fade out animation
}

export function setupListeners() {
    // MENU BUTTONS
    document.getElementById("aboutMeButton").onclick = function() { 
        loadToContainer("centerContentDisplay" ,"html/aboutMe.php")
        .then(() => animateContainerWidgets("centerContentDisplay"));
    };

    // PORTFOLIO BUTTONS
    document.getElementById("reflectionReportButton").onclick = function() {
        loadToContainer("centerContentDisplay", "html/reflectionReport.php")
        .then(() => animateContainerWidgets("centerContentDisplay"));
    };
    document.getElementById("studyCareerCoachingButton").onclick = function() {
        loadToContainer("centerContentDisplay", "html/studyCareerCoaching.php")
        .then(() => animateContainerWidgets("centerContentDisplay"));
    };
    document.getElementById("feedbackFormsButton").onclick = function() {
        loadToContainer("centerContentDisplay", "html/feedbackForms.php")
        .then(() => animateContainerWidgets("centerContentDisplay"));
    };
    document.getElementById("projectPlanButton").onclick = function() {
        loadToContainer("centerContentDisplay", "html/projectPlan.php")
        .then(() => animateContainerWidgets("centerContentDisplay"));
    };
    document.getElementById("communicationButton").onclick = function() {
        loadToContainer("centerContentDisplay", "html/communication.php")
        .then(() => animateContainerWidgets("centerContentDisplay"));
    };
    document.getElementById("presentationButton").onclick = function() {
        loadToContainer("centerContentDisplay", "html/presentation.php")
        .then(() => animateContainerWidgets("centerContentDisplay"));
    };
    document.getElementById("meetingTechniquesButton").onclick = function() {
        loadToContainer("centerContentDisplay", "html/meetingTechniques.php")
        .then(() => animateContainerWidgets("centerContentDisplay"));
    };
    document.getElementById("edumundoAssignmentsButton").onclick = function() {
        loadToContainer("centerContentDisplay", "html/edumundoAssignments.php")
        .then(() => animateContainerWidgets("centerContentDisplay"));
    };

    console.log("Buttons loaded successfully");
}