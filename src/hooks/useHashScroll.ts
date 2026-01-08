import { useEffect } from 'react';

/**
 * A hook that handles scrolling to the element specified in the URL hash.
 * It retries a few times to account for dynamic rendering/layout shifts.
 */
export const useHashScroll = () => {
    useEffect(() => {
        const scrollToHash = () => {
            const hash = window.location.hash;
            if (hash) {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };

        // Attempt scrolling immediately
        scrollToHash();

        // Retry a few times to account for async data loading and layout shifts
        const timeouts = [100, 300, 600, 1500, 2500].map(delay =>
            setTimeout(scrollToHash, delay)
        );

        // Listen for manual hash changes
        window.addEventListener('hashchange', scrollToHash);

        return () => {
            timeouts.forEach(clearTimeout);
            window.removeEventListener('hashchange', scrollToHash);
        };
    }, []);
};
