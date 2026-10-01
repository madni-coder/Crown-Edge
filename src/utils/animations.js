/**
 * Smooth-scrolls to an element by id, offsetting for the fixed navbar.
 * Used by SectionScroller (query-param deep links) and in-page nav links.
 */
export function smoothScrollTo(targetId, offset = 0) {
    if (targetId === "home" || targetId === "") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
    }

    const target = document.getElementById(targetId);
    if (!target) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
    }

    const targetPosition = target.offsetTop - offset;

    window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
    });
}
