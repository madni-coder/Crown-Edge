/**
 * Animation utilities using Intersection Observer API
 * Provides smooth scroll-triggered animations with performance optimization
 */

/**
 * Default options for Intersection Observer
 */
const defaultOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
};

/**
 * Initialize scroll animations for elements with animate-on-scroll class
 * @param {Object} options - Intersection Observer options
 */
export function initScrollAnimations(options = {}) {
    // Check if user prefers reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        // Show all elements immediately without animation
        const elements = document.querySelectorAll(".animate-on-scroll");
        elements.forEach((el) => {
            el.classList.add("animate");
        });
        return;
    }

    const observerOptions = { ...defaultOptions, ...options };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
                // Optional: Stop observing after animation to improve performance
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with animate-on-scroll class
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return observer;
}

/**
 * Add staggered animation delays to a group of elements
 * @param {string} selector - CSS selector for elements to animate
 * @param {number} delay - Base delay in milliseconds
 * @param {number} increment - Delay increment for each element
 */
export function addStaggeredAnimation(selector, delay = 100, increment = 100) {
    const elements = document.querySelectorAll(selector);
    elements.forEach((el, index) => {
        el.style.animationDelay = `${delay + index * increment}ms`;
    });
}

/**
 * Counter animation utility
 * @param {HTMLElement} element - Element containing the number to animate
 * @param {number} target - Target number to count to
 * @param {number} duration - Animation duration in milliseconds
 */
export function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const startTime = performance.now();

    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(start + (target - start) * easeOutQuart);

        element.textContent = current.toLocaleString();

        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target.toLocaleString();
        }
    }

    requestAnimationFrame(updateCounter);
}

/**
 * Initialize counter animations when they come into view
 * @param {string} selector - CSS selector for counter elements
 */
export function initCounterAnimations(selector = "[data-counter]") {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    const target = parseInt(element.dataset.counter, 10);
                    const duration =
                        parseInt(element.dataset.duration, 10) || 2000;

                    animateCounter(element, target, duration);
                    observer.unobserve(element);
                }
            });
        },
        { threshold: 0.5 }
    );

    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => observer.observe(el));
}

/**
 * Add parallax effect to elements
 * @param {string} selector - CSS selector for parallax elements
 * @param {number} speed - Parallax speed (0-1, where 0.5 is half speed)
 */
export function initParallax(selector = "[data-parallax]", speed = 0.5) {
    const elements = document.querySelectorAll(selector);

    if (elements.length === 0) return;

    // Check if user prefers reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
    }

    function updateParallax() {
        const scrolled = window.pageYOffset;

        elements.forEach((element) => {
            const rate = scrolled * speed;
            element.style.transform = `translateY(${rate}px)`;
        });
    }

    // Throttle scroll events for performance
    let ticking = false;
    function handleScroll() {
        if (!ticking) {
            requestAnimationFrame(() => {
                updateParallax();
                ticking = false;
            });
            ticking = true;
        }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
}

/**
 * Initialize all animations when DOM is ready
 */
export function initAllAnimations() {
    // Wait for DOM to be ready
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () => {
            initScrollAnimations();
            initCounterAnimations();
            initParallax();
        });
    } else {
        initScrollAnimations();
        initCounterAnimations();
        initParallax();
    }
}

/**
 * Utility to add animation classes with proper timing
 * @param {HTMLElement} element - Element to animate
 * @param {string} animationClass - Animation class to add
 * @param {number} delay - Delay before adding class
 */
export function addAnimationClass(element, animationClass, delay = 0) {
    setTimeout(() => {
        element.classList.add(animationClass);
    }, delay);
}

/**
 * Create a loading animation
 * @param {HTMLElement} container - Container element
 * @returns {HTMLElement} Loading spinner element
 */
export function createLoadingSpinner(container) {
    const spinner = document.createElement("div");
    spinner.className = "loading-spinner";
    spinner.setAttribute("aria-label", "Loading...");

    if (container) {
        container.appendChild(spinner);
    }

    return spinner;
}

/**
 * Remove loading animation
 * @param {HTMLElement} spinner - Spinner element to remove
 */
export function removeLoadingSpinner(spinner) {
    if (spinner && spinner.parentNode) {
        spinner.parentNode.removeChild(spinner);
    }
}
/**
 * Smooth scroll to element with offset
 * @param {string} targetId - ID of target element
 * @param {number} offset - Offset from top in pixels
 */
export function smoothScrollTo(targetId, offset = 0) {
    // Handle home/top navigation
    if (targetId === "home" || targetId === "") {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        return;
    }

    const target = document.getElementById(targetId);
    if (!target) {
        // If target doesn't exist, scroll to top as fallback
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        return;
    }

    const targetPosition = target.offsetTop - offset;

    window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
    });
}
