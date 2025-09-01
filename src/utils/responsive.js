/**
 * Responsive utilities for handling breakpoints and layout changes
 */

/**
 * Breakpoint values matching CSS custom properties
 */
export const breakpoints = {
    sm: 768,
    md: 1024,
    lg: 1200,
};

/**
 * Get current breakpoint based on window width
 * @returns {string} Current breakpoint name
 */
export function getCurrentBreakpoint() {
    const width = window.innerWidth;

    if (width >= breakpoints.lg) return "lg";
    if (width >= breakpoints.md) return "md";
    if (width >= breakpoints.sm) return "sm";
    return "xs";
}

/**
 * Check if current viewport matches a breakpoint
 * @param {string} breakpoint - Breakpoint to check ('xs', 'sm', 'md', 'lg')
 * @returns {boolean} Whether viewport matches breakpoint
 */
export function isBreakpoint(breakpoint) {
    const current = getCurrentBreakpoint();
    const order = ["xs", "sm", "md", "lg"];
    const currentIndex = order.indexOf(current);
    const targetIndex = order.indexOf(breakpoint);

    return currentIndex >= targetIndex;
}

/**
 * Check if device is mobile (touch-enabled and small screen)
 * @returns {boolean} Whether device is mobile
 */
export function isMobile() {
    return "ontouchstart" in window && window.innerWidth < breakpoints.sm;
}

/**
 * Check if device is tablet
 * @returns {boolean} Whether device is tablet
 */
export function isTablet() {
    return (
        window.innerWidth >= breakpoints.sm &&
        window.innerWidth < breakpoints.md
    );
}

/**
 * Check if device is desktop
 * @returns {boolean} Whether device is desktop
 */
export function isDesktop() {
    return window.innerWidth >= breakpoints.md;
}

/**
 * Debounce function for resize events
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
export function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Add responsive event listeners
 * @param {Function} callback - Function to call on resize
 * @param {number} debounceTime - Debounce time in milliseconds
 */
export function addResizeListener(callback, debounceTime = 250) {
    const debouncedCallback = debounce(callback, debounceTime);
    window.addEventListener("resize", debouncedCallback);

    // Call immediately to set initial state
    callback();

    // Return cleanup function
    return () => {
        window.removeEventListener("resize", debouncedCallback);
    };
}

/**
 * Toggle mobile navigation based on screen size
 * @param {HTMLElement} mobileNav - Mobile navigation element
 * @param {HTMLElement} desktopNav - Desktop navigation element
 */
export function handleNavigationToggle(mobileNav, desktopNav) {
    function updateNavigation() {
        if (isMobile()) {
            mobileNav?.classList.remove("hidden");
            desktopNav?.classList.add("hidden");
        } else {
            mobileNav?.classList.add("hidden");
            desktopNav?.classList.remove("hidden");
        }
    }

    return addResizeListener(updateNavigation);
}

/**
 * Adjust grid columns based on screen size
 * @param {HTMLElement} grid - Grid container element
 * @param {Object} columns - Column configuration for each breakpoint
 */
export function adjustGridColumns(
    grid,
    columns = { xs: 1, sm: 2, md: 3, lg: 4 }
) {
    function updateGrid() {
        const breakpoint = getCurrentBreakpoint();
        const columnCount = columns[breakpoint] || columns.xs;

        // Remove existing grid classes
        grid.className = grid.className.replace(/grid-cols-\d+/g, "");

        // Add new grid class
        grid.classList.add(`grid-cols-${columnCount}`);
    }

    return addResizeListener(updateGrid);
}

/**
 * Handle responsive images
 * @param {string} selector - CSS selector for responsive images
 */
export function initResponsiveImages(selector = "img[data-responsive]") {
    const images = document.querySelectorAll(selector);

    images.forEach((img) => {
        const sources = {
            mobile: img.dataset.mobile,
            tablet: img.dataset.tablet,
            desktop: img.dataset.desktop,
        };

        function updateImageSource() {
            let newSrc = img.dataset.src; // fallback

            if (isMobile() && sources.mobile) {
                newSrc = sources.mobile;
            } else if (isTablet() && sources.tablet) {
                newSrc = sources.tablet;
            } else if (isDesktop() && sources.desktop) {
                newSrc = sources.desktop;
            }

            if (newSrc && img.src !== newSrc) {
                img.src = newSrc;
            }
        }

        addResizeListener(updateImageSource);
    });
}

/**
 * Initialize responsive utilities
 */
export function initResponsiveUtils() {
    // Add breakpoint classes to body for CSS targeting
    function updateBodyClasses() {
        const breakpoint = getCurrentBreakpoint();
        document.body.className = document.body.className.replace(
            /breakpoint-\w+/g,
            ""
        );
        document.body.classList.add(`breakpoint-${breakpoint}`);
    }

    addResizeListener(updateBodyClasses);

    // Initialize responsive images
    initResponsiveImages();

    // Add touch class for touch devices
    if ("ontouchstart" in window) {
        document.body.classList.add("touch-device");
    }
}

/**
 * Create responsive container with proper padding
 * @param {HTMLElement} element - Element to make responsive
 * @param {Object} padding - Padding configuration for each breakpoint
 */
export function makeResponsiveContainer(
    element,
    padding = { xs: 16, sm: 24, md: 32, lg: 48 }
) {
    function updatePadding() {
        const breakpoint = getCurrentBreakpoint();
        const paddingValue = padding[breakpoint] || padding.xs;
        element.style.paddingLeft = `${paddingValue}px`;
        element.style.paddingRight = `${paddingValue}px`;
    }

    return addResizeListener(updatePadding);
}
