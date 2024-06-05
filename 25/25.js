/*---1---
[ 1,7,9,45 ]
["Str" "alex","moh"]
['the','fox', 'over', 'lazy', 'dog'  ]
*/
/*----2-----
[0,1]*/
/*----3-----
var FavoriteFood=["ss","aa","qq","ww","rr"];
var FavoriteSport=["zz","uu","mm"];
var FavoriteMovie=["ss11","aa22","qq33","ww44"];
console.log(FavoriteFood[0]+" "+FavoriteSport[0]+" "+FavoriteMovie[0]);
*/
/*----4----
function firstOfArray(arr){
   
console.log(arr[0]);
}
var arr1=[1,2,3];
firstOfArray(arr1);
*/
/*----5----
function lastOfArray(arr){
   
    console.log(arr[arr.length-1]);
    }
    var arr1=[1,2,3];
    lastOfArray(arr1);
    */
   /*----6----
   var arr=[0,5,7,9];
   var array=arr.shift();
   console.log(arr);
   var array=arr.unshift(2, 3);
   console.log(arr);
   var array=arr.pop();
   console.log(arr);
   var array=arr.push(100);
   console.log(arr);*/
   /*----7----
   var array2 = [5,9,-7,3];
   console.log(array2.shift());
   console.log(array2.unshift());
   console.log(array2.push(9));
   console.log(array2.pop());*/
   /*----8----
   function middleOfArray(arr){
    var mid=arr[Math.floor(arr.length/2)];
    console.log(mid);
   }
   var arr1=[1,3,7,9];
   middleOfArray(arr1);*/
   /*----9----
   var animals = ['cat', 'ele', 'bird'];
    animals =  ['zebra', 'elephant'];
   console.log(animals);
   var nums= [1,2,3,8,9];
   nums=[5,-22,3.5,44,98,44];
   console.log(nums);*/
   /*----10----
function indexOfArray(nums){
    for(i=0;i<nums.length;i++){
        console.log(nums[i]+" "+i);
    }
}
var nums1= [1,2,3,8,9]
indexOfArray(nums1);*/
/*----11----
function arrayExceptLast(arr){
    var aa=arr.slice(0,-1);
    console.log(aa);
}
var zz=[1,2,3];
arrayExceptLast(zz);*/
/*----12----
function addToEndForLoop(arr, arr2) {
    
    let zz = [];
    
   
    for (let i = 0; i < arr.length; i++) {
        zz.push(arr[i]);
    }
    
    zz.push(arr2);
    
    console.log(zz);
}


var nums = [1, 2, 3, 8, 9];
addToEndForLoop(nums, 55); 
*/
/*----13----
function sumArray(arr){
    var zz=0;
    for(i=0;i<arr.length;i++){
        zz+=arr[i];
        console.log(zz);
    }
}
var aa=[1,2,3,4];
sumArray(aa);*/
/*----14----
function minInArray(arr){
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    console.log(min);
}
const array = [59, 30, 90, 10, 7];
minInArray(array);*/
/*----15----
function removeFromArray(arr,arr1){
    var aa=[];
    for(i=0;i<arr.length;i++){
        if(arr[i]!==arr1){
            aa.push(arr[i]);
        }
    }
    console.log(aa);
}
var zz=[4,6,2,7,0];
removeFromArray(zz,2);*/
/*----16----
function oddArray(arr){
    var aa=[];
    for(i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
aa.push(arr[i]);
        }
    }
    console.log(aa);
}
var zz=[1,2,3,4];
oddArray(zz);*/
/*----17----
function aveArray(arr){
    var avg=arr[0];
    for(i=1;i<arr.length;i++){
avg+=arr[i];
    }
    console.log( "th average is: "+avg/arr.length);
}
var arr1=[5,5,5,5,0];
aveArray(arr1);*/
/*----18----
function shorterInArray(arr){
    var ind=arr[0];
    for(i=1;i<arr.length;i++){
        if(arr[i].length<ind.length){
        ind=arr[i];}
    }
    console.log(ind);
}
var zz=[90,2,3,4,5];
shorterInArray(zz);*/
/*----19----
function repeatChar(arr,arr2){
    var aa=[0];
    for(i=0;i<arr.length;i++){
        if(arr[i]===arr2){
            aa++;
        }
    }
    console.log(aa);
}
var zz=[1,2,3,4,5,1,1];
repeatChar(zz,1);*/
/*----20----
function evenIndexOddLength(arr){
    var ind=[];
    for(i=0;i<arr.length;i+=2){
        if(arr[i].length%2!==0){
        ind.push(arr[i]);
    }
    }
    console.log(ind);
}
var zz=["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
evenIndexOddLength(zz);*/
/*----21----
function powerElementIndex(arr){
    var aa=[];
    for(i=0;i<arr.length;i++){
        aa.push(Math.pow(arr[i],i))
    }
    console.log(aa);
}
var zz=[44, 5, 4, 3, 2, 10];
powerElementIndex(zz);*/
/*----22----
function evenIndexOddLength(arr){
    var ind=[];
    for(i=0;i<arr.length;i++){
        if(arr[i]%2===0){
        ind.push(arr[i]);
    }
    }
    console.log(ind);
}
var zz=[5,2,2,1,8,66,55,77,34,9,55,1];
evenIndexOddLength(zz);*/


