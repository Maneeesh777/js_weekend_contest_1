/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  arr.map(first_print); 
  function first_print(arrayItem) {
    if (arrayItem.profession === "developer") {
      console.log(arrayItem);
    }
  }
}

function PrintDeveloperbyForEach() {
  arr.forEach(second_print); 
  function second_print(arrayItem) {
    if (arrayItem.profession === "developer") {
      console.log(arrayItem);
    }
  }
}

function addData() {
  let new_item = {id: 4, name: "susan", age: "20", profession: "intern"};
  arr.push(new_item);
  console.log(arr);
}

function removeAdmin() {
  let neww_arry = arr.filter(function (val) {
    if (val.profession !== "admin") {
      return val;
    }
  });
  console.log(neww_arry);
}

function concatenateArray() {
  let second_arry = [
    {id: 5, name:"Maneesh_777", age: "23", profession: "Developer"},
    {id: 6, name:"Habibi_111", age: "24", profession: "Business_Man"},
    {id: 7, name:"Suraj_999", age: "23", profession: "Journalist"},
  ];
 
  let concatArray = arr.concat(second_arry);
  console.log(concatArray);
}
