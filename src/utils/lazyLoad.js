/**
 * Lazy loading utilities for performance optimization
 */

/**
 * Intersection Observer for lazy loading components
 * @param {Function} callback - Function to call when element is in view
 * @param {Object} options - Intersection Observer options
 * @returns {IntersectionObserver} Observer instance
 */
export function createLazyObserver(callback, options = {}) {
    const defaultOptions = {
        threshold: 0.1,
        rootMargin: "50px 0px",
        ...options,
    };

    return new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                callback(entry.target);
            }
        });
    }, defaultOptions);
}

/**
 * Lazy load images with fade-in effect
 * @param {string} selector - CSS selector for images to lazy load
 */
export function initLazyImages(selector = "[data-lazy]") {
    const images = document.querySelectorAll(selector);

    if (images.length === 0) return;

    const imageObserver = createLazyObserver((img) => {
        const src = img.dataset.lazy;
        if (src) {
            img.src = src;
            img.classList.add("lazy-loaded");
            img.removeAttribute("data-lazy");
            imageObserver.unobserve(img);
        }
    });

    images.forEach((img) => imageObserver.observe(img));
}

/**
 * Preload critical images
 * @param {Array} imageSrcs - Array of image URLs to preload
 */
export function preloadImages(imageSrcs) {
    imageSrcs.forEach((src) => {
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "image";
        link.href = src;
        document.head.appendChild(link);
    });
}

/**
 * Optimize animation performance
 */
export function optimizeAnimations() {
    // Reduce animations on low-end devices
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2) {
        document.documentElement.style.setProperty(
            "--transition-normal",
            "0.15s"
        );
        document.documentElement.style.setProperty(
            "--transition-slow",
            "0.25s"
        );
    }

    // Disable animations on battery saver mode
    if (navigator.getBattery) {
        navigator.getBattery().then((battery) => {
            if (battery.charging === false && battery.level < 0.2) {
                document.documentElement.classList.add("reduce-animations");
            }
        });
    }
}

/**
 * Throttle function for performance
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} Throttled function
 */
export function throttle(func, limit) {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}

/**
 * Debounce function for performance
 * @param {Function} func - Function to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {Function} Debounced function
 */
export function debounce(func, delay) {
    let timeoutId;
    return function () {
        const args = arguments;
        const context = this;
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(context, args), delay);
    };
}

/**
 * Check if device is mobile
 * @returns {boolean} True if mobile device
 */
export function isMobile() {
    return (
        window.innerWidth <= 768 ||
        /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
        )
    );
}

/**
 * Optimize touch interactions for mobile
 */
export function optimizeTouchInteractions() {
    if (isMobile()) {
        // Add touch-friendly classes
        document.documentElement.classList.add("touch-device");

        // Optimize scroll performance
        document.addEventListener("touchstart", () => {}, { passive: true });
        document.addEventListener("touchmove", () => {}, { passive: true });
    }
}

/**
 * Initialize all performance optimizations
 */
export function initPerformanceOptimizations() {
    // Optimize animations
    optimizeAnimations();

    // Optimize touch interactions
    optimizeTouchInteractions();

    // Initialize lazy loading
    initLazyImages();

    // Add performance monitoring
    if (window.performance && window.performance.mark) {
        window.performance.mark("app-init-start");

        window.addEventListener("load", () => {
            window.performance.mark("app-init-end");
            window.performance.measure(
                "app-init",
                "app-init-start",
                "app-init-end"
            );
        });
    }
}
