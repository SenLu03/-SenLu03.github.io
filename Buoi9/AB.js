// let greeting="say hi";
// let times=4;
// if(times>3){
//     let hello="say hello instead";
//     console.log(hello);
// }
// console.log(hello);


// const user={
//     name:"Sen"
// }
// user.name="Pet";
// console.log(user);

// alert("Hế lô anh em");

// let a=2+2;
// switch (a){
//     case 0:
//         console.log("Trà đá");
//         break;
//     case 2:
//         console.log("Sting dâu");
//         break;
//     case 4:
//         console.log("Cà phê đá");
//         break;
//     case 4:
//         console.log("Cà phê sữa");
//         break;
// }

//console.log(1==='1');
// let a=2,b=3;

// if(a==2 && b==3){
//     console.log("true");
// }else{
//     console.log("false");
// }
// console.log(a==2 && b==3);
// let user="Pet";
// // console.log(user);

// // console.log(user ?? "Anonymous");

// if(user != undefined){
//     return user;
// }else{
//     return "Anonymous";
// }


// let hieght=100;
// console.log(hieght || 100);
// console.log(hieght ?? 100);


//alert(null || 2 || undefined);

//alert(alert(20)|| 7 || alert(3));

// for(let i=1;i<10;i++){
//     alert(i);
// }

// let array=[20,10,3,11,4,2,3];
// //console.log(array.length);
// for(let i=0;i<array.length;i++){
//     const element=array[i];
//     console.log(element);
// }
///array.forEach(function);

//for ....in  :lặp trong 1 object
let obj={name:"A", class:"B", address:"Ha Giang",email:"senlu@gmail.com"};
//obj["email"]="senlu@gmail.com";

// console.log(obj);
//console.log(obj.address);
//console.log(obj["class"]);

for( const key in obj){
   // console.log(key);
    console.log(key+" : "+obj[key]);
}
for(const run of obj){
  console.log(obj);
}


// let str="Pet de thưng nha";

//  let arr=[1,2,3,4];

// for(const s of arr) {
//     console.log(arr);
// }

// for( const key in arr){
//     console.log(key);
// }

//funtion
// function Pet(name) {
//     console.log(name + " đang đói bụng");  
// }
// Pet("Sen");


//cach 1
// function tinhtong(a,b) {
//     return a+b;
// }
// let c=tinhtong(10,3);
// console.log(c);


//cach 2
//  let tinhtong2=function (a,b){
//     return a+b;
//  }
//  console.log(tinhtong2(4,5));

//  tinhtong2(4,5);

 //arrow funtion
//cach 3
//  let tinhtong3=(a,b) =>{
//    return a+b;
  
  
//  } 
//  console.log(tinhtong3(6,10));

