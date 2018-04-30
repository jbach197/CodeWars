function alternativeCase(string){
    var output = "";
    var outputTwo = "";
    for(var i = 0; i < string.length; i++){
        if (i % 2 !== 0) {
            output += string[i].toLowerCase();
        }
        else {
            output += string[i].toUpperCase();
         }   
    }
    
     for(var k = 0; k < string.length; k++){
        if (k % 2 !== 0) {
            outputTwo += string[k].toUpperCase();
        }
        else {
            outputTwo += string[k].toLowerCase();
         }   
    }
  return[output + " , " + outputTwo];
    
}
