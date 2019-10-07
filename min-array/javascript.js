var array1= [7, 12, 6, 9, 20, 56, 89];
var array2= [3, 5, 1, 8, -3, 7, 8];
var min1=minArray(array1);
document.write(min1+"<br/>");
var min2= minArray(array2);
document.write(min2);

function minArray(arr) {
    var min = arr[0];
    for(let i=0;i<arr.length;i++ ){
        if(min>arr[i]){
            min =arr[i];
        }
    }return min;

}