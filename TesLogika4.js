var x = 5
var y = 9
var max = 77;
var result = 0; //hasil
var array = [];

for(var i=3; i<max-1; i++){
    if((i%x==0)||(i%y==0)){
        result+=i;
        array.push(i);
        
    }
}

console.log(result)
console.log(array)