// // task 1
const Arr = ["apple", "banana", "apple", "orange", "banana", "apple"];
let eobj={}
for(i=0;i<Arr.length;i++){
   let word=Arr[i]
   if(eobj[word]===undefined){
    eobj[word]=1
   }
   else{
    eobj[word]+=1
   }


}
console.log(eobj);
// // task2
let arr = ["apple", "banana", "apple", "orange", "banana", "apple"];


let vow=["a","e","i","o","u"]
for(i=0;i<arr.length;i++){
    let count=0
    for(j=0;j<arr[i].length;j++){
       for(k=0;k<vow.length;k++){
           if(arr[i][j]==vow[k])
           count++
       }
    }
      console.log(arr[i]+""+count)
    }

    // task 3

let arr2 = ["apple", "banana", "apple", "orange", "banana", "apple"];


let vow2=["a","e","i","o","u"]
for(i=0;i<arr2.length;i++){
    let count1=0
    for(j=0;j<arr2[i].length;j++){

let vowel=false
       for(k=0;k<vow2.length;k++){
           if(arr2[i][j]==vow2[k])
           vowel=true
       }
       if(!vowel){
        count1++
       }


    }
console.log(arr2[i]+""+count1);
    }