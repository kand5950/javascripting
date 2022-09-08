const sumLargestNumbers = function(data) {
  //Below variables will be largest numbers index later
  let firstIndex = 0;
  let secondIndex = 0;

  for (let i = 0 ; i <= data.length ; i ++){
    if (data[i] >= data [firstIndex]){
      firstIndex = i;
      
    }
  }
  let firstLNumber = data.splice(firstIndex, 1)[0];
   for (i = 0 ; i <= data.length ; i++){
    if (data[i] >= data[secondIndex]){
      secondIndex = i;
    }
  }
let secondLnumber = data.splice(secondIndex, 1)[0];
return firstLNumber + secondLnumber;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));