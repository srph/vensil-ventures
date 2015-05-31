import bean from 'bean';

/**
 * @todo
 * Needs a lot of performance improvement
 * as it seems to cause a lot of reflow
 *
 * @note
 * Perfomance killer.
 *
 * @usage
 * var removeParallax = parallax(React.findDOMNode(this));
 * removeParallax();
 *
 * @params {DOMElement} Element to be used
 * @returns {function} Function to remove the event listener
 */
export default function(element/*, options */) {
  element.style.transition = 'all 0.2s';
  // let defaults = { allowance: 100 };
  // We really don't need any options..
  let ALLOWANCE = (element.clientHeight / 2); // Allowance to fire the event
  let MULTIPLIER = 1.7;
  let listener = (evt) => {
    let scrollY = evt.currentTarget.scrollY; // Shorthand
    // We won't do anything if the bottom of the element has been exceeded
    if ( scrollY > element.offsetTop + element.clientHeight ) {
      return false;
    } else if ( scrollY + ALLOWANCE >= element.offsetTop ) {
      // Lower the opacity when we've exceeded the point.
      // (Where the point is the area inside the element).
      // Otherwise, set the opacity to 1.
      element.style.opacity = scrollY >= element.offsetTop
        ? (element.offsetTop / (scrollY * MULTIPLIER))
        : 1;
    }
  }
  // let props = Object.assign({}, defaults, options);
  bean.on(window, 'scroll', listener);

  // Removes the event listener
  return function() {
    bean.off(window, 'scroll', listener);
  };
}
