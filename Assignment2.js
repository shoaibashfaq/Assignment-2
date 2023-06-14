let nums =[1, 2, 3, 4, 5];
//function 1
function forEach(array,callback){
    for (let i=0;i<array.length;i++){
        callback(array[i]);
    }
}
//nothing to return
forEach(nums,(item)=>console.log(item+1))

//function 2
function map(array,callback){
    let result =[];
    for (let i=0;i<array.length;i++){
        result.push(callback(array[i]));
    };

    return result;
}

const resultMap=map(nums,(item)=>item*2);
console.log(resultMap);

//function 3
function filter(array,callback){
    let result =[];
    for (let i=0;i<array.length;i++){
        if (callback(array[i])) result.push(array[i]);
    };
    return result;
}

const filterResult=filter(nums,(item)=>item%2);
console.log(filterResult);

// function4
function some(array,callback){
    for (let i=0;i<array.length;i++){
        if (callback(array[i])) return true;
    };
}

let hasEven=some(nums,(item)=>item%2===0);

//function5
function every(array,callback){
    for (let i=0;i<array.length;i++){
        if (!callback(array[i])) return false;
    };
    return true;
}

var hasAllEven= every(nums,(item)=>item%2===0);
console.log(hasAllEven);

// function6 reduce
function reduce(array,callback,initial){
    var result=initial;
    for (let i=0;i<array.length;i++){
        result=callback(result,array[i]);
    }

    return result;
}

let reduceResult= reduce(nums,(acc,item)=>acc+item,0);
console.log(reduceResult);

//function7 includes()
function includes(array,target){
    for (let i=0;i<array.length;i++){
        if (array[i]===target) return true;
    };

    return false;
}

const fruits = ['apple', 'banana', 'orange', 'grape'];
console.log(includes(fruits,'banana')); //true

//fuction8 indexOf()
function indexOf(array,target){
    for (let i=0;i<array.length;i++){
        if (array[i]===target) return i;
    };

    return -1;
}
const indexOrange = indexOf(fruits,'orange');
console.log(indexOrange); // 2

const indexPear = indexOf(fruits,'pear');
console.log(indexPear); // -1

//function9 push
function myPush(array, elementToAdd) {
    const newArray = [...array]; // Create a shallow copy of the original array
    newArray[newArray.length] = elementToAdd; // Assign the new element at the end of the copied array
    return newArray; // Return the new array with the appended element
  }

  let fruits2 = ['apple', 'banana'];
  let added = myPush(fruits2,'orange');
  console.log(fruits2); // ['apple', 'banana', 'orange']
  console.log(added); //added array
  


// function 10
function unShift(array,target){
    let index=-1;
    for (let i=0;i<array.length;i++){
        if (array[i]===target)  index=i;
    };
    return index;
}

//function 11
Object.grabKeys = function(obj) {
    const keys = [];
    
    for (let key in obj) {
        keys.push(key);
    }
    
    return keys;
  };

  const student = {
    firstname: 'John',
    lastname: 'Doe',
    age: 22,
    gender: 'male'
  };
  
  const keys = Object.grabKeys(student);
  console.log(keys);

  //function 12
  Object.grabValues = function(obj) {
    const values = [];
    //iteratables can be used in enhanced for loop in this manner
    for (let key in obj) {
        values.push(obj[key]);
    }
    
    return values;
  };

  const info = {
    firstname: 'John',
    lastname: 'Doe',
    age: 22,
    gender: 'male'
  };
  
  const values = Object.grabValues(info);
  console.log(values);

//Miscellaneous Problems
//Sum of a Range
//1.
const range=(start,end)=>{
    const result= new Array();
    for(let i=start;i<=end;i++){
        result.push(i)
    }
    return result;
};
function range2(start, end, step = 1) {
    const result = [];
    if (step > 0) {
      for (let i = start; i <= end; i += step) {
        result.push(i);
      }
    } else {
      for (let i = start; i >= end; i += step) {
        result.push(i);
      }
    }
    return result;
  }
  
const sum= (start,end)=>{
    return range(start,end).reduce((acc,item)=>item+acc);
};

//2. Reversing an Array
const reverseArray= (array)=>{
    const result= new Array();
    for (let i=array.length-1;i>=0;i--) result.push(array[i])
    return result;
};
console.log(reverseArray(nums));

//3. Lists
let list = {
  value: 1,
  rest: { value: 2, rest: { value: 3, rest: null } }
};

function traverseList(object) {
    const result = [];
    while (object !== null) {
      result.push(object.value);
      object = object.rest;
    }
    return result;
}

console.log(traverseList(list));

function arrayToList(array) {
    let object = null;
  
    for (let i = array.length - 1; i >= 0; i--) {
      object = { value: array[i], rest: object };
    }
  
    return object;
  }
  
  console.log(arrayToList([1, 2, 3]));

  function prepend(element, list) {
    return { value: element, rest: list };
  }
  
  function nth(list, index) {
    //base case if the value in null (when we get to the end of the list)
    if (!list) {
      return undefined;
      //if you want to add to the beging of the list, return the index.
    } else if (index === 0) {
      return list.value;
    } else {
        //this will eventually get to 0 or in the case it does not exist return undefined.
      return nth(list.rest, index - 1);
    }
  }
  
  let myList = arrayToList([1, 2, 3]);
  console.log(myList);


//4. Deep Comparision
function deepEqual(obj1,obj2) {
    //if the deep comaprision return true even before we loop the key:value pairs
    if (obj1 === obj2) return true;
  
    //to get around the (typeof null) == object 
    if (typeof obj1 !== "object" || obj1 === null) return false;
    
    if (typeof obj2 !== "object" || obj2 === null) return false;

  
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);
  
    if (keys1.length !== keys2.length) return false;
  
    for (let key of keys1) {
        //the recursive call is used to make sure all the nested values are also the same
        //since Object.keys() only gives top level values;
      if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) return false;
    }
  
    return true;
  }

  let obj = {here: {is: "an"}, object: 2};

//Last Miscellaneauas
      
function moveZerosToEnd(nums) {
    let insertPos = 0; // Pointer to track the position to insert non-zero elements
  
    // Iterate through the array and move non-zero elements to the front
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
        nums[insertPos] = nums[i]; // Move non-zero element to the insert position
        insertPos++; // Increment the insert position
      }
    }
  
    // Fill the remaining positions with zeros
    while (insertPos < nums.length) {
      nums[insertPos] = 0;
      insertPos++;
    }
  
    return nums;
  }
  

let numbers=[2,3,0,9,11,19,0,0];
console.log(moveZerosToEnd(numbers));


