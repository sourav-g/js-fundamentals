let counter = 0;
const getData = () => {
  //calls an API and get data
  console.log('Fetching Data ...', counter++);
};

const debounce = function(fn, d) {
  let timer;
  return function() {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, arguments);
    }, d);
  };
};

//call only if the difference in time of 2 keypress
//events is greater than 300ms.
const betterFunc = debounce(getData, 300);
