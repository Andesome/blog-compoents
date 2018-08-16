const debounce = function (fn, d) {
  let timer;
  return function () {
    if (timer) {
      clearTimeout(timer);
      timer = null;
      return;
    }
    timer = setTimeout(() => {
      fn.apply(this);
    }, d)
  }
};


export {
  debounce
}