
const instructorWithLongestName = function(instructors) {
//find longest name in array
  let longestName = 0;
//find which index is longestName in
  let longestNameIndex = 0;

//iterate array to find index of longest name
  for ( let i = 0 ; i < instructors.length ; i++){
    if (instructors[i].name.length > longestName){
      longestName = instructors[i].name.length;
      longestNameIndex = i;
    }
  }
  return instructors[longestNameIndex];
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"},
]));