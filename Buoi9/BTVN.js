
//Bài 1
function isPrime(n){
    if(n<2) return false;
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}
console.log(isPrime(7));
console.log(isPrime(10));

//Bài 2
 const obj = {name:"Sen", age:20,email:"senlu03@gmail.com"}
  function run(x){
    let a= [];
    let i=0;
    for(let key in x){
        a[i]=key + " : " + x[key];
        i++;
    }
    return a;

  }
  console.log(run(obj));

  //Bai3
  var courses = ["C++","Java", "Javascript"];
//thêm 1 phần tử vào mảng
  function addCourse(arr,n){
    arr[arr.length] = n;
  }

  addCourse(courses,"Go");
  console.log(courses);

  //lấy ra phần tử đầu tiên
function getFirstElement(arr){
    return arr[0];
}
var firstElement = getFirstElement(courses);
console.log(firstElement);
//console.log(getFirstElement(courses));

//nối các phần tử thành một chuỗi
 function joinArr(arr, x){
    let newArr= arr.join(x);
    return newArr;
 }
 var result1= joinArr(courses,",");
 var result2= joinArr(courses,"*");
 console.log(result1);
 console.log(result2);



