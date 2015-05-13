const MAGIC = 15;

export default {
  /**
   * @see http://stackoverflow.com/questions/21474678/scrolltop-animation-without-jquery
   * @params {number} duration
   */
  scrollTop(duration) {
    let scrollHeight = window.scrollY;
    let step = -scrollHeight / (duration / MAGIC);
    let _interval = setInterval(() => {
      if ( scrollHeight > 0 ) {
        window.scrollBy(0, step);
      } else {
        clearInterval(_interval);
      }
    }, MAGIC);
  }
};
