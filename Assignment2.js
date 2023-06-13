let nums =[1, 2, 3, 4, 5];
//function 1
function forEach(array,callback){
    for (let i=0;i<array.length;i++){
        callback(array[i]);
    }
}

forEach(nums,(item)=>console.log(item+1))

//function 2
function map(array,callback){
    let result =[];
    for (let i=0;i<array.length;i++){
        result.push(callback(array[i]));
    };

    return result;
}

map(nums,(item)=>item*2)