const strArray = ['a', 'b', 'c'];
const numArray = [1, 2, 3];

// <--------------------- zipList ------------------>
function zipList(arr1, arr2) {
  const totalLength = arr1.length + arr2.length;
  let index1 = 0;
  let index2 = 0;
  const newArray = [];
  for (let index = 0; index < totalLength; index++) {
    if (index % 2 === 0) {
      newArray.push(arr1[index1]);
      index1++;
    } else {
      newArray.push(arr2[index2]);
      index2++;
    }
  }
  return newArray;
}
// <------------ Better Way ------------>
/*
function zipList (arr1, arr2) {
  const newArray = [];
  for (let i = 0; i < arr1.length; i++) {
    newArray.push(arr1[i], arr2[i]);
  }
  return newArray;
} */

console.log(zipList(strArray, numArray));

// <----------------zipListTheSimpleWay ---------------------->
const zipListTheSimpleWay = (arr1, arr2) => _.flatten(_.zip(arr1, arr2));

console.log(zipListTheSimpleWay(strArray, numArray));
