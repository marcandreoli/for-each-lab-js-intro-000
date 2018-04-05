function iterativeLog(array) {
  array.forEach( element => {
    console.log(`${array.indexOf(element)}: ${element}`));
  }
  //array.forEach(console.log(`${index}: ${element}`));
};
