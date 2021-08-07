let Person = {
  name: 'Sourav',
  dob: '1991'
};

function calculateAge(...args) {
  console.log(args);
  console.log(this);
  return 2021 - this.dob;
}

Function.prototype.customBind = function(...args1) {
  let fn = this;
  let context = args1[0];
  return function(...args2) {
    return fn.apply(context, [...args1, ...args2]);
  };
};

let newFunc = calculateAge.customBind(Person, 1, 2, 3);
console.log(newFunc(4, 5, 6));
