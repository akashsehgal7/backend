var arr = [1,2,3,4]

let newarr = arr.find(function(val){
    if(val === 3) {
        return val;
    }
})

console.log(newarr);
