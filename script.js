/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  //Write your code here
  const emp=arr.map(p => {if(p.profession=="developer"){
   
      console.log(p.profession);
  }})
}

function PrintDeveloperbyForEach() {
  //Write your code here
  arr.foreach(a => {
    if(a.profession=="developer")
    {
      console.log(p.profession);
    }
  })
}

function addData() {
  //Write your code here
  arr.push({id:4,name:"susan",age:"20",profession:"intern"});
  console.log(arr);
//   arr=arr.concat(arr2)
  

}

function removeAdmin() {
  //Write your code here
  const emp=arr.map(p => {if(p.profession=="admin"){
   
       delete p.profession;
    console.log(arr);
}})}

function concatenateArray() {
  //Write your code here
  let arr2=[{id:5,name:"mathew",age:"25",profession:"tester"}];
  arr=arr.concat(arr2);
  console.log(arr);
  
}
//calling the functions
//PrintDeveloperswithMap();
//PrintDeveloperbyForEach();
//addData();
//removeAdmin();
//concatenateArray();
