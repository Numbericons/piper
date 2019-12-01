var countDeafRats = function (town) {
  let defRat = 'O~';
  let regRat = '~O';
  let count = 0;
  for (let i = 0; i < town.length; i++) {
    if (town[i] === 'P') {
      defRat = '~O';
      regRat = 'O~';
    }
    if (town[i] + town[i + 1] === defRat) {
      count += 1;
      i+=1;
    } else if (town[i] + town[i + 1] === regRat) {
      i+=1;
    }
  };
  return count;
}