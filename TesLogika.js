var x = 3;
var y = 7;
var N = 13;
var max = 33;
var Z = [3, 6, 7, 9, 12, 14, 15, 18, Z, 24, 27, 28, 30];


var result = 0; //hasil
var array = [];

for(var i=3; i<max-1; i++){
    if((i%x==0)||(i%y==0)){
        result+=i;
        array.push(i);
        // if (index[i] == 21){
        //     array.push(i)
        // }
        
    }
}

array[8] = "Z"
console.log(result)
console.log(array)
