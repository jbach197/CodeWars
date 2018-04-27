function capitalize(s,arr){
    var newArray = '';
    
    for (i = 0; i <= s.length;i++){
      if (arr.includes(i)){
        newArray += s.charAt(i).toUpperCase();
      } else {
        newArray += s.charAt(i);
      }
    }
    return newArray;
  };