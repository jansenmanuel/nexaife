import { useEffect, useRef } from 'react';

/**
 * Debounces a function, delaying its execution until after a specified delay.
 *
 * @param {Function} func - The function to debounce.
 * @param {number} [delay=0] - The delay in milliseconds.
 * @returns {Function} - A debounced version of the function.
 */
const debounce = (func, delay = 0) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

/**
 * A custom hook to trigger a callback when the user scrolls close to the bottom of a given element.
 *
 * @param {React.RefObject} ref - The ref of the scrollable container element.
 * @param {Function} onBottomReach - The callback function triggered when the user scrolls near the bottom.
 * @param {number} [offset=50] - The offset from the bottom (in pixels) at which the callback should be triggered.
 * @param {boolean} isOpen - A flag to determine if the dropdown or scrollable container is open (and thus listening for scroll events).
 */
export const useScrollBottom = (ref, onBottomReach, offset = 50, isOpen) => {
  const prevScrollTop = useRef(0);

  useEffect(() => {
    /**
     * Handles the scroll event by checking if the user has scrolled near the bottom.
     */
    const handleScroll = () => {
      if (!ref.current) return;

      const { scrollTop, scrollHeight, clientHeight } = ref.current;

      // Check if the user is scrolling down
      if (scrollTop > prevScrollTop.current) {
        // Trigger callback when close to the bottom of the element
        if (scrollTop + clientHeight >= scrollHeight - offset) {
          onBottomReach(); // Trigger the callback
        }
      }

      // Update the previous scrollTop for the next event
      prevScrollTop.current = scrollTop;
    };

    // Debounce the scroll handler for smoother scrolling performance
    const debouncedHandleScroll = debounce(handleScroll, 100);

    if (isOpen && ref.current) {
      // Attach the scroll event listener only when the element is open or active
      ref.current.addEventListener('scroll', debouncedHandleScroll);
    }

    // Cleanup the event listener when the component is unmounted or when isOpen is false
    return () => {
      if (ref.current) {
        ref.current.removeEventListener('scroll', debouncedHandleScroll);
      }
    };
  }, [ref, onBottomReach, offset, isOpen]);
};

export default useScrollBottom;
