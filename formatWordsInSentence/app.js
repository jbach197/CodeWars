function formatWords(words){
    console.log(words);
      if (words === null){
       return '';
       }     
       
     for (var i=0; i<words.length; i++){
     
       var newArray = [];
       
       if (words[i].length !== 0){ 
         
         newArray.push(words[i])
         }  
              
        }
      if (words.length === 0){
        return '';  
      }
      console.log(newArray);