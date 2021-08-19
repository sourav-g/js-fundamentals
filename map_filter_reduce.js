let arr = [1,2,3,4,5];

//map
let double = arr.map((item)=>{
  return item * item;
})
console.log(double);

//filter
let filtered = arr.filter((item)=>{
  return item > 2;
})
console.log(filtered);

//reduce
let sum = arr.reduce((acc,item)=>{
  return acc + item;
},0)
console.log(sum);

//finding array element frequency using reduce
let myArray = [8,1,4,5,4,7,8,9,5,1,2,6,8,3,6,7];

let freqObj = myArray.reduce((acc,item)=>{
  acc[item] = (acc[item] != undefined) ? ++acc[item] : 1;
  return acc;
},{});
console.log(freqObj);