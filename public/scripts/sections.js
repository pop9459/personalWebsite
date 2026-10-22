// Every menu section: URL path (no leading slash) -> menu button id -> content fragment.
// The fragment is fetched from phpContent/, so each section also shows up in the access log
// under /phpContent/<file>. The "path" is the shareable URL, served by index.php through the
// rewrite in docker/apache/000-default.conf (keep both lists in sync).
export const SECTIONS = [
    { path: "about", button: "aboutMeButton", file: "phpContent/aboutMe.php" },
    { path: "projects/personal-website", button: "personalWebsiteButton", file: "phpContent/myProjects/personalWebsite.php" },
    { path: "projects/maturity-project", button: "maturityProjectButton", file: "phpContent/myProjects/maturityProject.php" },
    { path: "projects/sunny-socks-website", button: "sunnySocksWebsiteButton", file: "phpContent/myProjects/sunnySocksWebsite.php" },
    { path: "projects/campus-link", button: "campusLinkButton", file: "phpContent/myProjects/campusLink.php" },
    { path: "projects/battlebot", button: "battlebotButton", file: "phpContent/myProjects/battlebot.php" },
    { path: "portfolio2/reflection", button: "portfolio2ReflectionButton", file: "phpContent/portfolio2/portfolio2Reflection.php" },
    { path: "portfolio2/feedback", button: "portfolio2FeedbackButton", file: "phpContent/portfolio2/portfolio2Feedback.php" },
    { path: "portfolio2/pdp", button: "portfolio2PDPButton", file: "phpContent/portfolio2/portfolio2PDP.php" },
    { path: "portfolio2/project-plan", button: "portfolio2ProjectPlanButton", file: "phpContent/portfolio2/portfolio2ProjectPlan.php" },
    { path: "portfolio2/communication", button: "portfolio2CommunicationButton", file: "phpContent/portfolio2/portfolio2Communication.php" },
    { path: "portfolio2/presenting", button: "portfolio2PresentingButton", file: "phpContent/portfolio2/portfolio2Presenting.php" },
    { path: "portfolio2/edumundo-assignments", button: "portfolio2EdumundoAssignmentsButton", file: "phpContent/portfolio2/portfolio2EdumundoAssignments.php" },
    { path: "portfolio2/meeting-techniques", button: "portfolio2MeetingTechniquesButton", file: "phpContent/portfolio2/portfolio2MeetingTechniques.php" },
    { path: "portfolio2/final-interview", button: "portfolio2FinalInterviewButton", file: "phpContent/portfolio2/portfolio2FinalInterview.php" },
    { path: "portfolio1/reflection-report", button: "reflectionReportButton", file: "phpContent/portfolio1/reflectionReport.php" },
    { path: "portfolio1/study-career-coaching", button: "studyCareerCoachingButton", file: "phpContent/portfolio1/studyCareerCoaching.php" },
    { path: "portfolio1/feedback-forms", button: "feedbackFormsButton", file: "phpContent/portfolio1/feedbackForms.php" },
    { path: "portfolio1/project-plan", button: "projectPlanButton", file: "phpContent/portfolio1/projectPlan.php" },
    { path: "portfolio1/communication", button: "communicationButton", file: "phpContent/portfolio1/communication.php" },
    { path: "portfolio1/presentation", button: "presentationButton", file: "phpContent/portfolio1/presentation.php" },
    { path: "portfolio1/meeting-techniques", button: "meetingTechniquesButton", file: "phpContent/portfolio1/meetingTechniques.php" },
    { path: "portfolio1/edumundo-assignments", button: "edumundoAssignmentsButton", file: "phpContent/portfolio1/edumundoAssignments.php" }
];

export const DEFAULT_SECTION = SECTIONS[0];

export function sectionFromPath(pathname) {
    const path = pathname.replace(/^\/+|\/+$/g, "");
    return SECTIONS.find(section => section.path === path) || null;
}

export function urlForSection(section) {
    return "/" + section.path;
}
