import { animateContainerWidgets } from "./animations.js";
import { loadToContainer } from "./loaders.js";

export function clearContents(containerID)
{
    //TODO: Add a fade out animation
}

export function setupListeners() {
    // MENU BUTTONS
    document.getElementById("aboutMeButton").onclick = function() { 
        loadToContainer("centerContentDisplay" ,"phpContent/aboutMe.php")
        .then(() => animateContainerWidgets("centerContentDisplay"));
    };

    // PORTFOLIO BUTTONS
    document.getElementById("reflectionReportButton").onclick = function() {
        loadToContainer("centerContentDisplay", "phpContent/reflectionReport.php")
        .then(() => animateContainerWidgets("centerContentDisplay"));
    };
    document.getElementById("studyCareerCoachingButton").onclick = function() {
        loadToContainer("centerContentDisplay", "phpContent/studyCareerCoaching.php")
        .then(() => animateContainerWidgets("centerContentDisplay"));
    };
    document.getElementById("feedbackFormsButton").onclick = function() {
        loadToContainer("centerContentDisplay", "phpContent/feedbackForms.php")
        .then(() => animateContainerWidgets("centerContentDisplay"));
    };
    document.getElementById("projectPlanButton").onclick = function() {
        loadToContainer("centerContentDisplay", "phpContent/projectPlan.php")
        .then(() => animateContainerWidgets("centerContentDisplay"));
    };
    document.getElementById("communicationButton").onclick = function() {
        loadToContainer("centerContentDisplay", "phpContent/communication.php")
        .then(() => animateContainerWidgets("centerContentDisplay"));
    };
    document.getElementById("presentationButton").onclick = function() {
        loadToContainer("centerContentDisplay", "phpContent/presentation.php")
        .then(() => animateContainerWidgets("centerContentDisplay"));
    };
    document.getElementById("meetingTechniquesButton").onclick = function() {
        loadToContainer("centerContentDisplay", "phpContent/meetingTechniques.php")
        .then(() => animateContainerWidgets("centerContentDisplay"));
    };
    document.getElementById("edumundoAssignmentsButton").onclick = function() {
        loadToContainer("centerContentDisplay", "phpContent/edumundoAssignments.php")
        .then(() => animateContainerWidgets("centerContentDisplay"));
    };

    console.log("Buttons loaded successfully");
}