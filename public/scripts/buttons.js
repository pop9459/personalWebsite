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

    // MY PROJECTS BUTTONS
    document.getElementById("personalWebsiteButton").onclick = function() {
        loadToContainer("centerContentDisplay", "phpContent/myProjects/personalWebsite.php")
        .then(() => animateContainerWidgets("centerContentDisplay"));
    };
    document.getElementById("maturityProjectButton").onclick = function() {
        loadToContainer("centerContentDisplay", "phpContent/myProjects/maturityProject.php")
        .then(() => animateContainerWidgets("centerContentDisplay"));
    };
    document.getElementById("sunnySocksWebsiteButton").onclick = function() {
        loadToContainer("centerContentDisplay", "phpContent/myProjects/sunnySocksWebsite.php")
        .then(() => animateContainerWidgets("centerContentDisplay"));
    };
    document.getElementById("campusLinkButton").onclick = function() {
        loadToContainer("centerContentDisplay", "phpContent/myProjects/campusLink.php")
        .then(() => animateContainerWidgets("centerContentDisplay"));
    };
    document.getElementById("battlebotButton").onclick = function() {
        loadToContainer("centerContentDisplay", "phpContent/myProjects/battlebot.php")
        .then(() => animateContainerWidgets("centerContentDisplay"));
    };

    // PORTFOLIO 2 BUTTONS
    document.getElementById("portfolio2ReflectionButton").onclick = function() {
        loadToContainer("centerContentDisplay", "phpContent/portfolio2/portfolio2Reflection.php")
        .then(() => animateContainerWidgets("centerContentDisplay"));
    };
    document.getElementById("portfolio2FeedbackButton").onclick = function() {
        loadToContainer("centerContentDisplay", "phpContent/portfolio2/portfolio2Feedback.php")
        .then(() => animateContainerWidgets("centerContentDisplay"));
    };
    document.getElementById("portfolio2PDPButton").onclick = function() {
        loadToContainer("centerContentDisplay", "phpContent/portfolio2/portfolio2PDP.php")
        .then(() => animateContainerWidgets("centerContentDisplay"));
    };
    document.getElementById("portfolio2ProjectPlanButton").onclick = function() {
        loadToContainer("centerContentDisplay", "phpContent/portfolio2/portfolio2ProjectPlan.php")
        .then(() => animateContainerWidgets("centerContentDisplay"));
    };
    document.getElementById("portfolio2CommunicationButton").onclick = function() {
        loadToContainer("centerContentDisplay", "phpContent/portfolio2/portfolio2Communication.php")
        .then(() => animateContainerWidgets("centerContentDisplay"));
    };
    document.getElementById("portfolio2PresentingButton").onclick = function() {
        loadToContainer("centerContentDisplay", "phpContent/portfolio2/portfolio2Presenting.php")
        .then(() => animateContainerWidgets("centerContentDisplay"));
    };
    document.getElementById("portfolio2EdumundoAssignmentsButton").onclick = function() {
        loadToContainer("centerContentDisplay", "phpContent/portfolio2/portfolio2EdumundoAssignments.php")
        .then(() => animateContainerWidgets("centerContentDisplay"));
    };
    document.getElementById("portfolio2MeetingTechniquesButton").onclick = function() {
        loadToContainer("centerContentDisplay", "phpContent/portfolio2/portfolio2MeetingTechniques.php")
        .then(() => animateContainerWidgets("centerContentDisplay"));
    };
    document.getElementById("portfolio2FinalInterviewButton").onclick = function() {
        loadToContainer("centerContentDisplay", "phpContent/portfolio2/portfolio2FinalInterview.php")
        .then(() => animateContainerWidgets("centerContentDisplay"));
    };

    // PORTFOLIO 1 BUTTONS
    document.getElementById("reflectionReportButton").onclick = function() {
        loadToContainer("centerContentDisplay", "phpContent/portfolio1/reflectionReport.php")
        .then(() => animateContainerWidgets("centerContentDisplay"));
    };
    document.getElementById("studyCareerCoachingButton").onclick = function() {
        loadToContainer("centerContentDisplay", "phpContent/portfolio1/studyCareerCoaching.php")
        .then(() => animateContainerWidgets("centerContentDisplay"));
    };
    document.getElementById("feedbackFormsButton").onclick = function() {
        loadToContainer("centerContentDisplay", "phpContent/portfolio1/feedbackForms.php")
        .then(() => animateContainerWidgets("centerContentDisplay"));
    };
    document.getElementById("projectPlanButton").onclick = function() {
        loadToContainer("centerContentDisplay", "phpContent/portfolio1/projectPlan.php")
        .then(() => animateContainerWidgets("centerContentDisplay"));
    };
    document.getElementById("communicationButton").onclick = function() {
        loadToContainer("centerContentDisplay", "phpContent/portfolio1/communication.php")
        .then(() => animateContainerWidgets("centerContentDisplay"));
    };
    document.getElementById("presentationButton").onclick = function() {
        loadToContainer("centerContentDisplay", "phpContent/portfolio1/presentation.php")
        .then(() => animateContainerWidgets("centerContentDisplay"));
    };
    document.getElementById("meetingTechniquesButton").onclick = function() {
        loadToContainer("centerContentDisplay", "phpContent/portfolio1/meetingTechniques.php")
        .then(() => animateContainerWidgets("centerContentDisplay"));
    };
    document.getElementById("edumundoAssignmentsButton").onclick = function() {
        loadToContainer("centerContentDisplay", "phpContent/portfolio1/edumundoAssignments.php")
        .then(() => animateContainerWidgets("centerContentDisplay"));
    };

    console.log("Buttons loaded successfully");
}