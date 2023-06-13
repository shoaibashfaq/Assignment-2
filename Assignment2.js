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




