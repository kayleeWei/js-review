function throttle(fn, delay) {
  let flag = true;

  return function(...args) {
    if(!flag) return;
    flag = false;

    setTimeout(() => {
      fn.apply(this, args);
      flag = true;      
    }, delay);
  }
}

function debounce(fn, delay) {
  let timer = null;

  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  }
}