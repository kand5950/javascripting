const urlEncode = function(text) {
 let newText = text.trim();
 let arr = Array.from(newText);

for (let i = 0 ; i < newText.length ; i++){
  if (newText[i] === " ") {
    arr.splice(i, 1, "%20");
  }
}

return arr.join("");
};


console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));