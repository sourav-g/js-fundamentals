let arr  = [1,2,3,4,2,5,6,7];

//map polyfill
Array.prototype.customMap = function(callback){
  let _arr = [];
  for(let i=0 ; i < this.length  ; i++){
    _arr.push(callback(this[i],i,this));
  }
  return _arr;
}

let mappedArr = arr.customMap((item,index,_arr)=>{
  return item * item;
})
console.log(mappedArr);


//filter polyfill
Array.prototype.customFilter = function(callback){
  let _arr = [];
  for(let i=0 ; i < this.length  ; i++){
    if(callback(this[i],i,this)){
      _arr.push(this[i]);
    }
  }
  return _arr;
}

let filteredArr = arr.customFilter((item,index,_arr)=>{
  return item > 2;
})
console.log(filteredArr);


//reduce polyfill
Array.prototype.customReduce = function(callback,accInitial){
  let _accumulator = accInitial;
  for(let i=0 ; i < this.length  ; i++){
    _accumulator = callback(_accumulator,this[i],i,this);
  }
  return _accumulator;
}

let reducedValue = arr.customReduce((acc,item,index,_arr)=>{
  return acc + item;
},0);
console.log(reducedValue);