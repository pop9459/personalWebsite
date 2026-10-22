import { animateContainerWidgets } from "./animations.js";
import { loadToContainer } from "./loaders.js";
import { SECTIONS, DEFAULT_SECTION, sectionFromPath, urlForSection } from "./sections.js";

export function clearContents(containerID)
{
    //TODO: Add a fade out animation
}

// Load a section into the centre display. pushHistory: add a history entry (menu click),
// replace: rewrite the current entry (first load), neither: back/forward navigation.
export function showSection(section, history_mode = "push") {
    if (history_mode === "push" && location.pathname !== urlForSection(section)) {
        history.pushState({ section: section.path }, "", urlForSection(section));
    } else if (history_mode === "replace") {
        history.replaceState({ section: section.path }, "", urlForSection(section));
    }
    return loadToContainer("centerContentDisplay", section.file)
        .then(() => animateContainerWidgets("centerContentDisplay"));
}

export function setupListeners() {
    // MENU, MY PROJECTS and PORTFOLIO BUTTONS
    SECTIONS.forEach(section => {
        document.getElementById(section.button).onclick = () => showSection(section);
    });

    // Back/forward buttons: show the section for the address bar without a new history entry
    window.onpopstate = () => showSection(sectionFromPath(location.pathname) || DEFAULT_SECTION, "none");

    console.log("Buttons loaded successfully");
}
