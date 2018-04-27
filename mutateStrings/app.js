function mutateMyStrings(stringOne, stringTwo){
    var firstArray = stringOne.split('');
    var secondArray = stringTwo.split('');
    var answers = [firstArray.join('')];
    for (i = 0; i < firstArray.length; i++) {
      if (firstArray[i] !== secondArray[i]) {
        firstArray[i] = secondArray[i];
        answers.push(firstArray.join(''));
      }
    }
    return answers.join('\n') + '\n';
  }