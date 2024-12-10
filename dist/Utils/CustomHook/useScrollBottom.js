"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useScrollBottom = exports.default = void 0;
var _react = require("react");
/**
 * Debounces a function, delaying its execution until after a specified delay.
 *
 * @param {Function} func - The function to debounce.
 * @param {number} [delay=0] - The delay in milliseconds.
 * @returns {Function} - A debounced version of the function.
 */
var debounce = function debounce(func) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var timeoutId;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(function () {
      func.apply(void 0, args);
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
var useScrollBottom = function useScrollBottom(ref, onBottomReach) {
  var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 50;
  var isOpen = arguments.length > 3 ? arguments[3] : undefined;
  var prevScrollTop = (0, _react.useRef)(0);
  (0, _react.useEffect)(function () {
    /**
     * Handles the scroll event by checking if the user has scrolled near the bottom.
     */
    var handleScroll = function handleScroll() {
      if (!ref.current) return;
      var _ref$current = ref.current,
        scrollTop = _ref$current.scrollTop,
        scrollHeight = _ref$current.scrollHeight,
        clientHeight = _ref$current.clientHeight;

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
    var debouncedHandleScroll = debounce(handleScroll, 100);
    if (isOpen && ref.current) {
      // Attach the scroll event listener only when the element is open or active
      ref.current.addEventListener('scroll', debouncedHandleScroll);
    }

    // Cleanup the event listener when the component is unmounted or when isOpen is false
    return function () {
      if (ref.current) {
        ref.current.removeEventListener('scroll', debouncedHandleScroll);
      }
    };
  }, [ref, onBottomReach, offset, isOpen]);
};
exports.useScrollBottom = useScrollBottom;
var _default = useScrollBottom;
exports.default = _default;